// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Navigation } from "swiper";

export default function SliderComponent() {
    return (
        <div className="relative z-0">
            <Swiper rewind={true} navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                        className="flex w-full"
                        alt="Wild Landscape"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                        className="flex w-full"
                        alt="Camera"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                        className="flex w-full"
                        alt="Exotic Fruits"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                        className="flex w-full"
                        alt="Wild Landscape"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                        className="flex w-full"
                        alt="Camera"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                        className="flex w-full"
                        alt="Exotic Fruits"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
                        className="flex w-full"
                        alt="Motorbike Smoke"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
                        className="flex w-full"
                        alt="Mountaintop"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
                        className="flex w-full"
                        alt="Woman Reading a Book"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}