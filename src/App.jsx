import React from 'react'

import './App.css'
import Header from "./Header"

class App extends React.Component {

  state = {
    username: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <div className="name-from">
          <input type="text"
            className='name--form'
            name='username'
            onChange={this.handleChange}
            value={this.state.username}
          />
          <button className="update--name-btn">Update Name</button>
        </div>
      </div>
    )
  }

}

export default App
