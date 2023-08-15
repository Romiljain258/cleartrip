import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Result from './component/Result';
import Detail from './component/Detail';

let Router = createBrowserRouter([
    {
        path:"/",
        element:<Result/>,
    },
    {
        path:"/detail",
        element:<Detail/>,
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Router}/>);