import React, {useContext} from 'react';
import {Context} from "../../App/App";
import { Add} from "@material-ui/icons";

const SlideAddCustom = () => {
    const [isOpened, setIsOpened] = useContext(Context);

    const handleOpen = () => {
        setIsOpened(true);
    }
    return (
        <div className='swiper-slide_add-custom'
        onClick={() => {handleOpen() }}>
            <div className="swiper-slide_icon">
                <Add/>
            </div>
            <div className="swiper-slide_name">Add Custom</div>
        </div>
    );
}

export default SlideAddCustom;