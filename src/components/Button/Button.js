import React from 'react';
import Button  from '@material-ui/core/Button';
import './Button.css';

function StyledButton(props) {
    const { color, variant, label, onHandle} = props;
    return (
        <Button color={color} variant={variant} onClick={()=> onHandle()}>
            {label}
        </Button>
    );
}

export default StyledButton;
