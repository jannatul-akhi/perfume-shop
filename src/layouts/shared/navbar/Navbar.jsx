import React from 'react';
import TopNav from '../../../components/nav/TopNav';
import MiddleNav from '../../../components/nav/MiddleNav';
import BottomNav from '../../../components/nav/BottomNav';

const Navbar = () => {
    return (
        <div>
            <TopNav></TopNav>
            <MiddleNav></MiddleNav>
            <BottomNav></BottomNav>
        </div>
    );
};

export default Navbar;