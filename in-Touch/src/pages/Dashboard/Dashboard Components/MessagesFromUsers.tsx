import axios from "axios";
import { useEffect, useState } from "react";
import { Messages } from "./Messages";

export function MessagesFromUsers(props:any) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-intouch.azurewebsites.net/api/SupportMessages/get-support-messages", {
        headers: {
          Authorization: `Bearer ${props.token}`
        }
      })
      .then((response: any) => {
        setMessages(response.data);
      });
  }, [messages]);
  return (
    <div>
      {messages.length==0?(
        <h1 className="empty">No messages yet</h1>
      ):(
        messages.map((message: any) => (
        <Messages
          postId={message.postId}
          userId={message.userId}
          id={message.id}
          message={message.message}
          token={props.token}
        />
      )))
      }
    </div>
  );
}
