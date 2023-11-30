import React from "react";

export default function Alert(props) {
  const capetalize = (word) => {
    let capetalize = word.toLowerCase();
    capetalize = word.charAt(0).toUpperCase() + word.slice(1);
    return capetalize;
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capetalize(props.alert.type)} :</strong>
        {props.alert.msg}
      </div>
    )
  );
}
