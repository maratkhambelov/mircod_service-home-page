import React, {useState} from 'react';
import StyledSwiper from "../Swiper/Swiper";
import ChosenOptions from "../ChosenOptions/ChosenOptions";
import LiveView from "../LiveView/LiveView";
import './ConstructorPage.css';
import Steps from "../Steps/Steps";
import StyledButton from "../Button/Button";
import Distance from "../Distance/Distance";
import TypesConnection from "../TypesConnection/TypesConnection";

function ConstructorPage() {
    const STEPS_MAXLENGTH = 4;
    const [items, setItems] = useState([
        {id: 1, active: false, img: '', name: ''},
        {id: 2, active: false, img: '', name: ''},
        {id: 3, active: false, img: '', name: ''},
        {id: 4, active: false, img: '', name: ''},
        {id: 5, active: false, img: '', name: ''},
        {id: 6, active: false, img: '', name: ''},
    ]);
    const [steps, setSteps] = useState([
        {id:1, status: 'completed'},
        {id:2, status: 'completed'},
        {id:3, status: 'current'},
    ])
    const completeStep = () => {
        if(steps.length === STEPS_MAXLENGTH) {
            return;
        }
        setSteps(steps.map(step=> {
            if(step.status === 'current') {
                    step.status = 'completed'
            }
                return step;
            }
        ))
        setSteps([...steps, {id: steps.length +1, status: 'current'}])

    }


    const chooseItem = (id) => {
        setItems(items.map(item => {
                if(item.id === id){
                    item.active = !item.active
                    console.log(item.active);
                }
                return item;
            })
        )
    }
    return (
        <div className="constructor">
            <StyledSwiper data={items} chooseItem={chooseItem}/>
            <div className="constructor_main">
                <div className="constructor_main_section _with-bg">
                    <ChosenOptions data={items} />
                    <LiveView/>
                </div>
                <div className="constructor_main_section">
                    <Steps data={steps} stepsMaxLength={STEPS_MAXLENGTH}/>
                    <Distance/>
                    <div></div>
                    <div className="constructor_nextstep">
                        <StyledButton label="NEXT STEP" color="primary" onHandle={completeStep}/>
                        <TypesConnection/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConstructorPage;
