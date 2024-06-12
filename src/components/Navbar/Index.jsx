import "./style.scss"

const Navbar = () => {
    return (
        <div className="flex justify-between px-10 bg-[#ffcb10] shadow-xl">
            <img src="./public/EsyehaX-logo.png" alt="logo" width={230} className="" />
            <div className="flex gap-4 justify-center items-center">
                <div className="flex gap-4 justify-center items-center mr-4">
                    <h3 className="font-medium  text-2xl text-[#333333]">EsyehaX</h3>
                    <img src="./public/kaiden_1.jpeg" alt="" width={50} height={50} className="rounded-full " />
                </div>
                <div className="button-container-1">
                    <span className="mas font-medium">Log Out</span>
                    <button id='work' type="button" name="Hover" className="font-medium">Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar