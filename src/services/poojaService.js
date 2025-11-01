import { poojas } from '../data/samplePoojas';

export const poojaService = {
  // Get all poojas
  getAllPoojas: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return poojas;
  },

  // Get single pooja by ID
  getPoojaById: async (id) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const pooja = poojas.find(p => p.id === id);
    if (!pooja) {
      throw new Error('Pooja not found');
    }
    return pooja;
  },
};
