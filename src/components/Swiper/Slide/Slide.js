import React from 'react';

function Slide(props) {
    const {id, onChoose, active, name } = props;
    let classNameSlide = 'swiper-slide '
    if(active === true) {
        classNameSlide += ' _active'
    }
    return (
        <div className={classNameSlide}
        onClick={()=> {
            onChoose(id)
        }}>
            <div className="swiper-slide_icon">
                {props.children}
            </div>

            <div className="swiper-slide_name">{name}</div>

        </div>
    );
}

export default Slide;