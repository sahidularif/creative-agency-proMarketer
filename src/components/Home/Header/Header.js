import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
import Navbars from '../../Shared/Navbar/Navbars';

const Header = () => {
    return (
        <div>
            <Navbars />
            <HeaderMain/>           
        </div>
    );
};

export default Header;