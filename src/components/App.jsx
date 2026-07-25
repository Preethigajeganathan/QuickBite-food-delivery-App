import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
// import Offers from "./Offers";
import AboutUs from "./About-Us";
import Help from "./Help";
import SignIn from "./SignIn";
import Cart from "./Cart";
import Error from "./Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Restaurants from "./Restaurants";
import RestaurantMenu from "./RestaurantMenu";
import Address from "./Address";
import Payment from "./Payment";
import OrderSuccess from "./OrderSuccess";

// function App (){
//     return <>
//     <Header/>
//     <Body/>
//     <Footer/>
//     </>
// }
let AppLayout=()=>{
    return(<div>
        <Header/>
        <main className="flex-1">
        <Outlet />
        </main>
        <Footer/>
    </div>)
}

let route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      // {
      //     path:"/offers",
      //     element:<Offers />
      // },
      {
        path: "/About-Us",
        element: <AboutUs />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/address",
        element: <Address />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/order-success",
        element: <OrderSuccess />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/home",
        element: <Body />,
      },
    ],
    errorElement: <Error />,
  },
]);

function App (){
    return(
        <div>
            <RouterProvider router={route}></RouterProvider>
        </div>
    )
}
export default App;