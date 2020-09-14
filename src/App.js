import React, { Component } from 'react';
import InputFullSalary from './components/inputFullSalary';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary:1000,
    }
  }
  handleFullSalaryChange = (newValue) => {
    this.setState({ fullSalary: newValue });
    console.log(this.state.fullSalary)
  }
  render() {
    const { fullSalary } = this.state;
    return (
      <div className="container">
        <h1 className="center">React Salário</h1>
        <div className="row">
          <InputFullSalary currentValue={fullSalary} onSalaryChange={this.handleFullSalaryChange} />
        </div>
      </div>
    );
  }
}
