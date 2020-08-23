import React, {useEffect, useState} from 'react';
import './App.css';
import {get10AnyEasyAny} from "./utils/quiz-api";


function App() {
    const [questionList, setQuestionList ] = useState([])

    useEffect(() => {
        let then = get10AnyEasyAny.then(response => {return response.data});
        setQuestionList(then)
    },[])

    console.log(questionList)
  return (
    <div className="App">
      Welcome to Quizi

    </div>
  );
}

export default App;
