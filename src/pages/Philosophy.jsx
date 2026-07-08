import PageHero from "../components/PageHero";
import "./pages.css";

const principles = [
  {
    k: "静",
    en: "Silence",
    body: "心を静め、無心の境地に入る。始まりは、いつも静けさから。",
  },
  {
    k: "集中",
    en: "Focus",
    body: "一点に意識を向け、全てを筆に込める。他の全てを忘れる、その瞬間。",
  },
  {
    k: "調和",
    en: "Harmony",
    body: "自然・筆・紙がひとつになる瞬間を大切にする。書は、対話である。",
  },
  {
    k: "表現",
    en: "Expression",
    body: "内側にある想いを、形として表す。書き手そのものが、現れる。",
  },
];

export default function Philosophy() {
  return (
    <>
      <PageHero
        kanji="心"
        title="哲学"
        subtitle="PHILOSOPHY — 書の四つの心"
      />

      <section className="content" aria-label="哲学">
        <div className="container">
          <div className="content__pull reveal">
            <blockquote>一 筆 一 心</blockquote>
            <cite>ONE STROKE, ONE HEART</cite>
          </div>

          <div className="content__section reveal">
            <p style={{
              fontFamily: "var(--font-mincho)",
              fontSize: "clamp(1.1rem, 1.7vw, 1.35rem)",
              lineHeight: 1.9,
              textAlign: "center",
              maxWidth: 640,
              margin: "0 auto 3rem",
              color: "var(--text)",
            }}>
              一本の線に、すべての心を込める。
              <br />
              書における「四つの心」は、書き手の姿勢そのものを表しています。
            </p>

            <div className="about__values-grid">
              {principles.map((p, i) => (
                <article
                  key={p.k}
                  className="about__value reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="about__value-num">0{i + 1}</span>
                  <div className="about__value-k">{p.k}</div>
                  <span className="about__value-en">{p.en}</span>
                  <p className="about__value-body">{p.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="content__section content__grid reveal">
            <div className="content__body">
              <h2>なぜ「四つ」なのか</h2>
              <p>
                日本の伝統芸には、しばしば「四」という数字が使われます。
                四季、四方、四拍子、四道具 —— それは世界を全体として捉える、
                古くからの感覚です。
              </p>
              <p>
                書における四つの心も、書き手の内面から表現までを一続きの流れとして描いたもの。
                静けさから始まり、集中を経て、調和のうちに表現に至る。
              </p>
              <p>
                この順序を辿ることで、書はただの技術ではなく、生き方そのものになります。
              </p>
            </div>
            <div className="content__art reveal-blur">
              <div className="content__art-kanji" aria-hidden="true">
                道
              </div>
              <span className="content__art-label" aria-hidden="true">
                DŌ — 道
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
