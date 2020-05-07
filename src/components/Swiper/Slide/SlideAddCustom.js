import React, {useContext} from 'react';
import {ContentModalContext, ModalOpenContext} from "../../App/App";
import { Add} from "@material-ui/icons";
import '../Swiper.scss';

const SlideAddCustom = () => {
    const [isOpened, setIsOpened] = useContext(ModalOpenContext);
    const [modalWindowContent, setModalWindowContent] = useContext(ContentModalContext);

    const handleOpen = () => {
        setIsOpened(true);
        setModalWindowContent('add-custom');
    }

    return (
        <div className='slide_out-flow swiper-slide_add-custom'
        onClick={() => {handleOpen('add-custom') }}>
            <div className="swiper-slide_icon">
                <Add/>
            </div>
            <div className="swiper-slide_name">Add Custom</div>
        </div>
    );
}

export default SlideAddCustom;