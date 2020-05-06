import React from 'react';
import IconSimple from "../Icon/Icon";
import './Navigation.scss';

const NavigationItem = (props) => {
    const {namePointer, hasSibling, handleStep, icon } = props;
    return (
        <div className={`constructor_navigation_item nav_${namePointer} ${hasSibling ? '_active' : ''}`}
             onClick={()=> {
                 handleStep()
             }}>
            <IconSimple {...icon}/>
        </div>
    );
}

export default NavigationItem;
