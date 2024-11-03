import { create } from "zustand";

const useServiceStore = create((set) => ({
  selectedService: null,
  setSelectedService: (service) => set({ selectedService: service }),
}));

export { useServiceStore };
