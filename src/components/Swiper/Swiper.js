import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './Swiper.css';
import Slide from "./Slide/Slide";

const StyledSwiper = (props) => {
    const { chooseItem, data } = props;

    const params = {
        centeredSlides: true,
        slidesPerView: 10,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        // spaceBetween: 30
    }
    return(
        <Swiper {...params}>
            {data.map(item => {
                return <Slide onChoose={chooseItem} key={item.id} {...item} />
            } )}
        </Swiper>
    )
}

export default StyledSwiper;