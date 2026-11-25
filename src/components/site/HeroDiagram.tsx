import type { CSSProperties } from "react";

/**
 * Hero diagram (client review, Draft 1): a decision moving off the founder, drawn as a
 * before state (every arrow points at the founder) and an after state (every arrow points
 * at an owner). Desktop only; on phones the headline carries the hero.
 */

const DECISIONS = ["Approvals", "Pricing", "Delivery", "Reporting"] as const;

const W = 420;
const PILL_W = 118;
const PILL_H = 32;
const ARROW_START = PILL_W + 10;
const GAP = 42; // vertical distance between decision rows

const BEFORE_TOP = 88;
const AFTER_OFFSET = 262;
const FOUNDER = { x: 344, y: BEFORE_TOP + (GAP * 3) / 2, r: 26 };
const OWNER_X = 300;

type Pt = { x: number; y: number };

function arrowHead(from: Pt, to: Pt, size = 7) {
  const angle = Math.atan2(to.y - from.y, to.x - from.x);
  const left = angle + Math.PI * 0.82;
  const right = angle - Math.PI * 0.82;
  const p = (a: number) => `${to.x + Math.cos(a) * size},${to.y + Math.sin(a) * size}`;
  return `${p(left)} ${to.x},${to.y} ${p(right)}`;
}

function Arrow({ from, to, index, tone }: { from: Pt; to: Pt; index: number; tone: string }) {
  return (
    <g
      className={`cp-diagram__arrow cp-diagram__arrow--${tone}`}
      style={{ "--n": index } as CSSProperties}
    >
      <path d={`M${from.x} ${from.y} L${to.x} ${to.y}`} pathLength={1} />
      <polygon points={arrowHead(from, to)} />
    </g>
  );
}

function Pill({ y, label }: { y: number; label: string }) {
  return (
    <g className="cp-diagram__pill">
      <rect x={0} y={y - PILL_H / 2} width={PILL_W} height={PILL_H} rx={PILL_H / 2} />
      <text x={PILL_W / 2} y={y + 5} textAnchor="middle">
        {label}
      </text>
    </g>
  );
}

function Heading({ y, label, caption }: { y: number; label: string; caption: string }) {
  return (
    <>
      <text className="cp-diagram__kicker" x={0} y={y}>
        {label}
      </text>
      <text className="cp-diagram__caption" x={0} y={y + 26}>
        {caption}
      </text>
    </>
  );
}

export function HeroDiagram() {
  const beforeY = DECISIONS.map((_, i) => BEFORE_TOP + i * GAP);
  const afterY = beforeY.map((y) => y + AFTER_OFFSET);

  // Stop each "before" arrow just short of the founder node.
  const toFounder = (y: number): Pt => {
    const dx = FOUNDER.x - ARROW_START;
    const dy = FOUNDER.y - y;
    const len = Math.hypot(dx, dy);
    const stop = FOUNDER.r + 6;
    return { x: FOUNDER.x - (dx / len) * stop, y: FOUNDER.y - (dy / len) * stop };
  };

  return (
    <svg
      className="cp-diagram"
      viewBox={`0 0 ${W} ${afterY[3]! + 26}`}
      role="img"
      aria-labelledby="cp-diagram-title"
      focusable="false"
    >
      <title id="cp-diagram-title">
        Before: every decision routes through the founder. After: each decision has an owner.
      </title>

      <g className="cp-diagram__panel cp-diagram__panel--before">
        <Heading y={16} label="BEFORE" caption="Every decision routes through the founder." />
        {beforeY.map((y, i) => (
          <Arrow
            key={DECISIONS[i]}
            from={{ x: ARROW_START, y }}
            to={toFounder(y)}
            index={i}
            tone="muted"
          />
        ))}
        {beforeY.map((y, i) => (
          <Pill key={DECISIONS[i]} y={y} label={DECISIONS[i]!} />
        ))}
        <g className="cp-diagram__founder">
          <circle cx={FOUNDER.x} cy={FOUNDER.y} r={FOUNDER.r} />
          <text x={FOUNDER.x} y={FOUNDER.y + FOUNDER.r + 22} textAnchor="middle">
            Founder
          </text>
        </g>
      </g>

      <line
        className="cp-diagram__rule"
        x1={0}
        x2={W}
        y1={AFTER_OFFSET - 22}
        y2={AFTER_OFFSET - 22}
      />

      <g className="cp-diagram__panel cp-diagram__panel--after">
        <Heading y={AFTER_OFFSET + 16} label="AFTER" caption="Each decision has an owner." />
        {afterY.map((y, i) => (
          <Arrow
            key={DECISIONS[i]}
            from={{ x: ARROW_START, y }}
            to={{ x: OWNER_X - 14, y }}
            index={i + 4}
            tone="signal"
          />
        ))}
        {afterY.map((y, i) => (
          <Pill key={DECISIONS[i]} y={y} label={DECISIONS[i]!} />
        ))}
        {afterY.map((y, i) => (
          <g
            key={DECISIONS[i]}
            className="cp-diagram__owner"
            style={{ "--n": i + 4 } as CSSProperties}
          >
            <circle cx={OWNER_X} cy={y} r={7} />
            <text x={OWNER_X + 18} y={y + 5}>
              Owner
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
