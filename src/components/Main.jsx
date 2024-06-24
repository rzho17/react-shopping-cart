import reactLogo from "../assets/react.svg";
import Hero from "./content/Hero";
import ShopInfo from "./content/ShopInfo";
import HotProducts from "./content/HotProducts";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <Outlet />
      <Hero
        divName={"hero"}
        img={"clarisse-meyer-hero.jpg"}
        topText={"Wear"}
        bottomText={"Modish"}
      />
      <ShopInfo />
      <HotProducts />
      <Hero
        divName={"lowHero"}
        img={"michael-demoya-low-hero.jpg"}
        topText={"Hunt"}
        bottomText={"Styles"}
        hasBtn={true}
      />

      <div>
        <a href="https://react.dev" target="_blank">
          testing area please replace after
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum,
        suscipit non possimus nesciunt neque numquam dolorem, mollitia molestiae
        magni dolor recusandae sint accusantium odio distinctio consectetur
        culpa? Voluptatum, perferendis. Aut recusandae, excepturi dolor,
        voluptas eius, ipsa reprehenderit facilis dolores facere sed ex eaque
        quam earum? Deleniti a reprehenderit natus nisi recusandae possimus.
        Maiores omnis cupiditate ullam, fugit facere dignissimos? Harum id ad,
        voluptas rerum eveniet quibusdam animi dolorem excepturi deleniti
        reiciendis natus odio quos vel aperiam exercitationem pariatur
        necessitatibus quisquam fuga, saepe, doloribus obcaecati ut architecto.
        Rem, possimus aperiam! Illo rerum quasi eius obcaecati distinctio velit,
        minima sint accusantium ad impedit sequi, nesciunt et dicta. Animi illo
        quis fugiat quaerat voluptatibus quos, assumenda sapiente delectus ad
        omnis, nemo asperiores? Asperiores, quae at numquam reiciendis tempora
        nisi aliquid? Molestiae nulla sed est praesentium nobis architecto
        labore. Mollitia similique delectus at alias temporibus quam
        dignissimos, ipsum voluptas, voluptates placeat harum facilis! Esse nemo
        nobis dolorem facilis sapiente commodi, similique, distinctio quod
        consequatur hic quas illum rem quibusdam itaque explicabo eius ab quasi.
        Incidunt, adipisci repellendus esse eaque magni ullam nostrum aliquid!
        Voluptates, ullam quod. Maiores harum veniam perspiciatis magnam quaerat
        fugit esse exercitationem. Deserunt alias est iste! Sapiente, quisquam
        dignissimos illum fuga corporis maxime vitae ab nostrum sit aliquid
        assumenda. Quod! Dicta harum, ipsa vitae explicabo provident consectetur
        natus. Architecto non dolore ducimus molestiae odit, repudiandae fugit
        ab consequuntur sed dolor quisquam autem, tempore doloribus omnis error
        quas modi, aut praesentium? Earum nihil aspernatur laboriosam corrupti
        maxime nostrum accusamus molestiae expedita possimus perspiciatis
        assumenda, laudantium quos delectus! Blanditiis autem quae aut error non
        nostrum deleniti aliquam eveniet reprehenderit debitis, optio modi.
        Sapiente odit similique sunt dolores omnis fuga amet, facere explicabo
        quae nemo placeat sit magni autem iste doloribus ea optio ab vel culpa
        repellendus tempore eius, quis laboriosam consequuntur. Maiores?
      </div>
    </main>
  );
}
