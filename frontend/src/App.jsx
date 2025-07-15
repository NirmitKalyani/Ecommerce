import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Default from './pages/Default';
import Landing from './components/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Default/>,
    children:[
      {
        path:'/',
        element:<Landing/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/home',
        element:<Home/>
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
