import "./PageHero.css";

export default function PageHero({ kanji, title, subtitle }) {
  return (
    <section className="ph" aria-label={title}>
      <div className="ph__inner container">
        <div className="ph__mark" aria-hidden="true">
          {kanji}
        </div>
        <h1 className="ph__title reveal">{title}</h1>
        {subtitle && <p className="ph__sub reveal d-2">{subtitle}</p>}
      </div>
      <div className="ph__rule" aria-hidden="true" />
    </section>
  );
}
