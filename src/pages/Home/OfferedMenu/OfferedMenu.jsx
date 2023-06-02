import { useEffect, useState } from "react";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import OfferedItem from "../OfferedItem/OfferedItem";

const OfferedMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const offeredMenu = data.filter(items => items.category === 'offered')
                setMenu(offeredMenu)       
        })
    },[])
    return (
        <section className="pt-10">
            <SectionTittle heading={'Chef Recommends'} subHeading={'Should Try'}></SectionTittle>
            <div className=" grid gap-6 md:grid-cols-3 w-9/12 mx-auto pt-10">
                {
                    menu.map(item => <OfferedItem key={item._id} item={item}></OfferedItem>)
                }
            </div>

        </section>
    );
};

export default OfferedMenu;