import { Col, Image, Row } from "react-bootstrap"
import LoginComponent from "../components/Login"
import loginImage from "../assets/login-image.svg"

const LoginPage = () => {
  return (
    <div className="d-flex w-100" style={{ minHeight: "calc(100vh - 56px)" }}>
      <Row className="w-100">
        <Col md={7} className="d-flex justify-content-center align-items-center">
          <Image src={loginImage} width={500}/>
        </Col>
        <Col md={5} className="d-flex justify-content-center align-items-center">
          <LoginComponent />
        </Col>
      </Row>
    </div>
  )
}
export default LoginPage
