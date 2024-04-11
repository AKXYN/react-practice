const ShimmerCard = () => {
    return (
    <div className="p-8 shadow-lg bg-gray-500 w-52 h-[400px] rounded-lg m-8">
        <div className="bg-gray-300 h-8 w-36 rounded-lg"></div>
        <div className="bg-gray-300 h-32 w-36 mt-12 rounded-lg"></div>
        <div className="bg-gray-300 h-6 w-36 mt-4 rounded-lg"></div>
        <div className="bg-gray-300 h-6 w-36 mt-4 rounded-lg"></div>
        <div className="bg-gray-300 h-6 w-36 mt-4 rounded-lg"></div>
    </div> 
    )
}

const Shimmer = () => {
    return <div className="flex flex-wrap mt-24">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        {/* <div className="h-64 w-40 bg-gray-400 border border-solid m-8"></div>
        <div className="h-64 w-40 bg-gray-400 border border-solid m-8"></div>
        <div className="h-64 w-40 bg-gray-400 border border-solid m-8"></div>
        <div className="h-64 w-40 bg-gray-400 border border-solid m-8"></div>
        <div className="h-64 w-40 bg-gray-400 border border-solid m-8"></div>
        <div className="h-64 w-40 bg-gray-400 border border-solid m-8"></div>
        <div className="h-64 w-40 bg-gray-400 border border-solid m-8"></div>
        <div className="h-64 w-40 bg-gray-400 border border-solid m-8"></div>
        <div className="h-64 w-40 bg-gray-400 border border-solid m-8"></div> */}
        {/* <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div> */}
    </div>
}

export default Shimmer