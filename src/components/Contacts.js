import React from 'react';
import Navbar from "./Navbar";
import PostMessages from '../components2/PostMessages';
import {Provider} from "react-redux";
import {store} from "../actions/store";
import {Container, AppBar, Typography} from "@material-ui/core";
import ButterToast, {POS_RIGHT,POS_TOP} from "butter-toast";
import Contacts2 from '../components3/Contacts2';


function Contacts() {
    return (
        <>
          <Navbar/>
          <div className="row">
              <div className="col-m-8 offset-md-2">
                  <Contacts2/>
              </div>
          </div>
        </>
    );
}

export default Contacts
