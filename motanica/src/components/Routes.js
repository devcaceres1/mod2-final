import React from 'react';
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";
import HomePage from './HomePage'
import StrainId from './StrainId';
import Descriptions from './Descriptions';
import Effects from './Effects';
import '../App.css';

function Routes(){
    return (
        <Router>
            <nav className = "wrapper">
                <ul className = "mota-nav">
                    <li>
                        <Link to='/'>Home Page</Link> 
                    </li>
                    <li>
                        <Link to ='/strainId'> Strain Id</Link>
                    </li>
                    <li>
                        <Link to='/descriptions'> Description </Link>
                    </li>
                    <li>
                        <Link to='/effects'> Effects </Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component= {HomePage}></Route> 
                <Route exact path="/strainId" component= {StrainId}></Route>
                <Route exact path="/descriptions" component= {Descriptions}></Route>
                <Route exact path="/effects" component= {Effects} ></Route>
            </Switch>
        </Router>
    )
}

export default Routes;



