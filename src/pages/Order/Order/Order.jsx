/* eslint-disable no-unused-vars */
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderImg from "../../../assets/shop/banner2.jpg";
import MenuCover from "../../Shared/MenuCover/MenuCover";
import { useState } from "react";
import OrderTab from "../OrderTab/OrderTab";
import useMenu from "../../../hooks/useMenu";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const { category } = useParams()
  const initialIndex = categories.indexOf(category)

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  
  console.log(initialIndex)

    const desserts = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food </title>
      </Helmet>
      <MenuCover img={orderImg} tittle={"OUR SHOP"} />

      <div className="my-10 px-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="w-6/12 mx-auto text-center text-yellow-700 font-bold  ">
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soup </Tab>
              <Tab>Dessert</Tab>
              <Tab>Drinks</Tab>
            </TabList>
          </div>
          <TabPanel>
            <OrderTab items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab  items={desserts}/>
          </TabPanel>
          <TabPanel>
            <OrderTab  items={drinks}/>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
