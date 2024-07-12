import React, { useState } from "react";

export default function TextArea(props) {

  const handleUpClick = () => {
    // console.log("UpperCase was clicked " + text)
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase","success")
  };

  const handleLoClick = () => {
    // console.log("UpperCase was clicked " + text)
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase","success")

  };
  
  const handleOnChange = (event) => {
    // console.log("change")
    setText(event.target.value);
  };
  const handleCopy = (event) => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success")

  };
  const handleExtraSpaces= (event) => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces have been removed","success")

  };
  const [text, setText] = useState("");
  // text = "new text";
  // setText("sdfghjkl;")
  return (
    <>
    <div className="container"  style={{color: props.mode ==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode ==='dark'?'grey':'white',
          color: props.mode ==='dark'?'white':'black'
          }}
          id="myBox"
          rows="7"
        ></textarea>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
    </div>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes to read the text</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Enter something in the above textbox to preview here"}</p>
    </div>
    </>
  );
}
