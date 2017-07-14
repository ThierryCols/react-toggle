import React, { Component } from 'react';
import './Toggle.css';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {checked: false};
  }

  render() {
    const { valueChecked, valueUnchecked, onChange } = this.props
    return (
      <label className="toggle-container" htmlFor="switch">
        <div className="values-container">
          <div className="value-unchecked">{valueUnchecked}</div>
          <div className="value-checked">{valueChecked}</div>
        </div>
        <input
          type="checkbox"
          id="switch"
          checked={this.state.checked}
          onChange={() => {
            this.setState({checked: !this.state.checked}, () => {
              if (this.state.checked) {
                return onChange(valueChecked);
              }
              return onChange(valueUnchecked);
            });
          }}
        />
      </label>
  )}
}

  export default Toggle;
