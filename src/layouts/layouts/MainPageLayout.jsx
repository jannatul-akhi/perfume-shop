import React from 'react';

const MainPageLayout = ({children}) => {
    return (
        <div className='container w-2/3 mx-auto'>
            {children}
        </div>
    );
};

export default MainPageLayout;