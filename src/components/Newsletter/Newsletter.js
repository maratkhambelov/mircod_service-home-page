import React, {useState, useEffect, useRef} from 'react';
import './Newsletter.scss';
import CustomInput from "../Input/CustomInput";

const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
};

const Newsletter = ()=> {

    const [hide, setHide] = useState(false);
    const ref = useRef();

    useOutsideClick(ref, () => {
        setHide(true);
    });

    return (
        <>
            {hide === false && (
                <div className="newsletter-layout">
                    <div className="newsletter" ref={ref}>
                        <div className="newsletter_title">
                            NEWSLETTER
                        </div>
                        <div className="newsletter_input">
                            <CustomInput
                                disableUnderline
                                fullWidth={true}
                                placeholder="Enter your email"
                                endAdornment={
                                    <div className="newsletter_icon"
                                        onClick={()=>{
                                        setHide(true)
                                    }}/>
                                }/>
                        </div>
                        <div className="newsletter_subtitle">
                            Remember we will not do spam promise.
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}
export default Newsletter;