import React from 'react';
import './Tastimonials.css';
import pic from './../../assets/images/beautiful-caucasian-wedding-couple-is-standing-front-decorated-with-blue-hydrangea-archway-holding-hands-together_8353-11134.webp';
import { Swiper } from 'swiper/react';

const Testimonials = () => {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: '2',
        // coverflowEffect: {
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows : true,
        // },

        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 6,
            slideShadows: false,
        },

    });

    var galleryTop = new Swiper('.swiper-container.testimonial', {
        speed: 400,
        spaceBetween: 50,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        direction: 'vertical',
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
    return (
        <div>
            <section class="spacer">

                <div class="testimonial-section">
                    <div class="testi-user-img">
                        <div class="swiper-container gallery-thumbs">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img class="u3" src={pic} alt="" />
                                </div>
                                <div class="swiper-slide">
                                    <img class="u1" src={pic} alt="" />
                                </div>
                                <div class="swiper-slide">
                                    <img class="u2" src={pic} alt="" />
                                </div>

                                <div class="swiper-slide">
                                    <img class="u4" src={pic} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="user-saying">
                        <div class="swiper-container testimonial">

                            <div class="swiper-wrapper ">

                                <div class="swiper-slide">
                                    <div class="quote">
                                        <img class="quote-icon" src={pic} alt="" />
                                        <p>
                                            “This is best and biggest unified platform
                                            for instant online admission. We can easily
                                            take admission for any course in any institute..“
                                        </p>
                                        <div class="name">-Ramkishor Verma-</div>
                                        <div class="designation">University Student</div>

                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="quote">
                                        <img class="quote-icon" src={pic} alt="" />

                                        <p>
                                            “This is best and biggest unified platform
                                            for instant online admission. We can easily
                                            take admission for any course in any institute..“
                                        </p>
                                        <div class="name">-Ramkishor Verma-</div>
                                        <div class="designation">University Student</div>

                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="quote">
                                        <img class="quote-icon" src={pic} alt="" />

                                        <p>
                                            “This is best and biggest unified platform
                                            for instant online admission. We can easily
                                            take admission for any course in any institute..“
                                        </p>
                                        <div class="name">-Ramkishor Verma-</div>
                                        <div class="designation">University Student</div>

                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="quote">
                                        <img class="quote-icon" src={pic} alt="" />

                                        <p>
                                            “This is best and biggest unified platform
                                            for instant online admission. We can easily
                                            take admission for any course in any institute..“
                                        </p>
                                        <div class="name">-Ramkishor Verma-</div>
                                        <div class="designation">University Student</div>

                                    </div>
                                </div>

                            </div>

                            <div class="swiper-pagination swiper-pagination-white"></div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
