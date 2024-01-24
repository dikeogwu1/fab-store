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
// import Auth from "./RouteProtection";

function App() {
  // APP ROUTER
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<Product />} />
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
  return (
    <>
      <MobileNavbar />
      <MiniCart />
      <Outlet />
    </>
  );
}

export default App;
