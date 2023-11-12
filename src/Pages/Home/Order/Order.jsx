import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'

const Order = () => {
    return (
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper uppercase"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <p className='absolute bottom-5 left-5 text-white font-bold text-2xl'>Salads</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <p className='absolute bottom-5 left-5 text-white font-bold text-2xl'>pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <p className='absolute bottom-5 left-5 text-white font-bold text-2xl'>Soups</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <p className='absolute bottom-5 left-5 text-white font-bold text-2xl'>desserts</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
            <p className='absolute bottom-5 left-5 text-white font-bold text-2xl'>Salads</p>
        </SwiperSlide>
      </Swiper>
    );
};

export default Order;