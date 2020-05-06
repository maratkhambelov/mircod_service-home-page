import React from 'react';
import ChosenOptionsItem from "./ChosenOptionsItem";
import './ChosenOptions.scss';
import CustomScrollbar from "../CustomScrollbar/CustomScrollbar";
import IconSimple from "../Icon/Icon";

function ChosenOptions(props) {
    const { data } = props;

    return (
        <div className="chosen-options">
            <div className="chosen-options_title">
                chosen <b>options:</b>
            </div>
            <CustomScrollbar>
                <div className="chosen-options_items">
                    {data.map(item => {
                        if(item.active === true) {
                            return (
                                <ChosenOptionsItem key={item.id} {...item} >
                                    <IconSimple d={item.icon.d} fill={item.icon.fill} viewBox={item.icon.viewBox} height={item.icon.height} width={item.icon.width} />
                                </ChosenOptionsItem>
                            )
                        }
                    })}
                </div>
            </CustomScrollbar>
        </div>
    );
}

export default ChosenOptions;