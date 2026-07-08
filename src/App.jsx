import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useRouter } from "./hooks/useRouter";
import { useReveal } from "./hooks/useReveal";

import Home from "./pages/Home";
import About from "./pages/About";
import Culture from "./pages/Culture";
import HistoryPage from "./pages/HistoryPage";
import Techniques from "./pages/Techniques";
import Philosophy from "./pages/Philosophy";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const routes = {
  "/": { comp: Home, title: "書道文化 | 日本の文字芸術と精神" },
  "/about": { comp: About, title: "私たちについて | 書道文化" },
  "/culture": { comp: Culture, title: "文化 | 書道文化" },
  "/history": { comp: HistoryPage, title: "歴史 | 書道文化" },
  "/techniques": { comp: Techniques, title: "技法 | 書道文化" },
  "/philosophy": { comp: Philosophy, title: "哲学 | 書道文化" },
  "/gallery": { comp: GalleryPage, title: "ギャラリー | 書道文化" },
  "/contact": { comp: Contact, title: "お問い合わせ | 書道文化" },
  "/privacy": { comp: Privacy, title: "プライバシーポリシー | 書道文化" },
  "/terms": { comp: Terms, title: "利用規約 | 書道文化" },
};

export default function App() {
  const { path, navigate } = useRouter();
  const route = routes[path] || routes["/"];
  const Page = route.comp;

  useEffect(() => {
    document.title = route.title;
  }, [route.title]);

  useReveal([path]);

  return (
    <>
      <a href="#main" className="skip">
        メインコンテンツへスキップ
      </a>
      <Nav path={path} navigate={navigate} />
      <main id="main">
        <Page navigate={navigate} />
      </main>
      <Footer navigate={navigate} />
    </>
  );
}
