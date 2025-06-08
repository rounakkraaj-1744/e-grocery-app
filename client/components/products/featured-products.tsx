"use client"

import { useState } from "react"
import { Star, ShoppingCart, Heart, Eye, Check, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import Link from "next/link"

// Expanded product data (100+ products)
const products = [
  {
    id: 1,
    name: "Organic Fresh Avocado",
    price: 149,
    originalPrice: 199,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Organic",
    isNew: true,
    isBestseller: true,
    stock: 15,
    tags: ["organic", "fresh", "fruit"],
  },
  {
    id: 2,
    name: "Farm Fresh Eggs (12 pack)",
    price: 89,
    originalPrice: 109,
    rating: 4.6,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Farm Fresh",
    isNew: false,
    isBestseller: true,
    stock: 8,
    tags: ["organic", "dairy", "protein"],
  },
  {
    id: 3,
    name: "Whole Grain Bread",
    price: 59,
    originalPrice: 69,
    rating: 4.5,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Artisanal",
    isNew: false,
    isBestseller: false,
    stock: 12,
    tags: ["bakery", "whole grain", "breakfast"],
  },
  {
    id: 4,
    name: "Organic Milk (1L)",
    price: 65,
    originalPrice: 75,
    rating: 4.7,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Organic",
    isNew: false,
    isBestseller: true,
    stock: 20,
    tags: ["organic", "dairy", "beverage"],
  },
  {
    id: 5,
    name: "Fresh Strawberries (250g)",
    price: 129,
    originalPrice: 159,
    rating: 4.9,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Seasonal",
    isNew: true,
    isBestseller: false,
    stock: 7,
    tags: ["organic", "fresh", "fruit", "seasonal"],
  },
  {
    id: 6,
    name: "Organic Spinach (200g)",
    price: 49,
    originalPrice: 59,
    rating: 4.6,
    reviews: 65,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 18,
    tags: ["organic", "fresh", "vegetable", "leafy"],
  },
  {
    id: 7,
    name: "Free Range Chicken Breast (500g)",
    price: 219,
    originalPrice: 249,
    rating: 4.7,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Free Range",
    isNew: false,
    isBestseller: true,
    stock: 10,
    tags: ["meat", "protein", "free range"],
  },
  {
    id: 8,
    name: "Atlantic Salmon Fillet (300g)",
    price: 349,
    originalPrice: 399,
    rating: 4.8,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=600&auto=format&fit=crop",
    category: "seafood",
    badge: "Premium",
    isNew: true,
    isBestseller: false,
    stock: 5,
    tags: ["seafood", "protein", "omega-3"],
  },
  {
    id: 9,
    name: "Organic Bananas (6 pcs)",
    price: 59,
    originalPrice: 69,
    rating: 4.5,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Organic",
    isNew: false,
    isBestseller: true,
    stock: 25,
    tags: ["organic", "fresh", "fruit"],
  },
  {
    id: 10,
    name: "Fresh Tomatoes (500g)",
    price: 39,
    originalPrice: 49,
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Fresh",
    isNew: false,
    isBestseller: false,
    stock: 30,
    tags: ["fresh", "vegetable"],
  },
  {
    id: 11,
    name: "Organic Blueberries (125g)",
    price: 159,
    originalPrice: 189,
    rating: 4.7,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 9,
    tags: ["organic", "fresh", "fruit", "berries"],
  },
  {
    id: 12,
    name: "Sourdough Bread (500g)",
    price: 79,
    originalPrice: 89,
    rating: 4.8,
    reviews: 105,
    image: "https://images.unsplash.com/photo-1585478259715-1c093a7b70d3?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Artisanal",
    isNew: true,
    isBestseller: true,
    stock: 14,
    tags: ["bakery", "sourdough", "artisanal"],
  },
  {
    id: 13,
    name: "Organic Bell Peppers (3 pcs)",
    price: 69,
    originalPrice: 79,
    rating: 4.5,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 22,
    tags: ["organic", "fresh", "vegetable"],
  },
  {
    id: 14,
    name: "Greek Yogurt (500g)",
    price: 89,
    originalPrice: 99,
    rating: 4.6,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Probiotic",
    isNew: false,
    isBestseller: true,
    stock: 18,
    tags: ["dairy", "probiotic", "protein"],
  },
  {
    id: 15,
    name: "Grass-Fed Ground Beef (500g)",
    price: 249,
    originalPrice: 279,
    rating: 4.7,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Grass-Fed",
    isNew: false,
    isBestseller: true,
    stock: 12,
    tags: ["meat", "protein", "grass-fed"],
  },
  {
    id: 16,
    name: "Organic Carrots (500g)",
    price: 45,
    originalPrice: 55,
    rating: 4.4,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 25,
    tags: ["organic", "fresh", "vegetable"],
  },
  {
    id: 17,
    name: "Croissants (4 pcs)",
    price: 99,
    originalPrice: 119,
    rating: 4.8,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Butter",
    isNew: false,
    isBestseller: true,
    stock: 8,
    tags: ["bakery", "breakfast", "butter"],
  },
  {
    id: 18,
    name: "Organic Mangoes (2 pcs)",
    price: 129,
    originalPrice: 149,
    rating: 4.9,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Seasonal",
    isNew: true,
    isBestseller: false,
    stock: 6,
    tags: ["organic", "fresh", "fruit", "seasonal"],
  },
  {
    id: 19,
    name: "Cheddar Cheese (200g)",
    price: 119,
    originalPrice: 139,
    rating: 4.6,
    reviews: 83,
    image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Aged",
    isNew: false,
    isBestseller: false,
    stock: 15,
    tags: ["dairy", "cheese", "aged"],
  },
  {
    id: 20,
    name: "Lamb Chops (400g)",
    price: 349,
    originalPrice: 399,
    rating: 4.7,
    reviews: 65,
    image: "https://images.unsplash.com/photo-1603048297172-c83869ae9537?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Premium",
    isNew: false,
    isBestseller: false,
    stock: 7,
    tags: ["meat", "protein", "premium"],
  },
  {
    id: 21,
    name: "Organic Kale (200g)",
    price: 59,
    originalPrice: 69,
    rating: 4.5,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 20,
    tags: ["organic", "fresh", "vegetable", "leafy"],
  },
  {
    id: 22,
    name: "Multigrain Bagels (4 pcs)",
    price: 89,
    originalPrice: 99,
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Multigrain",
    isNew: false,
    isBestseller: false,
    stock: 16,
    tags: ["bakery", "breakfast", "multigrain"],
  },
  {
    id: 23,
    name: "Organic Apples (1kg)",
    price: 99,
    originalPrice: 119,
    rating: 4.7,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Organic",
    isNew: false,
    isBestseller: true,
    stock: 28,
    tags: ["organic", "fresh", "fruit"],
  },
  {
    id: 24,
    name: "Butter (200g)",
    price: 79,
    originalPrice: 89,
    rating: 4.5,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Unsalted",
    isNew: false,
    isBestseller: false,
    stock: 22,
    tags: ["dairy", "butter", "unsalted"],
  },
  {
    id: 25,
    name: "Pork Ribs (700g)",
    price: 299,
    originalPrice: 349,
    rating: 4.8,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "BBQ",
    isNew: true,
    isBestseller: true,
    stock: 9,
    tags: ["meat", "protein", "bbq"],
  },
  {
    id: 26,
    name: "Organic Broccoli (500g)",
    price: 69,
    originalPrice: 79,
    rating: 4.6,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 18,
    tags: ["organic", "fresh", "vegetable"],
  },
  {
    id: 27,
    name: "Chocolate Muffins (4 pcs)",
    price: 109,
    originalPrice: 129,
    rating: 4.7,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1604413191066-4dd20bedf486?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Fresh",
    isNew: false,
    isBestseller: true,
    stock: 12,
    tags: ["bakery", "dessert", "chocolate"],
  },
  {
    id: 28,
    name: "Organic Grapes (500g)",
    price: 119,
    originalPrice: 139,
    rating: 4.5,
    reviews: 72,
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 14,
    tags: ["organic", "fresh", "fruit"],
  },
  {
    id: 29,
    name: "Mozzarella Cheese (200g)",
    price: 129,
    originalPrice: 149,
    rating: 4.8,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Fresh",
    isNew: false,
    isBestseller: true,
    stock: 16,
    tags: ["dairy", "cheese", "fresh"],
  },
  {
    id: 30,
    name: "Turkey Breast (400g)",
    price: 259,
    originalPrice: 299,
    rating: 4.6,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Lean",
    isNew: false,
    isBestseller: false,
    stock: 10,
    tags: ["meat", "protein", "lean"],
  },
  {
    id: 31,
    name: "Organic Potatoes (1kg)",
    price: 49,
    originalPrice: 59,
    rating: 4.4,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 30,
    tags: ["organic", "fresh", "vegetable"],
  },
  {
    id: 32,
    name: "Cinnamon Rolls (4 pcs)",
    price: 119,
    originalPrice: 139,
    rating: 4.9,
    reviews: 108,
    image: "https://images.unsplash.com/photo-1583527976767-a17c9c6d7ff0?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Fresh",
    isNew: true,
    isBestseller: true,
    stock: 7,
    tags: ["bakery", "dessert", "cinnamon"],
  },
  {
    id: 33,
    name: "Organic Oranges (1kg)",
    price: 89,
    originalPrice: 109,
    rating: 4.6,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 22,
    tags: ["organic", "fresh", "fruit", "citrus"],
  },
  {
    id: 34,
    name: "Cottage Cheese (250g)",
    price: 69,
    originalPrice: 79,
    rating: 4.5,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Low Fat",
    isNew: false,
    isBestseller: false,
    stock: 18,
    tags: ["dairy", "cheese", "low fat", "protein"],
  },
  {
    id: 35,
    name: "Beef Tenderloin (500g)",
    price: 399,
    originalPrice: 449,
    rating: 4.9,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Premium",
    isNew: false,
    isBestseller: true,
    stock: 6,
    tags: ["meat", "protein", "premium"],
  },
  {
    id: 36,
    name: "Organic Cauliflower",
    price: 59,
    originalPrice: 69,
    rating: 4.5,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1566842600175-97dca3c5ad8d?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 16,
    tags: ["organic", "fresh", "vegetable"],
  },
  {
    id: 37,
    name: "Baguette (400g)",
    price: 69,
    originalPrice: 79,
    rating: 4.7,
    reviews: 84,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Artisanal",
    isNew: false,
    isBestseller: true,
    stock: 14,
    tags: ["bakery", "bread", "artisanal"],
  },
  {
    id: 38,
    name: "Organic Kiwi (6 pcs)",
    price: 99,
    originalPrice: 119,
    rating: 4.6,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 12,
    tags: ["organic", "fresh", "fruit"],
  },
  {
    id: 39,
    name: "Paneer (200g)",
    price: 89,
    originalPrice: 99,
    rating: 4.7,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Fresh",
    isNew: false,
    isBestseller: true,
    stock: 20,
    tags: ["dairy", "protein", "fresh"],
  },
  {
    id: 40,
    name: "Chicken Sausages (8 pcs)",
    price: 179,
    originalPrice: 199,
    rating: 4.5,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "No Preservatives",
    isNew: false,
    isBestseller: false,
    stock: 15,
    tags: ["meat", "protein", "breakfast"],
  },
  {
    id: 41,
    name: "Organic Mushrooms (250g)",
    price: 79,
    originalPrice: 89,
    rating: 4.6,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 14,
    tags: ["organic", "fresh", "vegetable", "mushroom"],
  },
  {
    id: 42,
    name: "Chocolate Chip Cookies (8 pcs)",
    price: 99,
    originalPrice: 119,
    rating: 4.8,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Homestyle",
    isNew: false,
    isBestseller: true,
    stock: 10,
    tags: ["bakery", "dessert", "chocolate"],
  },
  {
    id: 43,
    name: "Organic Pineapple",
    price: 89,
    originalPrice: 109,
    rating: 4.7,
    reviews: 72,
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 8,
    tags: ["organic", "fresh", "fruit", "tropical"],
  },
  {
    id: 44,
    name: "Almond Milk (1L)",
    price: 119,
    originalPrice: 139,
    rating: 4.6,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1600788907416-456578634209?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Plant-Based",
    isNew: true,
    isBestseller: false,
    stock: 22,
    tags: ["dairy", "plant-based", "vegan"],
  },
  {
    id: 45,
    name: "Mutton Curry Cut (500g)",
    price: 349,
    originalPrice: 399,
    rating: 4.8,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Premium",
    isNew: false,
    isBestseller: true,
    stock: 7,
    tags: ["meat", "protein", "curry"],
  },
  {
    id: 46,
    name: "Organic Sweet Corn (2 pcs)",
    price: 49,
    originalPrice: 59,
    rating: 4.5,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 18,
    tags: ["organic", "fresh", "vegetable", "corn"],
  },
  {
    id: 47,
    name: "Garlic Bread (300g)",
    price: 79,
    originalPrice: 89,
    rating: 4.6,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1619535860434-cf9b2bca5ce0?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Fresh",
    isNew: false,
    isBestseller: false,
    stock: 12,
    tags: ["bakery", "bread", "garlic"],
  },
  {
    id: 48,
    name: "Organic Watermelon",
    price: 79,
    originalPrice: 99,
    rating: 4.7,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Seasonal",
    isNew: true,
    isBestseller: true,
    stock: 10,
    tags: ["organic", "fresh", "fruit", "seasonal"],
  },
  {
    id: 49,
    name: "Gouda Cheese (200g)",
    price: 149,
    originalPrice: 169,
    rating: 4.8,
    reviews: 72,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Aged",
    isNew: false,
    isBestseller: false,
    stock: 8,
    tags: ["dairy", "cheese", "aged"],
  },
  {
    id: 50,
    name: "Pork Chops (400g)",
    price: 279,
    originalPrice: 319,
    rating: 4.6,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Premium",
    isNew: false,
    isBestseller: false,
    stock: 9,
    tags: ["meat", "protein", "premium"],
  },
  {
    id: 51,
    name: "Organic Zucchini (500g)",
    price: 59,
    originalPrice: 69,
    rating: 4.4,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1583687355032-89b902b7335f?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 20,
    tags: ["organic", "fresh", "vegetable"],
  },
  {
    id: 52,
    name: "Banana Bread (400g)",
    price: 89,
    originalPrice: 99,
    rating: 4.7,
    reviews: 84,
    image: "https://images.unsplash.com/photo-1605286978633-2dec93ff88a2?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Fresh",
    isNew: false,
    isBestseller: true,
    stock: 11,
    tags: ["bakery", "bread", "banana"],
  },
  {
    id: 53,
    name: "Organic Cherries (250g)",
    price: 149,
    originalPrice: 179,
    rating: 4.9,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Seasonal",
    isNew: true,
    isBestseller: true,
    stock: 6,
    tags: ["organic", "fresh", "fruit", "seasonal"],
  },
  {
    id: 54,
    name: "Soy Milk (1L)",
    price: 99,
    originalPrice: 119,
    rating: 4.5,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Plant-Based",
    isNew: false,
    isBestseller: false,
    stock: 18,
    tags: ["dairy", "plant-based", "vegan"],
  },
  {
    id: 55,
    name: "Lamb Kebabs (400g)",
    price: 299,
    originalPrice: 349,
    rating: 4.7,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Ready to Cook",
    isNew: false,
    isBestseller: true,
    stock: 8,
    tags: ["meat", "protein", "kebab"],
  },
  {
    id: 56,
    name: "Organic Eggplant (500g)",
    price: 49,
    originalPrice: 59,
    rating: 4.4,
    reviews: 48,
    image: "https://images.unsplash.com/photo-1605196560547-1f94f9ed84b6?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 22,
    tags: ["organic", "fresh", "vegetable"],
  },
  {
    id: 57,
    name: "Focaccia Bread (300g)",
    price: 99,
    originalPrice: 119,
    rating: 4.8,
    reviews: 88,
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Artisanal",
    isNew: true,
    isBestseller: false,
    stock: 9,
    tags: ["bakery", "bread", "artisanal"],
  },
  {
    id: 58,
    name: "Organic Peaches (500g)",
    price: 119,
    originalPrice: 139,
    rating: 4.7,
    reviews: 72,
    image: "https://images.unsplash.com/photo-1595743825637-cdafc8ad4173?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Seasonal",
    isNew: true,
    isBestseller: false,
    stock: 7,
    tags: ["organic", "fresh", "fruit", "seasonal"],
  },
  {
    id: 59,
    name: "Feta Cheese (200g)",
    price: 129,
    originalPrice: 149,
    rating: 4.6,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Greek",
    isNew: false,
    isBestseller: false,
    stock: 12,
    tags: ["dairy", "cheese", "greek"],
  },
  {
    id: 60,
    name: "Duck Breast (300g)",
    price: 329,
    originalPrice: 369,
    rating: 4.8,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Premium",
    isNew: true,
    isBestseller: false,
    stock: 5,
    tags: ["meat", "protein", "premium"],
  },
  {
    id: 61,
    name: "Organic Cucumber (3 pcs)",
    price: 45,
    originalPrice: 55,
    rating: 4.3,
    reviews: 48,
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 24,
    tags: ["organic", "fresh", "vegetable"],
  },
  {
    id: 62,
    name: "Rye Bread (500g)",
    price: 69,
    originalPrice: 79,
    rating: 4.5,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Whole Grain",
    isNew: false,
    isBestseller: false,
    stock: 15,
    tags: ["bakery", "bread", "whole grain"],
  },
  {
    id: 63,
    name: "Organic Pears (500g)",
    price: 89,
    originalPrice: 99,
    rating: 4.6,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 16,
    tags: ["organic", "fresh", "fruit"],
  },
  {
    id: 64,
    name: "Ricotta Cheese (250g)",
    price: 99,
    originalPrice: 119,
    rating: 4.7,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Fresh",
    isNew: false,
    isBestseller: false,
    stock: 14,
    tags: ["dairy", "cheese", "fresh"],
  },
  {
    id: 65,
    name: "Pork Belly (500g)",
    price: 249,
    originalPrice: 279,
    rating: 4.8,
    reviews: 72,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Premium",
    isNew: false,
    isBestseller: true,
    stock: 8,
    tags: ["meat", "protein", "premium"],
  },
  {
    id: 66,
    name: "Organic Lettuce (200g)",
    price: 39,
    originalPrice: 49,
    rating: 4.4,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1622205313162-be1d5712a43b?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 20,
    tags: ["organic", "fresh", "vegetable", "leafy"],
  },
  {
    id: 67,
    name: "Brioche Buns (4 pcs)",
    price: 89,
    originalPrice: 99,
    rating: 4.7,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1620921568790-c1cf8984624c?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Butter",
    isNew: false,
    isBestseller: true,
    stock: 12,
    tags: ["bakery", "bread", "butter"],
  },
  {
    id: 68,
    name: "Organic Lychee (250g)",
    price: 129,
    originalPrice: 149,
    rating: 4.8,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1629078691977-dc51ca2e8196?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Seasonal",
    isNew: true,
    isBestseller: false,
    stock: 6,
    tags: ["organic", "fresh", "fruit", "seasonal"],
  },
  {
    id: 69,
    name: "Oat Milk (1L)",
    price: 109,
    originalPrice: 129,
    rating: 4.6,
    reviews: 72,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Plant-Based",
    isNew: true,
    isBestseller: true,
    stock: 18,
    tags: ["dairy", "plant-based", "vegan"],
  },
  {
    id: 70,
    name: "Beef Brisket (700g)",
    price: 379,
    originalPrice: 429,
    rating: 4.9,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Premium",
    isNew: false,
    isBestseller: true,
    stock: 7,
    tags: ["meat", "protein", "premium"],
  },
  {
    id: 71,
    name: "Organic Beetroot (500g)",
    price: 59,
    originalPrice: 69,
    rating: 4.5,
    reviews: 48,
    image: "https://images.unsplash.com/photo-1593105522588-3c5b78f7c38f?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 16,
    tags: ["organic", "fresh", "vegetable", "root"],
  },
  {
    id: 72,
    name: "Blueberry Muffins (4 pcs)",
    price: 109,
    originalPrice: 129,
    rating: 4.7,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Fresh",
    isNew: false,
    isBestseller: true,
    stock: 10,
    tags: ["bakery", "dessert", "blueberry"],
  },
  {
    id: 73,
    name: "Organic Pomegranate",
    price: 79,
    originalPrice: 99,
    rating: 4.8,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Superfood",
    isNew: false,
    isBestseller: true,
    stock: 12,
    tags: ["organic", "fresh", "fruit", "superfood"],
  },
  {
    id: 74,
    name: "Blue Cheese (150g)",
    price: 159,
    originalPrice: 179,
    rating: 4.6,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Aged",
    isNew: false,
    isBestseller: false,
    stock: 8,
    tags: ["dairy", "cheese", "aged"],
  },
  {
    id: 75,
    name: "Venison Steak (300g)",
    price: 399,
    originalPrice: 449,
    rating: 4.8,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Wild",
    isNew: true,
    isBestseller: false,
    stock: 5,
    tags: ["meat", "protein", "wild", "premium"],
  },
  {
    id: 76,
    name: "Organic Asparagus (250g)",
    price: 89,
    originalPrice: 99,
    rating: 4.7,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1515471209610-8c9d6bd96160?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: true,
    isBestseller: false,
    stock: 10,
    tags: ["organic", "fresh", "vegetable", "seasonal"],
  },
  {
    id: 77,
    name: "Cheese Danish (4 pcs)",
    price: 119,
    originalPrice: 139,
    rating: 4.8,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Fresh",
    isNew: false,
    isBestseller: true,
    stock: 9,
    tags: ["bakery", "dessert", "cheese"],
  },
  {
    id: 78,
    name: "Organic Dragon Fruit",
    price: 129,
    originalPrice: 149,
    rating: 4.9,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1527325678964-54921661f888?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Exotic",
    isNew: true,
    isBestseller: true,
    stock: 7,
    tags: ["organic", "fresh", "fruit", "exotic"],
  },
  {
    id: 79,
    name: "Coconut Yogurt (400g)",
    price: 119,
    originalPrice: 139,
    rating: 4.6,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Plant-Based",
    isNew: true,
    isBestseller: false,
    stock: 14,
    tags: ["dairy", "plant-based", "vegan", "probiotic"],
  },
  {
    id: 80,
    name: "Beef Short Ribs (600g)",
    price: 329,
    originalPrice: 369,
    rating: 4.8,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Premium",
    isNew: false,
    isBestseller: true,
    stock: 8,
    tags: ["meat", "protein", "premium"],
  },
  {
    id: 81,
    name: "Organic Radish (250g)",
    price: 39,
    originalPrice: 49,
    rating: 4.4,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 22,
    tags: ["organic", "fresh", "vegetable", "root"],
  },
  {
    id: 82,
    name: "Pretzel Buns (4 pcs)",
    price: 79,
    originalPrice: 89,
    rating: 4.6,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1600326145552-327c4df2d8fe?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Fresh",
    isNew: false,
    isBestseller: false,
    stock: 14,
    tags: ["bakery", "bread", "pretzel"],
  },
  {
    id: 83,
    name: "Organic Papaya",
    price: 89,
    originalPrice: 99,
    rating: 4.7,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 10,
    tags: ["organic", "fresh", "fruit", "tropical"],
  },
  {
    id: 84,
    name: "Cashew Milk (1L)",
    price: 129,
    originalPrice: 149,
    rating: 4.5,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Plant-Based",
    isNew: true,
    isBestseller: false,
    stock: 16,
    tags: ["dairy", "plant-based", "vegan"],
  },
  {
    id: 85,
    name: "Goat Meat (500g)",
    price: 299,
    originalPrice: 329,
    rating: 4.6,
    reviews: 54,
    image: "https://images.unsplash.com/photo-1603048297172-c83869ae9537?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Lean",
    isNew: false,
    isBestseller: false,
    stock: 9,
    tags: ["meat", "protein", "lean"],
  },
  {
    id: 86,
    name: "Organic Ginger (200g)",
    price: 49,
    originalPrice: 59,
    rating: 4.5,
    reviews: 48,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 20,
    tags: ["organic", "fresh", "vegetable", "root"],
  },
  {
    id: 87,
    name: "Almond Croissants (4 pcs)",
    price: 129,
    originalPrice: 149,
    rating: 4.9,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Premium",
    isNew: true,
    isBestseller: true,
    stock: 8,
    tags: ["bakery", "breakfast", "almond"],
  },
  {
    id: 88,
    name: "Organic Passion Fruit (4 pcs)",
    price: 119,
    originalPrice: 139,
    rating: 4.8,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1604495772376-9fbb3526d4e0?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Exotic",
    isNew: true,
    isBestseller: false,
    stock: 7,
    tags: ["organic", "fresh", "fruit", "exotic"],
  },
  {
    id: 89,
    name: "Parmesan Cheese (150g)",
    price: 179,
    originalPrice: 199,
    rating: 4.8,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Aged",
    isNew: false,
    isBestseller: true,
    stock: 12,
    tags: ["dairy", "cheese", "aged", "italian"],
  },
  {
    id: 90,
    name: "Quail Meat (400g)",
    price: 249,
    originalPrice: 279,
    rating: 4.7,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1603048297172-c83869ae9537?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Premium",
    isNew: true,
    isBestseller: false,
    stock: 6,
    tags: ["meat", "protein", "premium", "exotic"],
  },
  {
    id: 91,
    name: "Organic Sweet Potato (500g)",
    price: 59,
    originalPrice: 69,
    rating: 4.6,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1596097635121-14b38c5d7530?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 18,
    tags: ["organic", "fresh", "vegetable", "root"],
  },
  {
    id: 92,
    name: "Chocolate Babka (400g)",
    price: 129,
    originalPrice: 149,
    rating: 4.8,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Artisanal",
    isNew: true,
    isBestseller: true,
    stock: 9,
    tags: ["bakery", "dessert", "chocolate"],
  },
  {
    id: 93,
    name: "Organic Figs (250g)",
    price: 149,
    originalPrice: 169,
    rating: 4.7,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1601379760883-1bb497c558e0?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Seasonal",
    isNew: true,
    isBestseller: false,
    stock: 8,
    tags: ["organic", "fresh", "fruit", "seasonal"],
  },
  {
    id: 94,
    name: "Mascarpone Cheese (250g)",
    price: 139,
    originalPrice: 159,
    rating: 4.7,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "Italian",
    isNew: false,
    isBestseller: false,
    stock: 10,
    tags: ["dairy", "cheese", "italian"],
  },
  {
    id: 95,
    name: "Rabbit Meat (500g)",
    price: 329,
    originalPrice: 369,
    rating: 4.6,
    reviews: 48,
    image: "https://images.unsplash.com/photo-1603048297172-c83869ae9537?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Lean",
    isNew: false,
    isBestseller: false,
    stock: 5,
    tags: ["meat", "protein", "lean", "exotic"],
  },
  {
    id: 96,
    name: "Organic Artichoke (2 pcs)",
    price: 89,
    originalPrice: 99,
    rating: 4.5,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?q=80&w=600&auto=format&fit=crop",
    category: "vegetables",
    badge: "Organic",
    isNew: false,
    isBestseller: false,
    stock: 12,
    tags: ["organic", "fresh", "vegetable"],
  },
  {
    id: 97,
    name: "Challah Bread (500g)",
    price: 89,
    originalPrice: 99,
    rating: 4.7,
    reviews: 72,
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=600&auto=format&fit=crop",
    category: "bakery",
    badge: "Traditional",
    isNew: false,
    isBestseller: false,
    stock: 10,
    tags: ["bakery", "bread", "traditional"],
  },
  {
    id: 98,
    name: "Organic Guava (3 pcs)",
    price: 99,
    originalPrice: 119,
    rating: 4.6,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?q=80&w=600&auto=format&fit=crop",
    category: "fruits",
    badge: "Tropical",
    isNew: false,
    isBestseller: false,
    stock: 14,
    tags: ["organic", "fresh", "fruit", "tropical"],
  },
  {
    id: 99,
    name: "Brie Cheese (200g)",
    price: 149,
    originalPrice: 169,
    rating: 4.8,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=600&auto=format&fit=crop",
    category: "dairy",
    badge: "French",
    isNew: false,
    isBestseller: true,
    stock: 9,
    tags: ["dairy", "cheese", "french"],
  },
  {
    id: 100,
    name: "Wagyu Beef Steak (300g)",
    price: 599,
    originalPrice: 699,
    rating: 5.0,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=600&auto=format&fit=crop",
    category: "meat",
    badge: "Premium",
    isNew: true,
    isBestseller: true,
    stock: 3,
    tags: ["meat", "protein", "premium", "wagyu"],
  },
]

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("all")
  const [wishlist, setWishlist] = useState<number[]>([])
  const [cart, setCart] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 15

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const addToCart = (id: number) => {
    if (!cart.includes(id)) setCart((prev) => [...prev, id])
  }

  // Filter products based on active tab
  const filteredProducts = activeTab === "all" ? products : products.filter((product) => product.category === activeTab)

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  // Reset to first page when changing tabs
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setCurrentPage(1)
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange} className="w-full">
        <div className="flex items-center justify-between">
          <TabsList className="bg-muted/50 p-1 rounded-xl">
            <TabsTrigger
              value="all"
              className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="fruits"
              className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Fruits
            </TabsTrigger>
            <TabsTrigger
              value="vegetables"
              className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Vegetables
            </TabsTrigger>
            <TabsTrigger
              value="dairy"
              className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Dairy
            </TabsTrigger>
            <TabsTrigger
              value="bakery"
              className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Bakery
            </TabsTrigger>
            <TabsTrigger
              value="meat"
              className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Meat
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                isInCart={cart.includes(product.id)}
                onWishlistToggle={toggleWishlist}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </TabsContent>

        {["fruits", "vegetables", "dairy", "bakery", "meat"].map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isWishlisted={wishlist.includes(product.id)}
                  isInCart={cart.includes(product.id)}
                  onWishlistToggle={toggleWishlist}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="h-7 w-7"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span className="sr-only">Previous page</span>
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <Button
                key={number}
                variant={currentPage === number ? "default" : "outline"}
                size="icon"
                onClick={() => paginate(number)}
                className="h-7 w-7 text-xs"
              >
                {number}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="h-7 w-7"
            >
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

interface ProductCardProps {
  product: (typeof products)[0]
  isWishlisted: boolean
  isInCart: boolean
  onWishlistToggle: (id: number) => void
  onAddToCart: (id: number) => void
}

function ProductCard({ product, isWishlisted, isInCart, onWishlistToggle, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
      <Card
        className="overflow-hidden border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-md h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <Link href={`/product/${product.id}`}>
            <div className="aspect-square overflow-hidden bg-muted/50">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </Link>

          <div className="absolute left-1 top-1 flex flex-col gap-1">
            {product.badge && (
              <Badge className="text-[10px] px-1.5 py-0 bg-primary text-primary-foreground">{product.badge}</Badge>
            )}
            {discount > 0 && (
              <Badge className="text-[10px] px-1.5 py-0 bg-destructive text-destructive-foreground">-{discount}%</Badge>
            )}
          </div>

          <div className="absolute right-1 top-1 flex flex-col gap-1">
            <Button
              variant="secondary"
              size="icon"
              className="h-6 w-6 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
              onClick={() => onWishlistToggle(product.id)}
            >
              <Heart className={`h-3 w-3 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
              <span className="sr-only">Add to wishlist</span>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="h-6 w-6 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link href={`/product/${product.id}`}>
                <Eye className="h-3 w-3" />
                <span className="sr-only">Quick view</span>
              </Link>
            </Button>
          </div>
        </div>

        <CardContent className="p-2">
          <div className="mb-0.5 flex items-center gap-1">
            <Star className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400" />
            <span className="text-[10px] font-medium">{product.rating}</span>
            <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
          </div>

          <Link href={`/product/${product.id}`} className="group">
            <h3 className="line-clamp-2 text-xs font-medium group-hover:text-primary transition-colors min-h-[2rem]">
              {product.name}
            </h3>
          </Link>

          <div className="mt-0.5 flex items-center gap-1.5">
            <span className="font-bold text-xs">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-[10px] text-muted-foreground line-through">₹{product.originalPrice}</span>
            )}
          </div>

          {product.stock <= 10 && (
            <div className="mt-0.5 flex items-center gap-0.5 text-[10px] text-amber-500">
              <Clock className="h-2.5 w-2.5" />
              <span>Only {product.stock} left</span>
            </div>
          )}
        </CardContent>

        <CardFooter className="p-2 pt-0">
          <Button
            className={`w-full gap-1 text-[10px] h-7 ${
              isInCart ? "bg-success hover:bg-success/90 text-success-foreground" : "bg-primary hover:bg-primary/90"
            }`}
            onClick={() => onAddToCart(product.id)}
            disabled={isInCart}
          >
            {isInCart ? (
              <>
                <Check className="h-2.5 w-2.5" /> Added
              </>
            ) : (
              <>
                <ShoppingCart className="h-2.5 w-2.5" /> Add to Cart
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}