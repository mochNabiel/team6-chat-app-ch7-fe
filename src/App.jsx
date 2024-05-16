import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { ToastContainer } from "react-toastify"
import Container from "react-bootstrap/Container"

import store from "./redux/store"

import Protected from "./components/Protected"
import NonProtected from "./components/NonProtected"
import Navbar from "./components/Navbar"

import ChatPage from "./pages/ChatPage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import RegisterPage from "./pages/RegisterPage"

import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NonProtected>
          <Navbar />
          <Container>
            <HomePage />
          </Container>
        </NonProtected>
      </>
    ),
  },
  {
    path: "/chat",
    element: (
      <>
        <Protected>
          <Navbar />
          <Container>
            <ChatPage />
          </Container>
        </Protected>
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Protected>
          <Navbar />
          <Container>
            <ProfilePage />
          </Container>
        </Protected>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <NonProtected>
        <Navbar />
        <Container>
          <LoginPage />
        </Container>
      </NonProtected>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <NonProtected>
          <Navbar />
          <Container>
            <RegisterPage />
          </Container>
        </NonProtected>
      </>
    ),
  },
])

export default function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <RouterProvider router={router} />
        <ToastContainer theme="colored" />
      </GoogleOAuthProvider>
    </Provider>
  )
}
