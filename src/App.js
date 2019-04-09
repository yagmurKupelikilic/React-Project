import React, { Component } from 'react';
import Users from "./components/Users";
import AddUser from "./components/AddUser"
import './App.css';
import Navbar from "./components/Navbar";
import Test from "./components/Test";

class App extends Component {
   
 
  render() {
    return (
      <div className="container">
      <Test test =" deneme" />
        <Navbar title = "Members"/> 

        <AddUser/>

        <Users />
        <hr/>
      </div>
    );
  }
}
export default App;
