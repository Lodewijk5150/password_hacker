import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [body,setBody] = useState(['hello.','hi','My name is Tiago'])
  return (
    <div className="App">
      <p className="text_output">
        {body.map((line_text)=>{
          return(
            <div className="line">{line_text}</div>
          )
        })}        
      </p>
      <input type='text' className="text_input"/>
      <button onClick={()=>{
        let new_body = [...body]
        new_body.push('This is a great text.')
        setBody (new_body)
      }}>click me!</button>
    </div>
  );
}

export default App;
