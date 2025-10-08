import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className='bg-gray-100'>
     <Navbar></Navbar>
     <div className='min-h-[calc(100vh-65px)]'>
      <Outlet></Outlet>
     </div>
     <Footer></Footer>
    </div>
  );
};

export default MainLayout;