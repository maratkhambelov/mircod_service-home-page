import React from 'react';
import Step from "./Step/Step";

function Steps(props) {
    const { steps, currentStep } = props;
    // const currentStep = (steps.find(step =>  step.status === "current" ))
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
                <span>Complete</span> {currentStep}<span>steps of </span> {steps.length}
            </div>
        </div>
    );
}

export default Steps;