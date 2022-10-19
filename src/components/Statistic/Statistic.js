import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistic = ({statistic}) => {


    const{logo,name,total,id}=statistic;

    console.log(statistic);
    return (
        <div>
             <BarChart width={150} height={40} data={statistic}>
          <Bar dataKey={total} fill="#8884d8" />
        </BarChart>
        </div>
    );
};

export default Statistic;