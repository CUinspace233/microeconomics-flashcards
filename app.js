const STORAGE_KEY = 'microeconomics.review.progress';
const rawCards = [
  ...(window.chapter1Cards || []),
  ...(window.chapter2Cards || []),
  ...(window.chapter3Cards || []),
  ...(window.chapter4Cards || []),
  ...(window.chapter5Cards || []),
  ...(window.chapter6Cards || []),
  ...(window.chapter7Cards || []),
  ...(window.chapter8Cards || []),
  ...(window.chapter9Cards || []),
  ...(window.chapter10Cards || []),
];
const cards = rawCards.map((card) => ({
  ...card,
  chapter: card.chapter || inferChapter(card.id),
}));

const state = {
  sessionQueue: [],
  currentIndex: 0,
  revealAnswer: false,
  shuffle: true,
  focusMode: false,
  progress: loadProgress(),
};

const chapterFilter = document.getElementById('chapterFilter');
const topicFilter = document.getElementById('topicFilter');
const formulaOnly = document.getElementById('formulaOnly');
const shuffleMode = document.getElementById('shuffleMode');
const heroStats = document.getElementById('heroStats');
const cardTitle = document.getElementById('cardTitle');
const cardTags = document.getElementById('cardTags');
const cardFront = document.getElementById('cardFront');
const cardBack = document.getElementById('cardBack');
const cardBackFace = document.getElementById('cardBackFace');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const flipBackBtn = document.getElementById('flipBackBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const enterFocusBtn = document.getElementById('enterFocusBtn');
const exitFocusBtn = document.getElementById('exitFocusBtn');
const startSessionBtn = document.getElementById('startSessionBtn');
const resetProgressBtn = document.getElementById('resetProgressBtn');
const masteryText = document.getElementById('masteryText');
const masteryFill = document.getElementById('masteryFill');
const cardList = document.getElementById('cardList');
const sessionMeta = document.getElementById('sessionMeta');
const formulaSheet = document.getElementById('formulaSheet');
const contextStrip = document.getElementById('contextStrip');
const mainLayout = document.getElementById('mainLayout');
const listPanel = document.getElementById('listPanel');
const topTabs = document.querySelectorAll('.top-tab');

init();

function inferChapter(id = '') {
  const match = id.match(/^c(\d+)-/);
  return match ? `Chapter ${match[1]}` : 'General';
}

function init() {
  populateChapterFilter();
  populateTopicFilter();
  renderFormulaSheet();
  buildSession();
  renderHeroStats();
  renderCardList();
  attachEvents();
  switchTab('study');
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function populateChapterFilter() {
  const chapters = ['All chapters', ...new Set(cards.map((card) => card.chapter))];
  chapterFilter.innerHTML = chapters.map((chapter) => `<option value="${chapter}">${chapter}</option>`).join('');
}

function populateTopicFilter() {
  const selectedChapter = chapterFilter.value || 'All chapters';
  const visibleCards = cards.filter((card) => selectedChapter === 'All chapters' || card.chapter === selectedChapter);
  const topics = ['All topics', ...new Set(visibleCards.map((card) => card.topic))];
  const previous = topicFilter.value;
  topicFilter.innerHTML = topics.map((topic) => `<option value="${topic}">${topic}</option>`).join('');
  topicFilter.value = topics.includes(previous) ? previous : 'All topics';
}

function attachEvents() {
  startSessionBtn.addEventListener('click', () => {
    buildSession();
    enterFocusMode();
    renderCurrentCard();
  });

  resetProgressBtn.addEventListener('click', () => {
    if (!window.confirm('Reset all saved progress and review scheduling?')) return;
    state.progress = {};
    saveProgress();
    buildSession();
    renderHeroStats();
    renderCardList();
    renderCurrentCard();
  });

  chapterFilter.addEventListener('change', () => {
    populateTopicFilter();
    buildSession();
    renderHeroStats();
    renderCardList();
    renderCurrentCard();
  });

  topicFilter.addEventListener('change', () => {
    buildSession();
    renderHeroStats();
    renderCardList();
    renderCurrentCard();
  });

  formulaOnly.addEventListener('change', () => {
    buildSession();
    renderHeroStats();
    renderCardList();
    renderCurrentCard();
  });

  shuffleMode.addEventListener('change', () => {
    buildSession();
    renderHeroStats();
    renderCardList();
    renderCurrentCard();
  });

  topTabs.forEach((tab) => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  showAnswerBtn.addEventListener('click', () => toggleAnswer(true));
  flipBackBtn.addEventListener('click', () => toggleAnswer(false));
  nextBtn.addEventListener('click', nextCard);
  prevBtn.addEventListener('click', prevCard);
  enterFocusBtn.addEventListener('click', () => {
    enterFocusMode();
    renderCurrentCard();
  });
  exitFocusBtn.addEventListener('click', exitFocusMode);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && state.focusMode) exitFocusMode();
    if (event.code === 'Space' && state.focusMode) {
      event.preventDefault();
      toggleAnswer(!state.revealAnswer);
    }
    if (event.key === 'ArrowRight' && state.focusMode) nextCard();
    if (event.key === 'ArrowLeft' && state.focusMode) prevCard();
    if (state.focusMode && ['1', '2', '3', '4'].includes(event.key)) {
      const map = { '1': 'again', '2': 'hard', '3': 'good', '4': 'easy' };
      rateCard(map[event.key]);
    }
  });

  document.getElementById('againBtn').addEventListener('click', () => rateCard('again'));
  document.getElementById('hardBtn').addEventListener('click', () => rateCard('hard'));
  document.getElementById('goodBtn').addEventListener('click', () => rateCard('good'));
  document.getElementById('easyBtn').addEventListener('click', () => rateCard('easy'));
}

function buildSession() {
  const selectedChapter = chapterFilter.value || 'All chapters';
  const selectedTopic = topicFilter.value || 'All topics';
  const formulaFilter = formulaOnly.checked;
  state.shuffle = shuffleMode.checked;

  const filtered = cards.filter((card) => {
    const chapterMatch = selectedChapter === 'All chapters' || card.chapter === selectedChapter;
    const topicMatch = selectedTopic === 'All topics' || card.topic === selectedTopic;
    const formulaMatch = !formulaFilter || card.formula;
    return chapterMatch && topicMatch && formulaMatch;
  });

  const sorted = sortCardsForSession(filtered);
  state.sessionQueue = sorted.map((card) => card.id);
  state.currentIndex = 0;
  state.revealAnswer = false;
}

function sortCardsForSession(filteredCards) {
  const now = Date.now();
  const unseen = [];
  const due = [];
  const later = [];

  filteredCards.forEach((card) => {
    const item = state.progress[card.id];
    if (!item) {
      unseen.push(card);
      return;
    }

    const nextReviewAt = item.nextReviewAt ? new Date(item.nextReviewAt).getTime() : 0;
    if (!nextReviewAt || nextReviewAt <= now) {
      due.push(card);
    } else {
      later.push(card);
    }
  });

  if (state.shuffle) return [...shuffleArray(due), ...shuffleArray(unseen), ...shuffleArray(later)];
  later.sort((a, b) => getNextReviewTime(a.id) - getNextReviewTime(b.id));
  return [...due, ...unseen, ...later];
}

function shuffleArray(input) {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getCurrentCard() {
  const cardId = state.sessionQueue[state.currentIndex];
  return cards.find((card) => card.id === cardId) || null;
}

function renderCurrentCard() {
  const card = getCurrentCard();

  if (!card) {
    cardTitle.textContent = 'No cards match this filter';
    cardTags.innerHTML = '';
    cardFront.textContent = 'Try another chapter, topic, or turn off the formula-only filter.';
    cardBack.innerHTML = '';
    contextStrip.textContent = 'Adjust the filter to rebuild a valid study session.';
    cardBackFace.classList.add('hidden');
    showAnswerBtn.classList.add('hidden');
    flipBackBtn.classList.add('hidden');
    sessionMeta.textContent = '0 / 0';
    return;
  }

  const progress = state.progress[card.id];
  const reviewText = progress ? `Next review: ${formatRelativeReview(progress.nextReviewAt)}` : 'New card';

  cardTitle.textContent = `${card.chapter} · ${card.topic}`;
  cardFront.textContent = card.front;
  cardBack.innerHTML = card.back;
  contextStrip.textContent = card.formula
    ? 'Self-contained calculation prompt · read the setup carefully before solving'
    : 'Self-contained concept card · answer using microeconomics language and logic';
  cardTags.innerHTML = [
    `<span class="tag">${card.chapter}</span>`,
    `<span class="tag">${card.type}</span>`,
    ...(card.formula ? ['<span class="tag tag--formula">formula-heavy</span>'] : []),
    ...card.tags.map((tag) => `<span class="tag">${tag}</span>`),
  ].join('');

  sessionMeta.textContent = `${state.currentIndex + 1} / ${state.sessionQueue.length} · ${reviewText}`;
  toggleAnswer(state.revealAnswer);
}

function toggleAnswer(visible) {
  state.revealAnswer = visible;
  cardBackFace.classList.toggle('hidden', !visible);
  showAnswerBtn.classList.toggle('hidden', visible);
  flipBackBtn.classList.toggle('hidden', !visible);
}

function switchTab(tabName) {
  const isLibrary = tabName === 'library';
  mainLayout.classList.toggle('hidden', isLibrary);
  listPanel.classList.toggle('hidden', !isLibrary);
  topTabs.forEach((tab) => {
    tab.classList.toggle('top-tab--active', tab.dataset.tab === tabName);
  });
}

function enterFocusMode() {
  state.focusMode = true;
  document.body.classList.add('focus-mode');
  enterFocusBtn.classList.add('hidden');
  exitFocusBtn.classList.remove('hidden');
}

function exitFocusMode() {
  state.focusMode = false;
  document.body.classList.remove('focus-mode');
  enterFocusBtn.classList.remove('hidden');
  exitFocusBtn.classList.add('hidden');
}

function nextCard() {
  if (!state.sessionQueue.length) return;
  state.currentIndex = (state.currentIndex + 1) % state.sessionQueue.length;
  state.revealAnswer = false;
  renderCurrentCard();
}

function prevCard() {
  if (!state.sessionQueue.length) return;
  state.currentIndex = (state.currentIndex - 1 + state.sessionQueue.length) % state.sessionQueue.length;
  state.revealAnswer = false;
  renderCurrentCard();
}

function rateCard(level) {
  const card = getCurrentCard();
  if (!card) return;

  const previous = state.progress[card.id] || null;
  const scoreMap = { again: 0, hard: 1, good: 2, easy: 3 };
  const intervalDays = computeIntervalDays(previous, level);
  const nextReviewAt = new Date(Date.now() + intervalDays * 24 * 60 * 60 * 1000).toISOString();

  state.progress[card.id] = {
    level,
    score: scoreMap[level],
    intervalDays,
    nextReviewAt,
    reviewedAt: new Date().toISOString(),
    repetitions: (previous?.repetitions || 0) + 1,
  };

  saveProgress();
  rescheduleWithinSession(card.id, level);
  renderHeroStats();
  renderCardList();
  nextCard();
}

function computeIntervalDays(previous, level) {
  const last = previous?.intervalDays || 0;
  if (level === 'again') return 0;
  if (level === 'hard') return Math.max(1, last ? Math.ceil(last * 1.5) : 1);
  if (level === 'good') return Math.max(2, last ? Math.ceil(last * 2.2) : 2);
  if (level === 'easy') return Math.max(4, last ? Math.ceil(last * 3.5) : 4);
  return 1;
}

function rescheduleWithinSession(cardId, level) {
  const offsets = { again: 2, hard: 5, good: 10, easy: null };
  state.sessionQueue = state.sessionQueue.filter((id, index) => !(id === cardId && index > state.currentIndex));
  const offset = offsets[level];
  if (offset === null) return;
  const insertAt = Math.min(state.currentIndex + offset, state.sessionQueue.length);
  state.sessionQueue.splice(insertAt, 0, cardId);
}

function getNextReviewTime(cardId) {
  const value = state.progress[cardId]?.nextReviewAt;
  return value ? new Date(value).getTime() : 0;
}

function renderHeroStats() {
  const reviewed = Object.keys(state.progress).length;
  const formulaCount = cards.filter((card) => card.formula).length;
  const chapterCount = new Set(cards.map((card) => card.chapter)).size;
  const dueCount = cards.filter((card) => isDue(card.id)).length;
  const averageScore = reviewed
    ? Object.values(state.progress).reduce((sum, item) => sum + item.score, 0) / (reviewed * 3)
    : 0;
  const mastery = Math.round(averageScore * 100);

  heroStats.innerHTML = [
    `<div class="stat-chip"><strong>${cards.length}</strong> total cards</div>`,
    `<div class="stat-chip"><strong>${formulaCount}</strong> formula / calculation cards</div>`,
    `<div class="stat-chip"><strong>${chapterCount}</strong> chapters loaded</div>`,
    `<div class="stat-chip"><strong>${dueCount}</strong> due now</div>`,
  ].join('');

  masteryText.textContent = `${mastery}%`;
  masteryFill.style.width = `${mastery}%`;
}

function renderFormulaSheet() {
  const formulas = [
    { title: 'PPC / time constraint', body: 'Example: B + 2R = 16  →  R = 8 - 0.5B' },
    { title: 'Opportunity cost from PPC', body: 'OC of bananas = loss in rabbits / gain in bananas' },
    { title: 'Profit', body: 'π = TR - TC, with TR = P × Q and TC = FC + VC' },
    { title: 'Marginal cost', body: 'MC = ΔTC / ΔQ' },
    { title: 'Supply elasticity', body: 'Elasticity = (%ΔQ / %ΔP) = (1 / slope) × (P / Q)' },
    { title: 'Demand elasticity', body: 'PED = (%ΔQd / %ΔP); on a line: PED = (1 / slope) × (P / Q)' },
    { title: 'Tax deadweight loss', body: 'DWL = 0.5 × tax × reduction in quantity' },
    { title: 'Imports / exports', body: 'Imports = Qd - Qs at Pw; Exports = Qs - Qd at Pw' },
    { title: 'Monopoly rule', body: 'Choose Q where MR = MC, then use demand curve to find price' },
    { title: 'Externalities', body: 'MSB = MPB + MEB; MSC = MPC + MEC; tax/subsidy should match external effect' },
    { title: 'Public goods', body: 'For public goods use vertical summation: ΣMB = MC (Samuelson condition)' },
  ];

  formulaSheet.innerHTML = `<h3>Quick Formula Sheet</h3>${formulas
    .map(
      (item) => `
        <div class="formula-item">
          <strong>${item.title}</strong>
          <span>${item.body}</span>
        </div>
      `
    )
    .join('')}`;
}

function renderCardList() {
  cardList.innerHTML = cards
    .map((card) => {
      const progress = state.progress[card.id];
      const scoreLabel = progress
        ? `Last: ${progress.level} · Next: ${formatRelativeReview(progress.nextReviewAt)}`
        : 'New / unscheduled';
      return `
        <article class="card-list-item">
          <div class="list-tags">
            <span class="list-tag">${card.chapter}</span>
            <span class="list-tag">${card.topic}</span>
            <span class="list-tag">${card.type}</span>
            ${card.formula ? '<span class="list-tag list-tag--formula">formula</span>' : ''}
            ${isDue(card.id) ? '<span class="list-tag list-tag--formula">due</span>' : ''}
          </div>
          <h3>${card.front}</h3>
          <p>${stripHtml(card.back)}</p>
          <footer>
            <span class="score-chip">${scoreLabel}</span>
            <button class="btn btn--ghost" data-card-id="${card.id}">Open</button>
          </footer>
        </article>
      `;
    })
    .join('');

  cardList.querySelectorAll('button[data-card-id]').forEach((button) => {
    button.addEventListener('click', () => jumpToCard(button.dataset.cardId));
  });
}

function jumpToCard(cardId) {
  switchTab('study');
  const target = cards.find((card) => card.id === cardId);
  if (!target) return;

  if ((chapterFilter.value || 'All chapters') !== target.chapter) {
    chapterFilter.value = target.chapter;
    populateTopicFilter();
  }

  if ((topicFilter.value || 'All topics') !== target.topic) {
    topicFilter.value = target.topic;
  }

  if (formulaOnly.checked && !target.formula) {
    formulaOnly.checked = false;
  }

  buildSession();
  const index = state.sessionQueue.findIndex((id) => id === cardId);
  state.currentIndex = index >= 0 ? index : 0;
  state.revealAnswer = false;
  renderHeroStats();
  renderCurrentCard();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function isDue(cardId) {
  const nextReviewAt = state.progress[cardId]?.nextReviewAt;
  if (!nextReviewAt) return true;
  return new Date(nextReviewAt).getTime() <= Date.now();
}

function formatRelativeReview(iso) {
  if (!iso) return 'now';
  const diff = new Date(iso).getTime() - Date.now();
  const day = 24 * 60 * 60 * 1000;
  if (diff <= 0) return 'now';
  if (diff < day) return 'later today';
  const days = Math.ceil(diff / day);
  return days === 1 ? 'tomorrow' : `${days} days`;
}

function stripHtml(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent.trim();
}
