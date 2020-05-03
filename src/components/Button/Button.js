import React from 'react';
import Button  from '@material-ui/core/Button';
import './Button.scss';

function StyledButton(props) {
    const { color, variant, label, onHandle, className} = props;
    return (
        <Button color={color} className={className} variant={variant} onClick={()=> onHandle()}>
            {label}
        </Button>
    );
}

export default StyledButton;
