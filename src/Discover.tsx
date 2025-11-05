import React from "react";
import { designerData } from "./lib/data/DesignersData";
import DesignerCard from "./components/discover/DesignerCard";
import FilterBar from "./components/discover/FilterBar";
import { useFilterStore } from "./store/FilterStore";
import DNavbar from "./components/discover/DNavBar";

const Discover: React.FC = () => {
  const { selectedFilter, selectedCategory, searchQuery } = useFilterStore();
  const data = designerData[selectedCategory as keyof typeof designerData];

  const filteredData = data
    .filter((item) => {
      const uploadDate = new Date(item.uploadedAt);
      const today = new Date();
      const diffDays = Math.floor(
        (today.getTime() - uploadDate.getTime()) / (1000 * 60 * 60 * 24),
      );

      if (selectedFilter === "Daily") return diffDays <= 1;
      if (selectedFilter === "Weekly") return diffDays <= 7;
      if (selectedFilter === "Monthly") return diffDays <= 30;
      return true;
    })
    .filter((item) =>
      item.designer.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

  return (
    <div>
      <DNavbar />
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Page Heading */}

        <h1 className="text-lg sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 tracking-tight flex items-center gap-2">
          🎨 <span className="leading-tight">Discover Designers</span> ✨
        </h1>

        {/* Filter Bar */}
        <div className="mb-8 flex justify-end">
          <FilterBar />
        </div>

        {/* Designer Grid */}

        {filteredData.length > 0 ? (
          <div className="flex justify-center mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
              {filteredData.map((design) => (
                <DesignerCard key={design.id} designerData={design} />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-20 text-lg">
            No designers found 😕 Try changing your filter or search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Discover;
