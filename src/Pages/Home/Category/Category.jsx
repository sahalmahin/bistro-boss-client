import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div>
            <SectionTitle
            heading={'Order Online'}
            subHeading={'From 11.00am - 10.00pm'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-24"
            >
                <SwiperSlide>
                    <img src={slide1} />
                    <h2 className='text-3xl text-white text-center uppercase font-semibold -mt-16'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} />
                    <h2 className='text-3xl text-white text-center uppercase font-semibold -mt-16'>Pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} />
                    <h2 className='text-3xl text-white text-center uppercase font-semibold -mt-16'>Soup</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} />
                    <h2 className='text-3xl text-white text-center uppercase font-semibold -mt-16'>Deserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} />
                    <h2 className='text-3xl text-white text-center uppercase font-semibold -mt-16'>Salads</h2>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;