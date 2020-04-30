import React from 'react';
import Slide from "../Swiper/Slide/Slide";
import Swiper from "react-id-swiper";
import StyledFab from "../StyledFab/StyledFab";

function ChosenOptionsItem(props) {
    return (
        <div className="chosen-options_item">
            <StyledFab>
                {props.children}
            </StyledFab>
        </div>
    );
}

export default ChosenOptionsItem;