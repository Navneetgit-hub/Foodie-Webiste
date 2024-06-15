import React, { useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom'

import './index.css';
import AppLayout from "./src/components/AppLayout"
import Header from './src/components/Header';
import About from './src/components/About';
import CardDetails from "./src/components/CardDetails";

const App = () => {

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <AppLayout />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/restaurantDetails/:id',
                element: <CardDetails />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);