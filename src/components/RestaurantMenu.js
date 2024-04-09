import { useEffect, useState } from "react"
import { API_MENU_LINK, CLOUDINARY_IMG_PREFIX, API_MENU_LINK_PREFIX, API_MENU_LINK_SUFFIX } from "../utils/constants"
// import { json } from "react-router-dom"
import { useParams } from "react-router-dom"

const MenuCard = (props) => {
    return (
        <div className="flex m-4 border border-solid items-center drop-shadow-lg h-32 rounded-3xl hover:drop-shadow-2xl hover:cursor-pointer bg-purple-100 hover:bg-purple-200 hover:border-solid hover:border-black hover:border">
            <img className="h-full mr-[1000px] rounded-3xl border-black border"
            src={CLOUDINARY_IMG_PREFIX+props?.link} />
            <div className="font-bold">
                <h3>{props.name}</h3>
                <h3>{"Rs. "+props.price}</h3>
            </div>
        </div>
    )
}

const RestaurantMenu = () => {
    const params = useParams()
    console.log(params)
    useEffect(()=>{
        fetchMenu()
    },[])
    const [menuFromAPI,setMenuFromAPI] = useState([])
    const fetchMenu = async () => {
        const link = API_MENU_LINK_PREFIX+params.resId+API_MENU_LINK_SUFFIX
        const data = await fetch(link)
        const json = await data.json()
        setMenuFromAPI(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        console.log(json)
        console.log(menuFromAPI)
    }
    return (
        <div>
            <h1 className="font-bold m-8 text-3xl">Menu</h1>
            {menuFromAPI?.map(
            (menu) => <MenuCard 
            key={menu?.card?.info?.id}
            name={menu?.card?.info?.name} 
            price={menu?.card?.info?.price/100}
            link={menu?.card?.info?.imageId}
            />
            )
            }
        </div>

    )
}

export default RestaurantMenu