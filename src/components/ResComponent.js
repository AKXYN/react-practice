const ResComponent = (props) => {
    // console.log(props)
    const {name,style,rating,time,link} = props
    return (
        <div className="p-8 border shadow-lg bg-purple-200 w-52 h-[400px] rounded-lg hover:bg-purple-300 hover:shadow-2xl hover:border-black">
            <h3 className="font-bold h-20">{name}</h3>
            <img 
            className="w-40 h-32 rounded-lg"
            src={link}
            />
            <h4 className="mt-4">{style}</h4>
            <h4>{rating+" stars"}</h4>
            <h4>{time}</h4>
        </div>
    )
}

export const Enhanced = (ResComponent) => {
    // console.log("Inside TopRatedRes")
    // console.log(props)
    const NewComponent = (props) => {
        return (
            <div>
                <label className="absolute ml-24 bg-black text-white rounded-lg w-28 px-4">TOP RATED</label>
                <ResComponent {...props}
                />
            </div>
        )
    }
    return NewComponent
}

export const TopRatedRes = Enhanced(ResComponent)



export default ResComponent