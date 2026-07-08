import PageHero from "../components/PageHero";
import "./pages.css";

const principles = [
  { k: "静", body: "心を静め、無心の境地に入る。" },
  { k: "集中", body: "一点に意識を向け、全てを筆に込める。" },
  { k: "調和", body: "自然・筆・紙がひとつになる瞬間を大切にする。" },
  { k: "表現", body: "内側にある想いを、形として表す。" },
];

export default function Philosophy() {
  return (
    <>
      <PageHero
        kanji="心"
        title="哲学"
        subtitle="PHILOSOPHY — 書の四つの心"
      />
      <div className="doc">
        <div className="container">
          <section className="doc__section reveal">
            <h2>一筆一心</h2>
            <p>
              一本の線に、すべての心を込める。
              書における「四つの心」は、書き手の姿勢そのものを表しています。
            </p>
          </section>
          <section className="doc__section reveal">
            <div className="values">
              {principles.map((p) => (
                <div key={p.k} className="value">
                  <h4>{p.k}</h4>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
