import React from 'react';
import LoadHomePage from './LoadHomePage';
import LoadCreateDeposit from "./LoadCreateDeposit";
import LoadUpdateDeposit from "./LoadUpdateDeposit";
import LoadDisplayDeposit from "./LoadDisplayDeposit";
import LoadAllDeposits from "./LoadAllDeposits";
import LoadPageNotFound from "./LoadPageNotFound";

import {
    BrowserRouter,
    Switch,
    Route
}from 'react-router-dom';

export default class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <BrowserRouter>
            <Switch>
            <Route exact path='/'>
            <LoadHomePage/>
            </Route>
            <Route path='/create'>
            <LoadCreateDeposit/>
            </Route>
            <Route path='/update'>
            <LoadUpdateDeposit/>
            </Route>
            <Route path='/display'>
            <LoadDisplayDeposit/>
            </Route>
            <Route path='/alldeposits'>
            <LoadAllDeposits/>
            </Route>
            <Route>
            <LoadPageNotFound/>
            </Route>
            </Switch>
            </BrowserRouter>
    );
    }
}