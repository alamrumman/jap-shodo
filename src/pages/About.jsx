import PageHero from "../components/PageHero";
import "./pages.css";

const values = [
  { k: "伝統", en: "Tradition", body: "受け継がれた美意識を、次の世代へと丁寧に手渡す。" },
  { k: "教育", en: "Education", body: "文化を学ぶ喜びを、初心者にも研究者にも届ける。" },
  { k: "尊重", en: "Respect", body: "作品と作り手、その両方への敬意を忘れない。" },
  { k: "創造", en: "Creation", body: "伝統を礎に、新しい表現の可能性を探求する。" },
];

export default function About({ navigate }) {
  const go = (to) => (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <>
      <PageHero
        kanji="私"
        title="私たちについて"
        subtitle="ABOUT — 文化を守り、未来へ届ける"
      />

      {/* Story */}
      <section className="about about__story" aria-labelledby="story-title">
        <div className="container about__story-grid">
          <div className="about__story-text reveal">
            <h2 id="story-title">私たちの物語</h2>
            <p className="about__story-lead">
              一筆に宿る、心のかたち。
              <br />
              その静けさを、現代のかたちで届けたい。
            </p>
            <p className="about__story-body">
              書道文化は、日本の文字文化の美しさと精神性を、次の世代と世界に伝えるために生まれました。
              作家、研究者、教育者の声を集め、書の奥深さを丁寧に紹介しています。
            </p>
            <p className="about__story-body">
              紙と墨の香り、線が生まれる一瞬の緊張感、余白のなかにある静寂。
              こうした「言葉にならない体験」こそが、書の本質であると私たちは考えています。
            </p>
          </div>

          <div className="about__story-art reveal-blur">
            <div className="about__story-kanji" aria-hidden="true">
              書
            </div>
            <span className="about__story-seal" aria-hidden="true">
              私
            </span>
            <span className="about__story-meta" aria-hidden="true">
              EST. 2026 — 京都
            </span>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="about__quote" aria-label="引用">
        <div className="about__quote-inner reveal">
          <blockquote>
            「文字は、書き手の心を紙に写す鏡である」
          </blockquote>
          <div className="about__quote-cite">— 書道文化 編集室</div>
        </div>
      </section>

      {/* Mission */}
      <section className="about__mission container" aria-labelledby="mission-title">
        <div className="reveal">
          <div className="about__mission-mark" aria-hidden="true">
            使
          </div>
          <h2 id="mission-title">私たちの使命</h2>
          <p>
            日本の書道文化を、時代を超えて共有できる資産として保存・発信すること。
            伝統の担い手と、これから書に触れる人々をつなぐ橋になる。
            それが、私たちが果たすべき役割です。
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="about__values" aria-labelledby="values-title">
        <div className="container">
          <h2 id="values-title" className="reveal">
            大切にしていること
          </h2>
          <div className="about__values-grid">
            {values.map((v, i) => (
              <article
                key={v.k}
                className="about__value reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="about__value-num">0{i + 1}</span>
                <div className="about__value-k">{v.k}</div>
                <span className="about__value-en">{v.en}</span>
                <p className="about__value-body">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="about__vision" aria-labelledby="vision-title">
        <div className="container reveal">
          <span className="about__vision-eyebrow">VISION — 展望</span>
          <h2 id="vision-title">
            紙とデジタルの、
            <br />
            その狭間へ。
          </h2>
          <p>
            伝統と現代。日本と世界。物質と情報。
            その境界に、書の新しい居場所を築いていきます。
            静けさを失わないまま、書はもっと自由になれる。
          </p>
          <div style={{ marginTop: "2rem" }}>
            <a
              href="#/contact"
              onClick={go("/contact")}
              className="btn btn--light"
            >
              お問い合わせ →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
