import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div className='w-full md:w-8/12 mx-auto text-center'>
            <Header></Header>
            <Outlet />
        </div>
    );
};

export default Root;