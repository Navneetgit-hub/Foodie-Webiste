import React, { useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';


import './index.css';
import AppLayout from "./src/components/AppLayout"
import Header from './src/components/Header';
import About from './src/components/About';
import CardDetails from "./src/components/CardDetails";
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appstore';
import Cart from './src/components/Cart';

const App = () => {

    const [firstName, setFirstName] = useState('Navneet')

    return (
        <>
            <Provider store={appStore}>
                <UserContext.Provider value={{firstName:firstName}}>
                    <Header />
                </UserContext.Provider>
                <Outlet />
            </Provider>
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
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);