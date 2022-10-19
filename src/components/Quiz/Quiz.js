import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';
const Quiz = () => {
    const quizData= useLoaderData()
    const quizes = quizData.data;
    const {name} =quizes;



  

    return (
        <div>
             <h2 className='text-center text-5xl py-8 font-bold text-cyan-400 hg'>Test Your Skill By Some Quiz!! About {name}</h2>
          {
            quizData.data.questions.map(quiz => <QuizDetails
                key={quiz.id}
                quiz={quiz}
              
            ></QuizDetails>)
          }
        </div>
    );
};

export default Quiz;