import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import Footer from '../Footer/Footer';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

const Home = () => {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  );
};

export default Home;
