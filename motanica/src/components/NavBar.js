import React from 'react';
import '../App.css'

function Navbar (props) {
    return (
        <header className = 'nav-header'>
        <nav className = 'navigator'>
            <div className = 'logo'> 
            <a href="./"> Botanica  </a>
            </div>
            <div className = 'strain-nav'>
            <ul>
                <li>
                    <a href="./"> Sativa </a> 
                </li>
                <li>
                    <a href="./"> Indica</a> 
                </li>
                <li>
                <a href="./"> Hybrid </a>
                </li>
                
            </ul> 

            </div>

            </nav>
            </header>
                )
            }
export default Navbar; 