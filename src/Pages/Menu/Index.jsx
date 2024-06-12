import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Index"

const MenuPage = () => {
    return (
        <div className="h-screen bg-[#333333]">
            <Navbar />

            <Link to="/">
                <button className="px-4 py-2 text-xl font-medium underline border-none text-[#f5f5f5] hover:text-[#00ff95] transition-all duration-500 ease-in-out"
                > Back To Home</button>
            </Link>

            <div className="w-9/12 mx-auto">
                <div className="mt-4 flex gap-2 justify-center items-center ">
                    <span className="w-9/12 bg-gray-200 h-[1px]"></span>
                    <h1 className='text-center text-3xl w-96 font-medium text-[#f5f5f5]'>Menu Page</h1>
                    <span className="w-9/12 bg-gray-200 h-[1px]"></span>
                </div>
            </div>


            



        </div>
    )
}

export default MenuPage