import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex flex-col justify-between'>
     <Navbar></Navbar>
     <Footer></Footer>
    </div>
  );
};

export default MainLayout;