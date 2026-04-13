# Exam Question Analysis for Flashcard Refinement

## Source
- Image bank in `exam_questions/`
- OCR transcript in `output/exam_questions_review/exam_questions_ocr.md`

## What the exam questions heavily test

### 1. Linear-equation setup under policy changes
Repeated patterns:
- solve equilibrium from demand and supply
- impose a tax / subsidy / price floor / price ceiling
- solve new quantity and the buyer/seller prices
- compute consumer burden, producer burden, government revenue, CS / PS / TS / DWL

Implication for cards:
- cards should train the exact equation workflow, not just definitions
- especially: wedge logic, burden decomposition, and “same quantity under a different policy” questions

### 2. Surplus geometry from sparse information
Repeated patterns:
- total surplus from intercept gap + equilibrium quantity
- CS / PS changes after policy
- lump-sum willingness to pay / willingness to accept when removing a price control

Implication for cards:
- add cards that convert graph/triangle information directly into formulas
- emphasize "change in surplus" as a decision threshold

### 3. Public goods and Lindahl pricing
Repeated patterns:
- vertical summation of MB curves
- compute efficient quantity from `ΣMB = MC`
- infer the missing person’s Lindahl payment
- compare free-riding with cooperative provision
- one-off public good: provide iff total value exceeds cost

Implication for cards:
- cards should include missing-payment and one-off provision questions, not only definitions

### 4. Externalities with constant marginal external effects
Repeated patterns:
- positive externality subsidy needed to raise Q to a target
- negative externality socially optimal quantity using MSC
- DWL from underproduction/overproduction
- cases where marginal external benefit and cost cancel out

Implication for cards:
- train the shift rules directly:
  - `MSB = MPB + MEB`
  - `MSC = MPC + MEC`
  - Pigovian instrument equals marginal external effect at the efficient quantity

### 5. Monopoly calculation shortcuts
Repeated patterns:
- revenue-maximizing price from demand and MR
- monopoly quantity from `MR = MC`
- compare monopoly outcome with socially efficient `P = MC`
- compute PS / profit change

Implication for cards:
- add exact calculation prompts using `MR = 0` for revenue maximization and `MR = MC` for profit maximization

### 6. Trade policy equivalence questions
Repeated patterns:
- tariff versus quota with same effect
- quota/tariff effect on imports and domestic price
- change in CS under quota
- halve imports / find new domestic quantity demanded

Implication for cards:
- cards should train “find imports after tariff, then set quota equal to that import amount”

### 7. Elasticity as a fast percentage tool
Repeated patterns:
- use PED/PES to infer percentage quantity change
- infer revenue effect when demand is inelastic
- point elasticity on linear supply curves

Implication for cards:
- include quick percentage-change flashcards and point-elasticity-at-a-point cards

### 8. Game theory as procedure, not just vocabulary
Repeated patterns:
- count pure-strategy Nash equilibria when dominant strategies exist
- iterated deletion of dominated strategies
- construct payoff matrices from a verbal story

Implication for cards:
- cards should ask what procedure to apply and what remains after deleting dominated strategies

## Main refinements made
- Chapter 1 wording tightened to remove vague endpoint questions
- Added exam-style calculation and policy cards to Chapters 2–10
- New cards target the exact patterns seen in the image bank rather than only lecture definitions
