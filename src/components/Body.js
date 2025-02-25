import React from 'react'
import Login from './Login.js'
import Browse from './Browse.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {
    const appRotuter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        }

    ])
  return (
    <div>
        <RouterProvider router={appRotuter}/>
    </div>
  )
}

export default Body