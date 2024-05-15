import axios from "axios"
import { toast } from "react-toastify"
import { setToken, setUser } from "../reducers/auth"

export const login =
  (navigate, email, password, setIsLoading) => async (dispatch) => {
    setIsLoading(true)

    let data = JSON.stringify({
      email,
      password,
    })

    let config = {
      method: "post",
      url: `${import.meta.env.VITE_BACKEND_API}/api/auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    }

    try {
      const response = await axios.request(config)
      // console.log(response.data)
      // get and save the token to local storage
      const {data} = response.data
      const { token, user } = data
      console.log("token", token)

      // Change the token value in the reducer
      dispatch(setToken(token))
      dispatch(setUser(user))

      // redirect to home
      navigate("/")
    } catch (error) {
      toast.error(error?.response?.data?.message)

      dispatch(logout())
    }

    setIsLoading(false)
  }

export const register =
  (navigate, name, email, password, photo, setIsLoading) =>
  async (dispatch) => {
    // make loading
    setIsLoading(true)

    let data = new FormData()
    data.append("name", name)
    data.append("email", email)
    data.append("password", password)
    if (photo) {
      data.append("photo", photo)
    }

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}/api/auth/register`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    }

    try {
      const response = await axios.request(config)

      const { data } = response.data
      const { token } = data

      localStorage.setItem("token", token)

      navigate("/")
    } catch (error) {
      toast.error(error?.response?.data?.message)

      dispatch(logout())
    }

    setIsLoading(false)
  }

export const getProfile =
  (navigate, successRedirect, errorRedirect) => async (dispatch, getState) => {
    const { token } = getState().auth

    if (!token) {
      // because token is not valid, we will delete it from local storage
      dispatch(logout())

      //  if there are any error redirection we will redirect it
      if (navigate) {
        if (errorRedirect) {
          navigate(errorRedirect)
        }
      }
      return
    }

    let config = {
      method: "get",
      url: `${import.meta.env.VITE_BACKEND_API}/api/auth`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    try {
      const response = await axios.request(config)
      const { data } = response.data

      // set user by response
      dispatch(setUser(data))

      // if there are any success redirection we will redirect it
      if (navigate) {
        if (successRedirect) {
          navigate(successRedirect)
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)

      // because token is not valid, we will delete it from local storage
      dispatch(logout())

      //  if there are any error redirection we will redirect it
      if (navigate) {
        if (errorRedirect) {
          navigate(errorRedirect)
        }
      }
    }
  }

export const loginWithGoogle = (navigate, accessToken) => async (dispatch) => {
  let config = {
    method: "post",
    url: `${import.meta.env.VITE_BACKEND_API}/api/auth/google-login`,
    data: {
      access_token: accessToken,
    },
  }

  try {
    const response = await axios.request(config)

    // get and save the token to local storage
    const { data } = response.data
    console.log(data)
    const { token, user } = data

    // Change the token value in the reducer
    dispatch(setToken(token))
    dispatch(setUser(user))

    // redirect to home
    navigate("/") // it will be not consistent, so alternative we use window until we used the state management
  } catch (error) {
    toast.error(error?.response?.data?.message)

    dispatch(logout())
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem("token")
  dispatch(setToken(null))
  dispatch(setUser(null))
}
