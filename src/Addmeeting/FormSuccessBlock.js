import React from "react";
const FormSuccessBlock = ({ room }) => {
  return (
    <div style={{ textAlign: "center" }}>
      You've successfully added room : <strong>{room}</strong>. Thank you.
    </div>
  );
};

export default FormSuccessBlock;
