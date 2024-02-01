import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
// Routes
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import MiniCart from "./layouts/MiniCart";
import MobileNavbar from "./components/MobileNavbar";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SingleBlog from "./pages/SingleBlog";
import SearchProduct from "./components/SearchProduct";
// import Auth from "./RouteProtection";
// redux
import { useDispatch } from "react-redux";
import { closeProductDropDown, closeShopDropDown } from "./features/modal";

function App() {
  // APP ROUTER
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog/:id' element={<SingleBlog />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

function Root() {
  const dispatch = useDispatch();

  const handleClick = (
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ): void => {
    const dialogElement = e.target as HTMLElement;
    const parentElement = dialogElement.parentElement as HTMLElement;
    if (
      !dialogElement.classList.contains("dropDown") &&
      !parentElement.classList.contains("dropDown")
    ) {
      dispatch(closeShopDropDown());
      dispatch(closeProductDropDown());
    }
  };

  return (
    <main onClick={handleClick}>
      <MobileNavbar />
      <MiniCart />
      <SearchProduct />
      <Outlet />
    </main>
  );
}

export default App;
