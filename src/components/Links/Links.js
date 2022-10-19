import React from 'react';
import './Links.css'
import{NavLink} from 'react-router-dom'

const Links = ({link}) => {
    const{path,name}=link;
    return (
        <div className=''>
            <li className='mr-12'>
        <NavLink className='text-white text-xl font-semibold' active to={path}>{name}</NavLink>
            </li>
        </div>
    );
};



export default Links;