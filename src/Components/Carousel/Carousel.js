import React from 'react'
import SwiperCore, {Autoplay} from 'swiper'
import { Swiper , SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import './Carousel.css'

SwiperCore.use([Autoplay]);

export default function Carousel() {
    return (
        <Swiper

            preloadImages = {true}
            slidesPerView = {1}
            loop = {true}
            autoplay = {true}
            speed = {1725}
            style = {{transitionDelay: '5000ms', position: 'relative'}}
>
            

            <SwiperSlide><div className = "Slide-Image Image1"></div></SwiperSlide>
            <SwiperSlide><div className = "Slide-Image Image2"></div></SwiperSlide>
            <SwiperSlide><div className = "Slide-Image Image3"></div></SwiperSlide>
            <SwiperSlide><div className = "Slide-Image Image4"></div></SwiperSlide>
            <SwiperSlide><div className = "Slide-Image Image5"></div></SwiperSlide>
            <SwiperSlide><div className = "Slide-Image Image6"></div></SwiperSlide>
            <SwiperSlide><div className = "Slide-Image Image7"></div></SwiperSlide>
        </Swiper>
    )
}