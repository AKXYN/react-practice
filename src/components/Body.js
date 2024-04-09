// import Search from "./Search"
import ResComponent from "./ResComponent"
import { API_LINK } from "../utils/constants"
import { CLOUDINARY_IMG_PREFIX } from "../utils/constants"
// import { CORS_PROXY_PREF } from "../utils/constants"
import { useState } from "react"
import { useEffect} from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
// import useOnlineStatus from "../utils/useOnlineStatus"

let cardsFromAPI = []
let has_filtered=false

const Body = () => {

    const [powerfulCards,setPowerfulCards] = useState([])
    const [searchText,setSearchText] = useState("")
    
    useEffect(()=>{fetchData()},[])
    const fetchData = async () => {
        const data = await fetch(API_LINK)
        const json = await data.json()
        cardsFromAPI = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setPowerfulCards(cardsFromAPI)
    };

    if(cardsFromAPI?.length===0) {
        return (
            <div>
                {/* <Search/> */}
                <Shimmer />
            </div>
        )
    }

    return (
        <div>
            <div className="flex m-5">
                <div className="search-box">
                    <input className="border border-solid rounded-lg border-black" type="text" value={searchText} onChange={
                        (e)=>{
                            setSearchText(e.target.value)
                        }}/>
                    <button class="mx-5 border bg-green-500 rounded-lg font-bold w-20" onClick={()=>{
                        setPowerfulCards(cardsFromAPI?.filter(
                            (res) => (res?.info?.name).toLowerCase().includes(searchText.toLocaleLowerCase())
                        ))
                    }}>Search</button>
                </div>
                <button className="mx-10 w-52 border bg-green-500 rounded-lg font-bold w-200" onClick={()=>{
                    if(has_filtered) filtered=cardsFromAPI
                    else{
                        filtered = cardsFromAPI?.filter(
                            (res) => res.info.avgRating>=4.5
                        )
                    }
                    has_filtered = ! has_filtered
                    setPowerfulCards(filtered)
                }}>
                    Top rated Restaurants
                </button>
            </div>
            <div className="flex flex-wrap">
                {/* CHECK IF RESTAURANT CARDS ARE CLICKABLE
                OR NOT IN THE MORNING WHEN THE 
                API IS WORKING*/}
                {powerfulCards?.map(card => 
                <Link to={"/restaurant/"+card?.info?.id}>
                    <ResComponent 
                        key = {card?.info?.id}
                        name={card?.info?.name}
                        style={card?.info?.cuisines.join(", ")}
                        rating={card?.info?.avgRating}
                        time={card?.info?.sla?.slaString}
                        link={CLOUDINARY_IMG_PREFIX+card?.info?.cloudinaryImageId} />
                </Link>)}
            </div>
        </div>
    )
}

export default Body