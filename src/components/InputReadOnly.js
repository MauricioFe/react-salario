import React, { Component } from 'react'

export default class InputReadOnly extends Component {
    handleInputChange = (event) => {
        const newValue = +event.target.value;
        this.props.onSalaryChange(newValue);
    }
    render() {
        const { value, color = 'black', percentage, label } = this.props;
        const formattedeValue = `${value} (${percentage})`;
        return (
            <div className="input-field col s12 m6 l3">
                <input id="inputReadOnly" type="number" value={value} readOnly />
                <label className="active" htmlFor="inputReadOnly">Salário Bruto</label>
                {label}
            </div>
        )
    }
}
