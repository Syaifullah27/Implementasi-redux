import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Index"
import { jwtDecode } from "jwt-decode";

// eslint-disable-next-line react/prop-types
const MenuPage = () => {


    const token = localStorage.getItem("access_token")

    const decoded = jwtDecode(token)

    console.log(decoded)



    const handleLogout = () => {
        localStorage.removeItem("access_token")
        window.location.href = "/login"
    }

    
    return (
        <div className="h-screen bg-[#333333]">
            <Navbar userName={decoded.userData.username} handleLogout={handleLogout}/>

            <div className="w-11/12 mx-auto">
                <Link to="/" >
                    <button className=" py-2 text-xl font-medium underline border-none text-[#f5f5f5] hover:text-[#00ff95] transition-all duration-500 ease-in-out"
                    > Back To Home</button>
                </Link>
            </div>

            <div className="w-9/12 mx-auto">
                <div className="mt-4 flex gap-2 justify-center items-center ">
                    <span className="w-9/12 bg-gray-200 h-[1px]"></span>
                    <h1 className='text-center text-3xl w-96 font-medium text-[#f5f5f5]'>Menu Page</h1>
                    <span className="w-9/12 bg-gray-200 h-[1px]"></span>
                </div>
            </div>


            <div className="w-11/12 mx-auto">
                <div className="bg-[#f5f5f5] p-4 w-[210px] rounded-xl shadow-slate-950] shadow-2xl">
                    <img src="kaiden_2.jpeg" alt="" width={200} className=" h-72 rounded-xl"/>
                    <h2 className="text-center font-medium text-xl pt-2">Eleceed</h2>
                </div>
            </div>



        </div>
    )
}

export default MenuPage