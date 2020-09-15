import React, { Component } from 'react';
import InputFullSalary from './components/InputFullSalary';
import InputReadOnly from './components/inputReadOnly';
import { calculateSalaryFrom } from './helpers/salary';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary:1000,
    }
  }
  handleFullSalaryChange = (newValue) => {
    this.setState({ fullSalary: newValue });
  }
  render() {
    const { fullSalary } = this.state;
    const salaryObject = calculateSalaryFrom(fullSalary);
    const {baseINSS, discountINSS, discountIRPF,baseIRFS, netSalary, percentINSS, percentIRPF} = salaryObject;
    return (
      <div className="container">
        <h1 className="center">React Salário</h1>
        <div className="row">
          <InputFullSalary currentValue={fullSalary} onSalaryChange={this.handleFullSalaryChange} />
        </div>
        <div className="row">
          <InputReadOnly label="Base INSS" value={baseINSS} />
        </div>
      </div>
    );
  }
}
