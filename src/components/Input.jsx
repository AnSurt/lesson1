import React from "react";

export default ({ label, ...props }) => (
  <>
    <label>{label}</label>
    <input className="form-control" {...props} />
  </>
);
