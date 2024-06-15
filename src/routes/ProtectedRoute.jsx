import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
// import { useNavigate, Outlet } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("access_token")

    return token ? <>{children || <Outlet />}</> : <Navigate to="/login" />

}

export default ProtectedRoute