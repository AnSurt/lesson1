import React from "react";
import PropTypes from "prop-types";

const Input = ({ label, ...props }) => (
  <>
    <label>{label}</label>
    <input className="form-control" {...props} />
  </>
);
Input.propTypes = {
  label: PropTypes.string.isRequired,

  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
export default Input;
