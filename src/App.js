import React from 'react';
import {Route, Switch} from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from "./components";
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Contacts from "./components/Contacts"
import NotFoundPage from "./components/NotFoundPage"
function App() {
  return (
    <>
   <CssBaseline/>
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route path="/resume" component={Resume}/>
   <Route path="/portfolio" component={Portfolio}/>
   <Route path="/contacts" component={Contacts}/>
   <Route component={NotFoundPage}/>
   </Switch>
   </>

  );   
}

export default App;
