import React from 'react';
import './TypesConnectionItem.css';
function TypesConnectionItem(props) {
    const {chooseType, id, active, img} = props;
    let classNameType = 'types-connection_item ';
    if(active) {
        classNameType += ' _active'
    }
    return (
        <div className={classNameType}
        onClick={() => chooseType(id)}>
            <img src={img} width={70} height={30}/>
        </div>
    );
}

export default TypesConnectionItem;
