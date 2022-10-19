import React from 'react';
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import { useState } from 'react';
import logo from '../../images/logo.png'
import Links from '../Links/Links';
import { Link } from 'react-router-dom';

{/* <div className='text-2xl font-bold text-white'>
      <h2>Skill Tester</h2>
 </div> */}

const NavBar = () => {
    const [open,setOpen]=useState();
    const navLinks=[
        {id:1,name:"Home",path:'/home'},
        {id:2,name:"Topics",path:'/topics'},
        {id:3,name:"Statistics",path:'/statistics'},
        {id:4,name:"Blog",path:'/blog'},
    ]

    return (

        <div>

        

        <nav className=' bg-cyan-600 flex justify-between items-center w-full  pl-0'>
        <Link to={`/home`}><img className='w-32 ml-2' src={logo} alt="" /></Link>
            
               <div onClick={()=>setOpen(!open)} className="h-6 w-6 md:hidden">
                {
                    open? <XMarkIcon />:<Bars3Icon />
                }
               </div>


                <ul  className={`md:flex justify-center md:justify-end md:sticky absolute bg-cyan-600 w-full duration-500 ease-in ${open ? 'top-24': 'top-[-120px]'}`}>
                        {
                            navLinks.map(link=><Links 
                                key={link.id}
                                link={link}
                            ></Links>)
                        }
                </ul>
        </nav>
        </div>
    );

};

export default NavBar;