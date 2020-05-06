import React from 'react';





const IconSimple = (props) => {
    const {d, fill = '#1A1B1C', width = '24', height='24', viewBox = "0 0 24 24"} = props;
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} width={width} height={height}>
                <path fill={fill} fill-rule="evenodd" d={d}/>
            </svg>
        </>
    );
}

export default IconSimple;