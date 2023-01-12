import React from 'react';
import './Hero.css';
import pic from './../../assets/images/close-view-happy-newlyweds-elegant-dress-suit-looking-smiling-each-other-background-arch-which-created-by-guests-with-sparkles-during-evening-ceremony_8353-12132.webp'
const Hero1 = () => {
    return (
        <div id='about'>
            <div data-aos="flip-right" data-aos-delay="200"
                data-aos-duration="1000" class="bg-neutral">
                <div class="hero-content flex-col lg:flex-row">
                    <img data-aos="flip-right" data-aos-delay="200"
                        data-aos-duration="1000" className='md:w-7/12 lg:w-7/12 h-full' src={pic} />
                    <div data-aos="flip-right" data-aos-delay="200"
                        data-aos-duration="1000" className='text-right text-base-100'>
                        <h1 class="text-5xl font-bold">Welcome to Our Wedding Hall</h1>
                        <p class="py-6 text-xl">food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. </p>
                        <button class="btn btn-secondary mr-3">Food Details</button>
                        <button class="btn btn-active btn-accent ">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero1;