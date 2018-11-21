import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ attribute, options, onChange }) => (
  <div className="input-group input-group-lg">
    <div className="input-group-prepend">
      <span className="input-group-text bg-primary border-primary text-white">
        Выберите {attribute} вашего Фрукта/Ягоды:
      </span>
    </div>
    <select
      className="form-control"
      value=""
      onChange={({ target }) => onChange(target.value)}
    >
      <option>...</option>
      {options.map(value => (<option key={value} value={value}>{value}</option>))}
    </select>
  </div>
);

Select.propTypes = {
  attribute: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
