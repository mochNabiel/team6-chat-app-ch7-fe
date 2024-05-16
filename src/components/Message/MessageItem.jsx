import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../../redux/actions/auth";

function MessageItem({ data }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProfile(null, null, null));
  }, [dispatch]);

  const cardStyle = {
    backgroundColor: data.user.id === user.id ? "green" : "blue",
    color: "white"
  };

  return (
    <Card body style={cardStyle}>
      {data.message} by {data.user.name}
    </Card>
  );
}

MessageItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MessageItem;