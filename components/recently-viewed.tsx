import Link from "next/link"
import { History, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const recentlyViewed = [
  {
    id: 101,
    name: "Organic Bananas",
    price: 79,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 102,
    name: "Greek Yogurt",
    price: 99,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 103,
    name: "Almond Milk",
    price: 129,
    image: "https://images.unsplash.com/photo-1600788907416-456578634209?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 104,
    name: "Whole Grain Cereal",
    price: 149,
    image: "https://images.unsplash.com/photo-1521483451569-e33803c0330c?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 105,
    name: "Organic Honey",
    price: 199,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=150&auto=format&fit=crop",
  },
]

export default function RecentlyViewed() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <History className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold">Recently Viewed</h2>
      </div>

      <ScrollArea className="w-full pb-4">
        <div className="flex space-x-4">
          {recentlyViewed.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group w-[180px] shrink-0">
              <div className="overflow-hidden rounded-xl border-2 border-muted bg-card transition-all hover:border-primary/20 hover:shadow-md">
                <div className="aspect-square bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="truncate text-sm font-medium">{product.name}</h3>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-sm font-bold">₹{product.price}</span>
                    <Button size="sm" variant="ghost" className="h-7 w-7 rounded-full p-0">
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

