"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock categories with subcategories
const categories = [
  {
    id: "fruits-vegetables",
    name: "Fruits & Vegetables",
    image: "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_1280.jpg",
    items: 120,
    subcategories: [
      { id: "fresh-vegetables", name: "Fresh Vegetables", count: 38 },
      { id: "herbs-seasonings", name: "Herbs & Seasonings", count: 12 },
      { id: "fresh-fruits", name: "Fresh Fruits", count: 45 },
      { id: "organic-fruits-vegetables", name: "Organic Fruits & Vegetables", count: 10 },
      { id: "cuts-sprouts", name: "Cuts & Sprouts", count: 8 },
      { id: "exotic-fruits-veggies", name: "Exotic Fruits & Veggies", count: 15 },
      { id: "flower-bouquets", name: "Flower Bouquets, Bunches", count: 5 },
    ],
  },
  {
    id: "dairy-bread-eggs",
    name: "Dairy, Bread & Eggs",
    image: "https://cdn.pixabay.com/photo/2016/06/30/22/23/eggs-1490054_1280.jpg",
    items: 85,
    subcategories: [
      { id: "milk", name: "Milk", count: 12 },
      { id: "milk-drinks", name: "Milk Drinks", count: 8 },
      { id: "curd-yogurt", name: "Curd & Yogurt", count: 15 },
      { id: "eggs", name: "Eggs", count: 8 },
      { id: "bread", name: "Bread", count: 10 },
      { id: "buns-bakery", name: "Buns & Bakery", count: 12 },
      { id: "butter-more", name: "Butter & More", count: 8 },
      { id: "cheese", name: "Cheese", count: 15 },
      { id: "paneer-tofu", name: "Paneer & Tofu", count: 6 },
      { id: "cream-whitener", name: "Cream & Whitener", count: 5 },
      { id: "condensed-milk", name: "Condensed Milk", count: 3 },
      { id: "vegan-drinks", name: "Vegan Drinks", count: 5 },
    ],
  },
  {
    id: "snacks-munchies",
    name: "Snacks & Munchies",
    image: "https://cdn.pixabay.com/photo/2014/09/16/21/02/chips-448746_1280.jpg",
    items: 64,
    subcategories: [
      { id: "chips-crisps", name: "Chips & Crisps", count: 18 },
      { id: "nachos", name: "Nachos", count: 6 },
      { id: "popcorn", name: "Popcorn", count: 8 },
      { id: "bhujia-mixtures", name: "Bhujia & Mixtures", count: 14 },
      { id: "namkeen-snacks", name: "Namkeen Snacks", count: 10 },
      { id: "healthy-snacks", name: "Healthy Snacks", count: 18 },
      { id: "cakes-rolls", name: "Cakes & Rolls", count: 12 },
      { id: "energy-bars", name: "Energy Bars", count: 8 },
      { id: "papad-fryums", name: "Papad & Fryums", count: 6 },
      { id: "rusks-wafers", name: "Rusks & Wafers", count: 8 },
    ],
  },
  {
    id: "cold-drinks-juices",
    name: "Cold Drinks & Juices",
    image: "https://cdn.pixabay.com/photo/2014/09/26/19/51/drink-462776_1280.jpg",
    items: 78,
    subcategories: [
      { id: "soft-drinks", name: "Soft Drinks", count: 22 },
      { id: "fruit-juices", name: "Fruit Juices", count: 18 },
      { id: "coldpress", name: "Coldpress", count: 8 },
      { id: "energy-drinks", name: "Energy Drinks", count: 12 },
      { id: "water-ice-cubes", name: "Water & Ice Cubes", count: 8 },
      { id: "soda-mixers", name: "Soda & Mixers", count: 10 },
      { id: "concentrates-syrups", name: "Concentrates & Syrups", count: 8 },
      { id: "detox-energy-drinks", name: "Detox & Energy Drinks", count: 10 },
      { id: "juice-collection", name: "Juice Collection", count: 15 },
    ],
  },
  {
    id: "baby-care",
    name: "Baby Care",
    image: "https://cdn.pixabay.com/photo/2017/06/18/18/39/baby-2416718_1280.jpg",
    items: 56,
    subcategories: [
      { id: "baby-food", name: "Baby Food", count: 15 },
      { id: "diapers-wipes", name: "Diapers & Wipes", count: 12 },
      { id: "baby-bath-hygiene", name: "Baby Bath & Hygiene", count: 10 },
      { id: "baby-accessories", name: "Baby Accessories", count: 8 },
      { id: "infant-formula", name: "Infant Formula", count: 5 },
      { id: "baby-clothing", name: "Baby Clothing", count: 6 },
    ],
  },
  {
    id: "bakery-biscuits",
    name: "Bakery & Biscuits",
    image: "https://cdn.pixabay.com/photo/2020/07/29/09/46/cupcakes-5447570_1280.jpg",
    items: 88,
    subcategories: [
      { id: "cookies", name: "Cookies", count: 20 },
      { id: "glucose-marie", name: "Glucose & Marie", count: 12 },
      { id: "sweet-salty", name: "Sweet & Salty", count: 15 },
      { id: "healthy-digestive", name: "Healthy & Digestive", count: 10 },
      { id: "cream-biscuits", name: "Cream Biscuits", count: 12 },
      { id: "rusks-wafers", name: "Rusks & Wafers", count: 8 },
      { id: "cakes-rolls", name: "Cakes & Rolls", count: 15 },
      { id: "buns-bakery", name: "Buns & Bakery", count: 10 },
    ],
  },
  {
    id: "chicken-meat-fish",
    name: "Chicken, Meat & Fish",
    image: "https://cdn.pixabay.com/photo/2023/08/24/08/36/fish-8210152_1280.jpg",
    items: 45,
    subcategories: [
      { id: "chicken", name: "Chicken", count: 15 },
      { id: "sausage-salami-ham", name: "Sausage, Salami & Ham", count: 10 },
      { id: "exotic-meat", name: "Exotic Meat", count: 8 },
      { id: "eggs", name: "Eggs", count: 5 },
      { id: "frozen-non-veg-snacks", name: "Frozen Non-Veg Snacks", count: 7 },
    ],
  },
  {
    id: "tea-coffee",
    name: "Tea, Coffee & Health Drinks",
    image: "https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_1280.jpg",
    items: 92,
    subcategories: [
      { id: "tea", name: "Tea", count: 28 },
      { id: "coffee", name: "Coffee", count: 24 },
      { id: "health-drinks", name: "Health Drinks", count: 18 },
      { id: "herbal-tea", name: "Herbal Tea", count: 12 },
      { id: "coffee-alternatives", name: "Coffee Alternatives", count: 10 },
    ],
  },
  {
    id: "atta-rice-dal",
    name: "Atta, Rice & Dal",
    image: "https://cdn.pixabay.com/photo/2014/10/22/18/43/rice-498688_1280.jpg",
    items: 110,
    subcategories: [
      { id: "atta-flours", name: "Atta & Flours", count: 32 },
      { id: "rice-rice-products", name: "Rice & Rice Products", count: 28 },
      { id: "dals-pulses", name: "Dals & Pulses", count: 35 },
      { id: "organic-staples", name: "Organic Staples", count: 15 },
    ],
  },
  {
    id: "masala-oil",
    name: "Masala, Oil & More",
    image: "https://cdn.pixabay.com/photo/2016/05/10/04/31/spice-1383075_1280.jpg",
    items: 75,
    subcategories: [
      { id: "spices", name: "Spices", count: 28 },
      { id: "cooking-oils", name: "Cooking Oils", count: 18 },
      { id: "ghee", name: "Ghee", count: 8 },
      { id: "masala-blends", name: "Masala Blends", count: 21 },
    ],
  },
  {
    id: "personal-care",
    name: "Personal Care",
    image: "https://cdn.pixabay.com/photo/2013/04/25/11/17/cosmetics-106982_1280.jpg",
    items: 95,
    subcategories: [
      { id: "bath-body", name: "Bath & Body", count: 28 },
      { id: "hair-care", name: "Hair Care", count: 22 },
      { id: "skin-care", name: "Skin Care", count: 25 },
      { id: "oral-care", name: "Oral Care", count: 12 },
      { id: "deos-perfumes", name: "Deos & Perfumes", count: 8 },
    ],
  },
]

export default function CategorySection() {
  const [startIndex, setStartIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right
  const itemsToShow = 6

  const nextSlide = () => {
    if (startIndex + itemsToShow < categories.length && !isAnimating) {
      setDirection(1)
      setIsAnimating(true)
      setStartIndex((prev) => Math.min(prev + 1, categories.length - itemsToShow))
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevSlide = () => {
    if (startIndex > 0 && !isAnimating) {
      setDirection(-1)
      setIsAnimating(true)
      setStartIndex((prev) => Math.max(prev - 1, 0))
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const visibleCategories = categories.slice(startIndex, startIndex + itemsToShow)
  const canScrollLeft = startIndex > 0
  const canScrollRight = startIndex + itemsToShow < categories.length

  return (
    <div className="relative">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Featured Categories</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-primary/20 hover:bg-primary/5"
            onClick={prevSlide}
            disabled={!canScrollLeft || isAnimating}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-primary/20 hover:bg-primary/5"
            onClick={nextSlide}
            disabled={!canScrollRight || isAnimating}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          {visibleCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{
                opacity: 0,
                x: direction > 0 ? 50 : -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                },
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -50 : 50,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="cursor-pointer">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-full aspect-square overflow-hidden rounded-xl mb-2 border border-border/50 group-hover:border-primary/30 transition-colors shadow-sm group-hover:shadow-md">
                        <div className="w-full h-full relative">
                          <img
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-2 left-0 right-0 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {category.items} items
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <h3 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <ChevronDown className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56 max-h-80 overflow-auto">
                  {category.subcategories.map((subcategory) => (
                    <DropdownMenuItem key={subcategory.id} asChild>
                      <Link
                        href={`/categories/${category.id}/${subcategory.id}`}
                        className="flex justify-between w-full"
                      >
                        <span>{subcategory.name}</span>
                        <span className="text-xs text-muted-foreground">({subcategory.count})</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem asChild className="font-medium text-primary">
                    <Link href={`/categories/${category.id}`}>View All</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}