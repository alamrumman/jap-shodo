import "./Styles.css";

const styles = [
  {
    kanji: "楷書",
    label: "Kaisho",
    body: "整った形とバランスが\n美しい、書の基本となる書体。",
  },
  {
    kanji: "行書",
    label: "Gyōsho",
    body: "流れるような筆運びが魅力。\n柔らかく優美な書体。",
  },
  {
    kanji: "草書",
    label: "Sōsho",
    body: "感性のままに筆を走らせる、\n自由で芸術的な書体。",
  },
];

export default function Styles() {
  return (
    <section className="styles" aria-labelledby="styles-title">
      <div className="container">
        <div className="styles__head reveal">
          <h2 id="styles-title">
            書体の美
            <span className="seal" aria-hidden="true">
              美
            </span>
          </h2>
        </div>

        <div className="styles__grid">
          {styles.map((s, i) => (
            <article
              key={s.kanji}
              className="style reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="style__paper">
                <div className="style__ink" aria-hidden="true">
                  {s.kanji}
                </div>
                <div className="style__splatter" aria-hidden="true" />
              </div>
              <div className="style__meta">
                <p>
                  {s.body.split("\n").map((l, k) => (
                    <span key={k}>
                      {l}
                      <br />
                    </span>
                  ))}
                </p>
                <a href="#/techniques" className="tlink">
                  詳しく見る →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
