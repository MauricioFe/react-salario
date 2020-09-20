import React, { Component } from 'react';
import InputFullSalary from './components/InputFullSalary';
import InputReadOnly from './components/InputReadOnly';
import ProportionBar from './components/ProportionBar';
import { calculateSalaryFrom } from './helpers/salary';
const COLOR_INSS = '#e67e22';
const COLOR_IRPF = '#c0392b';
const COLOR_NET_SALARY = '#16a085';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1000,
    }
  }
  handleFullSalaryChange = (newValue) => {
    this.setState({ fullSalary: newValue });
  }
  render() {
    const { fullSalary } = this.state;
    const salaryObject = calculateSalaryFrom(fullSalary);
    const { baseINSS, discountINSS, discountIRPF, baseIRPF, netSalary, percentINSS, percentIRPF, percentNetSalary } = salaryObject;
    return (
      <div className="container">
        <h1 className="center">React Salário</h1>
        <div className="row">
          <InputFullSalary currentValue={fullSalary} onSalaryChange={this.handleFullSalaryChange} />
        </div>
        <div className="row">
          <InputReadOnly label="Base INSS" value={baseINSS} color={COLOR_INSS} />
          <InputReadOnly label="Desconto INSS" value={discountINSS} percentage={percentINSS} />
          <InputReadOnly label="Base IRPF" value={baseIRPF} color={COLOR_IRPF}/>
          <InputReadOnly label="Desconto IRPF" value={discountIRPF} percentage={percentIRPF} />
          <InputReadOnly label="Salário Líquido" value={netSalary} percentage={percentNetSalary}  color={COLOR_NET_SALARY}/>
          <ProportionBar />
        </div>
      </div>
    );
  }
}
