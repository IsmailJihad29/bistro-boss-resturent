import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import './Featured.css'

import featuredImg from "../../../assets/home/featured.jpg";
import Button from "../../Shared/Button/Button";


const Featured = () => {
  return (
    <div className="featured-item bg-fixed  text-white pt-8 my-20">
      <SectionTittle
        subHeading={"Check It Out"}
        heading={"Featured Item"}
      ></SectionTittle>
      <div className="md:flex justify-center items-center  pb-20 pt-12 px-36 gap-8">
        <div className="md:w-9/12">
          <img  src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where Can i get some???</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            laborum quibusdam veritatis corporis, neque quasi dolores iusto
            vitae odio tempora.
          </p>
          <Button btnHeading={'Order now'}></Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
