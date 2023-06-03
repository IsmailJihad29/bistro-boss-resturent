/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Button from "../../Shared/Button/Button";



const FoodItem = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
   
      <div className="card card-compact w-full h-full bg-base-100 shadow-xl ">
      <figure>
          <img
            src={image}
            alt=""
          />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 rounded px-4 mr-4 mt-4">${ price}</p>
        <div className="card-body items-center">
                  <h2 className="card-title">{ name}</h2>
                  <p>{ recipe}</p>
          
          <div className="card-actions justify-end">
              <Button btnHeading={'Add To cart'}></Button>
          </div>
        </div>
      </div>
  );
};

export default FoodItem;
