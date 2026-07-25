function MenuShimmer() {
  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 animate-pulse">
      {/* Restaurant Title */}
      <div className="py-8">
        <div className="h-8 sm:h-10 w-48 sm:w-72 bg-gray-200 rounded"></div>
      </div>

      {[...Array(6)].map((_, index) => (
        <div key={index} className="mb-6">
          {/* Category */}
          <div className="h-8 w-full bg-gray-200 rounded-lg mb-4"></div>

          {/* Menu Item */}
          <div className="flex justify-between items-start gap-4 p-3 sm:p-4 rounded-2xl border border-gray-200 shadow-sm">
            {/* Left */}
            <div className="flex-1">
              <div className="h-5 w-3/4 bg-gray-200 rounded mb-3"></div>

              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded mb-4"></div>

              <div className="h-5 w-20 bg-gray-200 rounded mb-3"></div>

              <div className="h-4 w-14 bg-gray-200 rounded"></div>
            </div>

            {/* Right */}
            <div className="relative w-28 sm:w-40 shrink-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 bg-gray-200 rounded-xl"></div>

              {/* ADD button */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-1 sm:bottom-0 w-16 h-8 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuShimmer;