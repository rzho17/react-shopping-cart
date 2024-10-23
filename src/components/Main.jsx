import Hero from "./content/Hero";
import ShopInfo from "./content/ShopInfo";
import HotProducts from "./content/HotProducts";

export default function Main() {
  return (
    <main>
      <Hero
        divName={"hero"}
        img={"pexels-hero.jpg"}
        topText={"twelve steps"}
        bottomText={"ahead"}
      />
      <ShopInfo />
      <HotProducts />
      <Hero
        divName={"lowHero"}
        img={"pexels-footer.jpg"}
        topText={"dress code:"}
        bottomText={"twelfth"}
        hasBtn={true}
      />
    </main>
  );
}
