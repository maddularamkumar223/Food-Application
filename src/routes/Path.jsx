import {createBrowserRouter} from "react-router-dom"
import Login from "../pages/Login"
import App from "../App"
import Signup from "../pages/Signup"
import Cart from "../pages/Cart"
import Home from "../components/Home"



const Path = createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
        path:"/login",
        element:<Login/>
    },{
        path:"/signup",
        element:<Signup/>
    },{
        path:"/cart",
        element:<Cart/>
    }]
}])
export default Path