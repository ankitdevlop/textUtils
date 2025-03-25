import React, { useState } from 'react';

export default function Textul(props) {
  const [text, setText] = useState("");

  const fonts = [
    'Arial, sans-serif',
    'Georgia, serif',
    'Courier New, monospace',
    'Verdana, sans-serif',
    'Tahoma, sans-serif',
    'Impact, Charcoal, sans-serif',
    'Lucida Console, Monaco, monospace',
  ];

  const bgColors = [
    'black', 'blue', 'green', 'purple', 'red', 'orange', 'teal', 'brown'
  ];

  // Convert to Uppercase
  const handleUPClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase successfully", "success");
  };

  // Convert to Lowercase
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase successfully", "success");
  };

  // Clear the Text
  const handleClear = () => {
    setText("");
    props.showAlert("Text has been cleared", "success");
  };

  // Download as Text File
  const download = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "textdata.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    props.showAlert("Data downloading started", "success");
  };

  // Handle On Change
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Text to Speech
  const textToSpeech = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text for speech", "warning");
      return;
    }
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text to speech started", "success");
  };

  // Change Font Randomly
  const fontChange = () => {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    document.getElementById("exampleFormControlTextarea1").style.fontFamily = randomFont;
    props.showAlert("Font has been changed", "success");
  };

  // Change Background and Text Color Randomly
  const areaChange = () => {
    const randomBg = bgColors[Math.floor(Math.random() * bgColors.length)];
    const randomTextColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    const textarea = document.getElementById("exampleFormControlTextarea1");
    textarea.style.background = randomBg;
    textarea.style.color = randomTextColor;
    props.showAlert("Background and text color changed", "success");
  };

  // Word and Character Count
  const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container my-4">
        <h1>{props.head}</h1>

        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>

        <button className="btn btn-success my-3 mx-3" onClick={handleUPClick}>Convert to UPPERCASE</button>
        <button className="btn btn-info my-3 mx-3" onClick={handleLowerCase}>Convert to lowercase</button>
        <button className="btn btn-danger my-3 mx-3" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-info my-3 mx-3" onClick={fontChange}>Change Font</button>
        <button className="btn btn-danger my-3 mx-3" onClick={areaChange}>Change Background</button>
        <button className="btn btn-warning my-3 mx-3" onClick={textToSpeech}>Speak Text</button>
      </div>

      <div className="container my-4" id="data">
        <h1>Text Summary</h1>
        <p><b>{wordCount}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{(0.008 * wordCount).toFixed(2)}</b> minutes to read</p>
        <h2>Preview</h2>
        <h5>{text.length > 0 ? text : "Enter text to preview it"}</h5>

        <h4 className="my-4">Download the Above Data</h4>
        <button className="btn btn-warning" onClick={download}>Click to Download</button>
      </div>
    </>
  );
}
