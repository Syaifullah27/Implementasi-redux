import { useRef } from 'react'
import { useState } from 'react'

const UploadImg = () => {

    const inputRef = useRef(null)
    const [image, setImage] = useState("")
    // console.log(image);
    // const [nameImg, setNameImg] = useState("")

    const handleImgClik = () => {
        inputRef.current.click()
    }

    const handleImgChange = (e) => {
        const file = e.target.files[0]
        console.log(file)
        setImage(URL.createObjectURL(file))
        // setNameImg(e.target.files[0].name)
        // console.log(e.target.files[0].name);
    }

    const handleCancelImg = () => {
        setImage("")
        // setNameImg("")
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Upload Img</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                    onClick={handleImgClik}
                    style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '10px', border: '1px solid black', borderRadius: "50%", width: '200px', height: '200px' }}>
                    {image ? <img src={image} alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} /> : <p>chose img</p>}
                    <input type="file" ref={inputRef} onChange={handleImgChange} style={{ display: 'none' }} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button 
                    className='mt-7 bg-red-500 rounded-lg hover:bg-red-600 p-2 text-[#f5f5f5] font-medium'
                    hidden={image ? false : true}
                    onClick={handleCancelImg}
                    >Cancel img</button>
            </div>

            

            
        </div>
    )
}

export default UploadImg
