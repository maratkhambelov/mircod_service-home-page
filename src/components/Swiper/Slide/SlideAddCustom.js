import React, {useContext} from 'react';
import './Slide.scss';
import {Context} from "../../App/App";
import {Add} from "@material-ui/icons";
import StyledFab from "../../StyledFab/StyledFab";

const SlideAddCustom = (props) => {
    const [isOpened, setIsOpened] = useContext(Context);

    const handleOpen = () => {
        setIsOpened(true);
    }
    return (
        <div className='swiper-slide_add-custom'
        onClick={() => {handleOpen() }}>
            <StyledFab>
                <Add/>
            </StyledFab>
            {/*<div className="swiper-slide_circle">*/}
            {/*</div>*/}
            <div className="swiper-slide_name">Add Custom</div>
        </div>
    );
}

export default SlideAddCustom;