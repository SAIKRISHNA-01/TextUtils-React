import React, {useState} from 'react';


export default function TextForm(props) {

    const handleUpClick = () => {
        //console.log("Uppercase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to UpperCase!", "success");
    }

    const handleLowClick = () => {
        //console.log("Uppercase was clicked" +text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to LowerCase!", "success");
    }
    

    const handleClear = () => {
        //console.log("Uppercase was clicked" +text);
        let newText = "";
        setText(newText);
        props.showAlert(" Text is cleared", "success");
    }

    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "Please write your text here"  // wrong way
    //setText("Please write your text here") // Correct way

  return (
    <>
    <div className = "container" style = {{color: props.mode === 'dark'? 'white': 'black' }}>
        <h1> {props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange}  style = {{backgroundColor: props.mode === 'dark'? 'grey': 'white',
              color: props.mode === 'dark'? 'white': 'black'}} id = "myBox"  rows = "8" >  </textarea>
        </div>
       <button className = "btn btn-primary mx-2" onClick = {handleUpClick}> Convert to UpperCase </button>
       <button className = "btn btn-primary mx-2" onClick = {handleLowClick}> Convert to LowerCase </button>
       <button className = "btn btn-primary mx-2" onClick = {handleClear}> Clear Text </button>
      
    </div>

    <div className = "container my-3" style = {{color: props.mode === 'dark'? 'white': 'black' }}>
       <h1> Your text summary </h1> 
       <p> { text.split(" ").length } words and {text.length} characters </p>
       <p> {0.008 * text.split(" ").length } Minutes read</p>
       <h2> Preview </h2>
       <p> {text} </p>
    </div>
   </>
  )
}
