import React from 'react';
import Step from "./Step/Step";

function Steps(props) {
    const { data, stepsMaxLength } = props;
    const currentStep = (data.find(step =>  step.status === "current" ))
    return (
        <div className="steps">
            <div className="steps_icons">
                {data.map(item => {
                    return <Step key={item.id} {...item} />
                })}

            </div>
            <div className="steps_text">
                <span>Complete</span> {currentStep.id} <span>steps of </span> {stepsMaxLength}

            </div>
        </div>
    );
}

export default Steps;