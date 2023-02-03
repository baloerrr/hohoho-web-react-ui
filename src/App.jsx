import { useEffect, useState } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Chat from './pages/Chat'
import Home from './pages/Home'
import Footer from './components/Layout/Footer'
import {
  createBrowserRouter,
  Outlet,
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Header from './components/Layout/Header'
import { ToastContainer } from 'react-toastify'
import useAuthContext from './hooks/useAuthContext'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

const App = () => {
  const { user } = useAuthContext()
  return (
    <div className="App dark:bg-slate-800">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/chat"
            element={user ? <Chat /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
