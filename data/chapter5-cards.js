window.chapter5Cards = [
  {
    id: 'c5-01',
    topic: 'Price Ceiling',
    type: 'definition',
    formula: false,
    front: 'What is a price ceiling?',
    back: 'A price ceiling is a maximum legal price set by the government.',
    tags: ['price ceiling']
  },
  {
    id: 'c5-02',
    topic: 'Price Ceiling',
    type: 'rule',
    formula: false,
    front: 'When is a price ceiling binding, and when is it non-binding?',
    back: 'A price ceiling is binding only if it is set <strong>below</strong> the equilibrium price. If it is set above equilibrium price, it has no effect.',
    tags: ['binding', 'non-binding']
  },
  {
    id: 'c5-03',
    topic: 'Price Ceiling',
    type: 'principle',
    formula: false,
    front: 'What market problem is created by a binding price ceiling?',
    back: 'A binding price ceiling creates <strong>excess demand</strong> (a shortage), because quantity demanded exceeds quantity supplied.',
    tags: ['shortage', 'excess demand']
  },
  {
    id: 'c5-04',
    topic: 'Price Ceiling',
    type: 'concept',
    formula: false,
    front: 'Why does a binding price ceiling usually fail to target help perfectly to low-income consumers?',
    back: 'Because the lower price benefits only the consumers who still manage to buy the good. Allocation may depend on rationing, queues, or luck rather than need.',
    tags: ['targeting', 'rationing']
  },
  {
    id: 'c5-05',
    topic: 'Price Ceiling',
    type: 'definition',
    formula: false,
    front: 'What is deadweight loss?',
    back: 'Deadweight loss is the loss of total surplus caused when the market is prevented from reaching the efficient equilibrium quantity where marginal benefit equals marginal cost.',
    tags: ['DWL', 'definition']
  },
  {
    id: 'c5-06',
    topic: 'Price Ceiling',
    type: 'calculation',
    formula: true,
    front: 'If demand is <code>Qd = 36 - 2P</code> and supply is <code>Qs = P</code>, what are the equilibrium price and quantity?',
    back: 'Set <code>Qd = Qs</code>: <code>36 - 2P = P</code>.<br><code>3P = 36</code>, so <code>P* = 12</code>.<br>Then <code>Q* = 12</code>.',
    tags: ['equilibrium', 'calculation']
  },
  {
    id: 'c5-07',
    topic: 'Price Ceiling',
    type: 'calculation',
    formula: true,
    front: 'If demand is <code>Qd = 36 - 2P</code> and supply is <code>Qs = P</code>, what are consumer surplus, producer surplus, and total surplus at equilibrium?',
    back: 'Inverse demand is <code>P = 18 - 0.5Q</code> and inverse supply is <code>P = Q</code>.<br>At <code>P*=12, Q*=12</code>:<br>Consumer surplus = <code>0.5 × 12 × 6 = 36</code>.<br>Producer surplus = <code>0.5 × 12 × 12 = 72</code>.<br>Total surplus = <code>36 + 72 = 108</code>.',
    tags: ['CS', 'PS', 'TS']
  },
  {
    id: 'c5-08',
    topic: 'Price Ceiling',
    type: 'calculation',
    formula: true,
    front: 'Using <code>Qd = 36 - 2P</code> and <code>Qs = P</code>, suppose the government sets a binding price ceiling at <code>P = 8</code>. What are quantity demanded, quantity supplied, quantity traded, and shortage?',
    back: 'At <code>P = 8</code>:<br><code>Qd = 36 - 2(8) = 20</code>.<br><code>Qs = 8</code>.<br>Quantity traded is limited by the short side of the market, so <code>Q traded = 8</code>.<br>Shortage = <code>20 - 8 = 12</code>.',
    tags: ['binding ceiling', 'shortage', 'calculation']
  },
  {
    id: 'c5-09',
    topic: 'Price Ceiling',
    type: 'calculation',
    formula: true,
    front: 'Using the same market <code>Qd = 36 - 2P</code> and <code>Qs = P</code>, if a binding price ceiling is set at <code>P = 8</code> and only 8 units are traded, what are consumer surplus, producer surplus, total surplus, and deadweight loss?',
    back: 'Consumer surplus after the ceiling = triangle <code>0.5 × 8 × 4 = 16</code> plus rectangle <code>8 × 6 = 48</code>, so <code>CS = 64</code>.<br>Producer surplus = <code>0.5 × 8 × 8 = 32</code>.<br>Total surplus = <code>64 + 32 = 96</code>.<br>DWL = <code>108 - 96 = 12</code>.',
    tags: ['ceiling', 'CS', 'PS', 'DWL']
  },
  {
    id: 'c5-10',
    topic: 'Price Floor',
    type: 'definition',
    formula: false,
    front: 'What is a price floor?',
    back: 'A price floor is a minimum legal price set by the government.',
    tags: ['price floor']
  },
  {
    id: 'c5-11',
    topic: 'Price Floor',
    type: 'rule',
    formula: false,
    front: 'When is a price floor binding, and when is it non-binding?',
    back: 'A price floor is binding only if it is set <strong>above</strong> the equilibrium price. If it is set below equilibrium price, it has no effect.',
    tags: ['binding', 'non-binding']
  },
  {
    id: 'c5-12',
    topic: 'Price Floor',
    type: 'principle',
    formula: false,
    front: 'What market problem is created by a binding price floor?',
    back: 'A binding price floor creates <strong>excess supply</strong> (a surplus), because quantity supplied exceeds quantity demanded.',
    tags: ['surplus', 'excess supply']
  },
  {
    id: 'c5-13',
    topic: 'Price Floor',
    type: 'calculation',
    formula: true,
    front: 'Using <code>Qd = 36 - 2P</code> and <code>Qs = P</code>, suppose a price floor is set at <code>P = 16</code>. What are quantity demanded, quantity supplied, quantity traded, and surplus?',
    back: 'At <code>P = 16</code>:<br><code>Qd = 36 - 32 = 4</code>.<br><code>Qs = 16</code>.<br>Quantity traded is limited by demand, so <code>Q traded = 4</code>.<br>Surplus = <code>16 - 4 = 12</code>.',
    tags: ['price floor', 'surplus', 'calculation']
  },
  {
    id: 'c5-14',
    topic: 'Price Floor',
    type: 'calculation',
    formula: true,
    front: 'Using <code>Qd = 36 - 2P</code> and <code>Qs = P</code>, if a binding price floor is set at <code>P = 16</code> and only 4 units are traded, what is total surplus and deadweight loss?',
    back: 'At <code>P = 16</code> and <code>Q = 4</code>:<br>Consumer surplus = <code>0.5 × 4 × 2 = 4</code>.<br>Producer surplus = rectangle <code>16 × 4 = 64</code> minus supply triangle <code>0.5 × 4 × 4 = 8</code>, so <code>PS = 56</code>.<br>Total surplus = <code>60</code>.<br>DWL = <code>108 - 60 = 48</code>.',
    tags: ['price floor', 'TS', 'DWL']
  },
  {
    id: 'c5-15',
    topic: 'Taxation',
    type: 'definition',
    formula: false,
    front: 'What does a per-unit tax do to a market?',
    back: 'A per-unit tax creates a wedge between the price buyers pay and the price sellers receive, reducing the quantity traded.',
    tags: ['tax wedge']
  },
  {
    id: 'c5-16',
    topic: 'Taxation',
    type: 'concept',
    formula: false,
    front: 'If a per-unit tax is imposed on producers, how does the supply curve change?',
    back: 'The supply curve shifts upward by the amount of the tax, because producers need a higher buyer price to receive the same net price as before.',
    tags: ['tax on producers', 'supply shift']
  },
  {
    id: 'c5-17',
    topic: 'Taxation',
    type: 'calculation',
    formula: true,
    front: 'If demand is <code>P = 60 - 0.2Q</code> and supply is <code>P = 0.2Q</code>, what are the equilibrium price and quantity before tax?',
    back: 'Set demand equal to supply:<br><code>60 - 0.2Q = 0.2Q</code>.<br><code>60 = 0.4Q</code>, so <code>Q* = 150</code>.<br>Then <code>P* = 0.2 × 150 = 30</code>.',
    tags: ['tax example', 'before tax']
  },
  {
    id: 'c5-18',
    topic: 'Taxation',
    type: 'calculation',
    formula: true,
    front: 'Using demand <code>P = 60 - 0.2Q</code> and supply <code>P = 0.2Q</code>, suppose a $10 per-unit tax is imposed on producers. What is the new supply equation?',
    back: 'The new supply equation is <code>P = 0.2Q + 10</code>. The tax shifts supply upward by $10.',
    tags: ['tax example', 'new supply']
  },
  {
    id: 'c5-19',
    topic: 'Taxation',
    type: 'calculation',
    formula: true,
    front: 'Using demand <code>P = 60 - 0.2Q</code> and taxed supply <code>P = 0.2Q + 10</code>, what are the new equilibrium quantity, buyer price, and seller net price?',
    back: 'Set demand equal to taxed supply:<br><code>60 - 0.2Q = 0.2Q + 10</code>.<br><code>50 = 0.4Q</code>, so <code>Q = 125</code>.<br>Buyer price: <code>P_b = 60 - 0.2(125) = 35</code>.<br>Seller net price: <code>P_s = 35 - 10 = 25</code>.',
    tags: ['tax example', 'after tax']
  },
  {
    id: 'c5-20',
    topic: 'Taxation',
    type: 'calculation',
    formula: true,
    front: 'In the same tax example, what is government tax revenue after the $10 per-unit tax?',
    back: 'Government revenue is <code>tax × quantity after tax = 10 × 125 = 1250</code>.',
    tags: ['tax revenue', 'calculation']
  },
  {
    id: 'c5-21',
    topic: 'Taxation',
    type: 'calculation',
    formula: true,
    front: 'In the tax example with demand <code>P = 60 - 0.2Q</code>, supply <code>P = 0.2Q</code>, and tax <code>t = 10</code>, what are consumer surplus, producer surplus, total surplus, and deadweight loss after tax?',
    back: 'After tax, <code>Q = 125</code>, buyer price is <code>35</code>, seller net price is <code>25</code>.<br>Consumer surplus = <code>0.5 × 125 × 25 = 1562.5</code>.<br>Producer surplus = <code>0.5 × 125 × 25 = 1562.5</code>.<br>Government revenue = <code>1250</code>.<br>Total surplus = <code>1562.5 + 1562.5 + 1250 = 4375</code>.<br>Before tax, total surplus was <code>4500</code>, so <code>DWL = 125</code>.',
    tags: ['tax', 'CS', 'PS', 'DWL']
  },
  {
    id: 'c5-22',
    topic: 'Taxation',
    type: 'formula',
    formula: true,
    front: 'How can deadweight loss from a per-unit tax be calculated geometrically?',
    back: 'Deadweight loss is the triangle formed by the tax wedge and the reduction in quantity: <code>DWL = 0.5 × tax × reduction in quantity</code>.',
    tags: ['DWL', 'formula']
  },
  {
    id: 'c5-23',
    topic: 'Taxation',
    type: 'principle',
    formula: false,
    front: 'Who bears more of a tax: buyers or sellers?',
    back: 'The side of the market that is <strong>less elastic</strong> bears more of the tax burden.',
    tags: ['tax incidence', 'elasticity']
  },
  {
    id: 'c5-24',
    topic: 'Taxation',
    type: 'concept',
    formula: false,
    front: 'Does it matter for economic incidence whether the tax is legally imposed on buyers or sellers?',
    back: 'Not necessarily. Legal incidence and economic incidence are different. The true burden depends on elasticities, not just on who writes the cheque to the government.',
    tags: ['statutory incidence', 'economic incidence']
  },
  {
    id: 'c5-25',
    topic: 'Taxation',
    type: 'principle',
    formula: false,
    front: 'Why does a given tax create more deadweight loss when demand and supply are more elastic?',
    back: 'Because more elastic buyers and sellers reduce quantity traded by more in response to the tax, so more mutually beneficial trades are lost.',
    tags: ['elasticity', 'deadweight loss']
  },
  {
    id: 'c5-26',
    topic: 'Taxation',
    type: 'rule',
    formula: false,
    front: 'If the government must raise revenue with minimal distortion, which markets should it tax?',
    back: 'It should tax markets with relatively <strong>inelastic</strong> demand and supply, because those markets create less deadweight loss for a given tax.',
    tags: ['efficient taxation', 'inelastic markets']
  },
  {
    id: 'c5-27',
    topic: 'Subsidy',
    type: 'definition',
    formula: false,
    front: 'What is a subsidy?',
    back: 'A subsidy is a payment by the government that lowers buyers’ or sellers’ effective cost. It is the opposite of a tax.',
    tags: ['subsidy', 'definition']
  },
  {
    id: 'c5-28',
    topic: 'Subsidy',
    type: 'concept',
    formula: false,
    front: 'If producers receive a per-unit subsidy, what happens to price and quantity in the market?',
    back: 'A producer subsidy shifts supply downward, increases quantity traded, lowers the price paid by consumers, and raises the effective price received by producers.',
    tags: ['producer subsidy', 'supply shift']
  },
  {
    id: 'c5-29',
    topic: 'Subsidy',
    type: 'principle',
    formula: false,
    front: 'Why can a subsidy create deadweight loss even though it helps buyers and sellers?',
    back: 'Because it pushes output above the efficient quantity, so some extra units are produced even though their marginal cost exceeds their marginal benefit. It also requires government spending.',
    tags: ['subsidy', 'DWL']
  },
  {
    id: 'c5-30',
    topic: 'Policy Evaluation',
    type: 'concept',
    formula: false,
    front: 'If the government wants to help low-income consumers, why might a direct transfer be more efficient than a price ceiling or subsidy?',
    back: 'Because a direct transfer can redistribute income without distorting market prices and quantities as much, so it usually creates less deadweight loss.',
    tags: ['redistribution', 'efficiency']
  }
];
