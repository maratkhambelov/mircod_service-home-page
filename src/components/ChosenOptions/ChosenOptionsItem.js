import React from 'react';
import Slide from "../Swiper/Slide/Slide";
import Swiper from "react-id-swiper";

function ChosenOptionsItem(props) {
    const {id, img, onChoose } = props;
    return (
        <div className="chosen-options_item">
            {id}
        </div>
    );
}

export default ChosenOptionsItem;