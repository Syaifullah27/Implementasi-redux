// import { Navigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import Navbar from "../../components/Navbar/Index"

const ProfilePage = () => {
    const handleLogin = (e) => {
        e.preventDefault()
        window.location.href = "/login"
    }

    const handleLogout = () => {
        const logout = confirm("Are you sure you want to log out?")
        if(logout){
            localStorage.removeItem("access_token")
            window.location.href = "/login"
        }
        
    }

    const token = localStorage.getItem("access_token")
    const decoded = jwtDecode(token)

    return (
        <div>
            <Navbar handleLogin={handleLogin} userName={decoded.userData.username} 
            handleLogout={handleLogout}/>
            <h1>Profile Page</h1>
        </div>
    )
}

export default ProfilePage