import React, {useState} from 'react';
import './Slide.scss';
import StyledFab from "../../StyledFab/StyledFab";

function Slide(props) {
    const {id, img, onChoose, active, name } = props;
    // console.log(props);
    let classNameSlide = 'swiper-slide '
    if(active === true) {
        classNameSlide += ' _active'
    }
    return (
        <div className={classNameSlide}
        onClick={()=> {
            onChoose(id)
        }}>
            <StyledFab>
                {props.children}
            </StyledFab>
            {/*<div className="swiper-slide_circle">*/}
            {/*</div>*/}
            <div className="swiper-slide_name">{name}</div>

        </div>
    );
}

export default Slide;