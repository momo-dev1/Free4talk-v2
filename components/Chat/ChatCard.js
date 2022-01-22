import { useEffect, useState } from "react";
import LevelBars from "../LevelBars";

const ChatCard = ({ item, direction }) => {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (item.maxPeople < item.clients.length) {
      setClosed(true);
    }
  }, []);

  return (
    <div className="flex flex-col overflow-hidden bg-secondry-gray rounded-xl ">
      <div className="p-2 flex-1 rounded-xl min-w-[240px]">
        <div className="max-w-[340px] w-full">
          <div className="pb-[40%] relative">
            <div className="absolute top-0 left-0 flex flex-wrap items-center w-full h-full overflow-hidden">
              {item.clients.map((person, idx) => (
                <div
                  key={idx}
                  className="w-1/5 max-w-[33.33%] p-2 rounded-full overflow-hidden"
                >
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src={person.avatar}
                    alt="user avatar"
                  />
                </div>
              ))}
              {Array.from({ length: item.maxPeople }, (_, idx) => (
                <div
                  key={idx}
                  className="w-1/5 max-w-[33.33%] p-2 rounded-full overflow-hidden"
                >
                  <img
                    className="object-cover w-full h-full border-2 border-dotted rounded-full opacity-30"
                    src="/images/unnamed.png"
                    alt="user avatar"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between h-16 bg-[#242632] px-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3 ">
            <h3 className="text-white">{item.language}</h3>
            <LevelBars>{item.level}</LevelBars>
          </div>
          <p className="max-w-[300px] text-gray-400 truncate">{item.topic}</p>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {closed ? (
            <div className="rounded-full bg-[#3b3f4a] p-2 flex items-center justify-center cursor-not-allowed">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </div>
          ) : (
            <div className="p-2 rounded-full cursor-pointer bg-primary-blue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
