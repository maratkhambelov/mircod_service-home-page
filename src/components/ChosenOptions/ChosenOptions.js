import React from 'react';
import ChosenOptionsItem from "./ChosenOptionsItem";

function ChosenOptions(props) {
    const { data } = props;
    return (
        <div className="chosen-options">
            <div className="chosen-options_title">chosen options:</div>
            {data.map(item => {
                if(item.active === true) {
                    return <ChosenOptionsItem key={item.id} {...item} />
                }
            })}
        </div>
    );
}

export default ChosenOptions;