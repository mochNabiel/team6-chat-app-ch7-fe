import RegisterComponent from "../components/Register"
import { Row, Col, Card } from "react-bootstrap"

const RegisterPage = () => {
  return (
    <>
      <Row>
        <Col md={6} className="offset-md-3 mt-5">
          <Card className="shadow p-3 mb-5 bg-body-primary rounded">
            <Card.Header>Register</Card.Header>
            <Card.Body>
              <RegisterComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}
export default RegisterPage
