import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context'
import {Link} from "react-router-dom";

class User extends Component {
//if there is no info in App.js

state = { 
 Users: [
   {
    id: 1, 
    name: "yagmur",
    salary : "5000",
    department: "bilisim"
   },

   {
    id: 2, 
    name: "ali",
    salary : "5000",
    department: "uretim"
   }
   
 ]
}

  static defaultProps = {
    name : "No information",
    department : "No information",
    salary : "No information"
  }

  onClickEvent = (e) => {
    this.setState({
    isVisible : !this.state.isVisible
    })
  }

  onDeleteUser = (dispatch, e) => {
    const {id} = this.props;

    //Consumer Dispatch
    dispatch({type: "DELETE_USER", payload:id});

  }
 
  render() {
    const {id,name,department,salary} = this.props;
    const {isVisible} = this.state;

    return (
    <UserConsumer>
    {
      value => {
        const {dispatch} =value;


        return (
    

       <div className = "col-md-8 mb-4">
        <div className="card" style = {isVisible ? {backgroundColor : "#62848d",color :"white"} : null }> 
           <div className ="card-header d-flex justify-content-between">
             <h4 className = "d-inline" onClick = {this.onClickEvent}>{name}</h4>
           <i onClick = {this.onDeleteUser.bind(this, dispatch)} className = "far fa-trash-alt" style ={{cursor : "pointer"}}></i>
         </div>
         
           {
              isVisible ? <div className="card-body">
            
             <p className="card-text"> Salary: {salary}</p>
             <p className="card-text"> Department: {department}</p>
              <Link to ={`edit/${id}`} className="btn btn-dark btn-block">Update User</Link>
              </div> : null
           }
         </div>
       </div>
        )
      }
    }
    </UserConsumer>
    )
    
  }
}

User.propTypes = {
  name : PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  id : PropTypes.string.isRequired
}

export default User;