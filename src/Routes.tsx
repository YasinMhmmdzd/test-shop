import About from "./Pages/About/About";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";

let pageRoutes = [
    {
        path:"/" , 
        element:<Home />
    },
    {
        path:"/cart",
        element:<Cart />
    },
    {
        path:"/about",
        element:<About />
    },
    {
        path:"/product/:id",
        element:<SingleProduct />
    }
]
export default pageRoutes