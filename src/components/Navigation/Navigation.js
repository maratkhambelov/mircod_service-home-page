import React, {useState} from 'react';
import './Navigation.scss';
import NavigationItem from "./NavigationItem";

const Navigation = (props) => {
    const {steps, hasNext, setHasNext, hasPrev, setHasPrev} = props;
    console.log(hasNext);
    console.log(hasPrev);
    // const currentStep = (steps.find(step =>  step.status === "current" ))
    // const idxCurrentStep = steps.indexOf(currentStep);
    // setHasNext(idxCurrentStep === steps.length - 1 ? hasNext = true : hasNext = false)
    // let hasNext = true;
    // let hasPrev = true;
    // if(idxCurrentStep === steps.length - 1 ) {
    //     hasNext = false;
    // }
    // if(idxCurrentStep === 0) {
    //     hasPrev = false;
    // }
    const iconPrev  = {fill: '#ffffff', viewBox:" 0 0.5 27 27", height:"27", width:"27", d: 'M13.539.35c7.303 0 13.224 5.92 13.224 13.223 0 7.302-5.921 13.223-13.224 13.223-7.304 0-13.225-5.921-13.225-13.223C.314 6.27 6.235.35 13.539.35zm0 23.967c5.925 0 10.745-4.82 10.745-10.744 0-5.924-4.82-10.744-10.745-10.744-5.925 0-10.745 4.82-10.745 10.744 0 5.924 4.82 10.744 10.745 10.744zm1.228-16.203l.003.003c.221-.203.512-.329.835-.329.685 0 1.24.555 1.24 1.24 0 .361-.157.684-.404.91l.002.003-3.962 3.632 3.962 3.632-.002.003c.247.226.404.549.404.911 0 .684-.555 1.239-1.24 1.239-.323 0-.614-.127-.835-.329l-.003.003-4.959-4.545c-.256-.235-.402-.566-.402-.914 0-.348.146-.679.402-.914l4.959-4.545z'}
    const iconNext = {fill: '#ffffff', viewBox:" 0 0 27 27", height:"27", width:"27", d: 'M13.539 27.244C6.235 27.244.314 21.323.314 14.021.314 6.718 6.235.797 13.539.797c7.303 0 13.224 5.921 13.224 13.224 0 7.302-5.921 13.223-13.224 13.223zm0-23.968c-5.925 0-10.745 4.82-10.745 10.745 0 5.923 4.82 10.743 10.745 10.743 5.925 0 10.745-4.82 10.745-10.743 0-5.925-4.82-10.745-10.745-10.745zM12.31 19.48l-.002-.004c-.221.203-.513.329-.836.329-.684 0-1.24-.555-1.24-1.239 0-.362.158-.684.405-.911l-.003-.003 3.963-3.631-3.963-3.632.003-.004c-.247-.226-.405-.548-.405-.91 0-.685.556-1.24 1.24-1.24.323 0 .615.127.836.329l.002-.003 4.959 4.546c.256.235.402.565.402.914 0 .347-.146.678-.402.913L12.31 19.48z'}

    return (
        <div className="constructor_navigation">
            <NavigationItem namePointer="next" hasSibling={hasNext} icon={iconNext}/>
            <NavigationItem namePointer="prev" hasSibling={hasPrev} icon={iconPrev}/>
        </div>


    );
}

export default Navigation;
