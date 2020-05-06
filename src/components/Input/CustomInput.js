import React from 'react';
import { Input } from '@material-ui/core';
import './CustomInput.scss';


const CustomInput = (props)=> {
    const {disableUnderline, fullWidth,placeholder, endAdornment } = props;

    return (
        <>
            <Input
                disableUnderline={disableUnderline}
                fullWidth={fullWidth}
                placeholder={placeholder}
                endAdornment={endAdornment}
            />
        </>
    );
}
export default CustomInput;