import { useState } from "react";
import PageHero from "../components/PageHero";
import "./pages.css";

const subjects = [
  "書道文化について",
  "取材・掲載のご依頼",
  "作品の投稿・出展",
  "その他",
];

const infoCards = [
  {
    icon: "@",
    title: "メール",
    en: "Email",
    body: "hello@shodo-bunka.jp",
    note: "24時間受付・2営業日以内にご返信",
  },
  {
    icon: "所",
    title: "所在地",
    en: "Location",
    body: "京都府京都市中京区\n室町通四条上ル",
    note: "見学はご予約制です",
  },
];

const hours = [
  { day: "月 — 金", time: "10:00 – 18:00" },
  { day: "土", time: "10:00 – 15:00" },
  { day: "日・祝", time: "休業", closed: true },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        kanji="問"
        title="お問い合わせ"
        subtitle="CONTACT — お気軽にご相談ください"
      />

      <section className="contact" aria-label="お問い合わせ">
        <span className="contact__mark" aria-hidden="true">
          問
        </span>

        <div className="container">
          <div className="contact__grid">
            <div className="reveal">
              {sent ? (
                <div className="contact__success">
                  <span className="contact__success-mark" aria-hidden="true">
                    ✓
                  </span>
                  <h2>ありがとうございました</h2>
                  <p>
                    お問い合わせを承りました。
                    <br />
                    2営業日以内にご返信いたします。
                  </p>
                </div>
              ) : (
                <div className="contact__form-wrap">
                  <div className="contact__form-head">
                    <h2>メッセージを送る</h2>
                    <p>
                      下記のフォームにご記入のうえ、送信してください。
                      内容を確認のうえ、担当者よりご連絡いたします。
                    </p>
                  </div>

                  <form className="form" onSubmit={onSubmit}>
                    <div className="form-row">
                      <label>
                        お名前<span className="req">*</span>
                        <input type="text" name="name" required autoComplete="name" />
                      </label>
                      <label>
                        メールアドレス<span className="req">*</span>
                        <input type="email" name="email" required autoComplete="email" />
                      </label>
                    </div>

                    <label>
                      ご用件<span className="req">*</span>
                      <select name="subject" required defaultValue="">
                        <option value="" disabled>
                          選択してください
                        </option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label>
                      お問い合わせ内容<span className="req">*</span>
                      <textarea name="message" required />
                    </label>

                    <p className="form__note">
                      * 印は必須項目です。ご記入いただいた情報は、
                      <br />
                      当サイトの
                      <a href="#/privacy" style={{ borderBottom: "1px solid" }}>
                        プライバシーポリシー
                      </a>
                      に沿って取り扱います。
                    </p>

                    <button type="submit" className="btn btn--dark form__submit">
                      送信する →
                    </button>
                  </form>
                </div>
              )}
            </div>

            <aside className="contact__info reveal">
              {infoCards.map((c) => (
                <div key={c.title} className="contact__card">
                  <div className="contact__card-head">
                    <span className="contact__card-icon" aria-hidden="true">
                      {c.icon}
                    </span>
                    <div>
                      <h3>{c.title}</h3>
                      <div className="contact__card-en">{c.en}</div>
                    </div>
                  </div>
                  <div className="contact__card-body">
                    {c.body.split("\n").map((l, k) => (
                      <span key={k}>
                        {l}
                        <br />
                      </span>
                    ))}
                  </div>
                  <div className="contact__card-note">{c.note}</div>
                </div>
              ))}

              <div className="contact__card">
                <div className="contact__card-head">
                  <span className="contact__card-icon" aria-hidden="true">
                    時
                  </span>
                  <div>
                    <h3>営業時間</h3>
                    <div className="contact__card-en">Hours</div>
                  </div>
                </div>
                <div className="contact__hours">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className={`contact__hours-row ${h.closed ? "is-closed" : ""}`}
                    >
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
