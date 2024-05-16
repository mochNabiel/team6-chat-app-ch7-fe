import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../../redux/actions/auth";
import { Avatar, Message } from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

function MessageItem({ data }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const formatNumber = (number) => number.toString().padStart(2, "0");
  const date = new Date(data.createdAt);
  const hours = formatNumber(date.getHours());
  const minutes = formatNumber(date.getMinutes());
  const time = `${hours}:${minutes}`;

  useEffect(() => {
    dispatch(getProfile(null, null, null));
  }, [dispatch]);

  const isCurrentUser = data?.user?.id === user?.id;
  const direction = isCurrentUser ? "outgoing" : "incoming";

  return (
    <Message
      model={{
        message: data?.message,
        sentTime: time,
        sender: data?.user?.name,
        direction: direction,
        position: "single",
      }}
      >
      <Avatar src={data?.user?.photo} name={data?.user?.name} />
      <Message.Footer>{data?.user?.name} at { time } WIB</Message.Footer>
    </Message>
  );
}

MessageItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MessageItem;