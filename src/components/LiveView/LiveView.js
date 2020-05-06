import React, {useContext} from 'react';
import StyledButton from "../Button/Button";
import {ModalOpenContext, ContentModalContext} from "../App/App";
import product from '../../assets/product.png';
import LiveViewProduct from "./LiveViewProduct";
import './LiveVIew.scss';

function LiveView(props) {
    const { hideProduct } = props;
    const [isOpened, setIsOpened] = useContext(ModalOpenContext);
    const [modalWindowContent, setModalWindowContent] = useContext(ContentModalContext);

    const productImage = product;
    const handleOpen = () => {
        setIsOpened(true);
        setModalWindowContent('order-now');
    }

    return (
        <div className="live-view">
            <div className=" live-view_headline">
                <div className="live-view_name">
                    WHITE LABEL
                    <br/>
                    W-394900 XP
                </div>
                <StyledButton className="live-view_button" variant="outlined" onHandle={handleOpen} label="order now"/>
            </div>
            <div className=" live-view_description">
                <div className="live-view_text">
                    Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per i
                </div>
                <div className="live-view_subtext">
                    nceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.
                </div>
            </div>
            <div className="live-view_image">
                {hideProduct === false  && (
                    <LiveViewProduct img={productImage}/>
                )}
            </div>
            <div className="live-view_title">
            live<br/>view
            </div>
        </div>
    );
}

export default LiveView;

