import React from 'react';

function Step(props) {
    const {status} = props;
    let classNameStep = 'steps_item ';

    if(status === "completed") {
        classNameStep += status;
    }
    if(status === "current") {
        classNameStep += status;
    }

    return (
        <div className={classNameStep}>
        </div>
    );
}

export default Step;