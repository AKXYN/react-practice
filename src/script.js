import React, { Suspense } from "react"
import ReactDOM from "react-dom/client" 
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import About from "./components/About"
import Error from "./components/Error"
import { Outlet } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu"
import Contact from "./components/Contact"
import ContactClass from "./components/ContactClass"
import useOnlineStatus from "./utils/useOnlineStatus"
// import Cart from "./components/Cart"
// import { useParams } from "react-router-dom"
import { lazy } from "react"

const Cart = lazy(()=>import("./components/Cart"))

const root = ReactDOM.createRoot(document.getElementById("root"))

const AppLayout = () => {
    if(!useOnlineStatus()) return <h1>Fix ur internet u mf</h1>
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/contact",
                element: (
                    <div>
                        <Contact 
                        mail="akshayan027@gmail.com"
                        number="7339286386"/>
                        <ContactClass username="AKXYN"
                        mail="akshayan027@gmail.com"
                        number="7339286386"/>
                    </div>
                )
            },
            {
                path: "/cart",
                element: <Suspense><Cart /></Suspense>
            }
        ]
    },
])



root.render(<RouterProvider router={appRouter}/>)

