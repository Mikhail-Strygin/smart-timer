import "./FieldInput.module.css";
import React from "react";

const FieldInput = () => {
  return (
    <div className="field-input">
      <input type="text" placeholder="Введите задачу" />
      <input type="text" placeholder="Введите время (в минутах)" />
    </div>
  );
};

export default FieldInput;
