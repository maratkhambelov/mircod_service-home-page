import React from 'react';
import bracketsImg from '../../assets/brackets.png';
import './Cover.scss';

const Cover = (props) => {

    const {title = 'CHIP CONSTRUCTOR'} = props;
    return (
        <div className="cover">
            <div className="cover_inner">
                <div className="cover_wrapper-title" >
                    <div className="cover_title">
                        <span>CHIP</span> <span className="_with-color">CONSTRUCTOR</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cover;