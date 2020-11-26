import React, { useState } from "react";

function InputField({ title, children }) {
  return (
    <div style={{ display: "flex", marginBottom: 8 }}>
      <label style={{ marginRight: 4 }}>{title}</label>
      {children}
    </div>
  );
}
export default InputField;