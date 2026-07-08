import PageHero from "../components/PageHero";
import "./pages.css";

const eras = [
  { era: "古代", body: "漢字が中国から伝わり、日本独自の書の萌芽が生まれる。" },
  { era: "平安時代", body: "仮名文字の発達により、和の美を体現するかな書が花開く。" },
  { era: "江戸時代", body: "庶民階層にも普及し、多様な流派と書体が確立される。" },
  { era: "現代", body: "伝統を受け継ぎつつ、アートやデザインとの融合が進む。" },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        kanji="史"
        title="歴史"
        subtitle="HISTORY — 日本書道の歩み"
      />
      <div className="doc">
        <div className="container">
          {eras.map((e) => (
            <section key={e.era} className="doc__section reveal">
              <h2>{e.era}</h2>
              <p>{e.body}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
