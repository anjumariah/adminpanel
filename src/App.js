import React from "react";
import Adminpanel from "./components/admin/adminpanel";
import { Provider } from "react-redux/es/exports";
import store from "./redux/store";
import {BrowserRouter as Router,Route} from "react-router-dom"
import User from "./components/user/user";
import UserInfo from "./components/user/userInfo";

function App() {
  return (
    
    
      <div>
      
      <Router>
     
      <Route exact path="/" component={Adminpanel}/>
      <Route path="/user/:id/">
        {/* <User/> */}
        <UserInfo/>
      </Route>
      
      </Router>
      </div>      
  
  
  );
}

export default App;
