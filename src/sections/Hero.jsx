import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="ヒーロー">
      <picture className="hero__bg">
        <img
          src="/images/hero-bg.png"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content container">
        <div className="hero__char" aria-hidden="true">
          書
        </div>
        <h1 className="hero__title">
          <span className="hero__jp">日本の文字文化</span>
          <span className="hero__sub">一筆に宿る、日本の精神</span>
        </h1>

        <a href="#intro" className="hero__scroll" aria-label="下へスクロール">
          <span>SCROLL</span>
          <span className="hero__line" aria-hidden="true" />
        </a>
      </div>

      <div className="hero__scroll-side" aria-hidden="true">
        <div className="hero__scroll-inner">
          <div className="hero__scroll-char">南無阿弥陀仏</div>
        </div>
      </div>
    </section>
  );
}
