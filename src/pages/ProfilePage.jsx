import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Button, Card, Row, Col, Container } from "react-bootstrap"
import Spinner from "react-bootstrap/Spinner"
import { IoMdReturnLeft } from "react-icons/io"

import { getProfile } from "../redux/actions/auth"
import "../styles/profile.css"
import userProfile from "../assets/user-profile.jpg"

const ProfilePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  const handleReturn = (e) => {
    e.preventDefault()
    // navigate to previous page
    navigate(-1)
  }

  useEffect(() => {
    dispatch(getProfile(null, null, null))
  }, [dispatch])

  return (
    <>
      <Row className=" mt-5 d-flex justify-content-center">
         {" "}
        <Col md={6} className="">
          <Card
            id="card-profile"
            className=" p-2 mb-5 "
            style={{ minHeight: "350px" }}
          >
            {user ? (
              <>
                {user.photo ? (
                  <Row className="background p-3">
                    <Container className="d-flex justify-content-center">
                      <img
                        id="image-profile"
                        src={user?.photo}
                        className="card-img-profile"
                      />
                    </Container>
                  </Row>
                ) : (
                  <img
                    id="image-profile"
                    src={userProfile}
                    className="card-img-profile"
                  ></img>
                )}
                <Card.Body className="card-body ">
                  <Card.Title id="text-profile" className="mb-4 mb-5">
                    <h2>{user?.name}</h2>
                  </Card.Title>
                  <Card.Title id="text-profile" className="mb-5">
                    Email : {user?.email}
                  </Card.Title>
                </Card.Body>
                <Row className="md-6 justify-content-center">
                  <Button
                    className="m-3"
                    onClick={(e) => handleReturn(e)}
                    variant="outline-primary"
                    style={{ maxWidth: "150px" }}
                  >
                    <IoMdReturnLeft /> Kembali
                  </Button>
                </Row>
              </>
            ) : (
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Spinner animation="border" role="status" />
                <h2 className="text-center">Loading...</h2>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProfilePage
