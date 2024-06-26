import { useEffect } from "react"
import { Container, Dropdown, Image, Nav, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProfile, logout } from "../../redux/actions/auth"

import { FaUser } from "react-icons/fa6"
import { IoLogOut } from "react-icons/io5"

import logoGibahin from "../../assets/logo-gibahin.png"
import userProfile from "../../assets/user-profile.jpg"

function NavbarComponent() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, token } = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout(navigate))
  }

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch, token])

  return (
    <Navbar expand="lg" className="bg-blue">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img src={logoGibahin} style={{ height: "50px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {user ? (
              <Dropdown>
                <Dropdown.Toggle as={Nav.Link}>
                  <Image
                    src={user.photo ? user.photo : userProfile}
                    roundedCircle
                    width={30}
                    height={30}
                    style={{ objectFit: "cover" }}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">
                    <FaUser /> Profile
                  </Dropdown.Item>
                  <Dropdown.Item className="text-danger" onClick={handleLogout}>
                    <IoLogOut /> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
