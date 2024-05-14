import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Container from "react-bootstrap/Container"
import ChatPage from "./pages/ChatPage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import RegisterPage from "./pages/RegisterPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HomePage />
      </>
    ),
  },
  {
    path: "/chat",
    element: (
      <>
        <ChatPage />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <ProfilePage />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <Container>
        <LoginPage />
      </Container>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <RegisterPage />
      </>
    ),
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
