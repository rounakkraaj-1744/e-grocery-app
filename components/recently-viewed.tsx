"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"

const recentlyViewed = [
  {
    id: 1,
    name: "Organic Fresh Avocado",
    price: 149,
    originalPrice: 199,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=300&auto=format&fit=crop",
    badge: "Organic",
  },
  {
    id: 2,
    name: "Farm Fresh Eggs (12 pack)",
    price: 89,
    originalPrice: 109,
    rating: 4.6,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=300&auto=format&fit=crop",
    badge: "Farm Fresh",
  },
  {
    id: 5,
    name: "Fresh Strawberries (250g)",
    price: 129,
    originalPrice: 159,
    rating: 4.9,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=300&auto=format&fit=crop",
    badge: "Seasonal",
  },
  {
    id: 7,
    name: "Free Range Chicken Breast (500g)",
    price: 219,
    originalPrice: 249,
    rating: 4.7,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=300&auto=format&fit=crop",
    badge: "Free Range",
  },
  {
    id: 8,
    name: "Atlantic Salmon Fillet (300g)",
    price: 349,
    originalPrice: 399,
    rating: 4.8,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=300&auto=format&fit=crop",
    badge: "Premium",
  },
]

export default function RecentlyViewed() {
  const [startIndex, setStartIndex] = useState(0)
  const [cart, setCart] = useState<number[]>([])
  const itemsToShow = 4

  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart(prev => [...prev, id])
    }
  }

  const visibleItems = recentlyViewed.slice(startIndex, startIndex + itemsToShow)
  const canScrollLeft = startIndex > 0
  const canScrollRight = startIndex + itemsToShow < recentlyViewed.length

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold gradient-text">Recently Viewed</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 border-primary/20 hover:bg-primary/5"
            onClick={() => setStartIndex(prev => Math.max(0, prev - 1))}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 border-primary/20 hover:bg-primary/5"
            onClick={() => setStartIndex(prev => Math.min(recentlyViewed.length - itemsToShow, prev + 1))}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {visibleItems.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
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

                {product.badge && (
                  <Badge className="absolute left-2 top-2 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                )}
              </div>

              <CardContent className="p-4">
                <div className="mb-2 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                <Link href={`/product/${product.id}`} className="group">
                  <h3 className="line-clamp-2 font-medium group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>

                <div className="mt-2 flex items-center gap-2">
                  <span className="font-bold">₹{product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>

                <Button
                  className="mt-3 w-full gap-2 bg-primary hover:bg-primary/90"
                  onClick={() => addToCart(product.id)}
                  disabled={cart.includes(product.id)}
                >
                  {cart.includes(product.id) ? (
                    "Added to Cart"
                  ) : (
                    <>
                      <ShoppingCart className="h-4 w-4" /> Add to Cart
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
