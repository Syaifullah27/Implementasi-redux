import "./style.scss"

// eslint-disable-next-line react/prop-types
const Navbar = ({userName, handleLogout}) => {



    return (
        <div className="bg-[#ffcb10] shadow-xl">
            <div className="flex justify-between w-11/12 mx-auto py-2">
                <img src="./public/EsyehaX-logo.png" alt="logo" width={230} className="" />
                <div className="flex gap-4 justify-center items-center">
                    <div className="flex gap-4 justify-center items-center mr-4">
                        <h3 className="font-medium  text-2xl text-[#333333]">{userName ? userName : ""}</h3>
                        <img src="./public/kaiden_1.jpeg" alt="" width={50} height={50} className="rounded-full " />
                    </div>
                    <div className="button-container-1">
                        <span className="mas font-medium">{userName ? "Log Out" : "Login"}</span>
                        <button onClick={handleLogout}
                        id='work' type="button" name="Hover" className="font-medium">{userName ? "Log Out" : "Login"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar