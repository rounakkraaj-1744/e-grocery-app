"use client"

import { useState } from "react"
import { Star, ShoppingCart, Heart, Eye, Check, Clock, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import Link from "next/link"

// Sample product data
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
]

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("all")
  const [wishlist, setWishlist] = useState<number[]>([])
  const [cart, setCart] = useState<number[]>([])

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart((prev) => [...prev, id])
    }
  }

  const filteredProducts = activeTab === "all" ? products : products.filter((product) => product.category === activeTab)

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
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
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {filteredProducts.map((product) => (
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
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
              {filteredProducts.map((product) => (
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
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card
        className="product-card h-full"
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

          {/* Badges */}
          <div className="absolute left-2 top-2 flex flex-col gap-1">
            {product.badge && <Badge className="bg-primary text-primary-foreground">{product.badge}</Badge>}
            {product.isNew && <Badge className="bg-secondary text-secondary-foreground">New</Badge>}
            {product.isBestseller && <Badge className="bg-accent text-accent-foreground">Bestseller</Badge>}
            {discount > 0 && <Badge className="bg-destructive text-destructive-foreground">-{discount}%</Badge>}
          </div>

          {/* Quick actions */}
          <div className="absolute right-2 top-2 flex flex-col gap-2">
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
              onClick={() => onWishlistToggle(product.id)}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
              <span className="sr-only">Add to wishlist</span>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link href={`/product/${product.id}`}>
                <Eye className="h-4 w-4" />
                <span className="sr-only">Quick view</span>
              </Link>
            </Button>
          </div>
        </div>

        <CardContent className="p-3">
          <div className="mb-1 flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>

          <Link href={`/product/${product.id}`} className="group">
            <h3 className="line-clamp-2 text-sm font-medium group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>

          <div className="mt-1 flex items-center gap-2">
            <span className="font-bold text-sm">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice}</span>
            )}
          </div>

          <div className="mt-1 flex flex-wrap gap-1">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Product features */}
          <div className="mt-2 flex items-center gap-2 text-[10px] text-muted-foreground">
            {product.badge === "Organic" && (
              <div className="flex items-center gap-1">
                <Leaf className="h-3 w-3 text-primary" />
                <span>Organic</span>
              </div>
            )}
            {product.stock <= 10 && (
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-amber-500" />
                <span>Only {product.stock} left</span>
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-3 pt-0">
          <Button
            className={`w-full gap-1 text-xs h-8 ${
              isInCart ? "bg-success hover:bg-success/90 text-success-foreground" : "bg-primary hover:bg-primary/90"
            }`}
            onClick={() => onAddToCart(product.id)}
            disabled={isInCart}
          >
            {isInCart ? (
              <>
                <Check className="h-3 w-3" /> Added
              </>
            ) : (
              <>
                <ShoppingCart className="h-3 w-3" /> Add to Cart
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

