import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Home.module.css";
import { useEffect } from "react";

function Card() {
  return (
    <div className="flex flex-col w-[300px] lg:w-full lg:max-w-[370px] h-auto justify-self-center">
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: true,
          currentClass: ".swiper-pagination-bullet-active",
          // bulletClass: ".swiper-pagination-bullet",
        }}
        className="mySwiper flex-grow w-[270px] h-[290px] lg:w-full lg:h-[390px] rounded-lg"
      >
        <SwiperSlide className="">
          <img
            src={
              "https://images.pexels.com/photos/4927787/pexels-photo-4927787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            src={
              "https://images.pexels.com/photos/4927787/pexels-photo-4927787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            src={
              "https://images.pexels.com/photos/4927787/pexels-photo-4927787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            src={
              "https://images.pexels.com/photos/4927787/pexels-photo-4927787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-col w-full mt-4">
        <div className="flex items-center justify-between h-auto">
          <span>Andheri Project</span>
          <div className="flex items-center text-[#5B5B5B] gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 mb-1"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              />
            </svg>
            <span>4.56</span>
          </div>
        </div>
        <span>Andheri East, Mumbai</span>
        <div className="">
          <span>
            Designed by &nbsp;
            <span className="text-[#ED0641]">Gautam Singh</span>
          </span>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Card;
