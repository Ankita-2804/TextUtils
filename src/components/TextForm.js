import React, {useState} from 'react'
import SmartTextTransformer from "./SmartTextTransformer";

export default function TextForm(props){
  const handleUpClick =() =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick =()=> {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) =>{
    //console.log("on change");
    setText(event.target.value);
  }
  const handleclearClick =() =>{
    let newText ='';
    setText(newText);
  }
const [text, setText] = useState('');

return (
  <>
<div className ="container">
  <h1>{props.heading} </h1>
  <div class="mb-3">
    <textarea className ="form-control" value={text}  onChange={handleOnChange}
    id ="myBox" rows="8">
     </textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
</div>
<div className="container my-3">
  <h2>Your text summary</h2>
  <p> {text.split(" ").length} words,  and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
{
  <SmartTextTransformer text={text} setText={setText} />
}
</>
);
}



































