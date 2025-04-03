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
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-7xl mx-auto p-4 mt-4 h-[500px] bg-neutral-800 rounded-3xl">
      
      {/* DSG */}
      <div className="project-card group relative overflow-hidden rounded-3xl">
        <img src="/dsg2.png" alt="Project 1" className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
        <img src="/dsg4.png" alt="Project 1 Hover" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="line absolute bottom-0 left-0 h-1 bg-white w-0 group-hover:w-full transition-all duration-500"></div>
      </div>

        {/* Local Sphere */}
        <div className="project-card group relative overflow-hidden rounded-3xl">
                <img src="/LS7.png" alt="Project 1" className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
                <img src="/LS3.png" alt="Project 1 Hover" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="line absolute bottom-0 left-0 h-1 bg-white w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
      
        <div className="bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">Coming Soon...</div>
        <div className="bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">Coming Soon...</div>
      </div>

    </div>
      <h1 className="text-4xl font-bold flex items-center justify-center p-4 mt-8 mb-4 text-black"> About Me </h1>
    <div className="w-[1000px] mx-auto bg-custom-grey rounded-3xl p-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="my-8"
        >
            <SwiperSlide>
              {/* Vert */}
              <div className="w-[200px] h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Boat.jpeg" alt="Project 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Vert */}
              <div className="w-[200px] h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Temple.jpeg" alt="Project 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Vert */}
              <div className="w-[200px] h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Colors.jpeg" alt="Project 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Hor */}
              <div className="w-[200px] h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Greece.jpeg" alt="Project 1" className="h-full w-auto object-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Hor */}
              <div className="w-[200px] h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Hawaii.jpeg" alt="Project 1" className="h-full w-auto object-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Vert */}
              <div className="w-[200px] h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Camel.jpeg" alt="Project 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Vert */}
              <div className="w-[200px] h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Petra.jpeg" alt="Project 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Vert */}
              <div className="w-[200px] h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Temple.jpeg" alt="Project 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Vert */}
              <div className="w-[200px] h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Tut.jpeg" alt="Project 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Vert */}
              <div className="w-[200px] h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Tokyo.jpeg" alt="Project 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            </Swiper>
    </div>      
    </div>
  );
}




