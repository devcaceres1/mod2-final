import React from 'react';
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";
import HomePage from './HomePage'
import StrainEffects from './StrainEffects';
import StrainRace from './StrainRace';
import StrainDescription from './StrainDescription';
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
                        <Link to ='/strain-effects'> Strain Effects </Link>
                    </li>
                    <li>
                        <Link className = "text-white" to='/strain-race'> Strain Race </Link>
                    </li>
                    <li>
                        <Link to='/strain-description'> Strain Description </Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component= {HomePage}></Route> 
                <Route exact path="/strain-effects" component= {StrainEffects}></Route>
                <Route exact path="/strain-race" component= {StrainRace}></Route>
                <Route exact path="/strain-description" component= {StrainDescription} ></Route>
            </Switch>
        </Router>
    )
}

export default Routes;



