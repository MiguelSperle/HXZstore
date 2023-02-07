import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function SliderHome(){
    return (
    <section className="section-slider">
        <Swiper
           pagination={{
          type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
        <SwiperSlide>
           <div className="container-slider-1">
                <h2>Better settings</h2>
                <p>Make your setup more beautiful with our products</p>
            </div>
            <img src="/img/slider1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <div className="container-slider-2">
                <h2>The setup</h2>
                <p>Make your gameplay better with our Peripherals</p>
            </div>
            <img src="/img/slider3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </section>  
    )
}

export default SliderHome;