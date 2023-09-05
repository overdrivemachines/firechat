// This component gets rendered at the bottom of our <ChatRoom> component.
// This component will return a simple form with a text input and submit button
// We’ll get the roomId from props and the user from context.
// When the form is submitted, we’ll call our sendMessage function
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { sendMessage } from "../../services/firebase";
import "./styles.css";

function MessageInput({ roomId }) {
  const { user } = useAuth();
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(roomId, user, value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="message-input-container">
      <input type="text" placeholder="Enter a message" value={value} onChange={handleChange} className="message-input" required minLength={1} />
      <button type="submit" disabled={value < 1} className="send-message">
        Send
      </button>
    </form>
  );
}

export { MessageInput };
