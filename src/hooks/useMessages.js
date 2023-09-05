import React from "react";
import { getMessages } from "../services/firebase";

// useMessages will accept a roomId, store messages in state, and return the messages.
// It’ll use an effect to fetch messages with getMessages, and unsubscribe the listener
// when the effect cleans up

function useMessages(roomId) {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = getMessages(roomId, setMessages);
    return unsubscribe;
  }, [roomId]);

  return messages;
}

export { useMessages };
