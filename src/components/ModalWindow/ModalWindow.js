import React, {useContext} from 'react';
import './ModalWindow.scss';
import {Context} from "../App/App";
import {Close} from "@material-ui/icons";

function ModalWindow (props) {
    const [isOpened, setIsOpened] = useContext(Context);
    const lorem = (
        <span>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum obcaecati officia
                            repudiandae. Alias aut blanditiis eius nesciunt vero vitae. Ex illo magnam nam
                            necessitatibus pariatur perspiciatis praesentium reiciendis repellat! Et?
        </span>
    )
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
                            <Close/>
                        </div>
                    </div>
                    <div className="modal-window_content">
                        {props.children ? (props.children) : (lorem)}
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalWindow;