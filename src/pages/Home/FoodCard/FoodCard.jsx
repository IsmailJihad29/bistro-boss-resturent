
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import FoodItem from "../FoodItem/FoodItem";
import useMenu from "../../../hooks/useMenu";

const FoodCard = () => {
    const [menu] = useMenu()
    const offered = menu.filter((item) => item.category === "offered");
    
 
    return (
        <section className="pt-10">
            <SectionTittle heading={'Chef Recommends'} subHeading={'Should Try'}></SectionTittle>
            <div className=" grid gap-6 md:grid-cols-3 w-9/12 mx-auto pt-10">
                {
                    offered.map((item) => (
                        <FoodItem key={item._id} item={item}></FoodItem>
                    ))
                }
            </div>

        </section>
    );
};

export default FoodCard;