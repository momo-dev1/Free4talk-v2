const CreateRoom = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center py-4 bg-secondry-gray rounded-xl">
      <button className="px-3 py-3 mt-2 bg-white rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      <h3 className="mt-6 text-2xl font-bold text-white">Create Room</h3>
    </div>
  );
};

export default CreateRoom;
