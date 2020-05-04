import React from 'react';
import IconSimple from "../Icon";
import './Navigation.scss';

const NavigationItem = (props) => {
    const {namePointer, id, hasSibling, handleStep, icon } = props;
    // console.log(namePointer + ' ' + hasSibling)
    return (
        <div className={`constructor_navigation_item nav_${namePointer} ${hasSibling ? '_active' : ''}`}
             onClick={()=> {
                 handleStep(id)
             }}>
            <IconSimple {...icon}/>
        </div>
    );
}

export default NavigationItem;
