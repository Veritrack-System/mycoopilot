import type { CSSProperties } from "react";

/**
 * Hero diagram (client review, Draft 1): a decision moving off the founder.
 * One shape drawn twice so the eye compares like with like: before, every arrow points in
 * at the founder; after, the same arrows point out to an owner for each decision.
 * Desktop only; on phones and tablets the headline carries the hero.
 */

const DECISIONS = [
  { label: "Approvals", x: 32, y: 40, labelY: 20 },
  { label: "Pricing", x: 168, y: 40, labelY: 20 },
  { label: "Delivery", x: 32, y: 158, labelY: 186 },
  { label: "Reporting", x: 168, y: 158, labelY: 186 },
] as const;

const CENTER = { x: 100, y: 92 };
const VIEWBOX = "0 0 200 194";

type Pt = { x: number; y: number };

/** Point `dist` along the line from `a` towards `b`. */
function along(a: Pt, b: Pt, dist: number): Pt {
  const len = Math.hypot(b.x - a.x, b.y - a.y);
  return { x: a.x + ((b.x - a.x) / len) * dist, y: a.y + ((b.y - a.y) / len) * dist };
}

function Arrow({ from, to, index }: { from: Pt; to: Pt; index: number }) {
  const angle = Math.atan2(to.y - from.y, to.x - from.x);
  const head = (a: number) => `${to.x + Math.cos(a) * 6},${to.y + Math.sin(a) * 6}`;
  return (
    <g className="cp-shift__arrow" style={{ "--n": index } as CSSProperties}>
      <path d={`M${from.x} ${from.y} L${to.x} ${to.y}`} pathLength={1} />
      <polyline points={`${head(angle + 2.6)} ${to.x},${to.y} ${head(angle - 2.6)}`} />
    </g>
  );
}

function Panel({ state }: { state: "before" | "after" }) {
  const before = state === "before";
  const hubR = 25;
  const nodeR = before ? 4.5 : 6;
  return (
    <svg className="cp-shift__svg" viewBox={VIEWBOX} aria-hidden="true" focusable="false">
      {DECISIONS.map((d, i) => {
        const node = { x: d.x, y: d.y };
        // Before: decision -> founder. After: founder -> owner.
        const from = before ? along(node, CENTER, nodeR + 5) : along(CENTER, node, hubR + 5);
        const to = before ? along(CENTER, node, hubR + 11) : along(node, CENTER, nodeR + 5);
        return <Arrow key={d.label} from={from} to={to} index={i} />;
      })}
      <g className="cp-shift__hub">
        <circle cx={CENTER.x} cy={CENTER.y} r={hubR} />
        {before ? (
          <circle className="cp-shift__strain" cx={CENTER.x} cy={CENTER.y} r={hubR + 7} />
        ) : null}
        <text x={CENTER.x} y={CENTER.y + 4} textAnchor="middle">
          Founder
        </text>
      </g>
      {DECISIONS.map((d, i) => (
        <g key={d.label} className="cp-shift__node" style={{ "--n": i } as CSSProperties}>
          <circle cx={d.x} cy={d.y} r={nodeR} />
          <text x={d.x} y={d.labelY} textAnchor="middle">
            {d.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function HeroDiagram() {
  return (
    <figure className="cp-shift" aria-label="How decisions move off the founder">
      <div className="cp-shift__panel cp-shift__panel--before">
        <p className="cp-shift__kicker">Before</p>
        <Panel state="before" />
        <p className="cp-shift__caption">
          Every decision routes through the <strong>founder</strong>.
        </p>
      </div>
      <div className="cp-shift__panel cp-shift__panel--after">
        <p className="cp-shift__kicker">After</p>
        <Panel state="after" />
        <p className="cp-shift__caption">
          Each decision has an <strong>owner</strong>.
        </p>
      </div>
    </figure>
  );
}
