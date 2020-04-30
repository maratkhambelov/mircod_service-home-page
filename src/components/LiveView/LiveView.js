import React, {useContext} from 'react';
import StyledButton from "../Button/Button";
import {Context} from "../App/App";
import product from '../../assets/product.png';
import LiveViewProduct from "./LiveViewProduct";

function LiveView(props) {
    const { data, hideProduct } = props;
    const [isOpened, setIsOpened] = useContext(Context);
    console.log(hideProduct)
    const productImage = product;
    const handleOpen = () => {
        setIsOpened(true);
    }
    return (
        <div className="live-view">
            <div className="live-view_section">
                <div className="live-view_title">
                    White Label W-394900 XP
                </div>
                <div className="live-view_button">
                    <StyledButton variant="outlined" onHandle={handleOpen} label="order now"/>
                </div>
            </div>
            <div className="live-view_section">
                <div className="live-view_text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolore?, dolore?
                </div>
                <div className="live-view_subtext">
                    Adipisicing elit dolor sit amet, Lorem ipsum  consectetur. Assumenda, dolore?, dolore?
                </div>
            </div>
            <div className="live-view_section">
                {hideProduct === false  && (
                    <LiveViewProduct img={productImage}/>
                )}
            </div>
        </div>
    );
}

export default LiveView;

