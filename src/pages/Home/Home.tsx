import BrandNewCollection from "./components/BrandNewCollection";
import Collections from "./components/Collections";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Newletter from "./components/Newsletter";
import WhereNatureMeets from "./components/WhereNatureMeets";

const Home = () => {
  return (
    <>
      <Hero />
      <WhereNatureMeets />
      <BrandNewCollection />
      <Collections />
      <Newletter />
      <FAQ />
    </>
  );
};

export default Home;
