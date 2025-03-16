"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

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
    image: "https://cdn.pixabay.com/photo/2020/06/30/15/03/bread-5356379_1280.jpg",
    items: 85,
  },
  {
    id: "snacks-munchies",
    name: "Snacks & Munchies",
    image: "https://cdn.pixabay.com/photo/2016/11/22/18/52/chips-1850263_1280.jpg",
    items: 64,
  },
  {
    id: "cold-drinks-juices",
    name: "Cold Drinks & Juices",
    image: "https://cdn.pixabay.com/photo/2016/07/21/11/17/drink-1532300_1280.jpg",
    items: 78,
  },
  {
    id: "breakfast-instant",
    name: "Breakfast & Instant",
    image: "https://cdn.pixabay.com/photo/2016/11/29/11/38/breakfast-1869132_1280.jpg",
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
    image: "https://cdn.pixabay.com/photo/2015/02/24/02/05/spices-647074_1280.jpg",
    items: 75,
  },
  {
    id: "meat-fish",
    name: "Meat & Fish",
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/salmon-1238248_1280.jpg",
    items: 45,
  },
  {
    id: "bakery-biscuits",
    name: "Bakery & Biscuits",
    image: "https://cdn.pixabay.com/photo/2016/01/19/15/05/cookies-1149597_1280.jpg",
    items: 88,
  },
  {
    id: "personal-care",
    name: "Personal Care",
    image: "https://cdn.pixabay.com/photo/2016/01/19/15/48/luggage-1149289_1280.jpg",
    items: 95,
  },
  {
    id: "cleaning-essentials",
    name: "Cleaning Essentials",
    image: "https://cdn.pixabay.com/photo/2019/08/08/08/24/soap-4392163_1280.jpg",
    items: 62,
  },
]

export default function CategorySection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
      {categories.map((category) => (
        <motion.div
          key={category.id}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredId(category.id)}
          onMouseLeave={() => setHoveredId(null)}
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
  )
}

