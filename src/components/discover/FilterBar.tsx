import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useFilterStore } from "@/store/FilterStore";
import { Search, Grid, SlidersHorizontal } from "lucide-react";

const filters = ["Daily", "Weekly", "Monthly"];
const categories = ["Explore", "Trending", "Premium", "TopSelling", "New"];

const FilterBar: React.FC = () => {
  const {
    selectedFilter,
    setFilter,
    selectedCategory,
    setCategory,
    searchQuery,
    setSearchQuery,
  } = useFilterStore();

  return (
    <div className="flex flex-wrap items-center gap-4 justify-end bg-white p-4   w-full sm:w-auto">
      {/* Search */}
      <div className="relative w-full sm:w-64">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={16}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search designers..."
          className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
      </div>

      {/* Category Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
          <Grid size={16} />
          {selectedCategory}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Category</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {categories.map((cat) => (
            <DropdownMenuItem key={cat} onClick={() => setCategory(cat)}>
              {cat}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Filter Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
          <SlidersHorizontal size={16} />
          {selectedFilter}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Filter</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {filters.map((filter) => (
            <DropdownMenuItem key={filter} onClick={() => setFilter(filter)}>
              {filter}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FilterBar;
