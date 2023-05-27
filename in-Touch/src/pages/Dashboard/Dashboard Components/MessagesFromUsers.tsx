import axios from "axios";
import { useEffect, useState } from "react";
import { Messages } from "./Messages";

export function MessagesFromUsers() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44386/api/SupportMessages/get-support-messages")
      .then((response: any) => {
        setMessages(response.data);
      });
  }, [messages]);
  return (
    <div>
      {messages.map((message: any) => (
        <Messages
          postId={message.postId}
          userId={message.userId}
          id={message.id}
          message={message.message}
        />
      ))}
    </div>
  );
}
