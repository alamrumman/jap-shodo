import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Quote from "../sections/Quote";
import History from "../sections/History";
import Tools from "../sections/Tools";
import Principles from "../sections/Principles";
import Styles from "../sections/Styles";
import Modern from "../sections/Modern";
import Gallery from "../sections/Gallery";
import CTAs from "../sections/CTAs";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Quote />
      <History />
      <Tools />
      <Principles />
      <Styles />
      <Modern />
      <Gallery />
      <CTAs />
    </>
  );
}
