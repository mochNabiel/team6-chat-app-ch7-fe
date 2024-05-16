import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Button, Card, Row, Col } from "react-bootstrap"
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
      <Row className="mt-5">
        <Col md={6} className="offset-md-3">
          <Card
            id="card-profile"
            className=" p-3 mb-5 sm-2"
            style={{ minHeight: "350px" }}
          >
            {user ? (
              <>
                <Card.Title className="text-center"></Card.Title>
                {user.photo ? (
                  // <Card.Img
                  //   // className="roundedCircle"
                  //   // height={200}
                  //   // width={50}
                  //   // src={user?.photo}
                  //   // variant="top"
                  //   // style={{ objectFit: "contain" }}
                  // />
                  <img
                    id="image-profile"
                    src={user?.photo}
                    className="card-img-profile"
                  ></img>
                ) : (
                  <Card.Img
                    height={200}
                    src={userProfile}
                    variant="top"
                    style={{ objectFit: "contain" }}
                  />
                )}
                <Card.Body className="card-body">
                  <Card.Title id="text-profile" className="mb-4">
                    <h2>{user?.name}</h2>
                  </Card.Title>
                  <Card.Title id="text-profile" className="mb-5">
                    Email : {user?.email}
                  </Card.Title>
                </Card.Body>
                <Row className="md-6 ">
                  <Col lg={6} md={12}>
                    <Button
                      onClick={(e) => handleReturn(e)}
                      variant="outline-success"
                    >
                      <IoMdReturnLeft /> Return Home
                    </Button>
                  </Col>
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
