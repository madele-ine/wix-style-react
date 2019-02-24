import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import WixComponent from '../BaseComponents/WixComponent';

class NumberInput extends WixComponent {
  static displayName = 'NumberInput';

  inputDOM;

  _isInRange(value) {
    const { min, max } = this.props;
    if (min && value < parseFloat(min)) {
      return false;
    }
    if (max && value > parseFloat(max)) {
      return false;
    }
    return true;
  }

  increment = () => {
    this._applyChange((value, step) => value + step);
  };

  decrement = () => {
    this._applyChange((value, step) => value - step);
  };

  _applyChange(operator) {
    const { value, onChange, step } = this.props,
      numberValue = parseFloat(value),
      numberStep = parseFloat(step),
      updatedValue = operator(numberValue, numberStep);
    if (onChange && this._isInRange(updatedValue)) {
      this._triggerOnChange(updatedValue);
    }
  }

  _triggerOnChange(value) {
    const { onChange } = this.props;
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    ).set;
    nativeInputValueSetter.call(this.inputDOM, value);
    onChange({ target: this.inputDOM });
  }

  _getInputRef = ref => {
    const { inputRef } = this.props;
    this.inputDOM = ref;
    if (inputRef) {
      inputRef(ref);
    }
  };

  render() {
    const { dataHook, value, onChange, ...props } = this.props;

    return (
      <div data-hook={dataHook}>
        <Input
          {...props}
          type="number"
          value={value}
          onChange={onChange}
          inputRef={this._getInputRef}
          suffix={
            <Input.Ticker
              onUp={this.increment}
              onDown={this.decrement}
              dataHook="number-input-ticker"
            />
          }
        />
      </div>
    );
  }
}

NumberInput.propTypes = {
  ...Input.propTypes,
  /** Minimum value input can have - similar to html5 min attribute */
  min: PropTypes.number,

  /** Maximum value input can have - similar to html5 max attribute */
  max: PropTypes.number,

  /** Step steps to increment/decrement - similar to html5 step attribute */
  step: PropTypes.number,
};

NumberInput.defaultProps = {
  ...Input.defaultProps,
  step: 1,
};
export default NumberInput;
