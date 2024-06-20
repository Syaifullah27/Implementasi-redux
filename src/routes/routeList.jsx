import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Home";
import LoginPage from "../Pages/Login/Index";
import MenuPage from "../Pages/Menu/Index";
import RegisterPage from "../Pages/Register/Index";
import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from "../Pages/profile/Index";
import Test from "../Pages/test";
import EditMenuPage from "../Pages/Menu/EditMenu";

export const routeList = createBrowserRouter([
    {
        path: "/",
        element: <HomePage /> 
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage/>
    },
    {
        path: "/menu",
        element: (
            <ProtectedRoute>
                <MenuPage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/menu-edit/:id",
        element: (
            <ProtectedRoute>
                <EditMenuPage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/profile",
        element:
                <ProfilePage />
    },
    {
        path: "/test",
        element: <Test />
    }
])