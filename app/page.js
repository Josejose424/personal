'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Typewriter from "./components/Typewriter";
import FluidString from './components/FluidString';
import MouseAvoidGame from './components/MouseAvoidGame';
import { useRef } from 'react';

export default function Home() {
  const swiperRef = useRef(null);
  return (
    <div className='bg-neutral-100'>
      {/* Desktop / Bento Box Layout (visible on medium and larger screens) */}
      <div className="hidden md:block">
        <div className="bg-neutral-100">
          <section className="wave-section">
            <div className="wave">
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* White background section */}
            <div className="grid items-center justify-items-center h-[750px] bg-neutral-100">
              <main className="z-10 grid grid-cols-6 grid-rows-4 gap-4 w-[980px] max-w-7xl p-4 pt-8 h-[700px] bg-neutral-800 rounded-3xl">
                <div className="col-span-2 row-span-2 bg-neutral-white rounded-3xl flex items-center justify-center text-white text-lg holographic-card">
                  <img src="/csnow.png" alt="selfie" className="" />
                </div>
                <div className="col-span-4 row-span-1 bg-neutral-900 rounded-3xl text-white text-lg holographic-card p-0 flex flex-col items-center justify-end">
                  <div className="text-center leading-none">
                    <h1 className="text-4xl font-bold mb-0">Welcome!</h1>
                    <p className="text-lg mt-0">To my Personal Website</p>
                  </div>
                  <div className="h-[60px] w-full flex items-center justify-center">
                    <FluidString />
                  </div>
                </div>
                <div className="relative col-span-2 row-span-5 bg-neutral-900 h-full rounded-3xl flex items-center justify-center text-white text-lg">
                  <MouseAvoidGame />
                </div>
                <div className="col-span-2 row-span-2 bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">
                  <p className="text-lg">Web Developer</p>
                </div>
                <div className="col-span-2 row-span-3 bg-neutral-900 rounded-3xl flex flex-col items-center justify-center text-white text-lg p-4">
                  <h1 className="text-4xl font-bold">About Me</h1>
                  <Typewriter text="Hi! I'm Jose Nunez — a proud Mexican-American Software Developer with a passion for Mobile Development, UI/UX Design, and Project Management. Outside of tech, I love playing soccer, rock climbing, volleyball, and recently started running!" />
                </div>
                <div className="col-span-2 row-span-2 bg-neutral-900 rounded-3xl flex flex-col items-center justify-center text-white text-lg">
                  <p className="text-lg mb-4">Lets Connect!</p>
                  <ul className="flex">
                    <li>
                      <a href="#" className="social-icon">
                        <i className="fab fa-facebook-f icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-icon">
                        <i className="fab fa-twitter icon" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/jose-n132/" className="social-icon">
                        <i className="fab fa-linkedin-in icon" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/_jose.hal/" className="social-icon">
                        <i className="fab fa-instagram icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </main>
            </div>
          </section>
        </div>
      </div>
      

      {/* Mobile Layout (visible on small screens) */}
        <div className="block flex flex-col md:hidden">
          <div className="bg-neutral-100 p-4">
            
            {/* Welcome */}
            <div className="block md:hidden p-4">
              <div className="bg-neutral-800 rounded-3xl text-white p-4 flex flex-col items-center justify-center">
                <div className="text-center leading-tight">
                  <h1 className="text-2xl font-bold mb-2">Welcome!</h1>
                  <p className="text-base">To my Personal Website</p>
                </div>
                <div className="h-[60px] w-full flex items-center justify-center">
                  <FluidString />
                </div>
              </div>
            </div>

            {/* About Me */}
            <div className="block md:hidden p-4">
              <div className="bg-neutral-800 rounded-3xl text-white p-4 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-2">About Me</h1>
                <Typewriter text="Hi! I'm Jose Nunez — a proud Mexican-American Software Developer with a passion for Mobile Development, UI/UX Design, and Project Management." />
              </div>
            </div>
            
            {/* Selfie Card for Mobile */}
                <div className="block md:hidden p-4">
                  <div className="bg-neutral-white h-[300px] overflow-hidden rounded-3xl flex items-center justify-center text-white text-lg p-4">
                      <img src="/csnow.png" alt="selfie" className="w-full rounded-3xl h-full object-cover"/>
                  </div>
                </div>

            {/* Mouse Avoid Game for Mobile */}
            <div className="block md:hidden p-4">
            <div className="relative bg-neutral-800 h-full rounded-3xl flex items-center justify-center text-white text-lg">   
                <MouseAvoidGame />
              </div>
            </div> 


            {/* Let's Connect Card for Mobile */}
            <div className="block md:hidden p-4">
              <div className="bg-neutral-800 rounded-3xl flex flex-col items-center justify-center text-white text-lg p-4">
                <p className="text-lg mb-4">Lets Connect!</p>
                <ul className="flex space-x-4">
                  <li>
                    <a href="#" className="social-icon">
                      <i className="fab fa-facebook-f icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-icon">
                      <i className="fab fa-twitter icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/jose-n132/" className="social-icon">
                      <i className="fab fa-linkedin-in icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/_jose.hal/" className="social-icon">
                      <i className="fab fa-instagram icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        

    

      {/* Desktop / Normal Version */}
      <div className="hidden md:block bg-neutral-100 px-4 sm:px-8">
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

      {/* Mobile Version */}
      <div className="block md:hidden bg-neutral-100 px-4 sm:px-8">
        <h1 className="text-3xl font-bold flex items-center justify-center p-4 mt-8 mb-4 text-black">Projects</h1>
        {/* Adjusted grid for mobile (one column) */}
        <div className="grid grid-cols-1 gap-4 w-full max-w-7xl mx-auto p-4 mt-4 bg-neutral-800 rounded-3xl">
          {/* DSG */}
          <div
              className="project-card relative overflow-hidden rounded-3xl group"
              onMouseEnter={() => swiperRef.current?.autoplay.start()}
              onMouseLeave={() => swiperRef.current?.autoplay.stop()}
            >
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Autoplay]}
                autoplay={false} // disable autoplay until hover
                loop={true}
                slidesPerView={1}
                className="w-full h-full"
              >
                <SwiperSlide>
                  <img src="/dsg2.png" alt="Project 1" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/dsg4.png" alt="Project 1 Hover" className="w-full h-full object-cover" />
                </SwiperSlide>
              </Swiper>
              <div className="line absolute bottom-0 left-0 h-1 bg-white w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          {/* Local Sphere */}
            <div
              className="project-card relative overflow-hidden rounded-3xl group h-[300px]"
              onMouseEnter={() => swiperRef.current?.autoplay.start()}
              onMouseLeave={() => swiperRef.current?.autoplay.stop()}
            >
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                direction="vertical"
                modules={[Autoplay]}
                autoplay={false} // disable autoplay until hover
                loop={true}
                slidesPerView={1}
                className="w-full h-full"
              >
                <SwiperSlide>
                  <img src="/LS7.png" alt="Project 1" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/LS3.png" alt="Project 1 Hover" className="w-full h-full object-cover" />
                </SwiperSlide>
              </Swiper>
              <div className="line absolute bottom-0 left-0 h-1 bg-white w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
        </div>
      </div>


      {/* About me section */}
      <h1 className="text-4xl font-bold flex items-center justify-center p-4 mt-8 mb-4 text-black"> About Me </h1>
      <div className="w-full max-w-[1000px] mx-auto bg-white rounded-3xl p-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="my-8"
          >
            <SwiperSlide>
              <div className="h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Boat.jpeg" alt="Project 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Temple.jpeg" alt="Project 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Colors.jpeg" alt="Project 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Greece.jpeg" alt="Project 1" className="h-full w-auto object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Hawaii.jpeg" alt="Project 1" className="h-full w-auto object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Camel.jpeg" alt="Project 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Petra.jpeg" alt="Project 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Temple.jpeg" alt="Project 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Tut.jpeg" alt="Project 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-auto aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden">
                <img src="/Favs/Tokyo.jpeg" alt="Project 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  );
}