import { useState } from "react";
import "./Principles.css";

const principles = [
  {
    kanji: "静",
    label: "Silence",
    body: "心を静め、\n無心の境地に入る。",
    pos: "top",
    icon: "☯",
  },
  {
    kanji: "集中",
    label: "Focus",
    body: "一点に意識を向け、\n全てを筆に込める。",
    pos: "left",
    icon: "◉",
  },
  {
    kanji: "調和",
    label: "Harmony",
    body: "自然・筆・紙がひとつに\nなる瞬間を大切にする。",
    pos: "right",
    icon: "◐",
  },
  {
    kanji: "表現",
    label: "Expression",
    body: "内側にある想いを、\n形として表す。",
    pos: "bottom",
    icon: "✎",
  },
];

export default function Principles() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="principles"
      aria-labelledby="principles-title"
      onMouseLeave={() => setActive(0)}
    >
      <div className="principles__cracks" aria-hidden="true" />

      <div className="container principles__grid">
        {principles.map((p, i) => (
          <article
            key={p.kanji}
            className={`principle principle--${p.pos} reveal ${
              active === i ? "is-active" : ""
            }`}
            style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            tabIndex={0}
          >
            <span className="principle__icon" aria-hidden="true">
              {p.icon}
            </span>
            <div className="principle__meta">
              <h3>
                <span className="principle__flip">
                  <span className="principle__jp">{p.kanji}</span>
                  <span className="principle__en">{p.label}</span>
                </span>
              </h3>
              <p>
                {p.body.split("\n").map((l, k) => (
                  <span key={k}>
                    {l}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </article>
        ))}

        <div className="principles__center reveal-blur">
          <div className="principles__ring">
            <div className="principles__ring-orbit" aria-hidden="true" />
            <div className="principles__inner">
              <h2 id="principles-title">
                書の
                <br />
                四つの心
              </h2>
              <div className="principles__now" aria-live="polite">
                {principles[active].label}
              </div>
              <span className="principles__stamp" aria-hidden="true">
                {principles[active].kanji.slice(0, 1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
