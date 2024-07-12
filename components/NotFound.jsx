// NoDataFound.jsx
import React from "react";

const NoDataFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-8">
      <h2 className="text-2xl font-semibold text-gray-700">No Data Found</h2>
      <p className="text-lg text-gray-600">Try adjusting your search criteria or filters.</p>
    </div>
  );
};

export default NoDataFound;
