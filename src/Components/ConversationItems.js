import React from "react";
import "./MainStyles.css";

function ConversationItems({ props }) {
  return (
    <div className="Conversation-container">
      <p className="conv-icon">{props.name[0]}</p>
      <p className="conv-title">{props.name}</p>
      <p className="conv-lastMessage">{props.lastMessage}</p>
      <p className="conv-timeStamp">{props.timeStamp}</p>
    </div>
  );
}

export default ConversationItems;
