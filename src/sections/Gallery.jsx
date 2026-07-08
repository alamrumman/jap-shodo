import { useEffect, useState } from "react";
import "./Gallery.css";

const items = [
  { img: "/images/img1.png", label: "筆勢", tall: false },
  { img: "/images/img2.png", label: "静物", tall: true },
  { img: "/images/img3.png", label: "墨迹", tall: false },
  { img: "/images/img4.png", label: "掛軸", tall: false },
  { img: "/images/img5.png", label: "余白", tall: true },
  { img: "/images/img1.png", label: "文字", tall: false },
  { img: "/images/img3.png", label: "作品", tall: false },
];

export default function Gallery() {
  const [open, setOpen] = useState(-1);
  const close = () => setOpen(-1);
  const next = () => setOpen((i) => (i + 1) % items.length);
  const prev = () => setOpen((i) => (i - 1 + items.length) % items.length);

  useEffect(() => {
    if (open < 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const cur = open >= 0 ? items[open] : null;

  return (
    <section className="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <div className="gallery__head reveal">
          <h2 id="gallery-title">
            ギャラリー
            <span className="seal" aria-hidden="true">
              展
            </span>
          </h2>
          <a href="#/gallery" className="tlink">
            すべての作品を見る →
          </a>
        </div>

        <ul className="gallery__grid">
          {items.map((it, i) => (
            <li
              key={i}
              className={`gitem ${it.tall ? "gitem--tall" : ""} reveal`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                type="button"
                className="gitem__btn"
                onClick={() => setOpen(i)}
                aria-label={`${it.label}を拡大`}
              >
                <img
                  src={it.img}
                  alt={it.label}
                  loading="lazy"
                  decoding="async"
                />
                <span className="gitem__overlay">
                  <span className="gitem__label">{it.label}</span>
                  <span className="gitem__zoom" aria-hidden="true">
                    ⤢
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {cur && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={cur.label}
          onClick={close}
        >
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="前へ"
          >
            ←
          </button>

          <figure
            className="lightbox__figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={cur.img} alt={cur.label} />
            <figcaption>
              <span className="lightbox__label">{cur.label}</span>
              <span className="lightbox__count">
                {String(open + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="次へ"
          >
            →
          </button>

          <button
            type="button"
            className="lightbox__close"
            onClick={close}
            aria-label="閉じる"
          >
            閉じる ✕
          </button>
        </div>
      )}
    </section>
  );
}
