import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Causes from "../Pages/Causes/Causes";
import Contact from "../Pages/Contact/Contact";
import Event from "../Pages/Event/Event";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>
            },
            {
                path : '/causes',
                element : <Causes></Causes>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            {
                path : '/about',
                element : <About></About>
            },
            {
                path : '/contact',
                element : <Contact></Contact>
            },
            {
                path : '/event',
                element : <Event></Event>
            },
        ]
    }
])