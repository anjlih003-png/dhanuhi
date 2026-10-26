import Product_1 from "../../public/images/product-1.png";
import Product_2 from "../../public/images/product-2.png";
import Product_3 from "../../public/images/product-3.png";
import Product_4 from "../../public/images/product-4.png";
import Product_5 from "../../public/images/product-5.png";
import Product_6 from "../../public/images/product-6.png";
import Product_7 from "../../public/images/product-7.jpg";
import Product_8 from "../../public/images/rasin.jpg";
import Product_9 from "../../public/images/rasin-200.jpg";
import Product_10 from "../../public/images/kaju-200-2.jpg";
import Product_11 from "../../public/images/kaju-200-1.jpg";
import Product_12 from "../../public/images/kaju-200.jpg";
import Product_13 from "../../public/images/kaju-200-3.jpg";

// New product images from folders
import Almond1 from "../../public/images/almonds/3.jpg";
import Almond2 from "../../public/images/almonds/4.jpg";
import Almond3 from "../../public/images/almonds/5.jpg";
import Almond4 from "../../public/images/almonds/6.jpg";
import Almond5 from "../../public/images/almonds/7.jpg";
import Almond6 from "../../public/images/almonds/8.jpg";
import Almond7 from "../../public/images/almonds/9.jpg";
import Almond8 from "../../public/images/almonds/10.jpg";
import Almond9 from "../../public/images/almonds/10-1.jpg";

import Cashew1 from "../../public/images/cashew/5.jpg";
import Cashew2 from "../../public/images/cashew/6.jpg";
import Cashew3 from "../../public/images/cashew/7.jpg";
import Cashew4 from "../../public/images/cashew/8.jpg";
import Cashew5 from "../../public/images/cashew/9.jpg";
import Cashew6 from "../../public/images/cashew/10.jpg";
import Cashew7 from "../../public/images/cashew/11.jpg";
import Cashew8 from "../../public/images/cashew/12.jpg";

import Raisin1 from "../../public/images/raisin/Minimal White Stand-Up Pouch Mockup -1.jpg";
import Raisin2 from "../../public/images/raisin/Minimal White Stand-Up Pouch Mockup (1).jpg";
import Raisin3 from "../../public/images/raisin/Minimal White Stand-Up Pouch Mockup (2).jpg";
import Raisin4 from "../../public/images/raisin/Minimal White Stand-Up Pouch on Sage Green.jpg";
import Raisin5 from "../../public/images/raisin/Glossy White Stand-Up Pouch Mockup (1).jpg";
import Raisin6 from "../../public/images/raisin/Blank White Stand-Up Pouch on Mustard Background.jpg";
import Raisin7 from "../../public/images/raisin/Blank White Stand-Up Pouch on Rose Backdrop.jpg";
import Raisin8 from "../../public/images/raisin/Blank White Stand-Up Pouch on Rose Backdrop-1.jpg";

export const products = [
  {
    id: "1",
    name: "Premium Pistachios - Almonds",
    category: "Pistachios",
    price: "₹350",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Exquisite pistachios lightly salted for a perfect balance of taste and nutrition. Great for parties, snacks, or as a topping.",
    image: Product_1,
    nutrition: "Good source of fiber, iron, and antioxidants.",
    ingredients: "100% Pistachios, Salt",
    origin: "Iran",
    shelfLife: "12 months",
    storage: "Keep in a cool, dry place. Refrigerate for longer freshness.",
    rating: 5,
    reviewCount: 128,
    reviews: [
      { user: "Amit Sharma", rating: 5, comment: "Excellent quality pistachios! Very fresh and crunchy.", date: "2024-01-15" },
      { user: "Priya Patel", rating: 4, comment: "Good taste, but packaging could be better.", date: "2024-01-10" },
      { user: "Rahul Singh", rating: 5, comment: "Best pistachios I've ever had. Will buy again!", date: "2024-01-05" }
    ]
  },
  {
    id: "2",
    name: "Kashmiri Walnuts",
    category: "Walnuts",
    price: "₹280",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Superior quality walnuts known for their rich flavor and nutritional benefits. Excellent for brain health.",
    image: Product_2,
    nutrition: "Omega-3 rich, supports brain and heart health.",
    ingredients: "100% Kashmiri Walnuts",
    origin: "Kashmir, India",
    shelfLife: "12 months",
    storage: "Store in a cool, dry place or refrigerate for extended shelf life.",
    rating: 5,
    reviewCount: 95,
    reviews: [
      { user: "Sneha Gupta", rating: 5, comment: "Fresh and crunchy walnuts. Great for brain health!", date: "2024-01-12" },
      { user: "Vikram Mehta", rating: 4, comment: "Good quality, slightly expensive but worth it.", date: "2024-01-08" }
    ]
  },
  {
    id: "3",
    name: "Premium Quality Almonds (Badam) – Crunchy & Tasty Dry Fruits",
    category: "Almonds",
    price: "₹450",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Premium quality California almonds roasted to perfection for a crunchy texture and enhanced flavor. Ideal for healthy snacking and baking.",
    image: Almond1,
    nutrition: "Rich in Vitamin E and antioxidants.",
    ingredients: "100% California Almonds",
    origin: "California, USA",
    shelfLife: "12 months",
    storage: "Keep in a cool, dry place. Refrigerate for longer freshness.",
    rating: 5,
    reviewCount: 156,
    reviews: [
      { user: "Neha Kapoor", rating: 5, comment: "Perfectly roasted almonds. My kids love them!", date: "2024-01-14" },
      { user: "Arjun Reddy", rating: 5, comment: "Best almonds I've tasted. Highly recommended!", date: "2024-01-09" }
    ]
  },
  {
    id: "14",
    name: "Whole Raw Almonds – Premium Badam for Daily Snacking",
    category: "Almonds",
    price: "₹420",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Raw, unroasted California almonds packed with natural goodness and nutrients. Perfect for health-conscious individuals.",
    image: Almond2,
    nutrition: "Rich in protein, fiber, Vitamin E and healthy fats.",
    ingredients: "100% Raw California Almonds",
    origin: "California, USA",
    shelfLife: "12 months",
    storage: "Keep in a cool, dry place. Refrigerate for longer freshness.",
    rating: 5,
    reviewCount: 98,
    reviews: [
      { user: "Rohit Kumar", rating: 5, comment: "Fresh and crunchy. Great for my morning routine!", date: "2024-01-13" }
    ]
  },
  {
    id: "15",
    name: "Premium Almonds Badam – Healthy & Tasty Dry Fruit Pack",
    category: "Almonds",
    price: "₹475",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Extra large premium whole almonds with excellent crunch and taste. Perfect for gifting and snacking.",
    image: Almond3,
    nutrition: "High in protein, fiber, and essential nutrients.",
    ingredients: "100% Premium Whole Almonds",
    origin: "California, USA",
    shelfLife: "12 months",
    storage: "Store in airtight container in cool, dry place.",
    rating: 5,
    reviewCount: 87,
    reviews: [
      { user: "Meera Singh", rating: 5, comment: "Very good quality almonds. Value for money!", date: "2024-01-12" }
    ]
  },
  {
    id: "16",
    name: "Natural Whole Almonds – Premium Quality Badam",
    category: "Almonds",
    price: "₹500",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Skinless blanched almonds perfect for baking, cooking, and making almond milk.",
    image: Almond4,
    nutrition: "Rich in Vitamin E, magnesium, and protein.",
    ingredients: "100% Blanched Almonds",
    origin: "California, USA",
    shelfLife: "12 months",
    storage: "Keep in cool, dry place away from moisture.",
    rating: 5,
    reviewCount: 76,
    reviews: [
      { user: "Kiran Patel", rating: 5, comment: "Perfect for baking. Very smooth texture.", date: "2024-01-11" }
    ]
  },
  {
    id: "4",
    name: "Cashews",
    category: "Cashews",
    price: "₹450",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Juicy, soft dates, naturally sweet and packed with energy. Perfect for breakfast or as a healthy snack.",
    image: Product_4,
    nutrition: "Excellent source of energy and iron.",
    ingredients: "100% Arabian Dates",
    origin: "Saudi Arabia",
    shelfLife: "24 months",
    storage: "Keep in a cool, dry place. Once opened, store in an airtight container.",
    rating: 5,
    reviewCount: 87,
    reviews: [
      { user: "Fatima Khan", rating: 5, comment: "Sweet and juicy dates. Perfect for fasting.", date: "2024-01-13" },
      { user: "Imran Ali", rating: 4, comment: "Good quality dates, will order again.", date: "2024-01-07" }
    ]
  },
  {
    id: "17",
    name: "Whole Cashews (Kaju) – Premium Quality Dry Fruits",
    category: "Cashews",
    price: "₹450",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Premium W180 grade cashews - large, whole kernels with superior taste and crunch.",
    image: Cashew2,
    nutrition: "High in healthy fats, protein and minerals.",
    ingredients: "100% W180 Cashew Kernels",
    origin: "India",
    shelfLife: "12 months",
    storage: "Store in airtight container in cool, dry place.",
    rating: 5,
    reviewCount: 145,
    reviews: [
      { user: "Suresh Reddy", rating: 5, comment: "Excellent quality cashews. Worth every penny!", date: "2024-01-15" }
    ]
  },
  {
    id: "35",
    name: "Premium Kaju – Natural Cashew Nuts for Daily Snacking",
    category: "Cashews",
    price: "₹440",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Natural premium kaju with rich taste and perfect crunch. Ideal for daily snacking.",
    image: Cashew4,
    nutrition: "Rich in protein, healthy fats and magnesium.",
    ingredients: "100% Natural Cashew Nuts",
    origin: "India",
    shelfLife: "12 months",
    storage: "Store in cool, dry place away from moisture.",
    rating: 5,
    reviewCount: 138,
    reviews: [
      { user: "Ramesh Kumar", rating: 5, comment: "Very fresh and crunchy. Great quality!", date: "2024-01-14" }
    ]
  },
  {
    id: "36",
    name: "Cashew Nuts – Premium Quality Kaju for Home & Family",
    category: "Cashews",
    price: "₹435",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Premium quality kaju perfect for the whole family. Great for snacking and cooking.",
    image: Cashew5,
    nutrition: "High in healthy fats, protein and essential minerals.",
    ingredients: "100% Premium Cashew Nuts",
    origin: "India",
    shelfLife: "12 months",
    storage: "Keep in airtight container in cool, dry place.",
    rating: 5,
    reviewCount: 142,
    reviews: [
      { user: "Geeta Sharma", rating: 5, comment: "Excellent quality. Family loves them!", date: "2024-01-13" }
    ]
  },
  {
    id: "37",
    name: "Natural Cashews (Kaju) – Tasty & Crunchy Dry Fruits",
    category: "Cashews",
    price: "₹445",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Natural tasty and crunchy kaju. Perfect for everyday consumption.",
    image: Cashew6,
    nutrition: "Rich in protein, fiber and healthy fats.",
    ingredients: "100% Natural Cashews",
    origin: "India",
    shelfLife: "12 months",
    storage: "Store in cool, dry place away from direct sunlight.",
    rating: 5,
    reviewCount: 136,
    reviews: [
      { user: "Manoj Singh", rating: 5, comment: "Very tasty and fresh. Worth buying!", date: "2024-01-12" }
    ]
  },
  {
    id: "38",
    name: "Premium Dry Fruits Cashews – Whole Kaju Pack",
    category: "Cashews",
    price: "₹455",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Premium whole kaju pack. Superior quality dry fruits for gifting and snacking.",
    image: Cashew7,
    nutrition: "High in protein, healthy fats and minerals.",
    ingredients: "100% Whole Premium Cashews",
    origin: "India",
    shelfLife: "12 months",
    storage: "Store in airtight container in cool, dry place.",
    rating: 5,
    reviewCount: 149,
    reviews: [
      { user: "Lakshmi Devi", rating: 5, comment: "Great pack quality. Perfect for gifting!", date: "2024-01-11" }
    ]
  },
  {
    id: "39",
    name: "Cashew Nuts Kaju – Quality Dry Fruits for Daily Use",
    category: "Cashews",
    price: "₹438",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Quality kaju for daily use. Fresh, crunchy and nutritious.",
    image: Cashew8,
    nutrition: "Rich in healthy fats, protein and magnesium.",
    ingredients: "100% Quality Cashew Nuts",
    origin: "India",
    shelfLife: "12 months",
    storage: "Keep in cool, dry place for freshness.",
    rating: 5,
    reviewCount: 141,
    reviews: [
      { user: "Dinesh Kumar", rating: 5, comment: "Good quality for daily use. Recommended!", date: "2024-01-10" }
    ]
  },
  {
    id: "40",
    name: "Premium Kaju Nuts – Tasty Cashews for Snacks & Desserts",
    category: "Cashews",
    price: "₹460",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Tasty premium kaju perfect for snacks and desserts. Superior quality cashews.",
    image: Product_5,
    nutrition: "High in protein, healthy fats and essential nutrients.",
    ingredients: "100% Premium Kaju",
    origin: "India",
    shelfLife: "12 months",
    storage: "Store in airtight container in cool, dry place.",
    rating: 5,
    reviewCount: 147,
    reviews: [
      { user: "Rekha Patel", rating: 5, comment: "Perfect for desserts. Very tasty!", date: "2024-01-09" }
    ]
  },
  {
    id: "41",
    name: "Whole Cashew Kernels – Premium Quality Kaju",
    category: "Cashews",
    price: "₹452",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Whole cashew kernels of premium quality. Large, whole and crunchy.",
    image: Product_10,
    nutrition: "Rich in healthy fats, protein and minerals.",
    ingredients: "100% Whole Cashew Kernels",
    origin: "India",
    shelfLife: "12 months",
    storage: "Keep in cool, dry place away from moisture.",
    rating: 5,
    reviewCount: 144,
    reviews: [
      { user: "Sanjay Gupta", rating: 5, comment: "Whole kernels, excellent quality!", date: "2024-01-08" }
    ]
  },
  {
    id: "42",
    name: "Premium Cashews (Kaju) – Dry Fruits for Everyday Consumption",
    category: "Cashews",
    price: "₹448",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Premium kaju dry fruits perfect for everyday consumption. Fresh and nutritious.",
    image: Product_11,
    nutrition: "High in protein, healthy fats and magnesium.",
    ingredients: "100% Premium Cashews",
    origin: "India",
    shelfLife: "12 months",
    storage: "Store in airtight container in cool, dry place.",
    rating: 5,
    reviewCount: 150,
    reviews: [
      { user: "Usha Rani", rating: 5, comment: "Great for everyday use. Very fresh!", date: "2024-01-07" }
    ]
  },
  {
    id: "7",
    name: "Mixed Dry Fruits",
    category: "Mix",
    price: "₹450",
    sizes: ["250gm", "500gm", "1kg"],
    desc: "Premium mix of almonds, cashews, pistachios, walnuts and raisins. Perfect for gifting and snacking.",
    image: Product_7,
    nutrition: "Rich in protein, healthy fats, vitamins and minerals.",
    ingredients: "Almonds, Cashews, Pistachios, Walnuts, Raisins",
    origin: "India",
    shelfLife: "12 months",
    storage: "Store in airtight container in cool, dry place.",
    rating: 5,
    reviewCount: 156,
    reviews: [
      { user: "Rahul Sharma", rating: 5, comment: "Great mix of all nuts. Very fresh and tasty!", date: "2024-01-17" },
      { user: "Pooja Mehta", rating: 5, comment: "Perfect for gifting. Everyone loved it!", date: "2024-01-16" }
    ]
  },
  {
    id: "22",
    name: "Crunchy Almonds (Badam) – Premium Dry Fruits for Daily Use",
    category: "Almonds",
    price: "₹485",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Crispy and crunchy premium almonds perfect for everyday snacking. Rich in nutrients and flavor.",
    image: Almond5,
    nutrition: "High in protein, fiber, Vitamin E and healthy fats.",
    ingredients: "100% Premium Crunchy Almonds",
    origin: "California, USA",
    shelfLife: "12 months",
    storage: "Store in airtight container in cool, dry place.",
    rating: 5,
    reviewCount: 82,
    reviews: [
      { user: "Vikash Kumar", rating: 5, comment: "Very crunchy and fresh. Great for snacking!", date: "2024-01-10" }
    ]
  },
  {
    id: "23",
    name: "Premium Badam – Whole Almond Kernels for Everyday Snacking",
    category: "Almonds",
    price: "₹465",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Carefully selected whole almond kernels with superior quality and taste. Perfect for daily consumption.",
    image: Almond6,
    nutrition: "Rich in antioxidants, protein and essential minerals.",
    ingredients: "100% Whole Almond Kernels",
    origin: "California, USA",
    shelfLife: "12 months",
    storage: "Keep in cool, dry place away from direct sunlight.",
    rating: 5,
    reviewCount: 91,
    reviews: [
      { user: "Deepa Sharma", rating: 5, comment: "Excellent quality. Best almonds I've bought!", date: "2024-01-09" }
    ]
  },
  {
    id: "24",
    name: "Raw Almonds – Quality Dry Fruits for Home & Family",
    category: "Almonds",
    price: "₹440",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Pure raw almonds ideal for the whole family. Great for snacking, cooking, and adding to your daily diet.",
    image: Almond7,
    nutrition: "Natural source of protein, fiber and healthy fats.",
    ingredients: "100% Raw Almonds",
    origin: "California, USA",
    shelfLife: "12 months",
    storage: "Store in airtight container in cool, dry place.",
    rating: 5,
    reviewCount: 104,
    reviews: [
      { user: "Ravi Kumar", rating: 5, comment: "Fresh and tasty. Family loves them!", date: "2024-01-08" }
    ]
  },
  {
    id: "25",
    name: "Whole Almonds Badam – Premium Nuts for Daily Consumption",
    category: "Almonds",
    price: "₹455",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Premium whole almonds packed with nutrition. Perfect addition to your daily healthy diet.",
    image: Almond8,
    nutrition: "Rich in Vitamin E, magnesium, protein and fiber.",
    ingredients: "100% Whole Premium Almonds",
    origin: "California, USA",
    shelfLife: "12 months",
    storage: "Keep in a cool, dry place for maximum freshness.",
    rating: 5,
    reviewCount: 88,
    reviews: [
      { user: "Sonia Patel", rating: 5, comment: "Very good quality. Highly recommended!", date: "2024-01-07" }
    ]
  },
  {
    id: "26",
    name: "Premium Dry Fruits Almonds – Crunchy Whole Badam",
    category: "Almonds",
    price: "₹470",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Premium crunchy whole badam perfect for snacking, cooking, and gifting. Superior quality dry fruits.",
    image: Almond9,
    nutrition: "Rich in protein, fiber, Vitamin E and essential nutrients.",
    ingredients: "100% Premium Whole Almonds",
    origin: "California, USA",
    shelfLife: "12 months",
    storage: "Store in airtight container in cool, dry place.",
    rating: 5,
    reviewCount: 93,
    reviews: [
      { user: "Amit Singh", rating: 5, comment: "Great quality almonds. Very fresh!", date: "2024-01-06" }
    ]
  },
  {
    id: "27",
    name: "Almonds Badam Pack – Whole Raw Nuts, Premium Quality",
    category: "Almonds",
    price: "₹445",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Premium quality whole raw badam pack. Fresh, nutritious, and perfect for everyday use.",
    image: Almond1,
    nutrition: "High in protein, healthy fats, fiber and minerals.",
    ingredients: "100% Whole Raw Almonds",
    origin: "California, USA",
    shelfLife: "12 months",
    storage: "Keep in cool, dry place for extended freshness.",
    rating: 5,
    reviewCount: 97,
    reviews: [
      { user: "Nisha Gupta", rating: 5, comment: "Excellent pack. Very good quality!", date: "2024-01-05" }
    ]
  },
  {
    id: "6",
    name: "Premium Raisins (Kishmish) – Sweet & Tasty Dry Fruits",
    category: "Raisins",
    price: "₹170",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Plump, sweet golden raisins without seeds, perfect for baking, trail mixes, or as a natural sweetener in dishes.",
    image: Raisin1,
    nutrition: "Natural sugar and potassium-rich.",
    ingredients: "100% Seedless Golden Raisins",
    origin: "Turkey",
    shelfLife: "18 months",
    storage: "Store in a cool, dry place in an airtight container.",
    rating: 5,
    reviewCount: 64,
    reviews: [
      { user: "Anita Desai", rating: 5, comment: "Sweet and plump raisins. Great for baking!", date: "2024-01-17" },
      { user: "Suresh Nair", rating: 4, comment: "Good quality raisins, nice and sweet.", date: "2024-01-06" }
    ]
  },
  {
    id: "19",
    name: "Green Raisins (Kishmish) – Premium Quality Dry Fruits",
    category: "Raisins",
    price: "₹190",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Naturally sweet green raisins packed with nutrients. Perfect for snacking and cooking.",
    image: Raisin2,
    nutrition: "Rich in iron, fiber and antioxidants.",
    ingredients: "100% Seedless Green Raisins",
    origin: "Afghanistan",
    shelfLife: "18 months",
    storage: "Store in airtight container in cool, dry place.",
    rating: 5,
    reviewCount: 92,
    reviews: [
      { user: "Priya Gupta", rating: 5, comment: "Very good quality green raisins. Fresh and sweet!", date: "2024-01-16" }
    ]
  },
  {
    id: "20",
    name: "Natural Raisins – Premium Kishmish for Daily Consumption",
    category: "Raisins",
    price: "₹185",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Premium natural raisins with tangy-sweet flavor. Great for trail mixes and desserts.",
    image: Raisin3,
    nutrition: "Natural source of energy, fiber and potassium.",
    ingredients: "100% Natural Raisins",
    origin: "Turkey",
    shelfLife: "18 months",
    storage: "Keep in cool, dry place away from direct sunlight.",
    rating: 5,
    reviewCount: 78,
    reviews: [
      { user: "Mohit Singh", rating: 5, comment: "Delicious raisins. Very fresh!", date: "2024-01-15" }
    ]
  },
  {
    id: "21",
    name: "Premium Kishmish – Sweet Dried Grapes for Daily Snacking",
    category: "Raisins",
    price: "₹210",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Large premium kishmish with extra sweetness and plump texture. Premium quality dried grapes.",
    image: Raisin4,
    nutrition: "High in natural sugars, iron and fiber.",
    ingredients: "100% Premium Kishmish",
    origin: "Turkey",
    shelfLife: "18 months",
    storage: "Store in airtight container in cool, dry place.",
    rating: 5,
    reviewCount: 84,
    reviews: [
      { user: "Neha Verma", rating: 5, comment: "Big, juicy raisins. Excellent quality!", date: "2024-01-14" }
    ]
  },
  {
    id: "29",
    name: "Raisins Kishmish – Quality Dry Fruits for Home & Family",
    category: "Raisins",
    price: "₹175",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Quality kishmish perfect for the whole family. Great for snacking and cooking.",
    image: Raisin5,
    nutrition: "Natural sugar, iron and potassium-rich.",
    ingredients: "100% Quality Kishmish",
    origin: "Turkey",
    shelfLife: "18 months",
    storage: "Store in cool, dry place in airtight container.",
    rating: 5,
    reviewCount: 76,
    reviews: [
      { user: "Rahul Verma", rating: 5, comment: "Good quality. Family loves it!", date: "2024-01-13" }
    ]
  },
  {
    id: "30",
    name: "Premium Dry Fruits Raisins – Tasty Kishmish Pack",
    category: "Raisins",
    price: "₹195",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Premium tasty kishmish pack. Perfect for gifting and daily consumption.",
    image: Raisin6,
    nutrition: "Rich in antioxidants, iron and fiber.",
    ingredients: "100% Premium Kishmish",
    origin: "Turkey",
    shelfLife: "18 months",
    storage: "Keep in airtight container in cool, dry place.",
    rating: 5,
    reviewCount: 89,
    reviews: [
      { user: "Pooja Singh", rating: 5, comment: "Tasty and fresh. Great pack!", date: "2024-01-12" }
    ]
  },
  {
    id: "31",
    name: "Dried Grapes (Kishmish) – Premium Quality Dry Fruits",
    category: "Raisins",
    price: "₹180",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Premium dried grapes (kishmish) with natural sweetness. Excellent quality.",
    image: Raisin7,
    nutrition: "Natural source of energy and minerals.",
    ingredients: "100% Dried Grapes",
    origin: "Turkey",
    shelfLife: "18 months",
    storage: "Store in cool, dry place away from moisture.",
    rating: 5,
    reviewCount: 82,
    reviews: [
      { user: "Karan Mehta", rating: 5, comment: "Very good quality dried grapes!", date: "2024-01-11" }
    ]
  },
  {
    id: "32",
    name: "Sweet Raisins – Premium Kishmish for Snacks & Desserts",
    category: "Raisins",
    price: "₹200",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Extra sweet premium kishmish perfect for snacks and desserts. Superior quality.",
    image: Raisin8,
    nutrition: "High in natural sugars, iron and potassium.",
    ingredients: "100% Sweet Kishmish",
    origin: "Turkey",
    shelfLife: "18 months",
    storage: "Keep in airtight container in cool, dry place.",
    rating: 5,
    reviewCount: 91,
    reviews: [
      { user: "Anjali Reddy", rating: 5, comment: "Very sweet and fresh. Perfect for desserts!", date: "2024-01-10" }
    ]
  },
  {
    id: "33",
    name: "Natural Kishmish – Premium Raisins for Everyday Use",
    category: "Raisins",
    price: "₹188",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Natural premium kishmish ideal for everyday use. Fresh and nutritious.",
    image: Product_7,
    nutrition: "Rich in iron, fiber and antioxidants.",
    ingredients: "100% Natural Kishmish",
    origin: "Turkey",
    shelfLife: "18 months",
    storage: "Store in cool, dry place in airtight container.",
    rating: 5,
    reviewCount: 86,
    reviews: [
      { user: "Vivek Sharma", rating: 5, comment: "Great quality for daily use!", date: "2024-01-09" }
    ]
  },
  {
    id: "34",
    name: "Premium Quality Raisins (Kishmish) – Dried Fruit Pack",
    category: "Raisins",
    price: "₹205",
    sizes: ["100gm", "200gm", "250gm", "500gm", "1kg"],
    desc: "Premium quality kishmish dried fruit pack. Perfect for gifting and snacking.",
    image: Product_8,
    nutrition: "High in natural sugars, iron and fiber.",
    ingredients: "100% Premium Kishmish",
    origin: "Turkey",
    shelfLife: "18 months",
    storage: "Keep in airtight container in cool, dry place.",
    rating: 5,
    reviewCount: 94,
    reviews: [
      { user: "Meena Kumari", rating: 5, comment: "Excellent quality pack. Very fresh!", date: "2024-01-08" }
    ]
  },
];
