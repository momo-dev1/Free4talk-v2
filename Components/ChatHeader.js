import React from "react";

const ChatHeader = ({ setDirection }) => {
  return (
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
            className="w-6 h-6"
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
        <div className="hidden divide-x lg:flex divide-white/10">
          <div
            onClick={() => setDirection("row")}
            className="flex items-center bg-[#242632] px-3 py-2  rounded-l-xl cursor-pointer space-x-1"
          >
            <span className="w-2 h-6 bg-white rounded-lg"></span>
            <span className="w-2 h-6 rounded-lg bg-white/30"></span>
          </div>
          <div
            onClick={() => setDirection("col")}
            className="flex  flex-col items-center bg-[#242632] px-3 py-2 rounded-r-xl cursor-pointer space-y-1 "
          >
            <span className="block w-6 h-2 rounded-lg bg-primary-blue/30"></span>
            <span className="block w-6 h-2 rounded-lg bg-primary-blue"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
