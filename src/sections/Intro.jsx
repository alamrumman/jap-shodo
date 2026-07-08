import { useRef } from "react";
import "./Intro.css";

export default function Intro() {
  const artRef = useRef(null);
  const inkRef = useRef(null);
  const stampRef = useRef(null);

  const onMove = (e) => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = artRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    if (inkRef.current) {
      inkRef.current.style.transform = `translate3d(${px * 18}px, ${py * 14}px, 0) rotate(-3deg)`;
    }
    if (stampRef.current) {
      stampRef.current.style.transform = `translate3d(${px * -22}px, ${py * -18}px, 0) rotate(-8deg)`;
    }
  };

  const onLeave = () => {
    if (inkRef.current) inkRef.current.style.transform = "";
    if (stampRef.current) stampRef.current.style.transform = "";
  };

  return (
    <section className="intro" id="intro" aria-labelledby="intro-title">
      <div className="container intro__grid">
        <div className="intro__text">
          <h2 id="intro-title" className="reveal">
            書道とは
            <span className="seal" aria-hidden="true">
              書
            </span>
          </h2>
          <p className="intro__lead reveal d-1">
            文字を書くことではなく、
            <br />
            心を映し出す芸術。
          </p>
          <p className="intro__body reveal d-2">
            書道は、古くから日本人の美意識や精神性とともに育まれてきました。
            <br />
            一文字一文字に心を込め、筆の動きに想いを乗せる。
            <br />
            それは、自己と向き合い、無心になる時間でもあります。
          </p>
          <a href="#/culture" className="tlink reveal d-3">
            詳しく見る →
          </a>
        </div>

        <div
          className="intro__art reveal-blur"
          ref={artRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          <div className="intro__grain" aria-hidden="true" />
          <div className="intro__ink" ref={inkRef} aria-hidden="true">
            筆
          </div>
          <span className="intro__stamp" ref={stampRef} aria-hidden="true">
            書
          </span>
          <span className="intro__caption" aria-hidden="true">
            <span>FUDE — 筆</span>
            <span className="intro__caption-line" />
            <span>心を運ぶ</span>
          </span>
        </div>
      </div>
    </section>
  );
}
