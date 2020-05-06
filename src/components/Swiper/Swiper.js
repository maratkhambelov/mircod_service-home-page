import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './Swiper.scss';
import Slide from "./Slide/Slide";
import SlideAddCustom from "./Slide/SlideAddCustom";
import IconSimple from "../Icon/Icon";

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
        breakpoints: {
            480: {
                slidesPerView: 11,
                spaceBetween: 15,
            },
            1400: {
                slidesPerView: 13,
                spaceBetween: 15,
            }
        }
    }
    return(
        <Swiper {...params}>
            {data.map(item => {
                return(
                    <Slide onChoose={chooseItem} key={item.id} {...item} >
                        <IconSimple d={item.icon.d} fill={item.icon.fill} viewBox={item.icon.viewBox} height={item.icon.height} width={item.icon.width} />
                    </Slide>
                    )
            })}

            <SlideAddCustom/>
        </Swiper>
    )
}

export default StyledSwiper;