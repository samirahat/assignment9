import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Header from '../Header/Header';
import Topic from '../Topic/Topic';


const Home = () => {
    const topics = useLoaderData();
    return (
        <div className=''> 
            <Header></Header>
            <div className='bg-cyan-900 p-12 grid md:grid-cols-4 gap-20'>
            {
                topics.data.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
            </div>
        </div>
    );
};

export default Home;