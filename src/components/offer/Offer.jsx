import React from 'react';

const Offer = () => {
    return (
        <div className='flex justify-center items-center gap-14 py-1 text-black bg-[#FFE8F0]'>
            <div className='flex gap-2'>
                <p className='text-sm font-750'>25% OFF - SITEWIDE -</p>
                <p className='text-sm font-semibold underline'>click here</p>
            </div>
            <p className='text-xs font-750 bg-white rounded-full p-2'>OR</p>
            <div className='flex gap-2'>
                <p className='text-sm font-750'>FREE SHOPPING $100 MIN -</p>
                <p className='text-sm font-semibold underline'>click here</p>
            </div>
        </div>
    );
};

export default Offer;