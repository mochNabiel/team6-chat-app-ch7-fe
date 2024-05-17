import { createBrowserRouter } from "react-router-dom"
import NonProtected from "../components/NonProtected"
import NavbarComponent from "../components/Navbar"
import { Container } from "react-bootstrap"
import HomePage from "../pages/HomePage"
import Protected from "../components/Protected"
import ChatPage from "../pages/ChatPage"
import ProfilePage from "../pages/ProfilePage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NonProtected>
          <NavbarComponent />
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
          <NavbarComponent />
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
          <NavbarComponent />
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
        <NavbarComponent />
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
          <NavbarComponent />
          <Container>
            <RegisterPage />
          </Container>
        </NonProtected>
      </>
    ),
  },
])

export default router