import { create } from "zustand";

const useServiceStore = create((set) => ({
  selectedService: null,
  setSelectedService: (service) => set({ selectedService: service }),
  selected:"Business enquiry",
  setSelectedForm: () => set({ selected: "Candidates For Training" }),

}));

export { useServiceStore };
