import { useEffect, useState } from 'react';
import Register  from "./pages/Register"
import Login  from "./pages/Login"
import Chat  from "./pages/Chat"
import Home from "./pages/Home"
import Footer from './components/Footer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './components/Header';

const Layout = () => {
  return (
  <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/chat",
        element: <Chat/>,
      },
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

const App = () => {
  return (
    <div className="App dark:bg-slate-800">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
