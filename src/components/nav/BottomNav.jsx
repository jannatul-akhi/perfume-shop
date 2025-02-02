import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
    return (
        <div className='flex flex-wrap justify-center gap-4 md:gap-8 py-4 bg-white'>
            <Link className='text-sm font-450 text-[#383838] uppercase' to="#">Perfumes</Link>
            <Link className='text-sm font-450 text-[#383838] uppercase' to="#">Brands</Link>
            <Link className='text-sm font-450 text-[#383838] uppercase' to="#">Skincare</Link>
            <Link className='text-sm font-450 text-[#383838] uppercase' to="#">Makeup</Link>
            <Link className='text-sm font-450 text-[#383838] uppercase' to="#">Haircare</Link>
            <Link className='text-sm font-450 text-[#383838] uppercase' to="#">Aromatherapy</Link>
            <Link className='text-sm font-450 text-[#383838] uppercase' to="#">Candles</Link>
            <Link className='text-sm font-450 text-[#383838] uppercase' to="#">Gifts</Link>
        </div>
    );
};

export default BottomNav;