import React, {useState} from 'react';
import Slider from '@material-ui/core/Slider';

function StyledSlider(props) {
    const { handleDistance } = props;

    function valuetext(value) {
        return `${value}m`;
    }

    const marks = [
        {
            value: 0,
            label: '0m',
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
