import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, Pagination, Navigation } from "swiper";
import Wedding from "./Wedding";


const Weddings = () => {

    const [weddings, setWeddings] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWeddings(data));
    }, [weddings]);
    return (
        <div>
            <h1 className="font-bold text-2xl -mt-40 relative italic text-base-100 ">Prepared Wedding Hall</h1>
            <br />
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                // modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    weddings.map(wedding =>
                        <SwiperSlide><Wedding wedding={wedding}></Wedding></SwiperSlide>
                    )
                }

            </Swiper>
            <br /><br />
        </div>
    );
};

export default Weddings;