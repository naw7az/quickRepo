import React, { Component } from 'react'
import Counter from './Counter';
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 3
    }

    this.mountCounter = () => this.setState({mount: true})
    this.unmountCounter = () => this.setState({mount: false})

    this.ignoreProp = () => this.setState({ignoreProp: Math.random()})
    this.seedGenerator = () => this.setState({seed: Math.floor(Math.random() * 5)})
  }
  render() {
    return (
      <div className='App'>
        <button onClick={this.mountCounter} disabled={this.state.mount} >Mount Counter</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount} >Unmount Counter</button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
        <button onClick={this.seedGenerator}>Generate Seed</button>
        {this.state.mount ?
         <Counter 
           ignoreProp = {this.state.ignoreProp}
           seed = {this.state.seed}
         />: 
         null
        }

        <br/>
        <br/>
        <a href='https://www.w3schools.com/react/react_lifecycle.asp'
          target='_blank' 
          rel="noreferrer"
          >More on React Lifecycle methods
        </a>
      </div>
    )
  }
}

export default App
