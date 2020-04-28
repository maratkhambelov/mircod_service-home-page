import React from 'react';
import StyledButton from "../Button/Button";

function LiveView(props) {
    const { data } = props;
    return (
        <div className="live-view">
            <div className="live-view_section">
                <div className="live-view_title">
                    White Label W-394900 XP
                </div>
                <div className="live-view_button">
                    <StyledButton variant="outlined"  label="order now"/>
                </div>
            </div>
            <div className="live-view_section">
                <div className="live-view_text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolore?, dolore?
                </div>
                <div className="live-view_subtext">
                    Adipisicing elit dolor sit amet, Lorem ipsum  consectetur. Assumenda, dolore?, dolore?
                </div>
            </div>
            <div className="live-view_section">
                <div className="live-view_product">

                </div>
            </div>
        </div>
    );
}

export default LiveView;

