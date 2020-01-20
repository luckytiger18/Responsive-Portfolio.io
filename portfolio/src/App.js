import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Articles from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';



function App() {
  return (

    <BrowserRouter>
    <div className="App">

      {/* Set up the Router */}
      <Route exact path="/" component={Home}/>
      <Route path="/articles" component={Articles}/>
      <Route path="/about" component={About}/>

     <div className="navigation">
       <div className="navigation-sub">

       </div>
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
