export const CONTACT_INFO = {
  phone: "+919876543210",
  phoneFormatted: "+91 98765 43210",
  whatsappMessage: "Hello I want to book a pooja",
  whatsappLink: (phone, message) => `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`,
};

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/yourusername",
  youtube: "https://youtube.com/yourchannel",
  facebook: "https://facebook.com/yourusername",
};

