import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("https://chef-server-side-nine.vercel.app/chefs"),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/chef_recipes/:id",
                element: 
                <PrivateRoute>
                    <ChefRecipes />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://chef-server-side-nine.vercel.app/chefs/${params.id}`),
            },
        ],
    },
]);

export default router;