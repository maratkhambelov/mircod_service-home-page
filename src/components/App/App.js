import React, {createContext, useState} from 'react';
import './App.scss';
import { HashRouter , Switch, Route, Redirect  } from "react-router-dom";
import Header from "../Header/Header";
import ConstructorPage from "../Constructor/ConstructorPage";
import Subhead from "../Subhead/Subhead";
import ModalWindow from "../ModalWindow/ModalWindow";
import Footer from "../Footer/Footer";
import Cover from "../Cover/Cover";
import NullPage from "../NullPage/NullPage";
import Newsletter from "../Newsletter/Newsletter";

export const ModalOpenContext = createContext([
    {}, () => {}
]);
export const ContentModalContext = createContext([
    {}, () => {}
]);

function App() {
    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState(null)
    const [links, setLinks] = useState([
        {id:1, title: 'constructor', link:'/constructor', active: true },
        {id:2, title: 'help', link:'/help', active: false },
        {id:3, title: 'users panel', link:'/users_panel', active: false },
        {id:4, title: 'faq', link:'/faq', active: false },
        {id:5, title: 'about', link:'/about', active: false },
        {id:6, title: 'blog', link:'/blog', active: false },
    ])
    const handleLink = (id) => {
        const idxActiveLink = links.indexOf(links.find(item => item.active === true));
        setLinks(links[idxActiveLink].active = false);
        setLinks(links.map(item => {
            if(item.id === id){
                item.active = true
            }
            return item
        }))
    }

    return (
        <ModalOpenContext.Provider value={[modalOpened, setModalOpened]}>
            <ContentModalContext.Provider value={[modalContent, setModalContent]}>
                <HashRouter basename="/">
                    <div className="app">
                        <div className="app_inner">
                            <Header/>
                            <Subhead links={links} handleLink={handleLink}/>
                            <Cover/>
                            <Switch>
                                <Route path={"/"} exact>
                                    <Redirect to="/constructor" />
                                </Route>
                                <Route path={"/constructor"}  component={ConstructorPage} />
                                <Route path="/help"component={NullPage}/>
                                <Route path="/users_panel" component={NullPage}/>
                                <Route path="/faq"  component={NullPage}/>
                                <Route path="/about"  component={NullPage}/>
                                <Route path="/blog"  component={NullPage}/>
                                <Route path="*" component={NullPage}/>
                            </Switch>
                            <Footer/>
                        </div>
                    </div>
                    <Newsletter/>
                    {modalOpened === true &&(
                        <ModalWindow/>
                    )}
                </HashRouter>
            </ContentModalContext.Provider>
        </ModalOpenContext.Provider>
    );
}

export default App;
