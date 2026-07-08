import PageHero from "../components/PageHero";
import "./pages.css";

const styles = [
  { k: "楷書", body: "整然とした造形。基本を学ぶための書体。" },
  { k: "行書", body: "楷書と草書の間。流麗さと読みやすさを併せ持つ。" },
  { k: "草書", body: "極度に省略された線。書き手の感性が最大限に表れる。" },
];

export default function Techniques() {
  return (
    <>
      <PageHero
        kanji="技"
        title="技法"
        subtitle="TECHNIQUES — 書体の美と学び"
      />
      <div className="doc">
        <div className="container">
          <section className="doc__section reveal">
            <h2>書体の種類</h2>
            {styles.map((s) => (
              <div key={s.k}>
                <h3>{s.k}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </section>
          <section className="doc__section reveal">
            <h2>学ぶ・体験する</h2>
            <p>
              筆の持ち方、姿勢、呼吸。
              基礎の一つひとつが、そのまま書に映し出されます。
              まずは静かに座り、墨の香りを感じることから始めましょう。
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
