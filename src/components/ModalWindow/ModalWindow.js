import React, {useContext} from 'react';
import './ModalWindow.scss';
import {ContentModalContext, ModalOpenContext} from "../App/App";
import {Close} from "@material-ui/icons";
import CustomInput from "../Input/CustomInput";

function ModalWindow (props) {
    const [isOpened, setIsOpened] = useContext(ModalOpenContext);
    const [modalWindowContent, setModalWindowContent] = useContext(ContentModalContext);

    const Lorem = (
        <span>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum obcaecati officia
                            repudiandae. Alias aut blanditiis eius nesciunt vero vitae. Ex illo magnam nam
                            necessitatibus pariatur perspiciatis praesentium reiciendis repellat! Et?
        </span>
    )
    const OrderNow = (
        <div className='modal-window_content_inner'>
            <div>
                Форма заказа товара:
            </div>
            <CustomInput
                disableUnderline
                fullWidth={true}
                placeholder="введите название"
            />
            <CustomInput
                disableUnderline
                fullWidth={true}
                placeholder="введите название"
            />
        </div>
    )
    const AddCustom = (
        <div className='modal-window_content_inner'>
            <div>
                Название функции:
            </div>
            <CustomInput
                disableUnderline
                fullWidth={true}
                placeholder="введите название"
            />
        </div>
    )
    const renderContent = (value) => {
        switch(value) {
            case 'order-now':
                return (OrderNow)
            case 'add-custom':
                return (AddCustom)
            default:
                return (Lorem)
        }
    }
    const handleClose = () => {
        setIsOpened(false);
    }

    return (
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
                {renderContent(modalWindowContent)}
            </div>
        </div>

    )
}

export default ModalWindow;