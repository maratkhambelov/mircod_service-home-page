import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

const HelpPage = () => {
    let {match, path, params, stepId} = useRouteMatch();
    console.log(match)
    console.log(path)
    return (
        <div className="help-page" style={{height: 400, widt: 600, backgroundColor: 'white'}}>
            <Switch>
                <Route path={`${path}/3`}>
                    {stepId}
                </Route>
            </Switch>
        </div>
    );
}

export default HelpPage;
