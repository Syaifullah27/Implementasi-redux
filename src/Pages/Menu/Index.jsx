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
    const [page, setPage] = useState(1)
    const [elements, setElements] = useState([]);
    // const [messageDelete, setMessageDelete] = useState("");




    const getMenu = () => {
        axios.get(`https://api.mudoapi.tech/menus?perPage=10&page=${page}`)
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


    useEffect(() => {
        getMenu()
    }, [page])



    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const handleNext = () => {
        setPage(page + 1)
        scrollToTop()
    }

    const handlePrev = () => {
        setPage(page - 1)
        scrollToTop()
    }



    const handleDelete = async (id) => {
        const token = localStorage.getItem("access_token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const confirmDelete = confirm("Are you sure you want to delete this menu?")

        if (confirmDelete) {
            const newElement = <div key={elements.length} className="fixed top-1/4 left-1/2 ml-[-90px] border-2 border-[#f5f5f5] px-4 py-2 rounded-md bg-red-500 text-[#f5f5f5] pop-up-delete">
                <h1>Berhasil diHapus</h1>
            </div>;
            setElements([...elements, newElement]);
            try {
                const res = await axios.delete(
                    `https://api.mudoapi.tech/menu/${id}`, config
                )
                console.log(res);
                // setMessageDelete(res.data.message)
                // console.log(messageDelete);
                getMenu()
            } catch (error) {
                // setMessageDelete(error.response.data.message)
                // console.log(error.response.data.message);
                console.log(error?.response);
            }
        }
    }



    const token = localStorage.getItem("access_token")

    const decoded = jwtDecode(token)

    // console.log(decoded)



    const handleLogout = () => {
        const logout = confirm("Are you sure you want to log out?")
        if (logout) {
            localStorage.removeItem("access_token")
            window.location.href = "/login"
        }

    }



    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState()


    const handleName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleType = (e) => {
        e.preventDefault()
        setType(e.target.value)
    }

    const handleDesc = (e) => {
        e.preventDefault()
        setDesc(e.target.value)
    }

    const handlePrice = (e) => {
        e.preventDefault()
        setPrice(e.target.value)
    }






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

                <div>
                    {elements}
                </div>

                <div className="w-11/12 mx-auto pb-10">
                    <h1 className=" text-2xl pb-2 font-medium text-[#f5f5f5] text-center">Add Your Menu</h1>
                    <div className="flex flex-wrap justify-center items-center gap-5 pb-5 border-2 border-[#f5f5f5] px-4 py-2 rounded-md  text-[#f5f5f5] max-sm:flex-col">
                        <div className="flex gap-2 flex-col max-sm:w-full">
                            <label className="text-[#f5f5f5] font-medium">Name</label>
                            <input
                                value={name}
                                onChange={handleName}
                                className={` w-56 h-10 bg-gray-200 text-[#333333] py-2 font-medium rounded-xl placeholder:text-sm  pl-2 placeholder:text-gray-400 outline-none ${name ? "hide-arrow" : ""} max-sm:w-full`}
                                placeholder="add your favorite menu " />
                        </div>
                        <div className="flex gap-2 flex-col max-sm:w-full">
                            <label className="text-[#f5f5f5] font-medium">Description</label>
                            <textarea
                                value={desc}
                                onChange={handleDesc}
                                className={`pt-2 w-56 h-10 bg-gray-200 text-[#333333] py-2 font-medium rounded-xl placeholder:text-sm  pl-2 placeholder:text-gray-400 outline-none ${desc ? "hide-arrow" : ""} max-sm:w-full`}
                                placeholder="Describe your favorite menu " />
                        </div>
                        <div className="flex gap-2 flex-col max-sm:w-full">
                            <label className="text-[#f5f5f5] font-medium">Type</label>
                            <select
                                value={type}
                                onChange={handleType}
                                defaultValue={""}
                                className={`w-56 h-10 bg-gray-200 text-gray-400 py-2 font-medium rounded-xl placeholder:text-sm  pl-2 placeholder:text-gray-300" ${type ? "hide-arrow" : ""} max-sm:w-full`}>
                                <option value="" disabled hidden>Type</option>
                                <option value="beverage" className="text-[#333333]">beverage</option>
                            </select>
                        </div>
                        <div className="flex gap-2 flex-col max-sm:w-full">
                            <label className="text-[#f5f5f5] font-medium">Price</label>
                            <input
                                value={price}
                                onChange={handlePrice}
                                type="number" placeholder="Price of your favorite menu"
                                className={`w-56 h-10 bg-gray-200 text-[#333333] py-2 font-medium rounded-xl placeholder:text-sm  pl-2 placeholder:text-gray-400 outline-none ${price ? "hide-arrow" : ""} max-sm:w-full`} />
                        </div>

                        <button className="w-24 h-10 mt-7 rounded-xl bg-[#f5f5f5] text-[#333333] py-2 font-medium hover:bg-[#00ff95] hover:text-[#f5f5f5] transition-all duration-500 ease-in-out max-sm:w-56">Add</button>
                    </div>
                </div>


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
                            className="bg-[#f5f5f5] p-4 w-[210px] rounded-xl shadow-slate-950] shadow-2xl max-sm:w-52 max-sm:h-72 max-sm:p-2">
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
                <div className="w-9/12 mx-auto flex gap-5 justify-center relative  pt-10">
                    <button
                        className="underline font-medium text-xl text-[#f5f5f5] hover:text-[#00ff95] transition-all duration-500 ease-in-out"
                        hidden={page === 1}
                        onClick={handlePrev}>Prev</button>
                    <p className="text-[#f5f5f5] text-2xl "> {page}</p>
                    <button
                        className="underline font-medium text-xl text-[#f5f5f5] hover:text-[#00ff95] transition-all duration-500 ease-in-out"
                        onClick={handleNext}
                        hidden={datasMenu.length < 10}>Next</button>
                </div>
            </div>



        </div>
    )
}

export default MenuPage