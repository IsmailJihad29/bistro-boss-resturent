/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SectionTittle from '../../../components/SectionTittle/SectionTittle';

import Button from '../../Shared/Button/Button';
import MenuItem from '../../Shared/MenuItem/MenuItem';



const PopulerMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(items => items.category === 'popular')
                setMenu(popularItems)
        })
    },[])
    return (
        
            <section className='mb-12'>
                <SectionTittle heading={'Form Our Menu'} subHeading={'Populer Items'}>
                </SectionTittle>
                <div className='grid md:grid-cols-2 gap-8 '>
                    {
                        menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                  }
                </div>
            <div className='text-center mt-5'>
            <Button btnHeading={'view full menu'}></Button>
                 </div>

            </section>
    );
};

export default PopulerMenu;