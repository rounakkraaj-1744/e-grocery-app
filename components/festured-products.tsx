import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const featuredProducts = [
  {
    id: 1,
    name: "Organic Avocado",
    price: 4.99,
    originalPrice: 6.99,
    image: "/placeholder.svg?height=200&width=200&text=Avocado",
    badge: "Organic",
  },
  {
    id: 2,
    name: "Farm Fresh Eggs",
    price: 3.49,
    originalPrice: null,
    image: "/placeholder.svg?height=200&width=200&text=Eggs",
    badge: "Local",
  },
  {
    id: 3,
    name: "Whole Grain Bread",
    price: 2.99,
    originalPrice: 3.99,
    image: "/placeholder.svg?height=200&width=200&text=Bread",
    badge: "Fresh",
  },
  {
    id: 4,
    name: "Organic Milk",
    price: 3.99,
    originalPrice: null,
    image: "/placeholder.svg?height=200&width=200&text=Milk",
    badge: "Organic",
  },
  {
    id: 5,
    name: "Fresh Strawberries",
    price: 4.49,
    originalPrice: 5.99,
    image: "/placeholder.svg?height=200&width=200&text=Strawberries",
    badge: "Sale",
  },
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {featuredProducts.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} className="group">
          <div className="overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
            <div className="relative aspect-square bg-muted">
              {product.badge && <Badge className="absolute left-2 top-2 z-10">{product.badge}</Badge>}
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
                  <span className="text-sm font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
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

