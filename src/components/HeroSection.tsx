const HeroSection = () => {
  return (
    <section className="relative bg-white pt-32 md:pt-40 px-6 md:px-16">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Discover Independent Fashion Designers
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Connect, explore, and bring unique fashion ideas to life. SEWNA
            helps you find the perfect designer for your style.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <button className="px-6 py-3 bg-lime-500 text-white font-semibold rounded-lg hover:bg-lime-600 transition">
              Explore Designers
            </button>
            <button className="px-6 py-3 border border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581349487871-6c1c6217dc3c?auto=format&fit=crop&w=800&q=80"
            alt="Fashion Illustration"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
