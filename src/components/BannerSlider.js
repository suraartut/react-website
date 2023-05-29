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
    <div className="banner-slider">
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
          delay: 10000,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[EffectCube, Navigation, Autoplay]}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <div className="absolute text-center lg:top-[43%] top-[35%] lg:left-[35%] left-[3%]">
            <h2 className="text-white lg:text-4xl text-2xl">
              Yatırım Danışmanlığı İçin Doğru Yerdesiniz
            </h2>
            <div className="mt-10">
              <Link
                to="/"
                className="text-[#fdc6c6] bg-[#4b5358] hover:bg-red-500 px-10 py-5"
              >
                Keşfet
              </Link>
            </div>
          </div>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="slider"
            className="w-full lg:h-[100vh] h-[60vh] object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute text-center lg:top-[43%] top-[35%] lg:left-[35%] left-[3%]">
            <h2 className="text-white lg:text-4xl text-2xl">
              Yatırım Danışmanlığı İçin Doğru Yerdesiniz
            </h2>
            <div className="mt-10">
              <Link
                to="/"
                className="text-[#fdc6c6] bg-[#4b5358] hover:bg-red-500 px-10 py-5"
              >
                Keşfet
              </Link>
            </div>
          </div>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="slider"
            className="w-full lg:h-[100vh] h-[60vh] object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute text-center lg:top-[43%] top-[35%] lg:left-[35%] left-[3%]">
            <h2 className="text-white lg:text-4xl text-2xl">
              Yatırım Danışmanlığı İçin Doğru Yerdesiniz
            </h2>
            <div className="mt-10">
              <Link
                to="/"
                className="text-[#fdc6c6] bg-[#4b5358] hover:bg-red-500 px-10 py-5"
              >
                Keşfet
              </Link>
            </div>
          </div>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="slider"
            className="w-full lg:h-[100vh] h-[60vh] object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute text-center lg:top-[43%] top-[35%] lg:left-[35%] left-[3%]">
            <h2 className="text-white lg:text-4xl text-2xl">
              Yatırım Danışmanlığı İçin Doğru Yerdesiniz
            </h2>
            <div className="mt-10">
              <Link
                to="/"
                className="text-[#fdc6c6] bg-[#4b5358] hover:bg-red-500 px-10 py-5"
              >
                Keşfet
              </Link>
            </div>
          </div>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="slider"
            className="w-full lg:h-[100vh] h-[60vh] object-cover object-center"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
