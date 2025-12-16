// app/stores/serviceCategory.ts

import { defineStore } from "pinia";

export const useServiceCategoryStore = defineStore("serviceCategory", {
  state: () => ({
    categories: [
      { id: 1, name: "Facility Management & Building Restorations" },
      { id: 2, name: "New Development, Design Build Projects" },
    ],
  }),
  getters: {
    getCategoryById: (state) => {
      return (id: number) => state.categories.find((cat) => cat.id === id);
    },
    getCategories: (state) => {
      return state.categories;
    },
  },
});
