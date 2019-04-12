import React, { Component } from 'react';
import Users from "./components/Users";
import AddUser from "./forms/AddUser"
import UpdateUser from "./forms/UpdateUser"
import './App.css';
import Navbar from "./layout/Navbar";
import Test from "./components/Test";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import NotFound from "./pages/NotFound"
import Contribute from './pages/Contribute';

// const Home = () => {
//   return (
//     <h3>Home Page</h3>
//   )
// }

// const About = () => {
//   return (
//     <h3>About Page</h3>
//   )
// }

class App extends Component {

 

  render() {
    return (
      <Router>
      <div className="container">
        {
          /* <Route exact path = "/" component = {Home}/>
         <Route exact path = "/about" component = {About}/> */
        }
        <Test test =" deneme" />
        <Navbar title = "Members"/> 
        <hr/>


      <Switch>
        <Route exact path = "/" component ={Users} />
        <Route exact path = "/add" component ={AddUser} />
        <Route exact path = "/github" component ={Contribute} />
        <Route exact path = "/edit/:id" component = {UpdateUser} />
        <Route component = {NotFound} />
      </Switch>
         
         
         
        
      </div>
      </Router>
    );
  }
}
export default App;
