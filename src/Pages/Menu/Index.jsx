import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Index"
import { jwtDecode } from "jwt-decode";
// import { dummyDatas } from "../../dummDatas";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./menu.css"
// import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MenuPage = () => {
    const [datasMenu, setDatasMenu] = useState([])

    const getMenu = () => {
        axios.get(`https://api.mudoapi.tech/menus?perPage=15`)
            .then((res) => {
                const data = res?.data?.data?.Data
                setDatasMenu(data)
                // console.log(data);
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getMenu()
    }, [])


    const handleDelete = async (id) => {
        const token = localStorage.getItem("access_token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const confirmDelete = confirm("Are you sure you want to delete this menu?")

        if (confirmDelete) {
            try {
                const res = await axios.delete(
                    `https://api.mudoapi.tech/menu/${id}`, config
                )
                getMenu()
            } catch (error) {
                console.log(error?.response);
            }
        }
    }



    const token = localStorage.getItem("access_token")

    const decoded = jwtDecode(token)

    console.log(decoded)



    const handleLogout = () => {
        const logout = confirm("Are you sure you want to log out?")
        if (logout) {
            localStorage.removeItem("access_token")
            window.location.href = "/login"
        }

    }


    const alertDelete = () => {
        return (
        <>
            <div className="fixed top-1/4 left-1/2 ml-[-90px] border-2 border-[#f5f5f5] px-4 py-2 rounded-md bg-red-500 text-[#f5f5f5] pop-up-delete">
                <h1>Berhasil diHapus</h1>
            </div>
        </>
        )
    }

    useEffect(() => {
        alertDelete()
    }, [getMenu])


    return (
        <div className="h-full bg-[#333333] pb-10 max-[765px]:h-full">
            <Navbar userName={decoded.userData.username}
                handleLogout={handleLogout} />

            <div className="pt-28 max-[765px]:pt-20">
                <div className="w-11/12 mx-auto">
                    <Link to="/" >
                        <button className=" py-2 text-xl font-medium underline border-none text-[#f5f5f5] hover:text-[#00ff95] transition-all duration-500 ease-in-out max-sm:text-sm"
                        > Back To Home</button>
                    </Link>
                </div>
                
{alertDelete}

                <div className="w-9/12 mx-auto">
                    <div className="mt-4 flex gap-2 justify-center items-center ">
                        <span className="w-9/12 bg-gray-200 h-[1px]"></span>
                        <h1 className='text-center text-3xl w-96 font-medium text-[#f5f5f5] max-sm:text-xl'>Menu Page</h1>
                        <span className="w-9/12 bg-gray-200 h-[1px]"></span>
                    </div>
                </div>


                <div className="flex w-11/12 mx-auto gap-10 mt-10 justify-center flex-wrap">
                    {datasMenu.map((data) => (
                        <div key={data.id}
                            className="bg-[#f5f5f5] p-4 w-[210px] rounded-xl shadow-slate-950] shadow-2xl max-sm:w-40 max-sm:h-64 max-sm:p-2">
                            <img src={`${data.imageUrl}`} alt="" width={2010} className=" h-72 rounded-xl max-sm:w-full max-sm:h-40" />
                            <p className="text-center font-medium text-xl pt-2">{data.name.substring(0, 13)}</p>
                            <h2 className="text-center font-medium text-sm italic">Rp. {data.price} ribu</h2>
                            <div className="flex justify-center pt-3">
                                <button onClick={() => handleDelete(data.id)}
                                    className="bg-red-500 rounded-lg p-2 text-[#f5f5f5] hover:bg-red-600">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    )
}

export default MenuPage