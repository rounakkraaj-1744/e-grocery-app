"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Clock, ChevronRight, ChevronLeft } from 'lucide-react'
import Link from "next/link"

const recentOrders = [
  {
    id: "ORD123456",
    date: "2025-04-15",
    items: [
      {
        id: 1,
        name: "Organic Fresh Avocado",
        quantity: 2,
        image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=100&auto=format&fit=crop",
      },
      {
        id: 2,
        name: "Farm Fresh Eggs (12 pack)",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=100&auto=format&fit=crop",
      },
      {
        id: 3,
        name: "Whole Grain Bread",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=100&auto=format&fit=crop",
      },
    ],
    total: 347,
    status: "Delivered",
  },
  {
    id: "ORD123457",
    date: "2025-04-08",
    items: [
      {
        id: 4,
        name: "Organic Milk (1L)",
        quantity: 2,
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=100&auto=format&fit=crop",
      },
      {
        id: 5,
        name: "Fresh Strawberries (250g)",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=100&auto=format&fit=crop",
      },
      {
        id: 6,
        name: "Organic Spinach (200g)",
        quantity: 2,
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=100&auto=format&fit=crop",
      },
    ],
    total: 308,
    status: "Delivered",
  },
]

export default function QuickReorder() {
  const [currentOrder, setCurrentOrder] = useState(0)
  const [isReordering, setIsReordering] = useState(false)

  const handleReorder = () => {
    setIsReordering(true)
    // Simulate API call
    setTimeout(() => {
      setIsReordering(false)
    }, 1500)
  }

  const order = recentOrders[currentOrder]

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold gradient-text">Quick Reorder</h2>
        <Link href="/orders" className="text-sm font-medium text-primary hover:underline transition-colors">
          View All Orders
        </Link>
      </div>

      <Card className="border-2 border-primary/10 bg-card/50 backdrop-blur">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Clock className="h-5 w-5 text-primary" />
              Recent Orders
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-primary/20 hover:bg-primary/5"
                onClick={() => setCurrentOrder((prev) => (prev > 0 ? prev - 1 : recentOrders.length - 1))}
                disabled={recentOrders.length <= 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground">
                {currentOrder + 1} / {recentOrders.length}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-primary/20 hover:bg-primary/5"
                onClick={() => setCurrentOrder((prev) => (prev < recentOrders.length - 1 ? prev + 1 : 0))}
                disabled={recentOrders.length <= 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Order #{order.id}</p>
              <p className="text-xs text-muted-foreground">
                {new Date(order.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <Badge className="bg-success text-success-foreground">{order.status}</Badge>
          </div>

          <div className="mb-4 space-y-4">
            {order.items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3"
              >
                <div className="h-12 w-12 overflow-hidden rounded-md bg-muted">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                  <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                </div>
                <Link href={`/product/${item.id}`}>
                  <Button variant="ghost" size="sm" className="h-8 px-2 text-xs hover:bg-primary/5">
                    View
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t pt-4">
            <div>
              <p className="text-sm font-medium">Total</p>
              <p className="text-lg font-bold">₹{order.total.toFixed(2)}</p>
            </div>
            <Button
              className="gap-2 bg-primary hover:bg-primary/90"
              onClick={handleReorder}
              disabled={isReordering}
            >
              {isReordering ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Reordering...
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4" /> Reorder All
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
