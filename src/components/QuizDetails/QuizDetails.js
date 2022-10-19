import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import { EyeIcon } from '@heroicons/react/24/solid'

const QuizDetails = ({quiz}) => {
    // console.log(quiz,handlerCorrectAnswer);
    const {options,question,correctAnswer}=quiz;
 

    // const handlerCorrectAnswer =()=>{
    //   alert(`{correctAnswer}`)
    // }



    return (
        <div style={{boxShadow:"0px 0px 15px cyan"}} className='w-3/4 rounded-2xl mx-auto m-12 p-5 quiz'>
           <div className='flex justify-between items-center'>
           <h2 className='text-2xl font-bold text-cyan-400 ml-5'>Quiz : {question}</h2>
           <h2 className='text-2xl font-bold text-cyan-400 ml-5'>Answer : {correctAnswer}</h2>
           <EyeIcon  className="h-6 w-6 text-blue-500"/>
           </div>
           <div className=' grid grid-cols-2 my-8 gap-5 '> 
           {
            options.map(option=><QuizOption
            option={option}
            ></QuizOption>)
           }
           </div>
            
        </div>
    );
};

export default QuizDetails;