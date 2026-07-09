import { useEffect, useRef, useState } from "react";
import "./Nav.css";

const links = [
  { label: "文化", to: "/culture" },
  { label: "歴史", to: "/history" },
  { label: "技法", to: "/techniques" },
  { label: "ギャラリー", to: "/gallery" },
  { label: "私たちについて", to: "/about" },
];

const legalLinks = [
  { label: "プライバシーポリシー", to: "/privacy" },
  { label: "利用規約", to: "/terms" },
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
        setScrolled(y > 20);
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
          <span className="nav__brand-kanji">書道文化</span>
        </a>

        <nav className="nav__links" aria-label="メインナビゲーション">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <a
                  href={`#${l.to}`}
                  onClick={handle(l.to)}
                  className={path === l.to ? "is-active" : ""}
                >
                  {l.label}
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
        </div>

        <button
          type="button"
          className={`nav__burger ${open ? "is-open" : ""}`}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
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

      {/* Mobile drawer */}
      <div
        className={`drawer ${open ? "drawer--open" : ""}`}
        aria-hidden={!open}
      >
        <div className="drawer__watermark" aria-hidden="true">
          書
        </div>
        <div className="drawer__flecks" aria-hidden="true" />

        <div className="drawer__inner">
          <div className="drawer__head">
            <div className="drawer__brand">
              <span className="drawer__seal" aria-hidden="true">書</span>
              <div>
                <div className="drawer__brand-jp">書道文化</div>
                <div className="drawer__eyebrow">目次</div>
              </div>
            </div>
          </div>

          <div className="drawer__quote" aria-hidden="true">
            <span>一</span>
            <span>筆</span>
            <span>一</span>
            <span>心</span>
          </div>

          <nav aria-label="ドロワーメニュー">
            <ol className="drawer__list">
              {links.map((l, i) => (
                <li
                  key={l.to}
                  style={{ transitionDelay: open ? `${i * 55 + 150}ms` : "0ms" }}
                >
                  <a
                    href={`#${l.to}`}
                    onClick={handle(l.to)}
                    className={path === l.to ? "is-active" : ""}
                  >
                    <span className="drawer__num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="drawer__label">{l.label}</span>
                    <span className="drawer__arrow" aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div
            className="drawer__cta"
            style={{ transitionDelay: open ? `${links.length * 55 + 200}ms` : "0ms" }}
          >
            <div className="drawer__cta-body">
              <span className="drawer__cta-eyebrow">お問い合わせ</span>
              <p>書道文化について、お気軽にご相談ください。</p>
            </div>
            <a
              href="#/contact"
              onClick={handle("/contact")}
              className="drawer__cta-btn"
            >
              問い合わせる
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="drawer__foot">
            <ul className="drawer__legal">
              {legalLinks.map((l) => (
                <li key={l.to}>
                  <a href={`#${l.to}`} onClick={handle(l.to)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="drawer__copy">© 2026 書道文化</div>
          </div>
        </div>
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
