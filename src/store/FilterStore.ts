import { create } from "zustand";

interface FilterState {
  selectedFilter: string;
  selectedCategory: string;
  searchQuery: string;
  setFilter: (filter: string) => void;
  setCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  selectedFilter: "Weekly",
  selectedCategory: "Explore",
  searchQuery: "",
  setFilter: (filter) => set({ selectedFilter: filter }),
  setCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
