import { Link, useParams } from "react-router-dom";
import { MessageInput } from "../MessageInput";
import { chatRooms } from "../../data/chatRooms";
import "./styles.css";

// display the chatroom information and provide a link back to the landing page
// rendered with /room/:id

function ChatRoom() {
  const params = useParams();

  const room = chatRooms.find((x) => x.id === params.id);
  if (!room) {
    // TODO: 404
  }

  return (
    <>
      <h2>{room.title}</h2>
      <div>
        <Link to="/">⬅️ Back to all rooms</Link>
      </div>
      <div className="messages-container">
        <MessageInput roomId={room.id} />
      </div>
    </>
  );
}

export { ChatRoom };
