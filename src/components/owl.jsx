import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { Pagination } from 'swiper/modules';

import img1 from "../images/projects/1.jpg";
import img2 from "../images/projects/2.jpg";
import img3 from "../images/projects/3.jpg";
import img4 from "../images/projects/4.jpg";
import img5 from "../images/projects/5.webp";
import img6 from "../images/projects/6.jpg";




import "../css/style.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from '@mui/material';
const Owl = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 1800, min: 1600 },
  //     items: 4,
      
  //   },
  //   desktop: {
  //     breakpoint: { max: 1600, min: 994 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 994, min: 350 },
  //     items: 1,
  //   },
  //   mobile: {
  //     breakpoint: { max: 350, min: 0 },
  //     items: 1,
  //   },
  // };
  return (
    // <Box className="owl">
    //   <h1>مشاريعنا</h1>

    //   <Carousel
    //     // swipeable={true}
    //     className="my-owl"
    //       // draggable={true}
    //     showDots={true}
    //     responsive={responsive}
    //     ssr={true} // means to render carousel on server-side.
    //     infinite={false}
    //     loop={true}
    //     autoPlay={true}
    //     //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
    //     // autoPlaySpeed={3000}
    //     // keyBoardControl={true}
    //     customTransition="all .5"
    //     transitionDuration={0}
    //     containerClass="carousel-container"
    //     removeArrowOnDeviceType={["tablet", "mobile"]}
    //     //   deviceType={this.props.deviceType}
    //     dotListClass="custom-dot-list-style"
    //     itemClass="carousel-item-padding-40-px"
    //   >
        
    //       <CardMedia component="img" image={img} className="img" />
    //       <CardMedia component="img" image={img2} />
    //       <CardMedia component="img" image={img3} />
    //       <CardMedia component="img" image={img4} />
    //       <CardMedia component="img" image={img5} />
    //       <CardMedia component="img" image={img6} />
        

      
    //   </Carousel>
    // </Box>
    <Box className="slider" sx={{position:"relative"}}>
      <h1>مشاريعنا</h1>
      
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2">
      
      <SwiperSlide className='slide'>
        <img src={img1} alt='...' className='big'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt='...' className='big'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt='...' className='big'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt='...' className='big'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt='...' className='big'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img6} alt='...' className='big'/>
      </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >

<SwiperSlide className='slide'>
        <img src={img1} alt='...' className='small'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt='...' className='small'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt='...' className='small'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt='...' className='small'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt='...' className='small'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img6} alt='...' className='small'/>
      </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Owl;
