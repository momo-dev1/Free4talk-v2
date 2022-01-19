import { useEffect } from "react";

const ChatCard = ({ item }) => {
  const getLevel = (levels) => {
    if (levels === "Any Level" || levels === "Upper Beginner") {
      return "success";
    } else if (levels === "Advanced" || levels === "Intermediate") {
      return "warning";
    } else {
      return "danger";
    }
  };

  return (
    <div className="flex flex-col overflow-hidden bg-secondry-gray rounded-xl">
      <div className="flex flex-wrap items-center flex-1 gap-3 px-3 py-3 min-h-[200px]">
        {item.clients.map((items, idx) => (
          <div
            id={idx}
            class="w-[20%] max-w-[33.333%] overflow-hidden rounded-full border border-white/20"
          >
            <img
              className="object-cover w-full h-full rounded-full"
              src={items.avatar}
              alt="user"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between h-16 bg-[#242632] px-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h3 className="text-white">{item.language}</h3>
            <div className="space-x-1">
              <span
                className={`${`bg-${getLevel(item.level)}/30`} px-1 rounded-sm`}
              ></span>
              <span
                className={`bg-${getLevel(item.level)} px-1 rounded-sm`}
              ></span>
              <span
                className={`bg-${getLevel(item.level)}/30 px-1 rounded-sm`}
              ></span>
            </div>
          </div>
          <p className="max-w-[300px] text-gray-400 truncate">{item.topic}</p>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div className=" rounded-full bg-[#3b3f4a] p-2 flex items-center justify-center cursor-not-allowed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
