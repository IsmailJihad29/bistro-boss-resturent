/* eslint-disable react/prop-types */

import Button from "../../Shared/Button/Button";



const OfferedItem = ({ item }) => {
  const { image, name, recipe } = item;

  return (
    <div>
      <div className="card card-compact w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body items-center">
                  <h2 className="card-title">{ name}</h2>
                  <p>{ recipe}</p>
          <div className="card-actions justify-end">
                      {/* <button className="btn btn-primary">Buy Now</button> */}
                      <Button btnHeading={'Add To cart'}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferedItem;
