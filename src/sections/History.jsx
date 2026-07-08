import { useState } from "react";
import "./History.css";

const eras = [
  {
    era: "古代",
    year: "〜794",
    romaji: "Kodai",
    body: "漢字の伝来とともに、日本独自の書が芽生える。",
    detail:
      "中国大陸から漢字が伝わり、写経を中心に書が広まっていく。日本人の美意識との出会いが、独自の書表現の萌芽を生む。",
  },
  {
    era: "平安時代",
    year: "794–1185",
    romaji: "Heian",
    body: "仮名文字が生まれ、美しいかな書が発展。",
    detail:
      "宮廷文化の中で、仮名という日本固有の文字が誕生。優美で繊細な線が特徴のかな書は、日本の美意識を象徴する存在となる。",
  },
  {
    era: "江戸時代",
    year: "1603–1868",
    romaji: "Edo",
    body: "庶民にも広まり、多様な書体と流派が確立。",
    detail:
      "寺子屋を通じ書の教育が庶民階層まで広がる。この時代に多様な流派が生まれ、現代の書道の基礎が築かれた。",
  },
  {
    era: "現代",
    year: "1868–",
    romaji: "Gendai",
    body: "伝統を受け継ぎながら、新たな表現が生まれる。",
    detail:
      "伝統的な書を継承しつつも、アート、デザイン、デジタルとの融合が進む。書は今も新たな表現領域を広げ続けている。",
  },
];

export default function History() {
  const [active, setActive] = useState(0);
  const cur = eras[active];

  return (
    <section className="history" aria-labelledby="history-title">
      <div className="container history__grid">
        <div className="history__left">
          <h2 id="history-title" className="reveal">
            日本書道の歴史
            <span className="seal" aria-hidden="true">
              史
            </span>
          </h2>

          <ol className="history__timeline reveal">
            <div className="history__line" aria-hidden="true">
              <span
                className="history__line-fill"
                style={{ "--fill": (active + 1) / eras.length }}
              />
            </div>

            {eras.map((e, i) => (
              <li key={e.era}>
                <button
                  type="button"
                  className={`history__item ${active === i ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-pressed={active === i}
                >
                  <span className="history__dot" aria-hidden="true" />
                  <span className="history__year">{e.year}</span>
                  <span className="history__era">{e.era}</span>
                  <span className="history__body">{e.body}</span>
                </button>
              </li>
            ))}
          </ol>

          <div className="history__detail" key={active}>
            <div className="history__detail-tag">
              <span className="history__romaji">{cur.romaji}</span>
              <span className="history__year-strong">{cur.year}</span>
            </div>
            <p>{cur.detail}</p>
          </div>
        </div>

        <div className="history__scene reveal-blur">
          <svg viewBox="0 0 400 340" width="100%" height="100%" aria-hidden="true">
            <defs>
              <radialGradient id="mist" cx="50%" cy="60%" r="60%">
                <stop offset="0%" stopColor="#e8dfc8" stopOpacity="1" />
                <stop offset="100%" stopColor="#e8dfc8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="400" height="340" fill="url(#mist)" />
            <path
              d="M0 220 Q 60 160 120 195 T 240 200 T 400 190 L400 340 L0 340 Z"
              fill="#8a8478"
              opacity="0.55"
            />
            <path
              d="M0 250 Q 80 200 160 230 T 320 235 T 400 230 L400 340 L0 340 Z"
              fill="#5b5449"
              opacity="0.55"
            />
            <g transform="translate(260 100)" fill="#3a332a">
              <rect x="-2" y="0" width="4" height="130" />
              <path d="M-30 20 L30 20 L20 30 L-20 30 Z" opacity="0.85" />
              <path d="M-26 45 L26 45 L18 55 L-18 55 Z" opacity="0.85" />
              <path d="M-22 70 L22 70 L14 80 L-14 80 Z" opacity="0.85" />
              <path d="M-18 95 L18 95 L10 105 L-10 105 Z" opacity="0.85" />
              <rect x="-10" y="105" width="20" height="25" opacity="0.85" />
            </g>
            <g stroke="#2a2621" strokeWidth="1.2" fill="none" opacity="0.75">
              <path d="M20 300 Q 40 200 30 120 Q 60 150 80 90 M30 180 Q 55 170 90 155" />
              <path d="M60 320 Q 80 250 100 200 M75 260 Q 100 250 130 240" />
            </g>
            <path
              d="M40 300 Q 120 280 220 300 Q 300 310 380 290"
              stroke="#2a2621"
              strokeWidth="1"
              opacity="0.4"
              fill="none"
            />
          </svg>
          <div className="history__scene-era" aria-hidden="true">
            {cur.era}
          </div>
        </div>
      </div>
    </section>
  );
}
