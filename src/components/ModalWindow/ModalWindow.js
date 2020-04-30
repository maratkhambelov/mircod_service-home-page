import React, {useContext} from 'react';
import './ModalWindow.css';
import {Context} from "../App/App";

function ModalWindow (props) {
    // const { data } = props;
    const [isOpened, setIsOpened] = useContext(Context);

    const handleClose = () => {
        setIsOpened(false);
    }
    return (
        <>
            {isOpened && (
                <div className="modal-window">
                    <div className="modal-window_headline">
                        <div className="modal-window_title">
                            ModalWindow
                        </div>
                        <div
                            className="modal-window_close"
                            onClick={() => {handleClose() }}
                        >
                            X
                        </div>
                    </div>
                    <div className="modal-window_content">
                        Something
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalWindow;