import React, { useState } from "react";
import { designerData } from "./lib/data/DesignersData";
import DesignerCard from "./components/DesignerCard";

const filters = ["Daily", "Weekly", "Monthly"];
const categories = ["Trending", "Premium", "TopSelling", "New"];

const Discover: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("Daily");
  const [selectedCategory, setSelectedCategory] = useState("Trending");

  const data = designerData[selectedCategory as keyof typeof designerData];

  const filteredData = data.filter((item) => {
    const uploadDate = new Date(item.uploadedAt);
    const today = new Date();
    const diffDays = Math.floor(
      (today.getTime() - uploadDate.getTime()) / (1000 * 60 * 60 * 24),
    );
    if (selectedFilter === "Daily") return diffDays <= 1;
    if (selectedFilter === "Weekly") return diffDays <= 7;
    if (selectedFilter === "Monthly") return diffDays <= 30;
    return true;
  });
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 mt-14">
      <h1 className="text-3xl font-bold mb-6 text-black">Discover Designers</h1>

      {/* Categories */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium ${
              selectedCategory === cat
                ? "bg-lime-500 text-white"
                : "bg-gray-100 text-black hover:bg-gray-200"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-1 rounded-full font-medium border ${
              selectedFilter === filter
                ? "border-lime-500 text-lime-600"
                : "border-gray-300 text-gray-600 hover:border-gray-500"
            } transition`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid of Designers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {filteredData.map((design) => (
          <div className="hover:cursor-pointer">
            <DesignerCard key={design.id} designerData={design} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
