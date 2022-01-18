import React from "react";
import ChatCard from "./ChatCard";
import CreateRoom from "./CreateRoom";
const ChatSection = () => {
  return (
    <div className="grid grid-cols-1 gap-4 py-5 border-t border-white/20 md:grid-cols-2 lg:grid-cols-minmax">
      <CreateRoom />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
    </div>
  );
};

export default ChatSection;
