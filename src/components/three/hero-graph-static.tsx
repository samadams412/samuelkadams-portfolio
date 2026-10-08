// Deterministic static fallback for HeroGraphScene — used when the viewer has
// prefers-reduced-motion set, on low-power/mobile devices, and as the initial
// server-rendered markup before HeroGraph decides whether to upgrade to the
// WebGL scene. Pure SVG, no client JS required to render it.
const NODES = [
  { x: 18, y: 28 },
  { x: 42, y: 16 },
  { x: 68, y: 22 },
  { x: 86, y: 40 },
  { x: 30, y: 48 },
  { x: 58, y: 44 },
  { x: 76, y: 62 },
  { x: 22, y: 72 },
  { x: 48, y: 78 },
  { x: 64, y: 88 },
] as const;

const EDGES: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 4],
  [1, 5],
  [2, 5],
  [3, 6],
  [4, 5],
  [5, 6],
  [4, 7],
  [5, 8],
  [6, 9],
  [7, 8],
  [8, 9],
];

export function HeroGraphStatic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Illustration of a network of connected nodes"
    >
      <g stroke="currentColor" strokeWidth="0.4" opacity="0.3">
        {EDGES.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
          />
        ))}
      </g>
      <g fill="currentColor">
        {NODES.map((node, i) => (
          <circle key={i} cx={node.x} cy={node.y} r="1.6" />
        ))}
      </g>
    </svg>
  );
}
