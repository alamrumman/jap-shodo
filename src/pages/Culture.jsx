import PageHero from "../components/PageHero";
import "./pages.css";

const facts = [
  { k: "1500年", body: "書として日本に根付いてから、およそ千五百年の歴史を持つ。" },
  { k: "3書体", body: "楷・行・草の三書体を軸に、無数の表現が生まれた。" },
  { k: "4道具", body: "筆・墨・硯・紙。「文房四宝」と呼ばれ大切にされてきた。" },
];

export default function Culture() {
  return (
    <>
      <PageHero
        kanji="文"
        title="書道文化"
        subtitle="CULTURE — 心を映す文字の芸術"
      />

      <section className="content" aria-label="書道文化">
        <div className="container">
          <div className="content__section content__grid reveal">
            <div className="content__body">
              <h2>書道とは</h2>
              <p className="content__body-lead">
                文字を書くことではなく、心を紙の上に描き出す芸術。
              </p>
              <p>
                書道は、単に文字を書く技術ではありません。
                筆の動き、墨の濃淡、余白の呼吸、その全てが作品の一部となります。
              </p>
              <p>
                書き手が息を整え、無心となって筆を運ぶとき、線には確かに命が宿ります。
                それは一度きりの、消えない身体表現です。
              </p>
            </div>
            <div className="content__art reveal-blur">
              <div className="content__art-kanji" aria-hidden="true">
                書
              </div>
              <span className="content__art-label" aria-hidden="true">
                SHO — 書
              </span>
            </div>
          </div>

          <div className="content__facts reveal">
            {facts.map((f) => (
              <div key={f.k} className="content__fact">
                <div className="content__fact-k">{f.k}</div>
                <p className="content__fact-body">{f.body}</p>
              </div>
            ))}
          </div>

          <div className="content__pull reveal">
            <blockquote>
              「一枚の紙、一本の筆。
              <br />
              そこにあるのは、書き手の全て」
            </blockquote>
            <cite>— 書道文化 編集室</cite>
          </div>

          <div className="content__section content__grid content__grid--reverse reveal">
            <div className="content__art reveal-blur">
              <div className="content__art-kanji" aria-hidden="true">
                心
              </div>
              <span className="content__art-label" aria-hidden="true">
                KOKORO — 心
              </span>
            </div>
            <div className="content__body">
              <h2>文化的な意味</h2>
              <p className="content__body-lead">
                書は、人の内面を映す鏡とされてきた。
              </p>
              <p>
                古来より、書は精神性の表現として重んじられてきました。
                静寂の中に身を置き、無心で筆を運ぶ時間は、
                日本人の美意識の一端を形づくっています。
              </p>
              <p>
                茶道・華道と並ぶ「道」として、書は自己を磨く修養の場でもあります。
              </p>
            </div>
          </div>

          <div className="content__section content__grid reveal">
            <div className="content__body">
              <h2>書と芸術の違い</h2>
              <p>
                文字は本来、情報を伝える手段でありながら、書ではそれ自体が表現となります。
                形の美しさ、線の生命感、間の緊張。その全てが鑑賞者へと語りかけます。
              </p>
              <p>
                絵画や彫刻とは違い、書は「時間の芸術」でもあります。
                筆が紙に触れた瞬間から離れるまでの、その一連の動きが刻まれている。
              </p>
              <p>
                だから書は、静止した作品でありながら、動きを内包しているのです。
              </p>
            </div>
            <div className="content__art reveal-blur">
              <div className="content__art-kanji" aria-hidden="true">
                美
              </div>
              <span className="content__art-label" aria-hidden="true">
                BI — 美
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
