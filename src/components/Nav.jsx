import { useEffect, useRef, useState } from "react";
import "./Nav.css";

const links = [
  { label: "文化", romaji: "Culture", to: "/culture" },
  { label: "歴史", romaji: "History", to: "/history" },
  { label: "技法", romaji: "Techniques", to: "/techniques" },
  { label: "ギャラリー", romaji: "Gallery", to: "/gallery" },
  { label: "私たちについて", romaji: "About", to: "/about" },
];

export default function Nav({ path, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 80);
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, y / max) : 0;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${p})`;
        }
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handle = (to) => (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <a href="#/" onClick={handle("/")} className="nav__brand" aria-label="ホーム">
          <span className="nav__brand-seal" aria-hidden="true">
            書
          </span>
          <span className="nav__brand-text">
            <span className="nav__brand-kanji">書道文化</span>
            <span className="nav__brand-romaji">SHODŌ BUNKA</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="メインナビゲーション">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <a
                  href={`#${l.to}`}
                  onClick={handle(l.to)}
                  className={path === l.to ? "is-active" : ""}
                  data-romaji={l.romaji}
                >
                  <span>{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__right">
          <a
            href="#/contact"
            onClick={handle("/contact")}
            className="nav__cta"
          >
            <span className="nav__cta-dot" aria-hidden="true" />
            お問い合わせ
          </a>
          <span className="nav__lang" aria-label="言語">
            <span className="nav__globe" aria-hidden="true">
              ◐
            </span>
            JP
          </span>
        </div>

        <button
          type="button"
          className={`nav__burger ${open ? "is-open" : ""}`}
          aria-label="メニュー"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="nav__progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>

      <div
        className={`nav__drawer ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="nav__drawer-mark" aria-hidden="true">
          書
        </div>
        <ol className="nav__drawer-list">
          {links.map((l, i) => (
            <li
              key={l.to}
              style={{ transitionDelay: open ? `${i * 60 + 100}ms` : "0ms" }}
            >
              <a href={`#${l.to}`} onClick={handle(l.to)}>
                <span className="nav__drawer-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="nav__drawer-jp">{l.label}</span>
                <span className="nav__drawer-en">{l.romaji}</span>
              </a>
            </li>
          ))}
          <li
            style={{
              transitionDelay: open ? `${links.length * 60 + 100}ms` : "0ms",
            }}
          >
            <a href="#/contact" onClick={handle("/contact")}>
              <span className="nav__drawer-num">
                {String(links.length + 1).padStart(2, "0")}
              </span>
              <span className="nav__drawer-jp">お問い合わせ</span>
              <span className="nav__drawer-en">Contact</span>
            </a>
          </li>
        </ol>
      </div>

      {open && (
        <button
          className="nav__scrim"
          aria-label="メニューを閉じる"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
