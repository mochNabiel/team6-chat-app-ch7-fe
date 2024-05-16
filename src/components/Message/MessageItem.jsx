import Card from "react-bootstrap/Card"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProfile } from "../../redux/actions/auth"
import { Image } from "react-bootstrap"

function MessageItem({ data }) {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const formatNumber = (number) => number.toString().padStart(2, "0")
  const date = new Date(data.createdAt)
  const hours = formatNumber(date.getHours())
  const minutes = formatNumber(date.getMinutes())
  const time = `${hours}:${minutes}`

  useEffect(() => {
    dispatch(getProfile(null, null, null))
  }, [dispatch])

  const cardStyle = {
    backgroundColor: data?.user?.id === user?.id ? "green" : "blue",
    color: "white",
  }
  return (
    <Card body style={cardStyle}>
      <Image
        src={data?.user?.photo}
        className="rounded-circle"
        width={50}
        alt="photo"
      />
      <div>
        {data?.message} by {data?.user?.name}
      </div>
      <div>{time}</div>
    </Card>
  )
}

MessageItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MessageItem
