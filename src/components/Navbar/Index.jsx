import { useState } from "react"
import "./style.scss"

// eslint-disable-next-line react/prop-types
const Navbar = ({userName, handleLogout}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        // <div className="bg-[#ffcb10] shadow-xl">
        //     <div className="flex justify-between w-11/12 mx-auto py-2">
        //         <img src="./public/EsyehaX-logo.png" alt="logo" width={230} className="max-sm:w-44" />
        //         <div className="flex gap-4 justify-center items-center  ">
        //             <button 
        //             onClick={handleToggle}
        //             className="font-medium md-[600px]:hidden rotate-90 text-2xl">|||</button>
        //             <div className="flex gap-4 justify-center items-center mr-4 max-sm:hidden">
        //                 <h3 className="font-medium  text-2xl text-[#333333]">{userName ? userName : ""}</h3>
        //                 <img src="./public/kaiden_1.jpeg" alt="" width={50} height={50} className="rounded-full " />
        //             </div>
        //             <div className="button-container-1 max-sm:hidden">
        //                 <span className="mas font-medium">{userName ? "Log Out" : "Login"}</span>
        //                 <button onClick={handleLogout}
        //                 id='work' type="button" name="Hover" className="font-medium">{userName ? "Log Out" : "Login"}</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>

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
                            <img src="./public/kaiden_1.jpeg" alt="" width={50} height={50} className="rounded-full " />
                        </div>
                        <div className="button-container-1">
                            <span className="mas font-medium">{userName ? "Log Out" : "Login"}</span>
                            <button onClick={handleLogout}
                            id='work' type="button" name="Hover" className="font-medium">{userName ? "Log Out" : "Login"}</button>
                        </div>
                    {/* <div className="flex gap-4 justify-center items-center mr-4 max-sm:hidden">
                        <h3 className="font-medium  text-2xl text-[#333333]">{userName ? userName : ""}</h3>
                        <img src="./public/kaiden_1.jpeg" alt="" width={50} height={50} className="rounded-full " />
                    </div>
                    <div className="button-container-1 max-sm:hidden ">
                        <span className="mas font-medium">{userName ? "Log Out" : "Login"}</span>
                        <button onClick={handleLogout}
                        id='work' type="button" name="Hover" className="font-medium">{userName ? "Log Out" : "Login"}</button>
                    </div> */}
                    </ul>
                </nav>
            </div>
    )
}

export default Navbar