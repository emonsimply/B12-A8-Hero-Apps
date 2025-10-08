import React from 'react';
import Banner from './Banner';
import StatesSection from './StatesSection';
import TopApps from '../Apps/TopApps';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <StatesSection></StatesSection>
      <TopApps></TopApps>
    </div>
  );
};

export default Home;