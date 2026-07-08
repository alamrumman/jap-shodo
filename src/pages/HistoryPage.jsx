import PageHero from "../components/PageHero";
import "./pages.css";

const eras = [
  {
    era: "古代",
    romaji: "Kodai",
    year: "〜794",
    kanji: "古",
    lead: "漢字の伝来とともに、日本独自の書が芽生える。",
    body: [
      "中国大陸から漢字が伝わり、写経を中心に書が広まっていきました。",
      "日本人の美意識との出会いが、独自の書表現の萌芽を生み、後の平安期の隆盛へと繋がっていきます。",
    ],
  },
  {
    era: "平安時代",
    romaji: "Heian",
    year: "794 – 1185",
    kanji: "平",
    lead: "仮名文字の誕生と、和の美の完成。",
    body: [
      "宮廷文化の中で、仮名という日本固有の文字が誕生。優美で繊細な線が特徴の「かな書」は、日本の美意識を象徴する存在となります。",
      "小野道風・藤原佐理・藤原行成の「三跡」に代表される名筆家が生まれた時代でもあります。",
    ],
  },
  {
    era: "鎌倉・室町",
    romaji: "Chūsei",
    year: "1185 – 1573",
    kanji: "禅",
    lead: "禅の精神が、書に静けさを持ち込む。",
    body: [
      "武家社会の台頭とともに、禅宗が広まり、書にも簡素で力強い表現が生まれます。",
      "「墨蹟」と呼ばれる禅僧の書は、後の茶の湯にも大きな影響を与えました。",
    ],
  },
  {
    era: "江戸時代",
    romaji: "Edo",
    year: "1603 – 1868",
    kanji: "江",
    lead: "庶民に広がる、多様な書の流派。",
    body: [
      "寺子屋を通じて書の教育が庶民階層まで広がりました。",
      "この時代に多様な流派が生まれ、書は日常の文化として深く根付き、現代の書道の基礎が築かれていきます。",
    ],
  },
  {
    era: "現代",
    romaji: "Gendai",
    year: "1868 –",
    kanji: "今",
    lead: "伝統と現代の交差点で、書は生き続ける。",
    body: [
      "伝統的な書を継承しつつも、アート、デザイン、デジタルとの融合が進んでいます。",
      "書は今も新たな表現領域を広げ続け、世界中の人々に静かな衝撃を与えています。",
    ],
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        kanji="史"
        title="歴史"
        subtitle="HISTORY — 日本書道千五百年の歩み"
      />

      <section className="content" aria-label="歴史">
        <div className="container">
          {eras.map((e, i) => (
            <div
              key={e.era}
              className={`content__section content__grid ${
                i % 2 === 1 ? "content__grid--reverse" : ""
              } reveal`}
            >
              <div className="content__body">
                <div
                  style={{
                    fontFamily: "var(--font-mincho)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.4em",
                    color: "var(--shu)",
                    marginBottom: "0.8rem",
                  }}
                >
                  0{i + 1} — {e.romaji} · {e.year}
                </div>
                <h2>{e.era}</h2>
                <p className="content__body-lead">{e.lead}</p>
                {e.body.map((b, k) => (
                  <p key={k}>{b}</p>
                ))}
              </div>
              <div className="content__art reveal-blur">
                <div className="content__art-kanji" aria-hidden="true">
                  {e.kanji}
                </div>
                <span className="content__art-label" aria-hidden="true">
                  {e.romaji.toUpperCase()} — {e.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
