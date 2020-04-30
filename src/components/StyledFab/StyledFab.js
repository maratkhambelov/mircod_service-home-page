import React from 'react';
import Fab from '@material-ui/core/Fab';

const StyledFab = (props) => {
    return (
        <Fab>
            {props.children}
        </Fab>
    );
}

export default StyledFab;