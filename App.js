import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/index"
import Form from "./components/Form/index"
import Body from "./components/Body/index";



function App() {
  return (
    <div>
      <Header/>
   
    <Body/>

    </div>
    
  );
}

export default App;
