import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'

export default (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/contact" component={Contact}/>
        
    </Switch>
)