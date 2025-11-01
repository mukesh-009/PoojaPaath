import api from './api';

export const testimonialService = {
  // Get approved testimonials
  getApprovedTestimonials: async () => {
    try {
      const response = await api.get('/testimonials');
      return response.data;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      throw error;
    }
  },

  // Submit new testimonial
  createTestimonial: async (testimonialData) => {
    try {
      const response = await api.post('/testimonials', testimonialData);
      return response;
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      throw error;
    }
  },
};
