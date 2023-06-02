import { Helmet  } from 'react-helmet-async';
import MenuCover from '../../Shared/MenuCover/MenuCover';
import menuImg from '../../../assets/menu/banner3.jpg'
import PopulerMenu from '../../Home/PopulerMenu/PopulerMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
               <title> Bistro Boss | Menu</title>
            </Helmet>
            <MenuCover img={menuImg} tittle='our menu' />
            <PopulerMenu/>
            <MenuCover img={menuImg} tittle='our menu' />
            <PopulerMenu/>
            <MenuCover img={menuImg} tittle='our menu' />
            <PopulerMenu/>
            <MenuCover img={menuImg} tittle='our menu' />
            <PopulerMenu/>
        </div>
    );
};

export default Menu;