import "./Quote.css";

const chars = ["一", "筆", "一", "心"];

export default function Quote() {
  return (
    <section className="quote" aria-labelledby="quote-title">
      <div className="quote__mist" aria-hidden="true" />
      <div className="quote__flecks" aria-hidden="true" />

      <div className="container quote__inner">
        <h2 id="quote-title" className="quote__title" aria-label="一筆一心">
          {chars.map((c, i) => (
            <span
              key={i}
              className="quote__char reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {c}
            </span>
          ))}
        </h2>
        <p className="quote__caption reveal d-3">
          一本の線に、すべての心を込める。
        </p>
        <span className="quote__seal" aria-hidden="true">
          心
        </span>
      </div>
    </section>
  );
}
