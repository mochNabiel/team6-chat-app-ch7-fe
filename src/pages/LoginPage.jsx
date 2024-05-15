import LoginComponent from "../components/Login"
import { Row, Col, Card } from "react-bootstrap"

const LoginPage = () => {
  return (
    <Row>
      <Col md={6} className="offset-md-3 mt-5 ">
        <Card className="shadow p-2 mb-5 bg-body-primary rounded">
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <LoginComponent />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
export default LoginPage
