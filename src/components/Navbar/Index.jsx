import { useState } from "react"
import "./style.scss"

// eslint-disable-next-line react/prop-types
const Navbar = ({userName, handleLogout, handleLogin}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (

        <div style={{
            boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)"}}
            className="navbar-wrapper">
                <nav className="navbar">
                    <img src="./public/EsyehaX-logo.png"  width={230} className="max-sm:w-44"/>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={`menu-list  ${isMenuOpen ? 'active' : ''}`}>
                        <div className="username">
                            <h1 className="title-username">{userName}</h1>
                            {userName ? <img src="./public/kaiden_1.jpeg" alt="" width={50} height={50} className="rounded-full " /> : null}
                        </div>

                            <div className="button-container-1">
                            <span className="mas font-medium">{userName ? "Log Out" : "Login"}</span>
                            <button onClick={userName ? handleLogout : handleLogin}
                            id='work' type="button" name="Hover" className="font-medium">{userName ? "Log Out" : "Login"}</button>
                        </div>
                    </ul>
                </nav>
            </div>
    )
}

export default Navbar