import React, { useEffect, useState } from "react";
import Reports from "./Reports";
import axios from "axios";

export const ReportedPosts = () => {
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
      {messages.map((report: any) => (
        <Reports postId={report.postId} userId={report.userId} />
      ))}
    </div>
  );
};
