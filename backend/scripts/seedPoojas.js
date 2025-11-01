require('dotenv').config();
const mongoose = require('mongoose');
const Pooja = require('../models/Pooja');

const poojas = [
  {
    id: "rudra-abhishek",
    title: "Rudrabhishek Puja",
    short: "Powerful Shiva pooja for peace and prosperity.",
    price: 5100,
    image: "/images/RudraAbhishek.jpg",
    duration: "2-3 hours",
  },
  {
    id: "laxmi-ganesh",
    title: "Laxmi Ganesh Puja",
    short: "For wealth, success and new beginnings.",
    price: 3100,
    image: "/images/LaxmiGanesh.jpeg",
    duration: "1-2 hours",
  },
  {
    id: "annaprashan-puja",
    title: "Annaprashan Puja",
    short: "Ceremony for baby's first solid food intake.",
    price: 3100, 
    image: "/images/annaprashan-puja.jpeg",
    duration: "1-2 hours",
  },
  {
    id: "satyanarayan-puja",
    title: "Satyanarayan Puja",
    short: "Worship of Lord Vishnu for well-being and prosperity.",
    price: 2100,
    image: "/images/LaxmiGanesh.jpeg",
    duration: "2 hours",
  },
  {
    id: "griha-pravesh-puja",
    title: "Griha Pravesh Puja",
    short: "Housewarming ceremony for positive energy and prosperity.",
    price: 7500,
    image: "/images/RudraAbhishek.jpg",
    duration: "3-4 hours",
  },
  {
    id: "naamkaran-sanskar",
    title: "Naamkaran Sanskar",
    short: "Naming ceremony for the newborn child.",
    price: 3500,
    image: "/images/annaprashan-puja.jpeg", 
    duration: "1-2 hours",
  },
  {
    id: "mundan-sanskar",
    title: "Mundan Sanskar",
    short: "Head tonsuring ritual for positive development.",
    price: 2800,
    image: "/images/LaxmiGanesh.jpeg", 
    duration: "1 hour",
  },
  {
    id: "shanti-puja",
    title: "Graha Shanti Puja",
    short: "Pacifying planetary effects for a harmonious life.",
    price: 9100,
    image: "/images/RudraAbhishek.jpg", 
    duration: "3-4 hours",
  },
  {
    id: "durga-path",
    title: "Durga Path",
    short: "Recitation of Durga Saptashati for divine protection and strength.",
    price: 5000,
    image: "/images/LaxmiGanesh.jpeg",
    duration: "2-3 hours",
  },
  {
    id: "baglamukhi-poojan",
    title: "Baglamukhi Poojan",
    short: "Goddess Baglamukhi worship for victory over enemies and obstacles.",
    price: 6000,
    image: "/images/RudraAbhishek.jpg",
    duration: "2-3 hours",
  },
  {
    id: "tripindi-shradh",
    title: "Tripindi Shradh",
    short: "Ritual for departed souls to ensure peace and salvation.",
    price: 4500,
    image: "/images/annaprashan-puja.jpeg",
    duration: "3-4 hours",
  },
  {
    id: "narayani-bali",
    title: "Narayani Bali",
    short: "Ritual for appeasing ancestors and removing negative energies.",
    price: 5500,
    image: "/images/LaxmiGanesh.jpeg",
    duration: "3-4 hours",
  },
  {
    id: "kaal-sarp-dosh-shanti",
    title: "Kaal Sarp Dosh Shanti",
    short: "Remedial pooja for neutralizing Kaal Sarp dosh in horoscope.",
    price: 8000,
    image: "/images/RudraAbhishek.jpg",
    duration: "4-5 hours",
  },
  {
    id: "kal-bhairav-pooja",
    title: "Kal Bhairav Pooja",
    short: "Worship of Lord Bhairav for protection from negative forces.",
    price: 4000,
    image: "/images/LaxmiGanesh.jpeg",
    duration: "2 hours",
  },
  {
    id: "ganga-poojan",
    title: "Ganga Poojan",
    short: "Sacred worship of River Ganga for purification and blessings.",
    price: 3500,
    image: "/images/annaprashan-puja.jpeg",
    duration: "1-2 hours",
  },
  {
    id: "tripur-sundari-poojan",
    title: "Tripur Sundari Poojan",
    short: "Worship of Goddess Tripura Sundari for beauty, prosperity and grace.",
    price: 6500,
    image: "/images/RudraAbhishek.jpg",
    duration: "2-3 hours",
  },
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected');

    // Clear existing poojas
    await Pooja.deleteMany({});
    console.log('Existing poojas cleared');

    // Insert new poojas
    await Pooja.insertMany(poojas);
    console.log(`${poojas.length} poojas seeded successfully`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
