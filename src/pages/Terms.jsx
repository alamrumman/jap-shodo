import PageHero from "../components/PageHero";
import "./pages.css";

export default function Terms() {
  return (
    <>
      <PageHero
        kanji="約"
        title="利用規約"
        subtitle="TERMS AND CONDITIONS"
      />
      <div className="doc">
        <div className="container">
          <section className="doc__section reveal">
            <h2>利用規約</h2>
            <p>本サイトのご利用にあたっては、以下の規約に同意いただいたものとみなします。</p>
          </section>
          <section className="doc__section reveal">
            <h2>禁止事項</h2>
            <ul>
              <li>法令または公序良俗に違反する行為</li>
              <li>他者の権利を侵害する行為</li>
              <li>不正アクセス、システムへの妨害行為</li>
            </ul>
          </section>
          <section className="doc__section reveal">
            <h2>知的財産</h2>
            <p>本サイトに掲載されているコンテンツの著作権は、当運営者または正当な権利者に帰属します。</p>
          </section>
          <section className="doc__section reveal">
            <h2>免責事項</h2>
            <p>本サイトの利用によって生じた損害について、当運営者は一切の責任を負いません。</p>
          </section>
          <section className="doc__section reveal">
            <h2>規約の変更</h2>
            <p>本規約は、必要に応じて予告なく変更されることがあります。</p>
          </section>
        </div>
      </div>
    </>
  );
}
