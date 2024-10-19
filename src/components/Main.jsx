import reactLogo from "../assets/react.svg";
import Hero from "./content/Hero";
import ShopInfo from "./content/ShopInfo";
import HotProducts from "./content/HotProducts";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <main>
      {/* <Outlet /> */}
      <Hero
        divName={"hero"}
        img={"clarisse-meyer-hero.jpg"}
        topText={"twelve steps"}
        bottomText={"ahead"}
      />
      <ShopInfo />
      <HotProducts />
      <Hero
        divName={"lowHero"}
        img={"michael-demoya-low-hero.jpg"}
        topText={"dress code:"}
        bottomText={"twelfth"}
        hasBtn={true}
      />

      {/* <div>
        <a href="https://react.dev" target="_blank">
          testing area please replace after
        </a>
      </div> */}
    </main>
  );
}
