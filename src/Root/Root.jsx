import React from 'react';
import Navbar from '../shear/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shear/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;