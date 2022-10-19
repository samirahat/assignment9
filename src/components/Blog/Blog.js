import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='mx-auto pt-12 blog-bg'>
            <h2 className='text-center text-5xl font-bold text-cyan-400 hg'>Some Important Question About This Milestone</h2>
         <div className='text-white container mx-auto mt-12 border border-cyan-400 p-4 rounded-xl que-Shadow'>
            <h1 className='text-2xl font-bold'>1. What is the purpose of React Router ?</h1>
            <p  className='text-xl font-semibold mt-3'> <span className='text-2xl border border-cyan-400 border-x-0 border-t-0'>Ans</span> : React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
         <div className='text-white container mx-auto mt-12 border border-cyan-400 p-4 rounded-xl que-Shadow'>
            <h1 className='text-2xl font-bold'>2.How Does Context Api Works?</h1>
            <p  className='text-xl font-semibold mt-3'> <span className='text-2xl border border-cyan-400 border-x-0 border-t-0'>Ans</span> : The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
         <div className='text-white container mx-auto mt-12 border border-cyan-400 p-4 rounded-xl que-Shadow'>
            <h1 className='text-2xl font-bold'>1. Why Is The useRef used in React ?</h1>
            <p  className='text-xl font-semibold mt-3'> <span className='text-2xl border border-cyan-400 border-x-0 border-t-0'>Ans</span> :, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with ref , React will set its .current property to the corresponding DOM node whenever that node changes..</p>
            </div>
         



        </div>
    );
};

export default Blog;