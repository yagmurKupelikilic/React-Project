import React, { Component } from 'react'
import UserConsumer from   "../context"
//import axios from "axios";


class UpdateUser extends Component {
    state = {
        name : "",
        department : "",
        salary : ""
    }
  
    //state degistirme 
    changeInput = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    //  componentDidMount = async () => {
    //     const {id} = this.props.match.params;

    //     const response=await axios.get(`http://localhost:3005/users/${id}`);
    //     const {name,department,salary} = response.data;
    //     this.setState(
    //        { name,
    //         salary,
    //         department
    //        }
    //     )
    //  }
    updateUser = (dispatch, e) => {
        e.preventDefault();
        //update User
    }

  render() {
      const {name,salary,department} = this.state;
      return <UserConsumer>
         { value => {
             const {dispatch} = value;
             return (
                <div className= "col-md-8 mb-4">
                  <div className="card">
                      <div className="card-header">
                          <h4>Update User Form</h4>
                      </div>
                      <div className="card-body">
                          <form onSubmit = {this.updateUser.bind(this, dispatch)}>
                              <div className="form-group">
                              <label htmlform="name">Name</label>
                              <input 
                                  type="text"
                                  name="name"
                                  id = "id"
                                  placeholder =" Enter name "
                                  className= "form-control"
                                  value = {name}
                                  onChange = {this.changeInput}
          
                              />
                              </div>
          
                              <div className="form-group">
                              <label htmlform="department">Department</label>
                              <input 
                                  type="text"
                                  name="department"
                                  id = "id"
                                  placeholder =" Enter department "
                                  className= "form-control"
                                  value = {department}
                                  onChange = {this.changeInput}
          
                              />
                              </div>
          
                              <div className="form-group">
                              <label htmlform="salary">Salary:   </label>
                              <input 
                                  type="text"
                                  name="salary"
                                  id = "id"
                                  placeholder =" Enter salary "
                                  className= "form-control"
                                  value = {salary}
                                  onChange = {this.changeInput}
                              />
                              </div>
                              
                              <button className ="btn btn-danger btn-block" type ="submit">Add User</button>
                          </form>
                      </div>
                  </div>
                </div>
              )
          }
        }
      </UserConsumer>
    
  }
}
export default UpdateUser; 
