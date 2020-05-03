import React, {useState} from 'react';
import Slider from '@material-ui/core/Slider';
import './Slider.scss';

const StyledSlider = (props) =>  {
    const { handleDistance } = props;

    function valuetext(value) {
        return `${value}m`;
    }

    const marks = [
        {
            value: 0,
            label: '0m',
            style:{
                left: '1.5%'
            }
        },
        {
            value: 50,
            label: '50m',
        },
    ];
    return (
        <Slider
            getAriaValueText={valuetext}
            marks={marks}
            defaultValue={0}
            step={1}
            max={50}
            onChange={(e,value) => {handleDistance(value) }}
        />
    );
}

export default StyledSlider;
