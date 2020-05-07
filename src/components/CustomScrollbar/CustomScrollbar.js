import React from 'react';
import Scrollbar from "react-scrollbars-custom";
import './Scrollbar.scss'

const CustomScrollbar = (props) => {

    return (
        <Scrollbar
            disableTrackYWidthCompensation={true}
            maximalThumbYSize={20}
            trackYProps={{
                renderer: props => {
                    const { elementRef, ...restProps } = props;
                    return <div {...restProps} ref={elementRef}/>;
                }
            }}
            thumbXProps={{
                renderer: props => {
                    const { elementRef, ...restProps } = props;
                    return <div {...restProps} ref={elementRef} className="thumbX" />;
                }
            }}
        >
            {props.children}
        </Scrollbar>
    );
}

export default CustomScrollbar;
