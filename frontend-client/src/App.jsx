import { useState } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const [question, setQuestion] = useState("");
  const [op1, setOp1] = useState("");
  const [op2, setOP2] = useState("");
  const [op3, setOp3] = useState("");
  const [op4, setOp4] = useState("");
  const [id, setId] = useState(10);
  const [ans, setAns] = useState(0);

  return (
    <>
      <h1>Create questions</h1>
      <div className="container">
        <div className="inner">
          <span>question:- </span>
          <input type="text" onChange={(e)=>{
            setQuestion(e.target.value);
          }}/>
        </div>
        <div className="inner">
          <span>option 1:- </span>
          <input type="text" onChange={(e)=>{
            setOp1(e.target.value);
          }}/>
        </div>
        <div className="inner">
          <span>option 2:- </span>
          <input type="text" onChange={(e)=>{
            setOP2(e.target.value);
          }}/>
        </div>
        <div className="inner">
          <span>option 3:- </span>
          <input type="text" onChange={(e)=>{
            setOp3(e.target.value);
          }}/>
        </div>
        <div className="inner">
          <span>option 4:- </span>
          <input type="text" onChange={(e)=>{
            setOp4(e.target.value);
          }}/>
        </div>
        <div className="inner">
          <span>Index:-</span>
          <input type="number" onChange={(e)=>{
            setId(e.target.value);
          }}/>
        </div>
        <div className="inner">
          <span>ans Id:-</span>
          <input type="number" onChange={(e)=>{
            setAns(e.target.value);
          }}/>
        </div>
      </div>
      <button
        onClick={() => {
          alert("question created!");
          console.log(question);
          console.log(op1);
          console.log(op2);
          console.log(op3);
          console.log(op4);
          console.log(id);
          console.log(ans);

          const data = {
            question:question,
            option1:op1,
            option2:op2,
            option3:op3,
            option4:op4,
            answer : ans,
            index:id
          }


            axios.post('http://localhost:3000/create', data)
            .then((d)=>{
              console.log("data is sent ", d);
            })
            .catch((err)=>{
              console.error(err);
            })

        }}
      >
        submit
      </button>
    </>
  );
}

export default App;
