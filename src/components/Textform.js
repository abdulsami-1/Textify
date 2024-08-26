import React, { useState } from 'react';



export default function Textform(props) {
    const [text, setText] = useState('');
    // setText = "New Text"; // wrong way to change the state
    // setText("New Text"); // Correct way to change the state
    const handleUpClick = () =>{
        // console.log("Upper case was clicked" + text) ;
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleSpClick = () =>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleCopy = () => {
        var text = document.getElementById("mybox");
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
      };
      
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    

    return (
        
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3" >
            <textarea className="form-control" id="mybox" value={text} style={{background : props.mode === 'dark' ? 'grey' : 'white',color:
        props.mode==='dark'?'white':'black'}}/*<=object*/   onChange={handleOnChange} rows="12"></textarea>
        </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >
                Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >
                Convert to Lowercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleSpClick} >
                Speak
            </button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick} >
                Clear Text
            </button>
            <button className="btn btn-primary mx-1" onClick={handleCopy} >
                Copy Text
            </button>

        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length - 1} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
        </div>

        





        
        </>
  )
}











