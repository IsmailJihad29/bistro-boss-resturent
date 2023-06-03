/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import MenuCover from "../../Shared/MenuCover/MenuCover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

import useMenu from "../../../hooks/useMenu";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title> Bistro Boss | Menu</title>
      </Helmet>

      <MenuCover img={menuImg} tittle="our menu" />
      {/* main cover */}
      <SectionTittle heading={"Todays Offer"} subHeading={"Don't Miss"} />
      {/* offered menu items */}
      <MenuCategory items={offered} />
      {/* desserts menu items  */}
      <MenuCategory items={desserts} tittle={"Desserts"} img={dessertImg} />

      {/* pizza menu items */}
      <MenuCategory items={pizza} tittle={"Pizza"} img={pizzaImg} />
      {/* salads menu item */}
      <MenuCategory items={salad} tittle={"Salads"} img={saladImg} />
      {/* soups menu items */}
      <MenuCategory items={soup} tittle={"Soups"} img={soupImg} />
    </div>
  );
};

export default Menu;
