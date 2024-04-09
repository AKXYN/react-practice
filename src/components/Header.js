import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
    const [status,setStatus] = useState("Login")
    return (
        <div className="h-32 flex justify-between border bg-purple-400 shadow-lg">
            <div className="h-32 w-32 align-top">
                <img className="h-32 w-32 align-top"
                src={LOGO_URL}></img>
            </div>
            <div className="h-full ml-12">
                <ul className="flex m-4">
                    <li className="m-8 font-bold">Online status {useOnlineStatus()?"✅":"❌"}</li>
                    <li className="m-8 font-bold hover:underline"><Link to="/">Home</Link></li>
                    <li className="m-8 font-bold hover:underline"><Link to="/about">About Us</Link></li>
                    <li className="m-8 font-bold hover:underline"><Link to="/contact">Contact Us</Link></li>
                    <li className="m-8 font-bold hover:underline"><Link to="/cart">Cart</Link></li>
                    <button className="m-8 font-bold w-24 h-8 border bg-green-500 rounded-lg" onClick={()=>{
                        setStatus(status==="Login"?"Logout":"Login")
                    }}>{status}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header