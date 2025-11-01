import { havans } from '../data/sampleHavans';

export const havanService = {
  // Get all havans
  getAllHavans: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return havans;
  },

  // Get single havan by ID
  getHavanById: async (id) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const havan = havans.find(h => h.id === id);
    if (!havan) {
      throw new Error('Havan not found');
    }
    return havan;
  },
};