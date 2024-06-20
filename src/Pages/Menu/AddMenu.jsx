import { useState } from "react"
// import InputYourImg from "../test/inputYourImg"
import axios from "axios";
import "./menu.css"

// eslint-disable-next-line react/prop-types
const AddMenu = ({getMenu}) => {
    const [successData, setSuccessData] = useState([]);


    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState()
    const [urlImg, setUrlImg] = useState("")
    const [erroData, setErroData] = useState(false)
    const [message, setMessage] = useState("")
    // const [image, setImage] = useState("")
    // const [nameImg, setNameImg] = useState("")


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

    const handleUrlImg = (e) => {
        e.preventDefault()
        setUrlImg(e.target.value)
    }


    const handleAddDataMenu = async () => {
        const token = localStorage.getItem("access_token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const payload = {
            name: name,
            description: desc,
            type: type,
            imageUrl: urlImg,
            price: parseInt(price)

        }
        try {
            const res = await axios.post("https://api.mudoapi.tech/menu", payload, config)
            setMessage(res.data.message)
            getMenu()
            console.log(res.data.message);
            console.log(res);
            const newElement = <div key={successData.length} className="fixed top-1/4 left-1/2 ml-[-90px] border-2 border-[#f5f5f5] px-4 py-2 rounded-md bg-green-600 text-[#f5f5f5] pop-up-delete z-50">
            <h1>Added Successfully</h1>
        </div>;
        setSuccessData([...successData, newElement]);

        setName("")
        setType("")
        setDesc("")
        setPrice("")
        setUrlImg("")
        } catch (error) {
            console.log(error?.response?.data?.message)
            setMessage(error?.response?.data?.message)
        }
    }


    const submitDataMenu = (e) => {
        e.preventDefault()
        if(name=== "" || type === "" || desc === "" || price === "" || urlImg === "") {
            setErroData(true)
            return
        }
            
        // console.log(name, type, desc, price, image, nameImg);
    }



    return (
        <div className="mx-auto pb-10">
                    <h1 className=" text-2xl pb-2 font-medium text-[#f5f5f5] text-center">Add Your Menu</h1>
                    <div className="flex  justify-center flex-wrap  items-center gap-5 pb-5  px-4 py-2 rounded-md  text-[#f5f5f5] max-sm:flex-col">
                        {/* {successData} */}
                        {message === "Menu created successfully." ? 
                        <div>
                            {successData}
                        </div> : <div>
                            {message ? <div className="relative flex justify-center items-center">
                                <h1 className="fixed top-1/4 left-1/4  border-2 border-[#f5f5f5] px-4 py-2 rounded-md bg-red-500 text-[#f5f5f5]  z-50">{message}</h1>
                            </div> : ""}
                        </div>}
                        <div className="flex gap-2 flex-col max-sm:w-full">
                            <label className="text-[#f5f5f5] font-medium">Name</label>
                            <input
                                value={name}
                                onChange={handleName}
                                className={` w-56 h-10 bg-gray-200 text-[#333333] py-2 font-medium rounded-xl placeholder:text-sm  pl-2 placeholder:text-gray-400 outline-none ${name ? "hide-arrow" : ""} max-sm:w-full
                                ${erroData ? "border-2 border-red-500" : ""}`}
                                placeholder="add your favorite menu " />
                        </div>
                        <div className="flex gap-2 flex-col max-sm:w-full">
                            <label className="text-[#f5f5f5] font-medium">Description</label>
                            <textarea
                                value={desc}
                                onChange={handleDesc}
                                className={`pt-2 w-56 h-10 bg-gray-200 text-[#333333] py-2 font-medium rounded-xl placeholder:text-sm  pl-2 placeholder:text-gray-400 outline-none ${desc ? "hide-arrow" : ""} max-sm:w-full
                                ${erroData ? "border-2 border-red-500" : ""}`}
                                placeholder="Describe your favorite menu " />
                        </div>
                        <div className="flex gap-2 flex-col max-sm:w-full">
                            <label className="text-[#f5f5f5] font-medium">Type</label>
                            <select
                                value={type}
                                onChange={handleType}
                                defaultValue={""}
                                className={`w-56 h-10 bg-gray-200 text-gray-400 py-2 font-medium rounded-xl placeholder:text-sm  pl-2 placeholder:text-gray-300" ${type ? "hide-arrow" : ""} max-sm:w-full
                                ${erroData ? "border-2 border-red-500" : ""}`}>
                                <option value="" disabled hidden>Type</option>
                                <option value="beverage" className="text-[#333333]">beverage</option>
                                <option value="main-dish" className="text-[#333333]">main-dish</option>
                            </select>
                        </div>
                        <div className="flex gap-2 flex-col max-sm:w-full">
                            <label className="text-[#f5f5f5] font-medium">Price</label>
                            <input
                                value={price}
                                onChange={handlePrice}
                                type="number" placeholder="Price of your favorite menu"
                                className={`w-56 h-10 bg-gray-200 text-[#333333] py-2 font-medium rounded-xl placeholder:text-sm  pl-2 placeholder:text-gray-400 outline-none ${price ? "hide-arrow" : ""} max-sm:w-full
                                ${erroData ? "border-2 border-red-500" : ""}`} />
                        </div>
                        {/* <div className="flex gap-2 flex-col max-sm:w-full">
                            <label className="text-[#f5f5f5] font-medium max-sm:ml-0 ">Image</label>
                            <InputYourImg image={image} setImage={setImage} nameImg={nameImg} setNameImg={setNameImg} erroData={erroData}/>
                        </div> */}
                        <div className="flex gap-2 flex-col max-sm:w-full">
                            <label className="text-[#f5f5f5] font-medium">Image</label>
                            <input
                                value={urlImg}
                                onChange={handleUrlImg}
                                className={` w-56 h-10 bg-gray-200 text-[#333333] py-2 font-medium rounded-xl placeholder:text-sm  pl-2 placeholder:text-gray-400 outline-none ${urlImg ? "hide-arrow" : ""} max-sm:w-full
                                ${erroData ? "border-2 border-red-500" : ""}`}
                                placeholder="add img menu " />
                        </div>

                    </div>
                        <div className=" flex justify-center items-center ">
                            <button onClick={handleAddDataMenu || submitDataMenu}
                            className="w-24 h-10 mt-7 rounded-xl bg-[#f5f5f5] text-[#333333] py-2 font-medium hover:bg-[#00ff95] hover:text-[#f5f5f5] transition-all duration-500 ease-in-out max-sm:w-56">Add</button>
                        </div>
                </div>
    )
}

export default AddMenu