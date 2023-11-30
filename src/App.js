import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textform from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  const [text, setText] = useState("light");
  const [alert, setAlert] = useState(null);
  const [defaultbackground, setDefaultbackground] = useState(true);
  const [theme, setTheme] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggolemode = () => {
    if (mode === "light") {
      setmode("dark");
      setText("light");
      document.body.style.backgroundColor = "gray";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setmode("light");
      setText("dark");
      document.body.style.backgroundColor = "white";
      showAlert("dark mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
    setDefaultbackground(true);
  };
  return (
    <BrowserRouter>
      <Navbar
        mode={mode}
        toggle={toggolemode}
        text={text}
        defaultbackground={defaultbackground}
        setDefaultbackground={setDefaultbackground}
        theme={theme}
        setTheme={setTheme}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <Textform
                heading="Enter your text here"
                mode={mode}
                alert={showAlert}
                defaultbackground={defaultbackground}
                setDefaultbackground={setDefaultbackground}
                theme={theme}
                setTheme={setTheme}
              />
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
