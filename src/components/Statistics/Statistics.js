import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Statistic from '../Statistic/Statistic';
const Statistics = ({topic}) => {
    console.log(topic);
    const statistic = useLoaderData();

   
        return (
            <div className=''> 
           
                <div className=''>
                {
                    statistic.data.map(statistic => <Statistic
                        key={statistic.id}
                        statistic={statistic}
                    ></Statistic>)
                }
                </div>
            </div>
        );
  
};

export default Statistics;