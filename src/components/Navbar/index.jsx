import { useEffect } from "react"
import { Container, Dropdown, Image, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../redux/actions/auth"

import logoGibahin from '../../assets/logo-gibahin.png'

function NavbarComponent() {
  const dispatch = useDispatch()
  const { user, token } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch, token])

  return (
    <Navbar expand="lg" className="bg-blue">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>
          <img src={logoGibahin} style={{ height : "50px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {user ? (
              <Dropdown alignRight>
                <Dropdown.Toggle as={Nav.Link}>
                  <Image
                    src={user.photo}
                    roundedCircle
                    width={30}
                    height={30}
                    style={{ objectFit: "cover" }}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item onClick={() => {
                    localStorage.removeItem("token")
                    window.location = "/"
                  }}>Logout</Dropdown.Item>
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