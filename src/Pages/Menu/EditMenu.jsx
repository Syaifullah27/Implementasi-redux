import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"

const EditMenuPage = () => {
const [name, setName] = useState("")
const [desc, setDesc] = useState("")
const [type, setType] = useState("")
const [price, setPrice] = useState()
const [urlImg, setUrlImg] = useState("")
const navigate = useNavigate()
const [message, setMessage] = useState("")


    const getDataMenuDetail = async () => {
        const res = await axios.get(`https://api.mudoapi.tech/menu/${params.id}`)
        console.log(res);
        setName(res.data.data.name)
        setDesc(res.data.data.description)
        setType(res.data.data.type)
        setPrice(res.data.data.price)
        setUrlImg(res.data.data.imageUrl)
        console.log(name, desc, type, price, urlImg);
    }

    const handleName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleDesc = (e) => {
        e.preventDefault()
        setDesc(e.target.value)
    }

    const handleType = (e) => {
        e.preventDefault()
        setType(e.target.value)
    }

    const handlePrice = (e) => {
        e.preventDefault()
        setPrice(e.target.value)
    }

    const handleUrlImg = (e) => {
        e.preventDefault()
        setUrlImg(e.target.value)
    }

    useEffect(() => {
        getDataMenuDetail()
    }, [])

    const handleEditMenu = async () => {
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
            const res = await axios.put(`https://api.mudoapi.tech/menu/${params.id}`, payload, config)
            console.log(res);
            setMessage(res.data.message)
            setTimeout(() => {
                navigate("/menu")
            },1000)
        } catch (error) {
            console.log(error?.response);
            setMessage(error?.response?.data?.message)
        }
    }

    const params = useParams()
    return (
        <div className="bg-[#333333] h-screen text-[#f5f5f5] flex flex-col gap-10">
            <h1>menu ke -{params.id}</h1>
            {message && <h1>{message}</h1>}
        <div className="flex gap-4">
            <label htmlFor="">name</label>
            <input type="text" 
            value={name}
            onChange={handleName}
            className="border-2 border-[#f5f5f5] text-[#333333]"/>
        </div>
        <div className="flex gap-4">
            <label htmlFor="">desc</label>
            <input type="text" 
            value={desc}
            onChange={handleDesc}
            className="border-2 border-[#f5f5f5]  text-[#333333]"/>
        </div>
        <div className="flex gap-4">
            <label htmlFor="">type</label>
            <select className=" text-[#333333]" value={type} onChange={handleType}>
                <option value="beverage">beverage</option>
                <option value="main-dish">main-dish</option>
            </select>
        </div>
        <div className="flex gap-4">
            <label htmlFor="">price</label>
            <input type="text" 
            value={price}
            onChange={handlePrice}
            className="border-2 border-[#f5f5f5]  text-[#333333]"/> 
        </div>
        <div className="flex gap-4">
            <label htmlFor="">image</label>
            <input type="text" 
            value={urlImg}
            onChange={handleUrlImg}
            className="border-2 border-[#f5f5f5]  text-[#333333]"/>
        </div>
        
        <button onClick={handleEditMenu}
        className="bg-orange-500 rounded-lg hover:bg-orange-600 p-2 text-[#f5f5f5] font-medium">Edit</button>

        </div>
    )
}

export default EditMenuPage