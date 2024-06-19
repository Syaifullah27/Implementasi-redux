/* eslint-disable react/prop-types */
import { useRef } from "react"


// eslint-disable-next-line react/prop-types
const InputYourImg = ({image,setImage,nameImg,setNameImg,erroData}) => {

    const inputRef = useRef(null)
    
    // console.log(image);

    const handleImgClik = () => {
        inputRef.current.click()
    }

    const handleImgChange = (e) => {
        const file = e.target.files[0]
        console.log(file)
        setImage(URL.createObjectURL(file))
        setNameImg(e.target.files[0].name)
        // console.log(e.target.files[0].name);
    }

    const handleCancelImg = () => {
        setImage("")
        setNameImg("")
    }


    return (
        <div className="flex flex-col  justify-center items-start gap-3 relative w-72 max-sm:w-full max-sm:items-start ">
            <div onClick={handleImgClik}
            className={`cursor-pointer rounded-xl h-10 w-56  bg-gray-200 text-[#333333] relative max-sm:w-full ${image ? "hide-arrow" : ""}
            ${erroData ? "border-2 border-red-500" : ""}`}>

            {image ? (<div className='text-center pt-2'>
                <img src={image} alt="" style={{ border: '1px solid black',borderRadius: '5px', width: '30px', height: '30px', marginLeft: '10px', position: 'absolute', top: '4px' }} />
                <p className="text-[#333333] relative ml-5 text-sm ">{nameImg.substring(0, 15)}...</p>
            </div>) : <p className='pl-2 text-sm font-medium pt-3  text-gray-400'>Upload your img</p>}

            <input type="file" ref={inputRef} onChange={handleImgChange} style={{ display: 'none' }} />


            </div>
            <button onClick={handleCancelImg}
            className='absolute left-56 ml-2 border-2 border-red-500 rounded-lg w-8 h-8 text-[#f5f5f5] bg-red-500 hover:bg-red-600 max-sm:right-2 max-sm:left-auto max-sm:h-6 max-sm:w-6 max-sm:rounded-full max-sm:text-sm' 
            hidden={image ? false : true}>X</button>
        </div>
    )
}

export default InputYourImg