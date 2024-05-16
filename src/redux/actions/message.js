import axios from "axios";
import { toast } from "react-toastify";

import { setMessages } from "../reducers/message";

export const getAllMessages = () => async (dispatch, getState) => {

  const { token } = getState().auth

  let config = {
    method: 'get',
    url: `${import.meta.env.VITE_BACKEND_API}/api/message`,
    headers: { 
      Authorization : `Bearer ${token}`
    }
  }

  try {
    const response = await axios.request(config);
    const { data } = response.data

    dispatch(setMessages(data));

  } catch (error) {
      toast.error(error?.response?.data?.message);
  }
};

export const createNewMessage = (message) => async (dispatch, getState) => {
  const { token } = getState().auth
  
  let body = JSON.stringify({ message });
  
  let config = {
    method: 'post',
    url: `${import.meta.env.VITE_BACKEND_API}/api/message`,
    headers: { 
      Authorization: `Bearer ${ token }`,
      'Content-Type': 'application/json'
    },
    data : body
  };

  try {
    const { data } = await axios.request(config);
    const  { message }  = getState().message

    if (message.some((item) => item.id === data.data.id)) {
      return
    }

    toast.success("New message!")
    dispatch(getAllMessages())
  }
  catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
