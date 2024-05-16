import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { register } from "../../redux/actions/auth"
import GoogleLogin from "../GoogleLogin"

function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [photo, setPhoto] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Password not match")
      setIsLoading(false)
      return
    }

    dispatch(register(navigate, name, email, password, photo, setIsLoading))
  }
  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-center mt-3">
      <h2 className="text-center">Daftar dulu yuk</h2>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label className="fw-medium">Name</Form.Label>
          <Form.Control
            className="rounded-5 py-2"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
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
        <Form.Group className="mb-3" controlId="password">
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
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label className="fw-medium">Confirm Password</Form.Label>
          <Form.Control
            className="rounded-5 py-2"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="photo" className="mb-3">
          <Form.Label className="fw-medium">Photo</Form.Label>
          <Form.Control
            className="rounded-5 py-2"
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </Form.Group>
        <Button
          className="rounded-5 w-100 border-1 py-2"
          variant="primary"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Register"}
        </Button>
      </Form>
      <hr className="border-1 bg-secondary my-4"/>
      <GoogleLogin text={"Register with Google"} />
      <p className="text-center mt-3">
        Dengan mendaftar akun kamu menyetujui{" "}
        <span className="text-primary">Syarat & Ketentuan</span> dan{" "}
        <span className="text-primary">Kebijakan Privasi</span> kami
      </p>
      <p className="text-center fw-bold">
        Sudah punya akun?{" "}
        <Link to={"/login"} className="text-decoration-none">
          Login
        </Link>
      </p>
    </div>
  )
}

export default Register
