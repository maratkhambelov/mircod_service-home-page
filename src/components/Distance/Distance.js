import React, {useState} from 'react';
import StyledSlider from "../Slider/Slider";
import './Distance.scss';

function Distance(props) {
    const [distance, setDistance] = useState(0);

    const handleDistance = (value) => {
        setDistance(value)
    }
    return (
        <div className="distance">
            <div className="distance_title">
                TRANSMISSION
                <div className="_with-color">DISTANCE</div>
            </div>
            <div className="distance_slider">
                <div className="distance_slider_additional">
                    <span className="distance_slider_choose">CHOOSE <span className="_with-color">DISTANCE</span></span>
                    <span className="distance_slider_current">CURRENT<br/> DISTANCE</span>
                    <span className="distance_slider_value">{distance}</span>
                    <span className="distance_slider_measure _with-color">m</span>
                </div>
                <StyledSlider handleDistance={handleDistance}/>
            </div>
        </div>
    );
}

export default Distance;