import React, { useState } from "react";

export default function TextForm(props) {
  const changeback = (object) => {
    if (props.defaultbackground) {
      console.log(object);
      return object;
    } else {
      const newobj = {
        backgroundColor: props.theme,
        color: "white",
      };
      return newobj;
    }
  };
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " +  text);
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
    if (event.target.id == "myBox") {
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
    console.log(array);
    var count = 0;
    for (var i = 0; i < array.length; i++) {
      if (word == array[i]) {
        count++;
      }
    }
    if (count == 0) {
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
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
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
        className="container"
        style={changeback({ color: props.mode === "dark" ? "white" : "black" })}
      >
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={changeback({
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            })}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handlelowerClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={checkfreq}>
          CheckFrequencyOfWords
        </button>

        <button className="btn btn-primary mx-1" onClick={copy}>
          Copy.
        </button>

        <button className="btn btn-primary mx-1" onClick={clear}>
          clear
        </button>
      </div>
      <div
        className="container my-3"
        style={changeback({ color: props.mode === "dark" ? "white" : "black" })}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>

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
