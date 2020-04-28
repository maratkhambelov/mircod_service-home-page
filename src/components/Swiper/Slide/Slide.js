import React, {useState} from 'react';
import onClick from "swiper/src/components/core/events/onClick";

function Slide(props) {
    const {id, img, onChoose } = props;
    return (
        <div className="swiper-slide"
        onClick={()=> {
            onChoose(id)
        }}>
            slide {id}
        </div>
    );
}

export default Slide;