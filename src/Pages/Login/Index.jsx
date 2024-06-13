import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

// eslint-disable-next-line react/prop-types
const LoginPage = () => {

    const [userName, setuUerName] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState(null)
    const [errorLogin, setErrorLogin] = useState(null)


    const navigate = useNavigate()


    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }







    const handleUserName = (e) => {
        setuUerName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            username: userName,
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
            const token = res?.data?.data?.token
                console.log(res)
                console.log(token);
            setToken(token)
            localStorage.setItem("access_token", token)
            setErrorLogin(null)
            setTimeout(() => {
                navigate("/menu")
            }, 500)

        } catch (error) {
                console.log(error?.response);
            setErrorLogin(error?.response?.data?.message)
            setToken(null)
                console.log(errorLogin);
        }
    }

    const handleValidateInput = () => {
            if (!userName.length || !password.length) {
                return true
            } else {
                return false
            }         
    }


    const handleMessege = () => {
        if(errorLogin) {
            return <p className="text-red-500">{errorLogin}</p>
        }
        else if(token) {
            return <p className="text-green-500">Login Success</p>
        }
        return null
    }
    

    // console.log(userEmail, password);

    return (
        <div className='flex h-screen bg-[#F5F5F5]'>
            <div className='flex w-7/12 justify-center items-center'>
                <div className='w-7/12 flex flex-col gap-3'>
                    <div className="mb-10">
                        <h1 className='font-semibold text-3xl'>Welcome Back!</h1>
                        <p className='font-medium'>Enter your credentials to access your account</p>
                    </div>
                    
            {
                handleMessege()
            }


                    <div className="flex flex-col gap-6">
                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold'>Username</label>
                            <input
                                type="email"
                                value={userName}
                                onChange={handleUserName}
                                placeholder='Enter your email'
                                className='font-medium text-sm bg-[#F5F5F5]
                                border px-2 py-1 outline-none border-gray-300 rounded-lg placeholder:text-sm placeholder:text-gray-300' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className="flex justify-between items-center">
                                <label className='font-semibold'>Password</label>
                                <a href="" className="text-blue-800 text-[13px] font-medium">forgot password</a>
                            </div>
                            <input
                                type={type}
                                name="password"
                                value={password}
                                onChange={handlePassword}
                                placeholder='Enter your password'
                                className='font-medium text-sm bg-[#F5F5F5]
                                border px-2 py-2 outline-none border-gray-300 rounded-lg placeholder:text-sm placeholder:text-gray-300'
                                autoComplete="current-password" />
                            <span className=" flex justify-end items-center" onClick={handleToggle}>
                                <Icon className="absolute mr-10 mb-11 text-gray-500" icon={icon} size={20} />
                            </span>
                        </div>
                    </div>
                    <div className='flex gap-3 text-sm'>
                        <input type="checkbox" />
                        <p>remember me for 30 days</p>
                    </div>
                    <button
                        disabled={handleValidateInput()}
                        onClick={handleSubmit}
                        className='mt-4 px-2 py-[5px] rounded-xl bg-[#3A5B22] text-white font-semibold text-base tracking-wide hover:bg-[#2F4C1B]'>Login</button>

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

                    <p className='mt-4 text-center font-medium'>Don&#39;t have an account? <Link to="/register" className='text-blue-700'>Sign Up</Link></p>


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