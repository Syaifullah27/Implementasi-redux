import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

const LoginPage = () => {

    const [userEmail, setUserEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleUserEmail = (e) => {
        setUserEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            username: userEmail,
            password: password
        }

        // axios.post("https://api.mudoapi.tech/login", payload)
        // .then((res) => {
        //     console.log(res)
        // })
        // .catch((err) => {
        //     console.log(err?.response)
        // })

        try {
            const res = await axios.post("https://api.mudoapi.tech/login", payload)
            console.log(res);
        } catch (error) {
            console.log(error?.response);
        }

    }

    // console.log(userEmail, password);

    return (
        <div className='flex h-screen'>
            <div className='flex w-7/12 justify-center items-center'>
                <div className='w-7/12 flex flex-col gap-3'>
                    <div className="mb-10">
                        <h1 className='font-semibold text-3xl  tracking-wider'>Welcome Back!</h1>
                        <p className='font-medium'>Enter your credentials to access your account</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold'>Email Address</label>
                            <input
                                onChange={handleUserEmail}
                                placeholder='Enter your email'
                                className='font-medium text-sm
                                border px-2 py-1 outline-none border-gray-300 rounded-xl placeholder:text-sm placeholder:text-gray-300' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold'>Password</label>
                            <input
                                onChange={handlePassword}
                                placeholder="Name"
                                className='font-medium text-sm
                                border px-2 py-1 outline-none border-gray-300 rounded-xl placeholder:text-sm placeholder:text-gray-300' />
                        </div>
                    </div>
                    <div className='flex gap-3 text-sm'>
                        <input type="checkbox" />
                        <p>remember me for 30 days</p>
                    </div>
                    <button
                        onClick={handleSubmit}
                        className='mt-4 px-2 py-[5px] rounded-xl bg-[#3A5B22] text-white font-semibold text-base tracking-wide'>Login</button>

                    <div className="mt-4 flex gap-2 justify-center items-center">
                        <span className="w-full bg-gray-200 h-[1px]"></span>
                        <p className='text-center text-sm'>or</p>
                        <span className="w-full bg-gray-200 h-[1px]"></span>
                    </div>

                    <div className='w-full flex gap-3 justify-between pt-10 '>
                        <Link>
                            <div className='gap-2 flex justify-center items-center border border-gray-300 px-2 p-1 rounded-xl w-52'>
                                <img src="./public/google.png" alt="google" width={25} />
                                <p className='text-sm font-medium'>Sign In with Google</p>
                            </div>
                        </Link>

                        <Link>
                            <div className='gap-2 flex justify-center items-center border border-gray-300 px-2 p-1 rounded-xl w-52'>
                                <img src="./public/apple.png" alt="google" width={22} />
                                <p className='text-sm font-medium'>Sign In with Apple</p>
                            </div>
                        </Link>
                    </div>

                    <p className='mt-4 text-center font-medium'>Don't have an account? <Link to="/register" className='text-blue-700'>Sign Up</Link></p>


                </div>
            </div>
            <div className='w-5/12'>
                <img src="./public/main_banner.png" alt="gambar"
                    className='h-full w-full' />
            </div>
        </div>

    )
}

export default LoginPage