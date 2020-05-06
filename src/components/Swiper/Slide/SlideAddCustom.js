import React, {useContext} from 'react';
import {ContentModalContext, ModalOpenContext} from "../../App/App";
import { Add} from "@material-ui/icons";

const SlideAddCustom = () => {
    const [isOpened, setIsOpened] = useContext(ModalOpenContext);
    const [modalWindowContent, setModalWindowContent] = useContext(ContentModalContext);

    const handleOpen = () => {
        setIsOpened(true);
        setModalWindowContent('add-custom');
    }

    return (
        <div className='swiper-slide_add-custom'
        onClick={() => {handleOpen('add-custom') }}>
            <div className="swiper-slide_icon">
                <Add/>
            </div>
            <div className="swiper-slide_name">Add Custom</div>
        </div>
    );
}

export default SlideAddCustom;