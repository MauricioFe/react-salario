import React, { Component } from 'react'

export default class InputReadOnly extends Component {
    handleInputChange = (event) => {
        const newValue = +event.target.value;
        this.props.onSalaryChange(newValue);
    }
    render() {
        const { value, color = 'black', percentage, label } = this.props;
        const formattedePercentage = percentage > 0? `(${percentage}) `: '';
        const formattedeValue = `${value} ${formattedePercentage}`;
        return (
            <div className="input-field col s12 m6 l3">
                
                <input id="inputReadOnly" value={formattedeValue} readOnly />
                <label className="active">{label}</label>
            </div>
        )
    }
}
