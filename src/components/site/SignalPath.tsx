import type { CSSProperties } from "react";

const STEPS = ["Founder", "Decision", "Owner", "Action"] as const;

type Point = { x: number; y: number };

// Vertical route: steps down and to the right, like work moving off the founder's desk.
const V_NODES: Point[] = [
  { x: 40, y: 40 },
  { x: 40, y: 150 },
  { x: 150, y: 260 },
  { x: 260, y: 370 },
];
const V_PATH =
  "M40 40 V185 Q40 205 60 205 H130 Q150 205 150 225 V295 Q150 315 170 315 H240 Q260 315 260 335 V370";

const H_NODES: Point[] = [
  { x: 12, y: 16 },
  { x: 117, y: 16 },
  { x: 222, y: 16 },
  { x: 327, y: 16 },
];
const H_PATH = "M12 16 H327";

function Node({ point, index, horizontal }: { point: Point; index: number; horizontal?: boolean }) {
  const isEnd = index === STEPS.length - 1;
  const style = { "--n": index } as CSSProperties;
  const anchor = !horizontal ? "start" : index === 0 ? "start" : isEnd ? "end" : "middle";
  const labelX = horizontal
    ? index === 0
      ? point.x - 6
      : isEnd
        ? point.x + 6
        : point.x
    : point.x + 24;
  return (
    <g className={isEnd ? "cp-signal__node cp-signal__node--end" : "cp-signal__node"} style={style}>
      {isEnd ? (
        <circle className="cp-signal__halo" cx={point.x} cy={point.y} r={horizontal ? 11 : 16} />
      ) : null}
      <circle className="cp-signal__core" cx={point.x} cy={point.y} r={horizontal ? 5 : 7} />
      {horizontal ? (
        <text className="cp-signal__label" x={labelX} y={point.y + 30} textAnchor={anchor}>
          {STEPS[index]}
        </text>
      ) : (
        <>
          <text className="cp-signal__num" x={labelX} y={point.y - 12}>
            {String(index + 1).padStart(2, "0")}
          </text>
          <text className="cp-signal__label" x={labelX} y={point.y + 6}>
            {STEPS[index]}
          </text>
        </>
      )}
    </g>
  );
}

/**
 * The CooPilot signal line: Founder -> Decision -> Owner -> Action.
 * Draws once on load; renders fully drawn when motion is reduced. Decorative (aria-hidden):
 * the same idea is carried by the hero copy.
 */
export function SignalPath() {
  return (
    <>
      <svg
        className="cp-signal cp-signal--vertical"
        viewBox="0 0 380 400"
        aria-hidden="true"
        focusable="false"
      >
        <path className="cp-signal__ghost" d={V_PATH} />
        <path className="cp-signal__line" d={V_PATH} pathLength={1} />
        {V_NODES.map((point, index) => (
          <Node key={STEPS[index]} point={point} index={index} />
        ))}
      </svg>
      <svg
        className="cp-signal cp-signal--horizontal"
        viewBox="0 0 340 52"
        aria-hidden="true"
        focusable="false"
      >
        <path className="cp-signal__ghost" d={H_PATH} />
        <path className="cp-signal__line" d={H_PATH} pathLength={1} />
        {H_NODES.map((point, index) => (
          <Node key={STEPS[index]} point={point} index={index} horizontal />
        ))}
      </svg>
    </>
  );
}
