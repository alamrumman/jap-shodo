import "./Footer.css";

const columns = [
  {
    title: "文化",
    links: [
      { label: "書道とは", to: "/culture" },
      { label: "道具", to: "/culture" },
      { label: "四つの心", to: "/philosophy" },
    ],
  },
  {
    title: "歴史",
    links: [
      { label: "日本書道の歴史", to: "/history" },
      { label: "時代の特徴", to: "/history" },
    ],
  },
  {
    title: "技法",
    links: [
      { label: "書体の美", to: "/techniques" },
      { label: "学ぶ・体験する", to: "/techniques" },
    ],
  },
  {
    title: "その他",
    links: [
      { label: "ギャラリー", to: "/gallery" },
      { label: "私たちについて", to: "/about" },
      { label: "お問い合わせ", to: "/contact" },
    ],
  },
  {
    title: "規約",
    links: [
      { label: "プライバシーポリシー", to: "/privacy" },
      { label: "利用規約", to: "/terms" },
      { label: "特定商取引法に基づく表記", to: "/terms" },
    ],
  },
];

export default function Footer({ navigate }) {
  const go = (to) => (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <div className="footer__logo">書道文化</div>
          <div className="footer__romaji">SHODŌ BUNKA</div>
          <p className="footer__tag">
            日本の文字文化の美しさと精神性を、
            <br />
            未来へ伝えていきます。
          </p>
        </div>

        <div className="footer__cols">
          {columns.map((c) => (
            <div key={c.title} className="footer__col">
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={`#${l.to}`} onClick={go(l.to)}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© 2026 書道文化 All Rights Reserved.</span>
        <span className="footer__seal" aria-hidden="true">
          書
        </span>
      </div>
    </footer>
  );
}
