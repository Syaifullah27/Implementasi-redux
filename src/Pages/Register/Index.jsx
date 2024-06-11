import { Link } from "react-router-dom"

const RegisterPage = () => {
    return (
        <div className='flex h-screen bg-[#F5F5F5]'>
            <div className='flex w-7/12 justify-center items-center'>
                <div className='w-7/12 flex flex-col gap-3'>
                    <h1 className=' font-semibold text-3xl mb-8 tracking-wider'>Get Started Now</h1>
                    <div className="flex flex-col gap-6">
                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold'>Name</label>
                            <input placeholder='Your Name'
                                className='font-medium text-sm bg-[#F5F5F5]
                                border px-2 py-1 outline-none border-gray-300 rounded-lg placeholder:text-sm placeholder:text-gray-300' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold'>Email Address</label>
                            <input placeholder='Enter your email'
                                className='font-medium text-sm bg-[#F5F5F5]
                                border px-2 py-1 outline-none border-gray-300 rounded-lg placeholder:text-sm placeholder:text-gray-300' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold'>Password</label>
                            <input placeholder='Name'
                                className='font-medium text-sm bg-[#F5F5F5]
                                border px-2 py-1 outline-none border-gray-300 rounded-lg placeholder:text-sm placeholder:text-gray-300' />
                        </div>
                    </div>
                    <div className='flex gap-3 text-sm'>
                        <input type="checkbox" />
                        <p>I agree with <a href="" className='underline'>terms & policy</a></p>
                    </div>
                    <button className='mt-4 px-2 py-1 rounded-xl bg-[#3A5B22] text-white font-semibold tracking-wide'>SignUp</button>

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

                    <p className='mt-4 text-center font-medium'>Have an account? <Link to="/login" className='text-blue-700'>Sign In</Link></p>


                </div>
            </div>
            <div className='w-5/12'>
                <img src="./public/main_banner.png" alt="gambar"
                    className='h-full w-full' />
            </div>
        </div>
    )
}

export default RegisterPage
