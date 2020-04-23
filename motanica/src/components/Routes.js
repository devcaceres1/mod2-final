import React from 'react';
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";
import HomePage from './HomePage'
import SativaSearch from './SativaSearch';
import IndicaSearch from './IndicaSearch';
import HybridSearch from './HybridSearch';

function Routes(){
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to='/HomePage'>Home Page</Link> 
                    </li>
                    <li>
                        <Link to ='/SativaSearch'> Sativa</Link>
                    </li>
                    <li>
                        <Link to='/Indica'> Indica </Link>
                    </li>
                    <li>
                        <Link to='/Hybrid'> Hybrid </Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/HomePage" component= {HomePage}></Route> 
                <Route exact path="/" component= {SativaSearch}></Route>
                <Route exact path="/" component= {IndicaSearch}></Route>
                <Route exact path="/" component= {HybridSearch} ></Route>
            </Switch>
        </Router>
    )
}

export default Routes;