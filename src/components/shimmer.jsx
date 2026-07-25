function Shimmer() {
  const carousel = Array.from({ length: 9 });
  const cards = Array.from({ length: 12 });

  return (
    <div className="container mx-auto font-sans animate-pulse">
      {/* Search */}
      <div className="flex items-center justify-end gap-2 p-4 my-4">
        <div className="w-full sm:w-[350px] md:w-[450px] lg:w-[500px] h-10 rounded-full bg-gray-200"></div>
        <div className="w-24 h-10 rounded-full bg-gray-200"></div>
      </div>

      {/* What's on your mind */}
      <div className="p-3 md:p-5">
        <div className="h-8 w-56 rounded bg-gray-200 mb-6"></div>

        {/* Carousel */}
        <div className="flex gap-5 overflow-hidden pb-4">
          {carousel.map((_, index) => (
            <div key={index} className="flex-none">
              <div className="w-[70px] h-[90px] sm:w-[100px] sm:h-[130px] md:w-[140px] md:h-[180px] rounded-xl bg-gray-200"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Restaurant Heading */}
      <div className="px-3 md:px-5 mb-5">
        <div className="h-8 w-80 rounded bg-gray-200"></div>
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 xl:px-18">
  {cards.map((_, index) => (
    <div
      key={index}
      className="flex md:block w-full gap-4 p-4 rounded-[10px] shadow-[2px_2px_10px_#6362627e]"
    >
      {/* Image */}
      <div className="w-[120px] h-[120px] md:w-full md:h-[180px] rounded-[10px] bg-gray-200 shrink-0"></div>

      {/* Content */}
      <div className="flex flex-col justify-center flex-1 md:block">
        <div className="h-5 w-3/4 bg-gray-200 rounded mt-2"></div>

        <div className="h-4 w-full bg-gray-200 rounded mt-3"></div>

        <div className="h-4 w-2/3 bg-gray-200 rounded mt-3"></div>

        <div className="flex items-center gap-2 mt-4">
          <div className="w-5 h-5 rounded-full bg-gray-200"></div>
          <div className="h-4 w-10 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default Shimmer;