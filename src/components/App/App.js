import React, {createContext, useState} from 'react';
import './App.css';
import { BrowserRouter , Switch, Route  } from "react-router-dom";
import Header from "../Header/Header";
import ConstructorPage from "../Constructor/ConstructorPage";
import Subhead from "../Subhead/Subhead";
import ModalWindow from "../ModalWindow/ModalWindow";
import Footer from "../Footer/Footer";

export const Context = createContext([{}, () => {}]);

function App() {

    const [state, setState] = useState(false);


    return (
        <Context.Provider value={[state, setState]}>
            <BrowserRouter>
                <div className="app">
                    <div className="app_inner">
                        <Header/>
                        <Subhead/>
                        <Switch>
                            <Route path="/constructor" component={ConstructorPage} />
                            {/*<Route path="/Help" component={}/>*/}
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
