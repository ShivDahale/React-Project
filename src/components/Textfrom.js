import React,{useState} from 'react'


export default function Textfrom(props) {
    const handleUpClick=()=>{
        /*console.log("Uppercase was clicked" + Text);*/
        let newtext=Text.toUpperCase();
        setText(newtext)
    }
    const handleonchange=(Event)=>{
        setText(Event.target.value);
    }
    const [Text, setText]=useState('Enter text here2');
    return (
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handleonchange} id="Mybox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary'onClick={handleUpClick} >Convert to uppercase</button>
        </div>
    )
}

