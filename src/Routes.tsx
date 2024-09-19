import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Login } from "./Login";
import Home from "./Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },

    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/home",
        element: <Home />
    }
]);
