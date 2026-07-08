import { useEffect, useState } from "react";
import PageHero from "../components/PageHero";
import "./pages.css";
import "../sections/Gallery.css";

const items = [
  { img: "/images/img1.webp", label: "筆勢", en: "Fude-sei", tall: true },
  { img: "/images/img2.webp", label: "静物", en: "Seibutsu", tall: false },
  { img: "/images/img3.webp", label: "墨迹", en: "Bokuseki", tall: false },
  { img: "/images/img4.webp", label: "掛軸", en: "Kakejiku", tall: true },
  { img: "/images/img5.webp", label: "余白", en: "Yohaku", tall: false },
  { img: "/images/img1.webp", label: "文字", en: "Moji", tall: false },
  { img: "/images/img2.webp", label: "書", en: "Sho", tall: false },
  { img: "/images/img3.webp", label: "作品", en: "Sakuhin", tall: true },
  { img: "/images/img4.webp", label: "軸", en: "Jiku", tall: false },
  { img: "/images/img5.webp", label: "余韻", en: "Yoin", tall: false },
];

export default function GalleryPage() {
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
    <>
      <PageHero
        kanji="展"
        title="ギャラリー"
        subtitle="GALLERY — 作品と余韻"
      />

      <section className="gallery" aria-labelledby="gallery-title">
        <div className="container">
          <div className="reveal" style={{ marginBottom: "2rem" }}>
            <p style={{
              color: "var(--text-mute)",
              fontFamily: "var(--font-mincho)",
              fontSize: "0.9rem",
              letterSpacing: "0.2em",
              lineHeight: 2,
              maxWidth: 640,
            }}>
              静寂の中に生まれた、書の断片たち。
              <br />
              一枚一枚をクリックすると、拡大してご覧いただけます。
            </p>
          </div>

          <ul className="gallery__grid">
            {items.map((it, i) => (
              <li
                key={i}
                className={`gitem ${it.tall ? "gitem--tall" : ""} reveal`}
                style={{ transitionDelay: `${i * 40}ms` }}
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
                    width="600"
                    height="450"
                  />
                  <span className="gitem__overlay">
                    <span className="gitem__label">{it.label}</span>
                    <span className="gitem__zoom" aria-hidden="true">⤢</span>
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
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="前へ"
            >←</button>

            <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
              <img src={cur.img} alt={cur.label} />
              <figcaption>
                <span className="lightbox__label">
                  {cur.label} <span style={{ opacity: 0.6, marginLeft: "0.6rem", fontSize: "0.7rem" }}>{cur.en}</span>
                </span>
                <span className="lightbox__count">
                  {String(open + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>

            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="次へ"
            >→</button>

            <button type="button" className="lightbox__close" onClick={close} aria-label="閉じる">
              閉じる ✕
            </button>
          </div>
        )}
      </section>
    </>
  );
}
