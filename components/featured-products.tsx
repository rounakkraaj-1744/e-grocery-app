import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const featuredProducts = [
  {
    id: 1,
    name: "Organic Avocado",
    price: 149,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=300&auto=format&fit=crop",
    badge: "Organic",
  },
  {
    id: 2,
    name: "Farm Fresh Eggs",
    price: 89,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=300&auto=format&fit=crop",
    badge: "Local",
  },
  {
    id: 3,
    name: "Whole Grain Bread",
    price: 59,
    originalPrice: 79,
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=300&auto=format&fit=crop",
    badge: "Fresh",
  },
  {
    id: 4,
    name: "Organic Milk",
    price: 79,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=300&auto=format&fit=crop",
    badge: "Organic",
  },
  {
    id: 5,
    name: "Fresh Strawberries",
    price: 129,
    originalPrice: 169,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=300&auto=format&fit=crop",
    badge: "Sale",
  },
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center">
      {featuredProducts.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} className="group">
          <div className="overflow-hidden rounded-xl border-2 border-muted bg-card transition-all hover:border-primary/20 hover:shadow-md">
            <div className="relative aspect-square bg-muted">
              {product.badge && (
                <Badge className="absolute left-2 top-2 z-10 bg-accent text-accent-foreground">{product.badge}</Badge>
              )}
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium">{product.name}</h3>
              <div className="mt-1 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice}</span>
                  )}
                </div>
                <Button size="sm" variant="ghost" className="h-8 w-8 rounded-full p-0">
                  <ShoppingBag className="h-4 w-4" />
                  <span className="sr-only">Add to cart</span>
                </Button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}