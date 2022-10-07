import React from 'react';
import './Hero.css';
import pic from './../../assets/images/young-sexy-romantic-couple-love-happy-summer-beach-together-having-fun-wearing-swim-suits-showing-heart-sign-sundet_285396-6545.webp'
const Hero2 = () => {
    return (
        <div id='about'>
            <div data-aos="flip-right" data-aos-delay="200"
                data-aos-duration="1000" class="bg-neutral">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="flip-right" data-aos-delay="200"
                        data-aos-duration="1000" className='md:w-7/12 lg:w-7/12 h-full' src={pic} />
                    <div data-aos="flip-right" data-aos-delay="200"
                        data-aos-duration="1000" className='text-right text-base-100'>
                        <h1 class="text-5xl font-bold">Welcome Our Fast Food Ghor</h1>
                        <p class="py-6 text-xl">food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. </p>
                        <button class="btn btn-secondary mr-3">Food Details</button>
                        <button class="btn btn-active btn-accent ">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;