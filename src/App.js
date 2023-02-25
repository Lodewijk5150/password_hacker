import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [body,setBody] = useState(['hello.','hi','My name is Tiago'])
  function text_add(text) {
    let new_body = [...body]
    new_body.push(text)
    setBody (new_body)

  }
  return (
    <div className="App">
      <p className="text_output">
        {body.map((line_text)=>{
          return(
            <div className="line">{line_text}</div>
          )
        })}        
      </p>
      <div className='input_wrap'>
        <span className='input_indicator'>{'> '} </span>
      <input type='text' className="text_input"/>
      </div>
      <button onClick={()=>{
        text_add('this is a great text!!')
      }}>click me!</button>
    </div>
  );
}

export default App;
