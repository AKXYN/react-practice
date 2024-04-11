import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
    const [status,setStatus] = useState("Login")
    return (
        <div className="flex justify-between bg-purple-400 shadow-lg items-center h-28 w-auto">
            <div className="h-28">
                <Link to="/">
                <img className="h-28"
                src={LOGO_URL}></img>
                </Link>
            </div>
            <div className="w-9/12">
                <ul className="flex justify-between">
                    <li className="m-2 font-bold">Online status {useOnlineStatus()?"✅":"❌"}</li>
                    <li className="m-2 hover:underline font-bold"><Link to="/">Home</Link></li>
                    <li className="m-2 hover:underline font-bold"><Link to="/about">About Us</Link></li>
                    <li className="m-2 hover:underline font-bold"><Link to="/contact">Contact Us</Link></li>
                    <li className="m-2 hover:underline font-bold"><Link to="/cart">Cart</Link></li>
                    <button className="m-2 font-bold w-24 h-8 hover:border hover:border-black bg-green-500 rounded-lg" onClick={()=>{
                        setStatus(status==="Login"?"Logout":"Login")
                    }}>{status}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header