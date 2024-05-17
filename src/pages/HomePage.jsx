import { Row, Button, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const HomePage = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <Row>
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 mt-5 align-items-center rounded-3 border shadow-lg bg-white">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis my-3">
            Gibahin
          </h1>
          <p className="lead">
            chat app designed to help you stay connected with loved ones and
            discover new and exciting communities. With its innovative features
            and intuitive interface, Gibahin offers a chatting experience that
            goes beyond just exchanging messages.
          </p>
          <div className="d-grid gap-2 d-mb-lg-3 justify-content-md-start mb-4">
            {user ? (
              <Button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                fdprocessedid="mm61sd"
                as={Link}
                to="/chat"
              >
                Start Chatting
              </Button>
            ) : (
              <Button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                fdprocessedid="mm61sd"
                as={Link}
                to="/login"
              >
                Start Chatting
              </Button>
            )}
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <Image
            className="rounded-lg-3"
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width="720"
          />
        </div>
      </div>
    </Row>
  )
}
export default HomePage
