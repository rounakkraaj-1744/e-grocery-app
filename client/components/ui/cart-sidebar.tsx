"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/custom-sheet"
import { motion, AnimatePresence } from "framer-motion"

const cartItems = [
  {
    id: 1,
    name: "Organic Fresh Avocado",
    price: 149,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Farm Fresh Eggs (12 pack)",
    price: 89,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Whole Grain Bread",
    price: 59,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=100&auto=format&fit=crop",
  },
]

export function CartSidebar() {
  const [items, setItems] = useState(cartItems)
  const [isOpen, setIsOpen] = useState(false)

  const updateQuantity = (id: number, change: number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change)
          return { ...item, quantity: newQuantity }
        }
        return item
      })
    )
  }

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = 49
  const total = subtotal + deliveryFee

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary relative">
          <ShoppingCart className="h-5 w-5" />
          <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-primary-foreground">
            {items.reduce((sum, item) => sum + item.quantity, 0)}
          </Badge>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-auto">
        <SheetHeader className="mb-5">
          <SheetTitle className="flex items-center gap-2 text-xl">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Your Cart ({items.reduce((sum, item) => sum + item.quantity, 0)} items)
          </SheetTitle>
        </SheetHeader>

        {items.length > 0 ? (
          <>
            <div className="space-y-4 mb-6">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 py-3"
                  >
                    <div className="h-16 w-16 overflow-hidden rounded-md bg-muted">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="font-medium line-clamp-1">{item.name}</h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">₹{item.price.toFixed(2)} each</p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center rounded-lg border">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-r-none"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease</span>
                          </Button>
                          <div className="flex h-8 w-8 items-center justify-center text-center text-sm">
                            {item.quantity}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-l-none"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase</span>
                          </Button>
                        </div>
                        <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <Separator className="my-4" />

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span>₹{deliveryFee.toFixed(2)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Button asChild className="w-full button-primary">
                <Link href="/checkout" onClick={() => setIsOpen(false)}>
                  Proceed to Checkout
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full button-outline"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>

            <div className="mt-4 text-center text-xs text-muted-foreground">
              <p>Free delivery on orders over ₹500</p>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button asChild className="button-primary" onClick={() => setIsOpen(false)}>
              <Link href="/">Start Shopping</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}