import { Row, Button, Image, Col, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import homeImage from "../assets/home-image.svg"
import logoGibahin from "../assets/logo-gibahin.png"

import devAufar from "../assets/dev_aufar.jpeg"
import devNabiel from "../assets/dev_nabiel.jpeg"
import devKukuh from "../assets/dev_kukuh.png"

const HomePage = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Row
        className="d-flex justify-content-center align-items-center rounded-3 border shadow-lg bg-white p-3 my-3"
        style={{ minHeight: "75vh" }}
      >
        <Col lg={7}>
          <Image src={logoGibahin} width={300} />
          <p className="lead">
            Chat app designed to help you stay connected with loved ones and
            discover new and exciting communities. With its innovative features
            and intuitive interface, Gibahin offers a chatting experience that
            goes beyond just exchanging messages.
          </p>
          <Button
            type="button"
            className="btn btn-primary btn-lg px-4 mb-3 fw-bold rounded-5"
            as={Link}
            to={user ? "/chat" : "/login"}
          >
            Start Chatting
          </Button>
        </Col>
        <Col lg={4}>
          <Image src={homeImage} alt="home image" />
        </Col>
        <Row className="text-center mt-4">
          <Col>
            <h5>Developing by:</h5>
            <div className="d-flex justify-content-center align-items-center mt-4">
              <div className="mx-4">
                <Image src={devAufar} alt="Dev Aufar" roundedCircle width={80} height={80} />
                <p>Aufar</p>
              </div>
              <div className="mx-4">
                <Image src={devNabiel} alt="Dev Nabiel" roundedCircle width={80} height={80} />
                <p>Nabiel</p>
              </div>
              <div className="mx-4">
                <Image src={devKukuh} alt="Dev Kukuh" roundedCircle width={80} height={80} />
                <p>Kukuh</p>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}

export default HomePage