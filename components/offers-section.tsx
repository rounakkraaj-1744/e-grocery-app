"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight, Tag, Percent } from 'lucide-react'
import Link from "next/link"

const offers = [
  {
    id: 1,
    title: "Weekend Special",
    description: "Get 15% off on all orders above ₹1000",
    image: "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?q=80&w=600&auto=format&fit=crop",
    code: "WEEKEND15",
    discount: "15%",
    minOrder: "₹1000",
    expiryDate: "2025-05-31",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 2,
    title: "First Order",
    description: "Get ₹200 off on your first order",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=600&auto=format&fit=crop",
    code: "FIRST200",
    discount: "₹200",
    minOrder: "₹500",
    expiryDate: "2025-12-31",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 3,
    title: "Free Delivery",
    description: "Free delivery on all orders above ₹750",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop",
    code: "FREEDEL",
    discount: "Free Delivery",
    minOrder: "₹750",
    expiryDate: "2025-06-15",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: 4,
    title: "Refer a Friend",
    description: "Get ₹100 for each friend you refer",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop",
    code: "REFER100",
    discount: "₹100",
    minOrder: "No minimum",
    expiryDate: "2025-12-31",
    color: "from-purple-500/20 to-violet-500/20",
  },
]

export default function OffersSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [expiryDates, setExpiryDates] = useState<string[]>([])

  useEffect(() => {
    // Convert expiry dates on client-side to prevent hydration mismatch
    setExpiryDates(offers.map(offer => new Date(offer.expiryDate).toLocaleDateString()))
  }, [])

  const copyToClipboard = (code: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code)
    }
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold gradient-text">Special Offers</h2>
        <Link href="/offers" className="text-sm font-medium text-primary hover:underline transition-colors">
          View All Offers
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.id}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setHoveredId(offer.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Card className="overflow-hidden border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg h-full">
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={offer.image || "/placeholder.svg"}
                    alt={offer.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-b ${offer.color} opacity-60`} />
                <Badge className="absolute right-2 top-2 bg-primary text-primary-foreground">
                  {offer.discount} OFF
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">{offer.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{offer.description}</p>
                
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 rounded-md bg-muted p-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{offer.code}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-auto h-6 px-2 text-xs hover:bg-primary hover:text-primary-foreground"
                      onClick={() => copyToClipboard(offer.code)}
                    >
                      Copy
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Percent className="h-3 w-3" />
                      <span>Min: {offer.minOrder}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>Valid till: {expiryDates[index] || "Loading..."}</span>
                    </div>
                  </div>
                </div>
                
                <Button
                  className="mt-4 w-full bg-primary hover:bg-primary/90"
                  asChild
                >
                  <Link href="/offers">
                    Apply Offer <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
