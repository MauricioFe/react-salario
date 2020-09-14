import React, { Component } from 'react';
import InputFullSalary from './components/inputFullSalary';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary =100
    }
  }
  handleFullSalaryChange = (newValue)=>{
    
  }
  render() {
    const { fullSalary } = this.state;
    return (
      <div className="container">
        <h1 className="center">React Salário</h1>
        <div className="row">
          <InputFullSalary currentValue ={fullSalary} onSalaryChange={this.handleFullSalaryChange}/>
        </div>
      </div>
    );
  }
}
