import React, { Component } from 'react'

class UserSignIn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: ''
    }
  }
  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({ [name] : value  })
  }
  render() {
    return (
      <section className="user-sign-in-container">
        <form onSubmit=''>
        <input name="email" type="text" onChange ={this.handleChange} value={this.state.email}></input>
        <input name="password" type="text" onChange ={this.handleChange} value={this.state.password}></input>
        </form>
      </section>
    )
  }
}

export default UserSignIn
