import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './Swiper.scss';
import Slide from "./Slide/Slide";
import SlideAddCustom from "./Slide/SlideAddCustom";
import { Icon } from '@material-ui/core';

const StyledSwiper = (props) => {
    const { chooseItem, data } = props;


    const params = {
        centeredSlides: true,
        slidesPerView: 11,
        spaceBetween: 15,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        // renderPrevButton: () => <NavigateBefore></NavigateBefore>,

    }
    return(
        <Swiper {...params}>
            {data.map(item => {
                return(
                    <Slide onChoose={chooseItem} key={item.id} {...item} >
                        <Icon component={item.img}/>
                    </Slide>
                    )
            })}

            <SlideAddCustom/>
        </Swiper>
    )
}

export default StyledSwiper;