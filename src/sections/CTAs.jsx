import "./CTAs.css";

export default function CTAs() {
  return (
    <section className="ctas" aria-label="CTA">
      <div className="ctas__grid">
        <article className="cta cta--light reveal-left">
          <div className="cta__body">
            <h2>
              私たちについて
              <span className="seal" aria-hidden="true">
                私
              </span>
            </h2>
            <p>
              日本の文字文化を未来へ。
              <br />
              私たちの想いや活動をご紹介します。
            </p>
            <a href="#/about" className="tlink">
              詳しく見る →
            </a>
          </div>
          <div className="cta__art cta__art--about" aria-hidden="true">
            <div className="cta__lantern" />
          </div>
        </article>

        <article className="cta cta--dark reveal-right">
          <div className="cta__body">
            <h2>
              お問い合わせ
              <span className="seal" aria-hidden="true">
                問
              </span>
            </h2>
            <p>
              書道文化について、
              <br />
              お気軽にご相談ください。
            </p>
            <a href="#/contact" className="btn btn--light">
              お問い合わせ →
            </a>
          </div>
          <div className="cta__art cta__art--contact" aria-hidden="true">
            <div className="cta__inkstone" />
            <div className="cta__brush" />
          </div>
        </article>
      </div>
    </section>
  );
}
