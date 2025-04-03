'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Typewriter from "./components/Typewriter";
import FluidString from './components/FluidString';
import MouseAvoidGame from './components/MouseAvoidGame';

export default function Home() {
  return (
    <div className="bg-white">
      <section className="wave-section">
        <div className="wave">
          <span></span>
          <span></span>
          <span></span>
        </div>
      {/* White background section */}
      <div className="grid items-center justify-items-center h-[750px] bg-white">
        <main className="z-10 grid grid-cols-6 grid-rows-4 gap-4 w-[980px] max-w-7xl p-4 pt-8 h-[700px] bg-neutral-800 rounded-3xl">

          <div className="col-span-2 row-span-2 bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg holographic-card">

            <img src="/csnow.png" alt="seflie" className="" />
          </div>

          <div className="col-span-4 row-span-1 bg-neutral-900 rounded-3xl text-white text-lg holographic-card p-0 flex flex-col items-center justify-end">
            <div className="text-center leading-none">
              <h1 className="text-4xl font-bold mb-0">Welcome!</h1>
              <p className="text-lg mt-0">To my Peronsal Website</p>
            </div>
            <div className="h-[60px] w-full flex items-center justify-center">
              <FluidString />
            </div>
          </div>

          <div className="relative col-span-2 row-span-5 bg-neutral-900 h-full rounded-3xl flex items-center justify-center text-white text-lg">
  <MouseAvoidGame/>
</div>

          <div className="col-span-2 row-span-2 bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">
            <p className="text-lg text-white">Web Developer</p>
          </div>

          <div className="col-span-2 row-span-3 bg-neutral-900 rounded-3xl flex flex-col items-center justify-center text-white text-lg p-4">
            <h1 className="text-4xl font-bold text-white">About Me </h1>
            <Typewriter text="Hi! I'm Jose Nunez — a proud Mexican-American Software Developer with a passion for Mobile Development, UI/UX Design, and Project Management. Outside of tech, I love playing soccer, rock climbing, volleyball, and recently started running!" />
          </div>

          <div className="col-span-2 row-span-2 bg-neutral-900 rounded-3xl flex flex-col items-center justify-center text-white text-lg">
            <p className="text-lg text-white mb-4">Lets Connect!</p>
            <ul className="flex">
              <li>
                <a href="#" className="social-icon"><i className="fab fa-facebook-f icon" /></a>
              </li>
              <li>
                <a href="#" className="social-icon"><i className="fab fa-twitter icon" /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jose-n132/" className="social-icon"><i className="fab fa-linkedin-in icon" /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/_jose.hal/" className="social-icon"><i className="fab fa-instagram icon" /></a>
              </li>
            </ul>
          </div>
        </main>
      </div>
       </section>

  <div className="px-4 sm:px-8">
    <h1 className="text-4xl font-bold flex items-center justify-center p-4 mt-8 mb-4 text-black"> Projects </h1>
      {/* Black background section */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-7xl mx-auto p-4 mt-4 h-[400px] bg-neutral-800 rounded-3xl">
        <div className="bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">Proj 1</div>
        <div className="bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">Proj 2</div>
        <div className="bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">Proj 3</div>
        <div className="bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">Proj 4</div>
      </div>

      <div className="w-[800px] mx-auto bg-custom-grey rounded-3xl p-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="my-8"
      >
            <SwiperSlide>
              <div className="h-[200px] bg-neutral-900 rounded-2xl p-4 flex flex-col justify-center text-white">
                <h2 className="text-xl font-bold">Android Dev</h2>
                <p className="text-sm text-gray-300 mt-2">Kotlin</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-[200px] bg-neutral-900 rounded-2xl p-4 flex flex-col justify-center text-white">
                <h3 className="text-xl font-bold">Project 2: Date Night Planner</h3>
                <p className="text-sm text-gray-300 mt-2">AI-powered Django app that suggests date night ideas based on filters.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-[200px] bg-neutral-900 rounded-2xl p-4 flex flex-col justify-center text-white">
                <h3 className="text-xl font-bold">Project 3: NASA CO₂ Tracker</h3>
                <p className="text-sm text-gray-300 mt-2">Map app using NASA data to visualize CO₂ growth and greenhouse gas trends.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mx-4 h-[200px] bg-neutral-900 rounded-2xl p-4 flex flex-col justify-center text-white">
                <h3 className="text-xl font-bold">Project 2: Date Night Planner</h3>
                <p className="text-sm text-gray-300 mt-2">
                  AI-powered Django app that suggests date night ideas based on filters.
                </p>
              </div>
            </SwiperSlide>
            </Swiper>
    </div>      
    </div>
    </div>
  );
}




