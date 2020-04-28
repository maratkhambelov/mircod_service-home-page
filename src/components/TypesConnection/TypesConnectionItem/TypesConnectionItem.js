import React from 'react';
import './TypesConnectionItem.css';

function TypesConnectionItem(props) {
    const {chooseType, id, active} = props;
    let classNameType = 'types-connection_item ';
    if(active) {
        classNameType += ' _active'
    }
    return (
        <div className={classNameType}
        onClick={() => chooseType(id)}>
            {id}
        </div>
    );
}

export default TypesConnectionItem;
