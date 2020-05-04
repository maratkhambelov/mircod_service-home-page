import React from 'react';
import './ChosenOptions.scss';

function ChosenOptionsItem(props) {
    return (
        <div className="chosen-options_item">
            <div className="chosen-options_item_icon">
                {props.children}
            </div>
        </div>
    );
}

export default ChosenOptionsItem;