import React from 'react';
import pic1 from './../../assets/images/beautiful-caucasian-wedding-couple-is-standing-front-decorated-with-blue-hydrangea-archway-holding-hands-together_8353-11134.webp';
import pic2 from './../../assets/images/elegant-curly-bride-stylish-groom_79762-879.webp';
import pic3 from './../../assets/images/just-married-bride-groom-kissing-near-arch-with-pompous-grass_8353-12527 (1).webp';
import pic4 from './../../assets/images/wedding-archway-backyard-happy-wedding-couple-outdoors-before-wedding-ceremony_8353-11057.webp';
import './Carousel.css';
const Carousel = () => {
    return (
        <div>
            <div class="carousel w-full italic text-base-100">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={pic1} class="w-full img" />

                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                    <div class="max-w-md text-center ">
                        <h1 class="mb-5 text-4xl font-bold uppercase ">Welcome to our Wedding Hall</h1>
                        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-accent">Get Started</button>
                    </div>


                </div>

                <div id="slide2" class="carousel-item relative w-full">
                    <img src={pic2} class="w-full img" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                    <div class="max-w-md text-center ">
                        <h1 class="mb-5 text-4xl font-bold uppercase ">Welcome to our Wedding Hall</h1>
                        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-accent">Get Started</button>
                    </div>

                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={pic3} class="w-full img" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                    <div class="max-w-md text-center ">
                        <h1 class="mb-5 text-4xl font-bold uppercase ">Welcome to our Wedding Hall</h1>
                        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-accent">Get Started</button>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src={pic4} class="w-full img" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                    <div class="max-w-md text-center ">
                        <h1 class="mb-5 text-4xl font-bold uppercase ">Welcome to our Wedding Hall</h1>
                        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-accent">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;