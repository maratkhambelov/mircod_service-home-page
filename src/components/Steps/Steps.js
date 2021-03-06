import React from 'react';
import Step from "./Step/Step";
import './Steps.scss';


const Steps = (props) =>{
    const { steps, idxCurrentStep } = props;
    return (
        <div className="steps">
            <div className="steps_icons">
                {steps.map(item => {
                    return (
                        <Step key={item.id} {...item} >
                        </Step>
                    )
                })}
            </div>
            <div className="steps_text">
                <span>Complete</span> {idxCurrentStep+1} <span> steps of </span> {steps.length}
            </div>
        </div>
    );
}

export default Steps;