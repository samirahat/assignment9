import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({topic}) => {

    console.log(topic);
    const{logo,name,total,id}=topic
    return (
        <div style={{boxShadow:'0px 0px 20px #333',borderRadius:"10px"}} className='skill'>
            <img style={{boxShadow:'0px 0px 8px #444',padding:"8px",borderRadius:"10px"}} src={logo} alt="" />
            <p className='text-2xl font-bold text-center mt-5 text-sky-400'>{name}</p>
            <p className='text-xl font-bold text-center mt-5 mb-16 text-sky-300'>Total Quiz : {total}</p>
            <button className='skill-btn'><Link to={`/quiz/${id}`}>Test Your Skill</Link></button>
        </div>
    );
};

export default Topic;