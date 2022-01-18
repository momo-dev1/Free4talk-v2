import React from "react";

const ChatCard = () => {
  const getUser = () => {
    return {
      id: "1",
      username: "mohamed",
    };
  };
  return (
    <div class=" bg-secondry-gray rounded-xl flex flex-col overflow-hidden ">
      <div className="flex flex-wrap items-center flex-1 gap-3 px-3 py-3">
        {Array.from({ length: 6 }, () => getUser()).map((item) => (
          <div class="w-[20%] max-w-[33.333%] overflow-hidden rounded-full border border-white/20">
            <img
              className="object-cover w-full h-full rounded-full"
              src="/images/users/user1.jpg"
              alt="user"
              srcset=""
            />
          </div>
        ))}
      </div>

      <div class="flex items-center justify-between h-14 bg-[#242632] px-4 py-2">
        <div>
          <div class="flex items-center gap-2">
            <h3 class="text-white">English</h3>
            <div class="space-x-1">
              <span class="bg-yellow/30 px-1 rounded-sm"></span>
              <span class="bg-yellow px-1 rounded-sm"></span>
              <span class="bg-yellow/30 px-1 rounded-sm"></span>
            </div>
          </div>
          <p class="text-gray-400">Hey,come in guys</p>
        </div>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-400 hover:text-gray-300 cursor-pointer"
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
          <div class=" rounded-full bg-[#3b3f4a] p-2 flex items-center justify-center cursor-not-allowed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
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
