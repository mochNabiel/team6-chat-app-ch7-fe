import { useEffect, useState } from "react"
import { io } from "socket.io-client" // This socket.io package
import { useDispatch, useSelector } from "react-redux"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { getAllMessages } from "../redux/actions/message"
import MessageItem from "../components/Message/MessageItem"
import AddMessage from "../components/Message/AddMessage"

// Initialization connect to backend websocket (socket.io)
const socket = io(import.meta.env.VITE_WEBSOCKET_API)

function ChatPage() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { messages } = useSelector((state) => state.message)

  const [typing, setTyping] = useState(false)

  // This useEffect will get all messages from backend
  useEffect(() => {
    // Dispatch the getAllMessages actions
    dispatch(getAllMessages())
  }, [dispatch])

  // This useEffect is to connect to backend websocket (socket.io)
  useEffect(() => {
    // Connect to backend
    socket.on("connect", () => {})

    // It will listen the event name "message"
    socket.on("message", (message) => {
      console.log("aku dijalankan!", message)
      dispatch(getAllMessages())
    })

    socket.on("ontyping", () => {
      setTyping(true)
      setTimeout(() => {
        setTyping(false)
      }, 1000)
    })

    socket.on("getAllMessages", () => {
      console.log("what happen?")
    })
  }, [dispatch])

  return (
    <>
      <Row className="mt-4">
        <Col>
          <h6>{typing && `${user?.name} is typing...`}</h6>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          {messages?.length > 0 &&
            messages?.map((message) => (
              <MessageItem data={message} key={message.id} />
            ))}
        </Col>

        <AddMessage socket={socket} />
      </Row>
    </>
  )
}

export default ChatPage
