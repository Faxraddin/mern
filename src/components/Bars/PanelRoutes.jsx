import React, { Component } from "react";
import { Route,Routes} from "react-router-dom";
import Home from '../First/First'
import SecondPage from "../Second/Second";

class PanelRoutes extends Component {
  render() {
    return (
      <div className="contents">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/oppur" element={<SecondPage/>}/>
            
        </Routes>
      </div>
    );
  }
}

export default PanelRoutes;