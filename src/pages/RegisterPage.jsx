import { Col, Image, Row } from "react-bootstrap"
import RegisterComponent from "../components/Register"
import registerImage from "../assets/register-image.svg"

const RegisterPage = () => {
  return (
    <div className="d-flex w-100" style={{ minHeight: "80vh" }}>
      <Row className="w-100">
        <Col md={7} className="d-flex justify-content-center align-items-center">
          <Image src={registerImage} width={500}/>
        </Col>
        <Col md={5} className="d-flex justify-content-center align-items-center">
          <RegisterComponent />
        </Col>
      </Row>
    </div>
  )
}
export default RegisterPage
