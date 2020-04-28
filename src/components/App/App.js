import React from 'react';
import './App.css';
import { BrowserRouter , Switch, Route  } from "react-router-dom";

import Header from "../Header/Header";
import ConstructorPage from "../Constructor/ConstructorPage";
import Subhead from "../Subhead/Subhead";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
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
          </div>
      </BrowserRouter>

  );
}

export default App;
