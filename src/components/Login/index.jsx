import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { login } from "../../redux/actions/auth"

import { Button, Form } from "react-bootstrap"
import GoogleLogin from "../GoogleLogin"

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(login(navigate, email, password, setIsLoading))
  }

  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-center mt-3">
      <h2 className="text-center">Masuk ke Akunmu</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-medium">Email</Form.Label>
          <Form.Control
            className="rounded-5 py-2"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-medium">Password</Form.Label>
          <Form.Control
            className="rounded-5 py-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button
          className="rounded-5 w-100 border-1 py-2"
          variant="primary"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Login"}
        </Button>
      </Form>
      <hr className="border-1 bg-secondary my-4"/>
      <GoogleLogin text={"Login with Google"} />
      <p className="text-center mt-3">
        Dengan masuk akun kamu menyetujui{" "}
        <span className="text-primary">Syarat & Ketentuan</span> dan{" "}
        <span className="text-primary">Kebijakan Privasi</span> kami
      </p>
      <p className="text-center fw-bold">
        Belum punya akun? <Link to={"/register"} className="text-decoration-none">Register</Link>
      </p>
    </div>
  )
}

export default Login
