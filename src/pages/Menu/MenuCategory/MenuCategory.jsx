/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../../Shared/Button/Button";
import MenuCover from "../../Shared/MenuCover/MenuCover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, tittle, img }) => {
    
    return (
        <div className="mb-8">
            {tittle && <MenuCover img={img} tittle={tittle} />}
             <div className='grid md:grid-cols-2 gap-10 mt-16 px-5 '>
                    {
                        items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                  }
            </div>
            <div>
            <div className='text-center mt-8'>
            <Link to={`/order/${tittle}`}><Button btnHeading={'ORDER YOUR FAVOURITE FOOD'}></Button></Link>
                 </div>
            </div>
        </div>
    );
};

export default MenuCategory;