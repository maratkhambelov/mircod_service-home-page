import React, {useState} from 'react';
import StyledSlider from "../Slider/Slider";

function Distance(props) {
    const [distance, setDistance] = useState(0);

    const handleDistance = (value) => {
        setDistance(value)
        console.log(distance)
    }
    return (
        <div className="distance">
            <div className="distance_subtitle">

            </div>
            <div className="distance_title">

            </div>
            <div className="distance_slider">
                <div>
                    <span style={{fontSize: '14px'}}>CHOOSE DISTANCE</span>
                    <span style={{fontSize: '9px'}}>CURRENT DISTANCE</span>
                    <span>{distance}</span>
                    <span>m</span>
                </div>
                <StyledSlider handleDistance={handleDistance}/>
            </div>
        </div>
    );
}

export default Distance;