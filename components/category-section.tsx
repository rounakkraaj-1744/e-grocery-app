"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

const categories = [
  {
    id: "fruits-vegetables",
    name: "Fruits & Vegetables",
    description: "Fresh, seasonal produce",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=500&auto=format&fit=crop",
    color: "from-green-500/20 to-lime-500/20",
    items: 120,
  },
  {
    id: "dairy-eggs",
    name: "Dairy & Eggs",
    description: "Farm-fresh dairy products",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=500&auto=format&fit=crop",
    color: "from-blue-500/20 to-sky-500/20",
    items: 85,
  },
  {
    id: "bakery",
    name: "Bakery",
    description: "Freshly baked goods",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=500&auto=format&fit=crop",
    color: "from-amber-500/20 to-yellow-500/20",
    items: 64,
  },
  {
    id: "meat-seafood",
    name: "Meat & Seafood",
    description: "Premium cuts and fresh catch",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=500&auto=format&fit=crop",
    color: "from-red-500/20 to-rose-500/20",
    items: 78,
  },
  {
    id: "pantry-staples",
    name: "Pantry Staples",
    description: "Essential cooking ingredients",
    image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=500&auto=format&fit=crop",
    color: "from-orange-500/20 to-amber-500/20",
    items: 156,
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Refreshing drinks & more",
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=500&auto=format&fit=crop",
    color: "from-purple-500/20 to-violet-500/20",
    items: 92,
  },
  {
    id: "snacks",
    name: "Snacks & Sweets",
    description: "Delicious treats",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=500&auto=format&fit=crop",
    color: "from-pink-500/20 to-fuchsia-500/20",
    items: 110,
  },
  {
    id: "organic",
    name: "Organic",
    description: "Certified organic products",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=500&auto=format&fit=crop",
    color: "from-teal-500/20 to-emerald-500/20",
    items: 75,
  },
]

export default function CategorySection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category) => (
        <motion.div
          key={category.id}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredId(category.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Link href={`/categories/${category.id}`} className="block h-full">
            <Card className="overflow-hidden border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg h-full">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-b ${category.color} opacity-60`} />
              </div>
              <CardContent className="p-4">
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{category.items} items</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`p-0 h-auto ${
                        hoveredId === category.id ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      Browse <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
