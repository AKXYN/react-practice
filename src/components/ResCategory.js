import { useState } from "react"
import {MenuCard} from "./RestaurantMenu"

const ResCategory = (props) => {
    const [showItems,setShowItems] = useState(false)
    const {category} = props
    const items = category?.card?.card?.itemCards
    const title = category?.card?.card?.title
    return (
        <div className="p-4 m-4 bg-purple-200 rounded-lg shadow-lg hover:shadow-2xl">
            <div className="flex justify-between hover:cursor-pointer" onClick={()=>{setShowItems(!showItems)}}>
                <div>
                    <h1 className="font-bold text-2xl">{title} ({items.length})</h1>
                </div>
                <div>
                <h1 className="font-bold text-2xl mr-8">↓</h1>
                </div>
            </div>
            { showItems && (
            <div>
                {items?.map(
                    (menu) => <MenuCard 
                    key={menu?.card?.info?.id}
                    name={menu?.card?.info?.name} 
                    price={menu?.card?.info?.price/100 || menu?.card?.info?.defaultPrice/100}
                    link={menu?.card?.info?.imageId}
                    /> 
                )}
            </div>
            )}
        </div>
    )
}

export default ResCategory 