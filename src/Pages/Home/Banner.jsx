import { Link } from "react-router-dom";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
  } from "swiper/modules";
  
  import { Swiper, SwiperSlide } from "swiper/react";
  import banner1 from '../../assets/banner/banner.jpg'
  import banner2 from '../../assets/banner/banner1.jpg'
  import banner3 from '../../assets/banner/banner3.avif'
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  

const Banner = () => {
    return (
        <div>
                <div className="mt-0">
      {" "}
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}

        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div
            className="hero   w-full "
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <div className="hero-overlay bg-opacity-60 bg-[hsla(0,0%,0%,0.8)]"></div>
            <div className="hero-content text-center text-neutral-content ">
              <div className="w-full  text-center lg:pt-28 lg:pb-44 space-y-6 p-8 ">
                <h1 className="mt-6 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-6xl text-[#d3d08b]">
                Elevate Your <br /> Fitness Journey
                </h1>

                <p className=" mb-10 w-full text-lg text-slate-200 dark:text-white">
                Dive into a transformative fitness experience with FitFlexOnline. Our comprehensive fitness tracker and online classes empower you to reach new heights in your wellness journey. Track your progress, join expert-led virtual classes, and sculpt the best version of yourself from the comfort of your home. Elevate your fitness game with FitFlexOnline!
                </p>
                <Link to="/classes" >
                <a
                  className="my-4 inline-block rounded-full border-2 border-[#c3bd2e] px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  href="#!"
                  role="button"
                >
                    Learn more
                 
                </a>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero   w-full "
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className="hero-overlay bg-opacity-60 bg-[hsla(0,0%,0%,0.8)]"></div>
            <div className="hero-content text-center text-neutral-content ">
              <div className="w-full  text-center lg:pt-28 lg:pb-44 space-y-6 p-8 ">
                <h1 className="mt-6 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-6xl text-[#d3d08b]">
                Your Digital <br /> Fitness Oasis
                </h1>

                <p className="mb-16 w-full text-lg text-slate-200">
                Welcome to FitFlexOnline, your exclusive digital fitness oasis. Unleash the power of our cutting-edge fitness tracker and curated online classes designed to suit every fitness level. Whether you are looking to burn calories, build strength, or find balance, our platform offers the tools and guidance you need. Join us on a journey to wellness – where flexibility meets online fitness, only at FitFlexOnline!
                </p>
                <Link to="/classes">
                  <a
                  className="my-4 inline-block rounded-full border-2 border-[#c3bd2e] px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  href="#!"
                  role="button"
                >
                 Learn more
                </a>
                </Link>
                
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero   w-full "
            style={{ backgroundImage: `url(${banner3})` }}
          >
            <div className="hero-overlay bg-opacity-60 bg-[hsla(0,0%,0%,0.8)]"></div>
            <div className="hero-content text-center text-neutral-content ">
              <div className="w-full  text-center lg:pt-28 lg:pb-44 space-y-6 p-8 ">
                <h1 className="mt-6 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-6xl text-[#d3d08b]">
                Fitness, Tracked  <br /> Tailored
                </h1>

                <p className="mb-16 w-full text-lg text-slate-200 ">
                Explore a new era of fitness with FitFlexOnline. Our platform combines advanced fitness tracking with tailored online classes, bringing you a personalized wellness experience. Track your achievements, set new goals, and enjoy expert-led classes that adapt to your pace. Fitness, tracked and tailored just for you  join FitFlexOnline and embark on a customized journey to a healthier, stronger you!
                </p>
                <Link to="/classes">
                <a
                  className="my-4 inline-block rounded-full border-2 border-[#c3bd2e] px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  Learn more
                </a>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
        </div>
    );
};

export default Banner;