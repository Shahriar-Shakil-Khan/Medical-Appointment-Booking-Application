import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';
import CounterPage from '../CounterPage/CounterPage';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <CounterPage></CounterPage>
            <Footer></Footer>

        </div>
    );
};

export default Root;