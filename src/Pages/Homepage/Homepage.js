import React from 'react';
import Carousel from '../Component/Carousel';
import Hero1 from '../Component/Hero1';
import Hero2 from '../Component/Hero2';
import Navbar from './Navbar';
import Weddings from '../DoubleState/Weddings';
import Footer from './Footer';
import Card from '../Component/Card';
import MainHero from '../Component/MainHero';
import Login from '../Component/Login';

const Homepage = () => {
    return (
        <div className='italic bg-white'>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Weddings></Weddings>
            <Hero1></Hero1>
            <Hero2></Hero2>
            <Card></Card>
            <MainHero></MainHero>
            <Login></Login>
            <Footer></Footer>

        </div>
    );
};

export default Homepage;