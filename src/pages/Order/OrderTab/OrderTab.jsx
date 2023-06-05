/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import FoodItem from "../../Home/FoodItem/FoodItem";

const OrderTab = ({items}) => {

    return (
        <div>
             <div className="grid gap-6 md:grid-cols-3 w-9/12 mb-8 mx-auto pt-10">
              {items.map((item) => (
                <FoodItem key={item._id} item={item} />
              ))}
            </div>
        </div>
    );
};

export default OrderTab;