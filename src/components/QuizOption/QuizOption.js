import React from 'react';

const QuizOption = ({option}) => {
    return (
        <div className='border border-cyan-400 pointer duration-500 ease-in hover:bg-cyan-500  p-5 rounded-2xl'>
           <h2 className='text-xl duration-400 ease-in hover:text-white font-semibold text-cyan-400'><input type="radio" name="radio-1" className="radio mr-5" checked />{option}</h2>
        </div>
    );
};

export default QuizOption;