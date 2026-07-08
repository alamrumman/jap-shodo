import PageHero from "../components/PageHero";
import "./pages.css";

export default function Culture() {
  return (
    <>
      <PageHero
        kanji="文"
        title="書道文化"
        subtitle="CULTURE — 心を映す文字の芸術"
      />
      <div className="doc">
        <div className="container">
          <section className="article reveal">
            <h2>書道とは</h2>
            <p>
              書道は、単に文字を書く技術ではなく、書き手の心を紙の上に描き出す芸術です。
              筆の動き、墨の濃淡、余白の呼吸、その全てが作品の一部となります。
            </p>
          </section>
          <section className="article reveal">
            <h2>文化的な意味</h2>
            <p>
              古来より、書は人の内面を映す鏡とされてきました。
              静寂の中に身を置き、無心で筆を運ぶ時間は、日本人の精神性の一端を形づくっています。
            </p>
          </section>
          <section className="article reveal">
            <h2>書と芸術の違い</h2>
            <p>
              文字は情報を伝える手段でありながら、書ではそれ自体が表現となります。
              形の美しさ、線の生命感、間の緊張。
              その全てが鑑賞者へと語りかけます。
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
