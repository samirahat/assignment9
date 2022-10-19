import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';

import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Main from './components/layouts/Main';
import Error from './components/404 Error/Error';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([

{
  path:'/',
  element:<Main></Main>,
  children:[
    {
      path:'/',
      loader:()=>{
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      element:<Home></Home>,
    },
    {
      path:'/home',
      loader:()=>{
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      element:<Home></Home>,
    },
    {
      path:'/home',
     
      element:<Topics></Topics>
    },
    {
      path:'/statistics',
      loader:()=>{
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      element:<Statistics></Statistics>
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    },
    {
      path:'*',
      element:<Error></Error>
    },
    {
      path:'quiz/:quizId',
      loader:async({params})=>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
      },
      element:<Quiz></Quiz>
    }
  ]
},
 


  ])
  return (
    <div className=''>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
