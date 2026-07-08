import PageHero from "../components/PageHero";
import "./pages.css";

const styles = [
  {
    k: "楷書",
    en: "Kaisho",
    body: "整然とした造形。基本を学ぶための書体で、一画一画がはっきりと独立している。",
  },
  {
    k: "行書",
    en: "Gyōsho",
    body: "楷書と草書の間に位置する書体。流麗さと読みやすさを併せ持つ。",
  },
  {
    k: "草書",
    en: "Sōsho",
    body: "極度に省略された線と勢い。書き手の感性が最大限に表れる。",
  },
];

const steps = [
  { n: "01", k: "姿勢", body: "背筋を伸ばし、両足を床にしっかりつける。呼吸を整える。" },
  { n: "02", k: "運筆", body: "肩の力を抜き、筆を垂直に。手首ではなく、腕全体で書く。" },
  { n: "03", k: "墨量", body: "筆に含ませる墨の量で、線の表情は変わる。試して掴む。" },
  { n: "04", k: "余白", body: "書かない部分こそが、書の呼吸となる。空間を大切に。" },
];

export default function Techniques() {
  return (
    <>
      <PageHero
        kanji="技"
        title="技法"
        subtitle="TECHNIQUES — 書体の美と学び"
      />

      <section className="content" aria-label="技法">
        <div className="container">
          <div className="content__section reveal">
            <h2 style={{ fontFamily: "var(--font-mincho)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "0.2em", marginBottom: "1rem" }}>
              書体の種類
            </h2>
            <p style={{ color: "var(--text-mute)", lineHeight: 2, marginBottom: "2rem", maxWidth: 640 }}>
              書には多くの書体がありますが、その基礎となるのが次の三つ。
              それぞれが異なる時代と精神性を映し出しています。
            </p>

            <div className="content__facts">
              {styles.map((s) => (
                <div key={s.k} className="content__fact">
                  <div className="content__fact-k">{s.k}</div>
                  <div style={{
                    fontFamily: "var(--font-mincho)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.35em",
                    color: "var(--shu)",
                    marginBottom: "0.6rem",
                  }}>
                    {s.en.toUpperCase()}
                  </div>
                  <p className="content__fact-body">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content__pull reveal">
            <blockquote>
              「まず静かに座り、
              <br />
              墨の香りを感じることから」
            </blockquote>
            <cite>— 学びの第一歩</cite>
          </div>

          <div className="content__section reveal">
            <h2 style={{ fontFamily: "var(--font-mincho)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "0.2em", marginBottom: "1.5rem" }}>
              学びの四つの基本
            </h2>

            <div className="about__values-grid">
              {steps.map((s) => (
                <article key={s.n} className="about__value">
                  <span className="about__value-num">{s.n}</span>
                  <div className="about__value-k">{s.k}</div>
                  <p className="about__value-body">{s.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="content__section content__grid reveal">
            <div className="content__body">
              <h2>体験するということ</h2>
              <p className="content__body-lead">
                書は「読む」ものではなく、
                <br />
                「感じる」もの。
              </p>
              <p>
                書は理屈で理解する芸術ではありません。
                墨の香り、筆の湿り、紙の質感、静寂。
                その体験の総体が、書の本質です。
              </p>
              <p>
                まずは一枚の紙に、一本の線を引いてみることから始めてみてください。
              </p>
            </div>
            <div className="content__art reveal-blur">
              <div className="content__art-kanji" aria-hidden="true">
                技
              </div>
              <span className="content__art-label" aria-hidden="true">
                WAZA — 技
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
