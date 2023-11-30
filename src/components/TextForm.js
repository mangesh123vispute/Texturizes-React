import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("Uppercase was clicked", "success");
  };

  const handlelowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alert("Lowercase was clicked", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    if (event.target.id === "myBox") {
      return;
    }
    props.alert("On change", "success");
  };
  const checkfreq = () => {
    const word = prompt("Enter the word");
    if (word == null) {
      return;
    }
    const text = document.getElementById("myBox").value;
    const array = text.split(" ");

    var count = 0;
    for (var i = 0; i < array.length; i++) {
      if (word === array[i]) {
        count++;
      }
    }
    if (count === 0) {
      alert(
        "the word " +
          word.toLowerCase() +
          " does not appear in the given text and the freq is " +
          count +
          " words"
      );
    } else {
      alert(
        "the word " +
          word.toLowerCase() +
          " appears in the freq " +
          count +
          " words"
      );
    }
    props.alert("checkfreq", "success");
  };

  const copy = () => {
    navigator.clipboard.writeText(text);

    props.alert("Copied to clipboard", "success");
  };
  const clear = () => {
    setText("");
    props.alert("clear", "success");
  };
  const [text, setText] = useState("Enter text here2");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div
        className="container "
        style={props.changeback({
          color: props.mode === "dark" ? "white" : "black",
        })}
      >
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={props.changeback({
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            })}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handlelowerClick}
          disabled={text.length === 0}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={checkfreq}
          disabled={text.length === 0}
        >
          CheckFrequencyOfWords
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={copy}
          disabled={text.length === 0}
        >
          Copy.
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={clear}
          disabled={text.length === 0}
        >
          clear
        </button>
      </div>
      <div
        className="container my-3"
        style={props.changeback({
          color: props.mode === "dark" ? "white" : "black",
        })}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}
          Minutes read
        </p>

        <h2>Preview</h2>
        <p>
          {text.length > 1
            ? text
            : "Enter something in the textbox above to preview it"}
        </p>
      </div>
    </>
  );
}
