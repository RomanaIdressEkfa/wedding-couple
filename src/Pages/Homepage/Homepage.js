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
import Testimonials from '../Component/Testimonials';
import TitlebarImageList from '../Component/TitleBarImageList';

const Homepage = () => {
    return (
        <div className='italic bg-white'>

            <Carousel></Carousel>
            <Weddings></Weddings>
            <Hero1></Hero1>
            <Hero2></Hero2>
            <Card></Card>
            <TitlebarImageList ></TitlebarImageList>
            <br /><br />
            <MainHero></MainHero>

            <Login></Login>
            {/* <Testimonials></Testimonials> */}
            <Footer></Footer>

        </div>
    );
};

export default Homepage;