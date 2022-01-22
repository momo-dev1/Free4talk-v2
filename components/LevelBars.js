const LevelBars = ({ children }) => {
  const bgColor = {
    "Any Level": "#33a164",
    Beginner: "#33a164",
    "Upper Beginner": "#33a164",
    Intermediate: "#33a164",
    "Upper Intermediate": "#33a164",
    Advanced: "#e1bf6d",
    "Upper Advanced": "#e1bf6d",
  };

  return (
    <div className="flex gap-1 ">
      <span
        style={{ background: `${bgColor[children]}` }}
        className="w-2 h-6 rounded-sm opacity-30"
      ></span>
      <span
        style={{ background: `${bgColor[children]}` }}
        className="w-2 h-6 rounded-sm"
      ></span>
      <span
        style={{ background: `${bgColor[children]}` }}
        className="w-2 h-6 rounded-sm opacity-30"
      ></span>
    </div>
  );
};

export default LevelBars;
