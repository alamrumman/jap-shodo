import PageHero from "../components/PageHero";
import "./pages.css";

const articles = [
  {
    id: "personal",
    num: "第一条",
    title: "個人情報について",
    body: [
      "当サイト（以下「本サイト」）は、ユーザーの個人情報を適切に取り扱い、その保護に努めます。",
      "本ポリシーは、本サイトが取得する情報の種類、利用目的、管理方法について定めるものです。",
    ],
  },
  {
    id: "purpose",
    num: "第二条",
    title: "利用目的",
    body: [
      "本サイトが取得した個人情報は、以下の目的のみに利用します。",
    ],
    list: [
      "お問い合わせへの対応・ご連絡",
      "本サイトのコンテンツ改善および品質向上",
      "利用状況の分析および統計データの作成",
      "法令に基づく開示・報告",
    ],
  },
  {
    id: "cookie",
    num: "第三条",
    title: "Cookieについて",
    body: [
      "本サイトでは、アクセス解析および利便性の向上のためにCookieを使用する場合があります。",
      "Cookieには、個人を直接特定する情報は含まれません。ブラウザの設定により、Cookieの受け取りを拒否することも可能です。",
    ],
  },
  {
    id: "third-party",
    num: "第四条",
    title: "第三者提供",
    body: [
      "取得した個人情報は、以下の場合を除き、本人の同意なく第三者へ提供することはありません。",
    ],
    list: [
      "法令に基づく場合",
      "人の生命、身体または財産の保護のために必要がある場合",
      "国の機関等が法令の定める事務を遂行することに協力する必要がある場合",
    ],
  },
  {
    id: "security",
    num: "第五条",
    title: "安全管理措置",
    body: [
      "本サイトは、取得した個人情報について、漏洩・滅失・毀損の防止のため、適切な安全管理措置を講じます。",
      "個人情報の取扱いを外部委託する場合は、契約により守秘義務を課すなど、適切な監督を行います。",
    ],
  },
  {
    id: "revision",
    num: "第六条",
    title: "本ポリシーの改定",
    body: [
      "本ポリシーの内容は、法令の変更等に応じて予告なく改定される場合があります。",
      "改定後の内容は、本サイトに掲載した時点から効力を生じるものとします。",
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <PageHero
        kanji="律"
        title="プライバシーポリシー"
        subtitle="PRIVACY POLICY — 個人情報の取扱いについて"
      />

      <section className="legal" aria-label="プライバシーポリシー">
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
              本ポリシーに関するお問い合わせは、
              <a href="#/contact">お問い合わせフォーム</a>
              よりご連絡ください。
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
