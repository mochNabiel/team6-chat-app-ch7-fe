import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { MessageInput } from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";  

import { createNewMessage } from "../../redux/actions/message";

function AddMessage({ socket }) {
  const dispatch = useDispatch();
  const [addMessage, setAddMessage] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (addMessage.trim() === "") {
      toast.error("Message can not be empty!");
      return;
    }
    dispatch(createNewMessage(addMessage));
    setAddMessage("");
  };

  return (
    <MessageInput
      placeholder="Add message"
      value={addMessage}
      onChange={(value) => {
        setAddMessage(value);
        socket.emit("typing");
      }}
      style={{ flex: 1 }}
      onKeyDown={handleKeyDown}
      onSubmit={handleSubmit}
    />
  );
}

AddMessage.propTypes = {
  socket: PropTypes.any,
};

export default AddMessage;
