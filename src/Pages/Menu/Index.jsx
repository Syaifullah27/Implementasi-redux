import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Index"
import { jwtDecode } from "jwt-decode";

// eslint-disable-next-line react/prop-types
const MenuPage = () => {


    const token = localStorage.getItem("access_token")

    const decoded = jwtDecode(token)

    console.log(decoded)



    const handleLogout = () => {
        const logout = confirm("Are you sure you want to log out?")
        if(logout){
            localStorage.removeItem("access_token")
            window.location.href = "/login"
        }
    }

    
    return (
        <div className="h-full bg-[#333333] pb-10">
            <Navbar userName={decoded.userData.username} handleLogout={handleLogout}/>

            <div className="pt-28 max-[765px]:pt-20">
                <div className="w-11/12 mx-auto">
                    <Link to="/" >
                        <button className=" py-2 text-xl font-medium underline border-none text-[#f5f5f5] hover:text-[#00ff95] transition-all duration-500 ease-in-out max-sm:text-sm"
                        > Back To Home</button>
                    </Link>
                </div>

                <div className="w-9/12 mx-auto">
                    <div className="mt-4 flex gap-2 justify-center items-center ">
                        <span className="w-9/12 bg-gray-200 h-[1px]"></span>
                        <h1 className='text-center text-3xl w-96 font-medium text-[#f5f5f5] max-sm:text-xl'>Menu Page</h1>
                        <span className="w-9/12 bg-gray-200 h-[1px]"></span>
                    </div>
                </div>


                <div className="flex w-11/12 mx-auto gap-10 mt-10 flex-wrap">
                        <div className="bg-[#f5f5f5] p-4 w-[210px] rounded-xl shadow-slate-950] shadow-2xl max-sm:w-full">
                            <img src="kaiden_2.jpeg" alt="" width={200} className=" h-72 rounded-xl max-sm:w-full"/>
                            <p className="text-center font-medium text-xl pt-2">Kaiden</p>
                            <h2 className="text-center font-medium text-sm">Eleceed</h2>
                        </div>


                        <div className="bg-[#f5f5f5] p-4 w-[210px] rounded-xl shadow-slate-950] shadow-2xl max-sm:w-full">
                            <img src="lloyd.jpeg" alt="" width={200} className=" h-72 rounded-xl max-sm:w-full"/>
                            <p className="text-center font-medium text-xl pt-2">Lloyd</p>
                            <h2 className="text-center font-medium text-sm">{"The Greatest Estate Developer"}</h2>
                        </div>
                    </div>
            </div>



        </div>
    )
}

export default MenuPage