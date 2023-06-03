/* eslint-disable no-unused-vars */
import SectionTittle from '../../../components/SectionTittle/SectionTittle';

import Button from '../../Shared/Button/Button';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';



const PopulerMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        
            <section className='mb-12'>
                <SectionTittle heading={'Form Our Menu'} subHeading={'Populer Items'}>
                </SectionTittle>
                <div className='grid md:grid-cols-2 gap-8 px-5 '>
                    {
                        popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                  }
                </div>
            <div className='text-center mt-5'>
            <Button btnHeading={'view full menu'}></Button>
                 </div>

            </section>
    );
};

export default PopulerMenu;