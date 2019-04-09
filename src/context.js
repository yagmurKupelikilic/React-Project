import React, { Component } from 'react'

const UserContext = React.createContext();
// Provider, Consumer
const reducer = (state, action) => {
    switch(action.type){
        case "DELETE_USER":
        return {
            ...state, 
            users: state.users.filter(user => action.payload !== user.id ) 
        }
        case  "ADD_USER":
        return {
          ...state,
          users : [...state.users,action.payload]
        }
        default :
        return state
    }
}

export class UserProvider extends Component {
    state = {
        users: [
          {
            id: "id-1",
            name: "yagmur",
            salary: "5200",
            department: "bilisim"
          },
          {
            id: "id-2",
            name: "kivilcim",
            salary: "6000",
            department: "bilisim"
          },
          {
            id: "id-3",
            name: "kemalettin",
            salary: "200",
            department: "bilisim"
          }
        ],
        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
      }
  render() {
    return (
      <div>
        <UserContext.Provider value = {this.state}>
            {this.props.children}
        </UserContext.Provider>
      </div>
    )
  }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;