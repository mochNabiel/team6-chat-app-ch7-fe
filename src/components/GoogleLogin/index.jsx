import { useGoogleLogin } from "@react-oauth/google"
import { loginWithGoogle } from "../../redux/actions/auth"
import { Button } from "react-bootstrap"
import PropTypes from "prop-types"

import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { FcGoogle } from "react-icons/fc"

const GoogleLogin = ({ text }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = useGoogleLogin({
    onSuccess: (codeResponse) =>
      dispatch(loginWithGoogle(navigate, codeResponse?.access_token)),
  })

  return (
    <Button className="rounded-5 w-100 border-1 py-2" variant="outline-primary" onClick={() => login()}>
      <FcGoogle /> {text}
    </Button>
  )
}

GoogleLogin.propTypes = {
  text: PropTypes.string,
}

export default GoogleLogin
