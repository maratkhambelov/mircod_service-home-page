import React, {createContext, useState} from 'react';
import './App.scss';
import { BrowserRouter , Switch, Route  } from "react-router-dom";
import Header from "../Header/Header";
import ConstructorPage from "../Constructor/ConstructorPage";
import Subhead from "../Subhead/Subhead";
import ModalWindow from "../ModalWindow/ModalWindow";
import Footer from "../Footer/Footer";
import HelpPage from "../HelpPage/HelpPage";
import Cover from "../Cover/Cover";


export const Context = createContext([{}, () => {}]);

function App() {

    const [state, setState] = useState(false);
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
        <Context.Provider value={[state, setState]}>
            <BrowserRouter>
                <div className="app">
                    <div className="app_inner">
                        <Header/>
                        <Subhead links={links} handleLink={handleLink}/>
                        <Cover/>
                        <Switch>
                            <Route path="/constructor" component={ConstructorPage} />
                            <Route path="/help/:stepId">
                                <HelpPage/>
                            </Route>
                            {/*<Route path="/Users Panels" component={}/>*/}
                            {/*<Route path="/FAQ"  component={}/>*/}
                            {/*<Route path="/About"  component={}/>*/}
                            {/*<Route path="/Blog"  component={}/>*/}
                        </Switch>
                        <Footer/>
                    </div>
                    </div>

                <ModalWindow/>
            </BrowserRouter>
        </Context.Provider>


    );
}

export default App;
