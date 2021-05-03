import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super();
        this.state = {
            secondsLeft: props.initialCount
        }
    }
     boom = () => {
         if (this.state.secondsLeft === 0) {
             return <div>Boom!</div>
         } else {
            return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
         }
     }

  render() {
    return this.boom()
  }
}