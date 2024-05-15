import { Row, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const HomePage = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <Row>
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 mt-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis my-3">
            Gibahin
          </h1>
          <p class="lead">
            chat app designed to help you stay connected with loved ones and
            discover new and exciting communities. With its innovative features
            and intuitive interface, Gibahin offers a chatting experience that
            goes beyond just exchanging messages.
          </p>
          <div justify-content-md-start mb-4 div class="d-grid gap-2 d-mb-lg-3">
            {user ? (
              <Link to="/chat">
                <Button
                  type="button"
                  class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                  fdprocessedid="mm61sd"
                  as={Link}
                  to="/chat"
                >
                  Start Chatting
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button
                  type="button"
                  class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                  fdprocessedid="mm61sd"
                  as={Link}
                  to="/login"
                >
                  Start Chatting
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            class="rounded-lg-3"
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
