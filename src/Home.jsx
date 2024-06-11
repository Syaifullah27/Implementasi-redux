import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Home Page</h1>
            <div className="mt-10 justify-center  flex gap-4 text-blue-700">
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
            <Link to={"/menu"}>Menu</Link>
            </div>
        </div>
    )
}

export default HomePage