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
                        <Link to='/'>Home Page</Link> 
                    </li>
                    <li>
                        <Link to ='/sativaSearch'> Sativa</Link>
                    </li>
                    <li>
                        <Link to='/indicaSearch'> Indica </Link>
                    </li>
                    <li>
                        <Link to='/hybridSearch'> Hybrid </Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component= {HomePage}></Route> 
                <Route exact path="/sativaSearch" component= {SativaSearch}></Route>
                <Route exact path="/indicaSearch" component= {IndicaSearch}></Route>
                <Route exact path="/hybridSearch" component= {HybridSearch} ></Route>
            </Switch>
        </Router>
    )
}

export default Routes;