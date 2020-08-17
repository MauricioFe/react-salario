import React, { Component } from 'react';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
       baseINSS:0,
       discountINSS:0,
       baseIRPF:0,
       discountIRPF:0,
       net:0,
       baseINSS:0,
    }
}
  render() {
    const {fullSalary} = this.state;
    return (
      <div className="container">
        <h1 className="center">React Salário</h1>

      
      </div>
    );
  }
}
