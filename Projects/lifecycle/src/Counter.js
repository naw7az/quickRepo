import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    console.log('constructor')
    // this will sets this.props to props(calls base class)
    super(props)  

    // we can create state inside constructor only
    this.state = {  
      counter: 0,
      seed: 0
    }

    this.increment = () => this.setState({counter: this.state.counter + 1})
    this.decrement = () => this.setState({counter: this.state.counter - 1})
  
  }

  // it is a static method, it is used to copy incoming props to state.
  // it goes right after constructor
  // Static methods are called directly on the class without creating an instance/object
  // (Ex: mycar) of the class.
  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed){
      console.log('getDerivedStateFromProps - DO UPDATE STATE')
      return {
        seed: props.seed
      }
    }
    console.log('getDerivedStateFromProps - DO NOT UPDATE STATE')
    return null;
  }

  // only run when component is constructed and get added to the DOM.
  componentDidMount() {  
    console.log('componentDidMount')
    console.log('-----------------')
  }

  // this method let react know whether render should be triggered or not
  // based on whether a props is changed.
  // change ignoreProp state value in app.js(ex 2) to see DO NOT RENDER
  shouldComponentUpdate(nextProps, nextState) {
    // if props exist and it is different from the props, then we render
    if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
      console.log('shouldComponentUpdate - DO NOT RENDER')
      console.log('-------------------------------------')
      return false;
    }
    console.log('shouldComponentUpdate - DO RENDER')
    return true;
  }

  // this method allow us to capture some props that are not stored
  // in the state before we update(re-render) the component.
  // it goes right before render
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    return null;
  }
  render() {
    console.log("Render")
    return (
      <div className="counter">
        <button onClick={this.increment} >Increment</button>
        <button onClick={this.decrement} >Deccrement</button>
        Counter: {this.state.counter}
        Seed : {this.state.seed}
      </div>
    )
  }

  // this method is called when the component get updated
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
    console.log('------------------')
  }

  // this method is called when component is taken out of the DOM
  componentWillUnmount() {
    console.log('componentWillUnmount')
    console.log('--------------------')
  }

  // this method gives chance to handle any error we run into.
  componentDidCatch(error, info) {
    console.log('componentDidCatch')
  }
}


