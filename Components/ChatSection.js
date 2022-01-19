import React from "react";
import ChatCard from "./ChatCard";
import CreateRoom from "./CreateRoom";
import { data } from "../data";
const ChatSection = () => {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between text-gray-400">
        <div className="flex items-center gap-3">
          <div className="bg-[#242632] px-3 py-2 rounded-xl cursor-pointer">
            Language: <span className="text-white">All</span>
          </div>
          <div className="bg-[#242632] px-3 py-2 rounded-xl cursor-pointer">
            Sort: <span className="text-white">All</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#242632] px-3 py-2 rounded-xl cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex divide-x divide-white/10">
            <div className="bg-[#242632] px-3 py-2 rounded-l-xl cursor-pointer space-x-1">
              <span className="bg-white px-1 rounded-lg"></span>
              <span className="bg-white/30 px-1 rounded-lg"></span>
            </div>
            <div className="bg-[#242632] px-3 py-2 rounded-r-xl cursor-pointer space-y-1 ">
              <span className="bg-primary-blue/30 w-6 h-2 rounded-lg block"></span>
              <span className="bg-primary-blue w-6 h-2 rounded-lg block"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 py-5 mt-5 border-t border-white/20 md:grid-cols-2 lg:grid-cols-minmax">
        <CreateRoom />
        {data.map((item) => {
          return (
            <>
              {Object.values(item).map((item) => (
                <ChatCard key={item.id} item={item} />
              ))}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default ChatSection;
