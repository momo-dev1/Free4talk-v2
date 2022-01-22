const Hero = () => {
  return (
    <div className="w-full px-10 py-8 my-3 font-medium text-white rounded-2xl bg-primary-blue">
      <h4 className="text-xs uppercase sm:text-sm">
        see followers, join closed rooms, and more with pro!
      </h4>
      <h1 className="mt-2 text-4xl font-bold">Language Practice Community</h1>
      <div className="flex items-center gap-4 mt-5">
        <button className="px-6 py-4 font-bold rounded-lg bg-primary-btn">
          Buy me a coffe
        </button>
        <p>$5 month</p>
      </div>
    </div>
  );
};

export default Hero;
