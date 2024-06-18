import { useState } from "react"
import InputYourImg from "../test/inputYourImg"

const AddMenu = () => {


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
        <div className="w-11/12 mx-auto pb-10">
                    <h1 className=" text-2xl pb-2 font-medium text-[#f5f5f5] text-center">Add Your Menu</h1>
                    <div className="flex flex-col flex-wrap justify-center items-center gap-5 pb-5 border-2 border-[#f5f5f5] px-4 py-2 rounded-md  text-[#f5f5f5] max-sm:flex-col">
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
                        <div className="flex gap-2 flex-col max-sm:w-full  ">
                            <label className="text-[#f5f5f5] font-medium ml-8 max-sm:ml-0">Image</label>
                            <InputYourImg />
                        </div>

                        <button className="w-24 h-10 mt-7 rounded-xl bg-[#f5f5f5] text-[#333333] py-2 font-medium hover:bg-[#00ff95] hover:text-[#f5f5f5] transition-all duration-500 ease-in-out max-sm:w-56">Add</button>
                    </div>
                </div>
    )
}

export default AddMenu