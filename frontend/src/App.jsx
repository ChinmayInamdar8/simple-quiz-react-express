import { useEffect, useState } from "react";
import "./App.css";

let ans_array = [];

function App() {
  const [quizes, setQuiz] = useState([]);
  const [result, setResult] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/quiz-get").then((response) => {
      response.json().then((data) => {
        setQuiz(data);
      });
    });
  }, []);


  return (
    <>
      <h1>SimpleQuiz</h1>
      <h2>Solve the all questions to get result</h2>

      {quizes.map((quiz) => {
        return (
          <QuizBoxComponent
            question={quiz.question}
            option1={quiz.option1}
            option2={quiz.option2}
            option3={quiz.option3}
            option4={quiz.option4}
            index={quiz.index}
            key={quiz._id}
          />
        );
      })}

      <button onClick={()=>{
       let res =  returnResult(quizes);
       setResult(res);
      }}>Result</button>

      <ResultDisplay result={result}></ResultDisplay>
    </>
  );
}

function ResultDisplay({result}){
  return <div>
    <p>{`the result is: ${result}`}</p>
  </div>
}

function ChangeAnswer(qus_index, ans_index) {

  let check = true;
  let ind = -1;
  for(let i = 0; i<ans_array.length; i++){
    if(ans_array[i].index==qus_index){
      check = false;
      ind = i;
      break;
    }
  }

  if(check){
    ans_array = [...ans_array, {
      index:qus_index,
      answer:ans_index
    }]
  }
  else{
      // using array.splice(startIndex, deleteCount); 
      // this removes elements from startIndex till counting to deleteCount

      ans_array.splice(ind, 1);

      ans_array = [...ans_array, {
        index:qus_index,
        answer:ans_index
      }]
  }

  
}


function returnResult(quizes){
  let result = 0;
  ans_array.forEach((an)=>{
    quizes.forEach((quiz)=>{
      if(an.index==quiz.index){
        if(an.answer==quiz.ansswer){
          result +=10;
        }
      }
    });
  });
  return result;
}

function QuizBoxComponent(props) {

  const [selectedOp, setSelectedOp] = useState();




  return (
    <div className="box">
      <h4>{`question:- ${props.question}`}</h4>
      <button
        className="box-button"
        onClick={() => {
          ChangeAnswer(props.index, 1);
          setSelectedOp(1);
        }}
      >
        {props.option1}
      </button>
      <button
        className="box-button"
        onClick={() => {
          ChangeAnswer(props.index, 2);
          setSelectedOp(2);
        }}
      >
        {props.option2}
      </button>
      <button
        className="box-button"
        onClick={() => {
          ChangeAnswer(props.index, 3);
          setSelectedOp(3);
        }}
      >
        {props.option3}
      </button>
      <button
        className="box-button"
        onClick={() => {
          ChangeAnswer(props.index, 4);
          setSelectedOp(4);
        }}
      >
        {props.option4}
      </button>

      <p>ans selected is :- {selectedOp}</p>
    </div>
  );
}

export default App;
