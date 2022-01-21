import React, { useState } from "react";
import ChatCard from "./ChatCard";
import ChatHeader from "./ChatHeader";
import CreateRoom from "./CreateRoom";
import { data } from "../data";

const ChatSection = () => {
  const [direction, setDirection] = useState("row");
  return (
    <section className="mt-10">
      <ChatHeader setDirection={setDirection} />
      <div
        className={`grid grid-cols-1 gap-6 py-5 mt-5 border-t border-white/20 ${
          direction === "row" ? "md:grid-cols-2 lg:grid-cols-minmax" : ""
        }`}
      >
        <CreateRoom />
        {data.map((item) => {
          return (
            <>
              {Object.values(item).map((item) => (
                <ChatCard key={item.id} item={item} direction={direction} />
              ))}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default ChatSection;
