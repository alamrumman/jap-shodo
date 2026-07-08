import PageHero from "../components/PageHero";
import "./pages.css";
import "../sections/Gallery.css";

const items = [
  { img: "/images/img1.png", label: "筆勢", tall: true },
  { img: "/images/img2.png", label: "静物", tall: false },
  { img: "/images/img3.png", label: "墨迹", tall: false },
  { img: "/images/img4.png", label: "掛軸", tall: true },
  { img: "/images/img5.png", label: "余白", tall: false },
  { img: "/images/img1.png", label: "文字", tall: false },
  { img: "/images/img2.png", label: "書", tall: false },
  { img: "/images/img3.png", label: "作品", tall: true },
  { img: "/images/img4.png", label: "軸", tall: false },
  { img: "/images/img5.png", label: "余韻", tall: false },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kanji="展"
        title="ギャラリー"
        subtitle="GALLERY — 作品と余韻"
      />
      <section className="gallery">
        <div className="container">
          <ul className="gallery__grid">
            {items.map((it, i) => (
              <li
                key={i}
                className={`gitem ${it.tall ? "gitem--tall" : ""} reveal`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <img src={it.img} alt={it.label} loading="lazy" decoding="async" />
                <span className="gitem__overlay">{it.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
