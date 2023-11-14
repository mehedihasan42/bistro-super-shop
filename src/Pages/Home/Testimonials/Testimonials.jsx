import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

const Testimonials = () => {

    const [reviews,setReviews] = useState([])

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <SectionTitle subHeading={'---What Our Clients Say---'} heading={'TESTIMONIALS'}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                    reviews.map(review=><SwiperSlide key={review._id}>
                        <div className='flex flex-col justify-center items-center'>
                        <Rating
      style={{ maxWidth: 30 }}
      value={review.rating}
      readOnly
    />
                        <h3>{review.details}</h3>
                    <p>{review.name}</p>
                        </div>
                    </SwiperSlide>)
            }
      </Swiper>
        </div>
    );
};

export default Testimonials;