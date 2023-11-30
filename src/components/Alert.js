import React from "react";

export default function Alert(props) {
  const capetalize = (word) => {
    let capetalize = word.toLowerCase();
    capetalize = word.charAt(0).toUpperCase() + word.slice(1);
    return capetalize;
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capetalize(props.alert.type)} :</strong>
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}
