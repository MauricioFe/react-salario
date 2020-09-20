import React, { Component } from 'react'

export default class ProportionBar extends Component {
    render() {
        const { inss, irpf, netSalary, colorINSS = 'orange', colorIRPF = 'red', colorNetSalary = 'green' } = this.props();
        return (
            <div>
                <div />
                <div />
                <div />
            </div>
        )
    }
}
