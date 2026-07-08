import "./Modern.css";

export default function Modern() {
  return (
    <section className="modern" aria-labelledby="modern-title">
      <div className="modern__grid">
        <div className="modern__art reveal-left">
          <img
            src="/images/img5.png"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <div className="modern__wash" aria-hidden="true" />
        </div>

        <div className="modern__text reveal-right">
          <h2 id="modern-title">
            現代の書道
            <span className="seal" aria-hidden="true">
              現
            </span>
          </h2>
          <p className="modern__lead">
            伝統を受け継ぎながら、
            <br />
            新しい表現へ。
          </p>
          <p className="modern__body">
            書道は今も進化し続けています。
            <br />
            アート、デザイン、デジタルの世界へと広がり、
            <br />
            未来の文化にも新たな躍動を生み出しています。
          </p>
          <a href="#/culture" className="tlink">
            詳しく見る →
          </a>
        </div>
      </div>
    </section>
  );
}
