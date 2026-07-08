import PageHero from "../components/PageHero";
import "./pages.css";

const articles = [
  {
    id: "acceptance",
    num: "第一条",
    title: "利用規約への同意",
    body: [
      "本規約（以下「本規約」）は、当サイト「書道文化」（以下「本サイト」）の利用条件を定めるものです。",
      "本サイトをご利用いただくすべての利用者（以下「ユーザー」）には、本規約に同意いただいたものとみなします。",
    ],
  },
  {
    id: "usage",
    num: "第二条",
    title: "利用範囲",
    body: [
      "ユーザーは、本規約および関連する法令を遵守のうえ、本サイトを個人的かつ非商業的な目的で閲覧・利用することができます。",
    ],
  },
  {
    id: "prohibited",
    num: "第三条",
    title: "禁止事項",
    body: ["ユーザーは、本サイトの利用にあたり、以下の行為を行ってはなりません。"],
    list: [
      "法令または公序良俗に違反する行為",
      "第三者の知的財産権、プライバシー、その他の権利を侵害する行為",
      "本サイトのシステムに対する不正アクセスや妨害行為",
      "本サイトのコンテンツを無断で複製、転載、販売する行為",
      "その他、運営者が不適切と判断する一切の行為",
    ],
  },
  {
    id: "ip",
    num: "第四条",
    title: "知的財産権",
    body: [
      "本サイトに掲載されているテキスト、画像、映像、デザイン等のコンテンツの著作権は、当運営者または正当な権利者に帰属します。",
      "権利者の事前の書面による許諾なく、これらのコンテンツを複製・改変・公衆送信することはできません。",
    ],
  },
  {
    id: "liability",
    num: "第五条",
    title: "免責事項",
    body: [
      "本サイトの掲載内容の正確性・完全性・有用性等について、当運営者は保証を行うものではありません。",
      "本サイトの利用によって生じた損害について、当運営者は一切の責任を負わないものとします。",
    ],
  },
  {
    id: "commerce",
    num: "第六条",
    title: "特定商取引法に基づく表記",
    body: [
      "本サイトは情報提供を目的とし、商品または役務の販売を行っていないため、特定商取引法に基づく表記の対象外です。",
      "有償のサービス提供を開始する場合は、別途本ページに記載いたします。",
    ],
  },
  {
    id: "revision",
    num: "第七条",
    title: "規約の変更",
    body: [
      "本規約は、必要に応じて予告なく変更されることがあります。",
      "変更後の本規約は、本サイトに掲載された時点から効力を生じます。",
    ],
  },
  {
    id: "law",
    num: "第八条",
    title: "準拠法・裁判管轄",
    body: [
      "本規約の解釈および適用は、日本法に準拠するものとします。",
      "本サイトに関して紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
    ],
  },
];

export default function Terms() {
  return (
    <>
      <PageHero
        kanji="約"
        title="利用規約"
        subtitle="TERMS AND CONDITIONS — ご利用にあたって"
      />

      <section className="legal" aria-label="利用規約">
        <div className="container legal__wrap">
          <nav className="legal__toc" aria-label="目次">
            <div className="legal__toc-head">目次 / INDEX</div>
            <ul>
              {articles.map((a) => (
                <li key={a.id}>
                  <a href={`#${a.id}`}>
                    <span className="legal__toc-num">{a.num}</span>
                    <span>{a.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="reveal">
            <div className="legal__meta">
              <span>
                施行日<strong>2026年 1月 1日</strong>
              </span>
              <span>
                最終更新<strong>2026年 7月 1日</strong>
              </span>
            </div>

            {articles.map((a) => (
              <article key={a.id} id={a.id} className="legal__article">
                <div className="legal__article-head">
                  <span className="legal__article-num">{a.num}</span>
                  <h2>{a.title}</h2>
                </div>
                {a.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {a.list && (
                  <ul>
                    {a.list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}

            <div className="legal__contact-note">
              本規約に関するお問い合わせは、
              <a href="#/contact">お問い合わせフォーム</a>
              よりご連絡ください。
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
