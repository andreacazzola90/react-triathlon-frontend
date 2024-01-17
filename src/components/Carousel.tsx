import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  const gallery = [
    "https://placehold.co/600x400/000000/FFFFFF/png",
    "https://placehold.co/600x400/000000/FFFFFF/png",
    "https://placehold.co/600x400/000000/FFFFFF/png",
    "https://placehold.co/600x400/000000/FFFFFF/png",
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="h-96 w-full rounded-lg"
    >
      {gallery.map((image: any, i: number) => (
        <SwiperSlide key={i}>
          <div className="flex w-full h-full items-center justify-center">
            <Image
              src={image}
              width={300}
              height={300}
              alt="img"
              className="block h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
