import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Gallery } from "../pages/Gallery";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "gallery",
                element: <Gallery />,
            },
        ],
    },
]);
