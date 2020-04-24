import React from "react";
import IMG_6367 from '../images/IMG_6367.jpg';
import '../App.css';

const HomePage = () => {
        return (
             <div>
               <h1 className = 'display-5 text-uppercase py-5 text-center text-white'> Botanica <h3>
                  <small class="text-muted"> A Cannabis App! </small>
  </h3>
  </h1> 

    <img className= 'Canna' src ={IMG_6367} alt = "Cannabis Plant"/> 

      <p> Sativas are energizing strains. Effects tend to showcase as a 'head high'; a type of substance-induced state where a person obtains an altered sense of perception. Can portray itself as creativity, inward exploration, and the formulation of deep thoughts.</p> 

      <p> Indicas are calming, sedative strains with full-body effects. We can use the cannabis slang term - 'Couch-lock' since unlike Sativa it tends to show itself as a 'body high'.  </p> 

      <p> Hybrids are mixtures of the other two classes of Cannabis. Hybrids often provide a more balanced combination of Indica and Sativa's effects.</p>

             </div> 

        )
    };

export default HomePage;