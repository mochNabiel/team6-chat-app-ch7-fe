import { useEffect, useState } from "react";
import { io } from "socket.io-client"; // This socket.io package
import { useDispatch, useSelector } from "react-redux";
import { getAllMessages } from "../redux/actions/message";
import MessageItem from "../components/Message/MessageItem";
import AddMessage from "../components/Message/AddMessage";
import { MainContainer, ChatContainer, MessageList, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

// Initialization connect to backend websocket (socket.io)
const socket = io(import.meta.env.VITE_WEBSOCKET_API);

function ChatPage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { messages } = useSelector((state) => state.message);

  const [typing, setTyping] = useState(false);
  const [connectedUsers, setConnectedUsers] = useState([]);

  // This useEffect will get all messages from backend
  useEffect(() => {
    dispatch(getAllMessages());
  }, [dispatch]);

  // This useEffect is to connect to backend websocket (socket.io)
  useEffect(() => {
    socket.on("connect", () => {
      // Emit user connected event with user information
      socket.emit("userConnected", user);
    });

    socket.on("message", (message) => {
      console.log("Message received!", message);
      dispatch(getAllMessages());
    });

    socket.on("ontyping", () => {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
      }, 2000);
    });

    socket.on("connectedUsers", (users) => {
      setConnectedUsers(users);
    });

    // Clean up on unmount
    return () => {
      socket.off("connect");
      socket.off("message");
      socket.off("ontyping");
      socket.off("connectedUsers");
    };
  }, [dispatch, user]);

  return (
    <div style={{ height: "80vh" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList typingIndicator={typing ? <TypingIndicator content={`${user?.name} is typing...`} /> : null}>
            {messages?.length > 0 &&
              messages?.map((message) => (
                <MessageItem data={message} key={message.id} />
              ))}
          </MessageList>
        </ChatContainer>
      </MainContainer>
      <AddMessage socket={socket}/>
      {/* <div>
        <h4>Connected Users:</h4>
        <ul>
          {connectedUsers.map((users, index) => (
            <li key={index}>{users?.name}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default ChatPage;
