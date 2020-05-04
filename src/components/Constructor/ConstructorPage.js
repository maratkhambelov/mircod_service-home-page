import React, {useState} from 'react';
import StyledSwiper from "../Swiper/Swiper";
import ChosenOptions from "../ChosenOptions/ChosenOptions";
import LiveView from "../LiveView/LiveView";
import './ConstructorPage.scss';
import Steps from "../Steps/Steps";
import StyledButton from "../Button/Button";
import Distance from "../Distance/Distance";
import TypesConnection from "../TypesConnection/TypesConnection";
import CloudOutlined from '@material-ui/icons/CloudOutlined';
import WbSunnyOutlined from '@material-ui/icons/WbSunnyOutlined';
import Navigation from "../Navigation/Navigation";

function ConstructorPage() {
    const [items, setItems] = useState([
        {id: 1, active: false, img: CloudOutlined, name: 'Temperature', d: 'M14.05 12.715h2.182v.738H14.05v-.738zm0-1.475h2.182v.738H14.05v-.738zm0-1.475h2.182v.738H14.05v-.738zm0-1.475h2.182v.737H14.05V8.29zm0-1.476h2.182v.738H14.05v-.738zm-.727 5.901v3.143c1.298.464 2.182 1.712 2.182 3.127 0 1.83-1.469 3.32-3.273 3.32s-3.272-1.49-3.272-3.32c0-1.415.883-2.663 2.181-3.127v-3.143h2.182zm-3.636 6.27c0 1.424 1.142 2.582 2.545 2.582 1.404 0 2.545-1.158 2.545-2.582 0-1.176-.784-2.203-1.909-2.497l-.272-.071v-2.964h-.728v2.964l-.272.071c-1.124.294-1.909 1.321-1.909 2.497zm4.363-15.49c0-1.017-.815-1.844-1.818-1.844-1.002 0-1.818.827-1.818 1.844v11.874l-.181.107c-1.267.744-2.033 2.126-2 3.605.048 2.102 1.771 3.878 3.842 3.958 1.102.046 2.14-.358 2.931-1.13.79-.772 1.226-1.811 1.226-2.924 0-1.44-.767-2.784-2-3.509l-.182-.107v-1.178h.727v.759c1.351.878 2.182 2.405 2.182 4.035 0 1.315-.515 2.543-1.449 3.455-.89.868-2.047 1.34-3.276 1.34l-.187-.003c-2.448-.096-4.485-2.194-4.541-4.68-.038-1.676.793-3.246 2.181-4.148V3.495c0-1.424 1.142-2.582 2.545-2.582 1.404 0 2.545 1.158 2.545 2.582v2.582h-.727V3.495zM8.887 6.593l-.582.443-.982-1.328H5.589l.867 1.523 1.625.198-.087.733-1.083-.133.363.639-.629.369-.364-.639-.428 1.018-.669-.29.642-1.526-.866-1.523L4.093 7.6l.642 1.526-.669.29-.428-1.018-.364.639-.629-.369.363-.639-1.083.133-.086-.733 1.624-.198.867-1.523H2.596l-.982 1.328-.582-.443.655-.885H.96V4.97h.727l-.655-.885.582-.442.982 1.327H4.33l-.867-1.523-1.624-.198.086-.733 1.083.133-.363-.639.629-.369.364.639.428-1.018.669.29-.642 1.527.867 1.522.866-1.522-.642-1.527.669-.29.428 1.018.364-.639.629.369-.363.639 1.083-.133.087.733-1.625.198-.867 1.523h1.734l.982-1.327.582.442-.655.885h.728v.738h-.728l.655.885z'},
        {id: 2, active: false, img: WbSunnyOutlined, name: 'Water Temperature', d: 'M15.689 13.747h2.454v.802h-2.454v-.802zm0-1.603h2.454v.802h-2.454v-.802zm0-1.604h2.454v.802h-2.454v-.802zm0-1.603h2.454v.802h-2.454v-.802zm0-1.604h2.454v.802h-2.454v-.802zm-2.046-4.81c.677 0 1.227.539 1.227 1.202v13.439c1.46.505 2.455 1.86 2.455 3.399 0 1.082-.489 2.097-1.342 2.785-.664.537-1.492.821-2.346.821-.243 0-.487-.022-.731-.069-1.464-.28-2.623-1.438-2.885-2.88-.323-1.784.695-3.474 2.395-4.057V3.725c0-.663.55-1.202 1.227-1.202zM10.826 21.08c.203 1.119 1.101 2.017 2.236 2.234.862.164 1.737-.049 2.4-.584.664-.536 1.045-1.326 1.045-2.167 0-1.279-.884-2.395-2.148-2.714l-.307-.078V3.725c0-.221-.183-.401-.409-.401-.226 0-.409.18-.409.401v14.046l-.307.078c-1.464.37-2.367 1.759-2.101 3.231zm4.863-17.355c0-1.105-.918-2.004-2.046-2.004-1.128 0-2.045.899-2.045 2.004v12.907l-.204.116c-1.425.809-2.287 2.31-2.249 3.918.053 2.285 1.992 4.216 4.321 4.303 1.239.05 2.408-.39 3.298-1.229.889-.839 1.379-1.968 1.379-3.177 0-1.565-.862-3.027-2.25-3.815l-.204-.116v-1.281h.818v.825c1.52.955 2.454 2.615 2.454 4.387 0 1.429-.579 2.763-1.63 3.755-1.001.943-2.302 1.457-3.686 1.457-.069 0-.139-.002-.21-.005-2.753-.103-5.045-2.384-5.109-5.086-.043-1.822.893-3.529 2.454-4.508V3.725c0-1.547 1.284-2.806 2.863-2.806s2.864 1.259 2.864 2.806v2.806h-.818V3.725zM8.734 4.928h1.227v.802H8.734v-.802zm-1.247-2.15l.867-.851.579.567-.868.851-.578-.567zM5.052.919h.819v1.203h-.819V.919zM1.99 2.494l.579-.567.867.85-.578.567-.868-.85zm.199 3.236H.962v-.802h1.227v.802zm1.248 2.15l-.868.851-.579-.567.868-.851.579.567zm2.434 1.859h-.819V8.536h.819v1.203zm-2.864-4.41c0-1.327 1.101-2.406 2.454-2.406 1.354 0 2.455 1.079 2.455 2.406 0 1.326-1.101 2.405-2.455 2.405-1.353 0-2.454-1.079-2.454-2.405zm4.091 0c0-.885-.734-1.604-1.637-1.604-.902 0-1.636.719-1.636 1.604 0 .884.734 1.603 1.636 1.603.903 0 1.637-.719 1.637-1.603zm1.835 2.835l-.579.567-.867-.851.578-.567.868.851z'},
        {id: 3, active: false, img: CloudOutlined, name: 'Cloud Temperature', d: 'M21.116 16.153h-5.241v2.406c1.014.756 1.613 1.939 1.613 3.207 0 1.092-.434 2.113-1.221 2.874-.76.734-1.754 1.135-2.81 1.135l-.116-.002c-2.145-.059-3.902-1.844-3.918-3.979-.009-1.278.59-2.472 1.613-3.235v-2.406H5.391c-2.445 0-4.435-1.978-4.435-4.41 0-2.366 1.885-4.304 4.241-4.405.67-.998 1.805-1.608 3.017-1.608.1 0 .202.005.305.013.874-2.858 3.517-4.824 6.549-4.824 3.35 0 6.198 2.415 6.753 5.667 2.343.343 4.134 2.373 4.134 4.756 0 2.653-2.17 4.811-4.839 4.811zM10.23 21.789c.012 1.707 1.417 3.135 3.133 3.182.889.035 1.711-.297 2.341-.906.63-.609.977-1.426.977-2.299 0-1.072-.536-2.069-1.434-2.667l-.179-.119v-8.84c0-.885-.723-1.604-1.613-1.604-.889 0-1.612.719-1.612 1.604v8.84l-.179.119c-.906.603-1.442 1.608-1.434 2.69zm10.865-14.56l-.029-.23c-.369-3.009-2.948-5.278-5.998-5.278-2.782 0-5.193 1.877-5.863 4.564l-.092.367-.374-.07c-.18-.033-.356-.05-.525-.05-1.002 0-1.939.538-2.443 1.405l-.117.2-.279-.002c-1.985 0-3.613 1.619-3.613 3.608 0 1.99 1.628 3.608 3.629 3.608h5.645V10.14c0-1.327 1.085-2.406 2.419-2.406 1.335 0 2.42 1.079 2.42 2.406v3.548c2.954-.394 5.241-2.91 5.241-5.954 0-.17-.008-.339-.021-.505zm.814.19c.005.105.014.209.014.315 0 3.486-2.648 6.365-6.048 6.764v.853h5.241c2.224 0 4.033-1.798 4.033-4.009 0-1.915-1.39-3.553-3.24-3.923zm-8.857 11.977v-7.653h.807v7.653c1.142.192 2.016 1.18 2.016 2.37 0 1.326-1.085 2.405-2.42 2.405-1.334 0-2.419-1.079-2.419-2.405 0-1.19.874-2.178 2.016-2.37zm.403 3.973c.89 0 1.613-.719 1.613-1.603 0-.885-.723-1.604-1.613-1.604-.889 0-1.612.719-1.612 1.604 0 .884.723 1.603 1.612 1.603zm-.403-13.229h.807v.801h-.807v-.801z'},
        {id: 4, active: false, img: WbSunnyOutlined, name: 'Dust Temperature', d: 'M15.681 13.747h2.454v.802h-2.454v-.802zm0-1.603h2.454v.802h-2.454v-.802zm0-1.604h2.454v.802h-2.454v-.802zm0-1.603h2.454v.802h-2.454v-.802zm0-1.604h2.454v.802h-2.454v-.802zm-2.046-4.81c.677 0 1.228.539 1.228 1.202v13.439c1.46.505 2.454 1.86 2.454 3.399 0 1.082-.489 2.097-1.342 2.785-.664.537-1.492.821-2.346.821-.243 0-.487-.022-.731-.069-1.464-.28-2.623-1.437-2.885-2.88-.323-1.784.695-3.474 2.395-4.057V3.725c0-.663.551-1.202 1.227-1.202zM10.818 21.08c.203 1.119 1.102 2.017 2.236 2.233.862.165 1.737-.048 2.4-.583.664-.536 1.045-1.326 1.045-2.167 0-1.279-.883-2.395-2.148-2.714l-.307-.078V3.725c0-.221-.183-.401-.409-.401-.226 0-.409.18-.409.401v14.046l-.307.078c-1.464.37-2.367 1.759-2.101 3.231zm4.863-17.355c0-1.105-.918-2.004-2.046-2.004-1.128 0-2.045.899-2.045 2.004v12.907l-.204.116c-1.425.809-2.287 2.31-2.249 3.918.053 2.285 1.992 4.216 4.322 4.303 1.238.049 2.407-.39 3.297-1.229.889-.839 1.379-1.968 1.379-3.177 0-1.565-.862-3.027-2.25-3.815l-.204-.116v-1.281h.818v.825c1.52.955 2.454 2.615 2.454 4.387 0 1.429-.578 2.763-1.63 3.755-1 .943-2.302 1.457-3.686 1.457-.069 0-.139-.002-.21-.004-2.753-.104-5.045-2.385-5.109-5.087-.043-1.822.893-3.528 2.454-4.508V3.725c0-1.547 1.285-2.806 2.863-2.806 1.579 0 2.864 1.259 2.864 2.806v2.806h-.818V3.725zM8.726 4.928h1.228v.802H8.726v-.802zm-1.247-2.15l.867-.851.579.567-.868.851-.578-.567zM5.045.919h.818v1.203h-.818V.919zM1.982 2.494l.579-.567.867.85-.578.567-.868-.85zm.199 3.236H.954v-.802h1.227v.802zm1.248 2.15l-.868.851-.579-.567.868-.851.579.567zm2.434 1.859h-.818V8.536h.818v1.203zm-2.864-4.41c0-1.327 1.101-2.406 2.455-2.406 1.353 0 2.454 1.079 2.454 2.406 0 1.326-1.101 2.405-2.454 2.405-1.354 0-2.455-1.079-2.455-2.405zm4.091 0c0-.885-.734-1.604-1.636-1.604-.903 0-1.637.719-1.637 1.604 0 .884.734 1.603 1.637 1.603.902 0 1.636-.719 1.636-1.603zm1.835 2.835l-.579.567-.867-.851.578-.567.868.851z'},
        {id: 5, active: false, img: CloudOutlined, name: 'Temperature'},
        {id: 6, active: false, img: WbSunnyOutlined, name: 'Water Temperature'},
        {id: 7, active: false, img: CloudOutlined, name: 'Cloud Temperature'},
        {id: 8, active: false, img: WbSunnyOutlined, name: 'Dust Temperature'},
        {id: 9, active: false, img: CloudOutlined, name: 'Temperature'},
        {id: 10, active: false, img: WbSunnyOutlined, name: 'Water Temperature'},
        {id: 11, active: false, img: CloudOutlined, name: 'Temperature'},
        {id: 12, active: false, img: WbSunnyOutlined, name: 'Water Temperature'},
    ]);


    const [steps, setSteps] = useState([
        {id:1, status: 'current', show: true},
        {id:2, status: 'uncompleted', show: false},
        {id:3, status: 'uncompleted', show: false},
        {id: 4, status:'uncompleted', show: false},
    ])
    const [hasNext, setHasNext] = useState(true);
    const [hasPrev, setHasPrev] = useState(false);
    const [currentStep, setCurrentStep] = useState(
        steps.indexOf(steps.find(step =>  step.status === "current" ))+1
    );

    const [shownStep, setShownStep] = useState(
        steps.indexOf(steps.find(step =>  step.show === true ))
    );

    const toBackStep = () => {
        // const idxShownStep = steps.indexOf(steps.find(item => item.show === true))
        // setSteps(steps.map((step, idx) =>{
        //         if(idx === idxShownStep) {
        //             step.show = false;
        //         }
        //         return step;
        //     }))
        // setSteps([...steps, steps[idxShownStep].show = false]);
        // setSteps([...steps, steps[idxShownStep-1].show = true]);
        // console.log(steps);

    }
    const toNextStep = (id) => {

        if(hasNext === true) {
            setShownStep(shownStep+1);
            setSteps(items.map(item => {
                item.show = false;
                if(item.id === id){
                    item.show = !item.show
                }
                return item;
            }))
        }
        console.log(steps);
        // const idxShownStep = steps.indexOf(steps.find(item => item.show === true))
        // if (idxShownStep !== steps.length - 1) {
        //     setSteps(steps.map((step, idx) => {
        //         if (idx === idxShownStep) {
        //             step.show = false;
        //         }
        //         return step;
        //     }))
        // }
    }
    const handleStep = () => {
        const uncompletedStep = steps.find(step => step.status === 'uncompleted');
        if(uncompletedStep !== undefined) {
            setSteps(steps.map(step=> {
                if(step.status === 'current') {
                    step.status = 'completed'
                }
                if(step.id === uncompletedStep.id) {
                    step.status = 'current'
                }
                return step;
            }));
        }
        const currentStep = (steps.find(step =>  step.status === "current" ));
        const idxCurrentStep = steps.indexOf(currentStep);
        setCurrentStep(idxCurrentStep +1)
        if(idxCurrentStep === steps.length - 1 ) {
            setHasNext(false);
        }
        else {
            setHasNext(true)
        }
        if(idxCurrentStep === 0) {
            setHasPrev(false);
        }
        else {
            setHasPrev(true);
        }
    }


    const chooseItem = (id) => {
        setItems(items.map(item => {
                if(item.id === id){
                    item.active = !item.active
                }
                return item;
            })
        )
    }

    return (
        <div className="constructor">
            <div className="constructor_inner">
                <div className="constructor_swiper">
                    <StyledSwiper data={items} chooseItem={chooseItem}/>
                </div>
                <div className="constructor_main">
                    <div className="constructor_product">
                        <div className="constructor_product_inner">
                            <ChosenOptions data={items} />
                            <LiveView hideProduct={hasNext}/>
                        </div>
                    </div>
                    <div className="constructor_params">
                        <div className="constructor_params_inner">
                            <Steps currentStep={currentStep} steps={steps}/>
                            <Distance/>
                            <TypesConnection/>
                            <div className="constructor_nextstep">
                                <StyledButton label="NEXT STEP" color="primary" onHandle={handleStep}/>
                            </div>
                        </div>
                    </div>
                    <Navigation toNextStep={toNextStep} toBackStep={toBackStep}  hasNext={hasNext} hasPrev={hasPrev} steps={steps}/>
                </div>
            </div>

        </div>
    );
}

export default ConstructorPage;
