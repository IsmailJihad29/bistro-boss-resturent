/* eslint-disable no-unused-vars */
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderImg from "../../../assets/shop/banner2.jpg";
import MenuCover from "../../Shared/MenuCover/MenuCover";
import { useState } from "react";
import OrderTab from "../OrderTab/OrderTab";
import useMenu from "../../../hooks/useMenu";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    
    const [menu] = useMenu();
    const desserts = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <MenuCover img={orderImg} tittle={"OUR SHOP"} />

      <div className="my-10 px-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="w-6/12 mx-auto text-center text-yellow-700 font-bold uppercase ">
            <TabList>
              <Tab>Salads</Tab>
              <Tab>Pizzas</Tab>
              <Tab>Soups </Tab>
              <Tab>Desserts</Tab>
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
