// Court positions (from coach's perspective, looking at own team):
//   Front row (near net): 4 | 3 | 2
//   Back row (far):       5 | 6 | 1
// Each rotation entry maps position number → role abbreviation.

export const systems = [
  {
    id: '5-1',
    label: '5-1',
    description: 'One setter, five hitters. Setter runs the offence from all six rotations.',
    roles: ['S', 'OPP', 'OH1', 'OH2', 'MB1', 'MB2'],
    roleLabels: {
      S: 'Setter',
      OPP: 'Opposite',
      OH1: 'Outside 1',
      OH2: 'Outside 2',
      MB1: 'Middle 1',
      MB2: 'Middle 2',
    },
    roleColors: {
      S:   'bg-blue-600',
      OPP: 'bg-purple-600',
      OH1: 'bg-green-600',
      OH2: 'bg-green-700',
      MB1: 'bg-orange-500',
      MB2: 'bg-orange-600',
    },
    rotations: [
      { label: 'Rotation 1', note: 'Setter serves (P1)', positions: { 1:'S', 2:'OPP', 3:'MB1', 4:'OH1', 5:'MB2', 6:'OH2' } },
      { label: 'Rotation 2', note: 'Setter in P6',       positions: { 1:'OPP', 2:'MB2', 3:'OH2', 4:'MB1', 5:'OH1', 6:'S' } },
      { label: 'Rotation 3', note: 'Setter in P5',       positions: { 1:'MB2', 2:'OH2', 3:'MB1', 4:'OH1', 5:'S',   6:'OPP' } },
      { label: 'Rotation 4', note: 'Setter at front (P4)',positions: { 1:'OH2', 2:'MB1', 3:'OH1', 4:'S',   5:'OPP', 6:'MB2' } },
      { label: 'Rotation 5', note: 'Setter at front (P3)',positions: { 1:'MB1', 2:'OH1', 3:'S',   4:'OPP', 5:'MB2', 6:'OH2' } },
      { label: 'Rotation 6', note: 'Setter at front (P2)',positions: { 1:'OH1', 2:'S',   3:'OPP', 4:'MB2', 5:'OH2', 6:'MB1' } },
    ],
  },
  {
    id: '6-2',
    label: '6-2',
    description: 'Two setters who hit when at front row. Always three front-row hitters.',
    roles: ['S1', 'S2', 'OH1', 'OH2', 'MB1', 'MB2'],
    roleLabels: {
      S1: 'Setter 1',
      S2: 'Setter 2',
      OH1: 'Outside 1',
      OH2: 'Outside 2',
      MB1: 'Middle 1',
      MB2: 'Middle 2',
    },
    roleColors: {
      S1:  'bg-blue-600',
      S2:  'bg-blue-500',
      OH1: 'bg-green-600',
      OH2: 'bg-green-700',
      MB1: 'bg-orange-500',
      MB2: 'bg-orange-600',
    },
    rotations: [
      { label: 'Rotation 1', note: 'S1 in P1 (sets)',    positions: { 1:'S1', 2:'OH1', 3:'MB1', 4:'S2', 5:'OH2', 6:'MB2' } },
      { label: 'Rotation 2', note: 'S1 in P6 (sets)',    positions: { 1:'OH2', 2:'MB2', 3:'S2', 4:'OH1', 5:'MB1', 6:'S1' } },
      { label: 'Rotation 3', note: 'S1 in P5 (sets)',    positions: { 1:'MB2', 2:'S2', 3:'OH2', 4:'MB1', 5:'S1', 6:'OH1' } },
      { label: 'Rotation 4', note: 'S2 in P1 (sets)',    positions: { 1:'S2', 2:'OH2', 3:'MB2', 4:'S1', 5:'OH1', 6:'MB1' } },
      { label: 'Rotation 5', note: 'S2 in P6 (sets)',    positions: { 1:'OH1', 2:'MB1', 3:'S1', 4:'OH2', 5:'MB2', 6:'S2' } },
      { label: 'Rotation 6', note: 'S2 in P5 (sets)',    positions: { 1:'MB1', 2:'S1', 3:'OH1', 4:'MB2', 5:'S2', 6:'OH2' } },
    ],
  },
  {
    id: '4-2',
    label: '4-2',
    description: 'Two setters always at right front. Simpler system ideal for beginners.',
    roles: ['S1', 'S2', 'OH1', 'OH2', 'H1', 'H2'],
    roleLabels: {
      S1: 'Setter 1',
      S2: 'Setter 2',
      OH1: 'Outside 1',
      OH2: 'Outside 2',
      H1: 'Hitter 1',
      H2: 'Hitter 2',
    },
    roleColors: {
      S1:  'bg-blue-600',
      S2:  'bg-blue-500',
      OH1: 'bg-green-600',
      OH2: 'bg-green-700',
      H1:  'bg-orange-500',
      H2:  'bg-orange-600',
    },
    rotations: [
      { label: 'Rotation 1', note: 'S1 at P2 (sets)',    positions: { 1:'OH2', 2:'S1', 3:'H1', 4:'OH1', 5:'S2', 6:'H2' } },
      { label: 'Rotation 2', note: 'S1 at P3 → P2',      positions: { 1:'H2', 2:'OH2', 3:'S1', 4:'H1', 5:'OH1', 6:'S2' } },
      { label: 'Rotation 3', note: 'S2 at P2 (sets)',     positions: { 1:'OH1', 2:'S2', 3:'H2', 4:'OH2', 5:'S1', 6:'H1' } },
      { label: 'Rotation 4', note: 'S2 at P3 → P2',      positions: { 1:'H1', 2:'OH1', 3:'S2', 4:'H2', 5:'OH2', 6:'S1' } },
      { label: 'Rotation 5', note: 'S1 serving (P1)',     positions: { 1:'S1', 2:'H1', 3:'OH1', 4:'S2', 5:'H2', 6:'OH2' } },
      { label: 'Rotation 6', note: 'S2 serving (P1)',     positions: { 1:'S2', 2:'H2', 3:'OH2', 4:'S1', 5:'H1', 6:'OH1' } },
    ],
  },
]
