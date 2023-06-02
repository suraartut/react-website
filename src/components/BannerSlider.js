import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";

// import required modules
import { EffectCube, Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  return (
    <div className="banner-slider lg:mt-0 mt-20">
      <Swiper
        loop={true}
        effect={"cube"}
        navigation={true}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[EffectCube, Navigation, Autoplay]}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <div className="absolute text-center lg:top-[43%] top-[35%] lg:left-[32%] left-[3%]">
            <h2 className="text-white lg:text-4xl text-2xl">
              Yatırım Danışmanlığı İçin Doğru Yerdesiniz
            </h2>
            <div className="mt-10">
              <Link
                to="/"
                className="text-[#fdc6c6] bg-[#4b5358] px-10 py-5 rounded-2xl"
              >
                Keşfet
              </Link>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full lg:h-[100vh] h-[60vh] object-cover object-center"
          >
            <source
              type="video/mp4"
              src="https://res.cloudinary.com/dvxypv76w/video/upload/v1685712670/banner-slider1_vmozxz.mp4"
            />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute text-center lg:top-[43%] top-[35%] lg:left-[32%] left-[3%]">
            <h2 className="text-white lg:text-4xl text-2xl">
              Yatırım Danışmanlığı İçin Doğru Yerdesiniz
            </h2>
            <div className="mt-10">
              <Link
                to="/"
                className="text-[#fdc6c6] bg-[#4b5358] px-10 py-5 rounded-2xl"
              >
                Keşfet
              </Link>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dvxypv76w/image/upload/v1685712662/banner-slider2_dgyqar.jpg"
            alt="slider"
            className="w-full lg:h-[100vh] h-[60vh] object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute text-center lg:top-[43%] top-[35%] lg:left-[32%] left-[3%]">
            <h2 className="text-black lg:text-4xl text-2xl bg-[white]">
              Yatırım Danışmanlığı İçin Doğru Yerdesiniz
            </h2>
            <div className="mt-10">
              <Link
                to="/"
                className="text-[#fdc6c6] bg-[#4b5358] px-10 py-5 rounded-2xl"
              >
                Keşfet
              </Link>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dvxypv76w/image/upload/v1685712666/banner-slider3_oikkrf.jpg"
            alt="slider"
            className="w-full lg:h-[100vh] h-[60vh] object-cover object-center"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
