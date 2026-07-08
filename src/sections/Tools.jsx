import "./Tools.css";

const tools = [
  {
    name: "筆",
    romaji: "Fude",
    body: "繊細な生命を生み出す大切な道具。\n毛の種類や形で表現が変わる。",
    img: "/images/img1.png",
  },
  {
    name: "墨",
    romaji: "Sumi",
    body: "深い黒を生み出す墨。\n香りや質感も墨の魅力のひとつ。",
    img: "/images/img2.png",
  },
  {
    name: "硯",
    romaji: "Suzuri",
    body: "墨を磨り、筆に墨を含ませる。\n静寂の中で心を整える道具。",
    img: "/images/img3.png",
  },
  {
    name: "和紙",
    romaji: "Washi",
    body: "墨のにじみやかすれを受け止める、\n日本の伝統的な紙。",
    img: "/images/img4.png",
  },
];

export default function Tools() {
  return (
    <section className="tools" aria-labelledby="tools-title">
      <div className="tools__bamboo tools__bamboo--left" aria-hidden="true" />
      <div className="tools__bamboo tools__bamboo--right" aria-hidden="true" />

      <div className="container">
        <div className="tools__head reveal">
          <h2 id="tools-title">
            書道の道具
            <span className="seal" aria-hidden="true">
              具
            </span>
          </h2>
        </div>

        <ul className="tools__grid">
          {tools.map((t, i) => (
            <li
              key={t.name}
              className="tool reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
              tabIndex={0}
            >
              <div className="tool__media">
                <img
                  src={t.img}
                  alt={`${t.name} (${t.romaji})`}
                  loading="lazy"
                  decoding="async"
                />
                <span className="tool__index" aria-hidden="true">
                  0{i + 1}
                </span>
                <span className="tool__mark" aria-hidden="true">
                  {t.name}
                </span>
              </div>
              <div className="tool__meta">
                <div className="tool__head">
                  <h3>{t.name}</h3>
                  <span className="tool__romaji">{t.romaji}</span>
                </div>
                <p>
                  {t.body.split("\n").map((l, k) => (
                    <span key={k}>
                      {l}
                      <br />
                    </span>
                  ))}
                </p>
                <a href="#/culture" className="tlink">
                  詳しく見る →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
