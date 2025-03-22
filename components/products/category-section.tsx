"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

// Mock categories
const categories = [
  {
    id: "fruits-vegetables",
    name: "Fruits & Vegetables",
    image: "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_1280.jpg",
    items: 120,
  },
  {
    id: "dairy-bread-eggs",
    name: "Dairy, Bread & Eggs",
    image: "https://cdn.pixabay.com/photo/2016/06/30/22/23/eggs-1490054_1280.jpg",
    items: 85,
  },
  {
    id: "snacks-munchies",
    name: "Snacks & Munchies",
    image: "https://cdn.pixabay.com/photo/2014/09/16/21/02/chips-448746_1280.jpg",
    items: 64,
  },
  {
    id: "cold-drinks-juices",
    name: "Cold Drinks & Juices",
    image: "https://cdn.pixabay.com/photo/2014/09/26/19/51/drink-462776_1280.jpg",
    items: 78,
  },
  {
    id: "breakfast-instant",
    name: "Breakfast & Instant",
    image: "https://cdn.pixabay.com/photo/2017/08/10/08/55/breakfast-2620176_1280.jpg",
    items: 56,
  },
  {
    id: "tea-coffee",
    name: "Tea, Coffee & Health Drinks",
    image: "https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_1280.jpg",
    items: 92,
  },
  {
    id: "atta-rice-dal",
    name: "Atta, Rice & Dal",
    image: "https://cdn.pixabay.com/photo/2014/10/22/18/43/rice-498688_1280.jpg",
    items: 110,
  },
  {
    id: "masala-oil",
    name: "Masala, Oil & More",
    image: "https://cdn.pixabay.com/photo/2016/05/10/04/31/spice-1383075_1280.jpg",
    items: 75,
  },
  {
    id: "meat-fish",
    name: "Meat & Fish",
    image: "https://cdn.pixabay.com/photo/2023/08/24/08/36/fish-8210152_1280.jpg",
    items: 45,
  },
  {
    id: "bakery-biscuits",
    name: "Bakery & Biscuits",
    image: "https://cdn.pixabay.com/photo/2020/07/29/09/46/cupcakes-5447570_1280.jpg",
    items: 88,
  },
  {
    id: "personal-care",
    name: "Personal Care",
    image: "https://cdn.pixabay.com/photo/2013/04/25/11/17/cosmetics-106982_1280.jpg",
    items: 95,
  },
  {
    id: "cleaning-essentials",
    name: "Cleaning Essentials",
    image: "https://cdn.pixabay.com/photo/2018/02/01/01/40/cleaner-3122363_1280.jpg",
    items: 62,
  },
]

export default function CategorySection() {
  const [startIndex, setStartIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsToShow = 6

  const nextSlide = () => {
    if (startIndex + itemsToShow < categories.length) {
      setStartIndex(startIndex + 1)
    }
  }

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
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
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-primary/20 hover:bg-primary/5"
            onClick={nextSlide}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div ref={containerRef} className="grid grid-cols-6 gap-4 overflow-hidden">
        {visibleCategories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="group"
          >
            <Link href={`/categories/${category.id}`} className="block h-full">
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
                <h3 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}