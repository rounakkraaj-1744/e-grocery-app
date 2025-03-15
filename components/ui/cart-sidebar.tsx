"use client"

import { useState, useEffect } from "react"
import { ShoppingBag, X, ChevronRight, Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([
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
  ])

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpen && !target.closest(".cart-sidebar") && !target.closest(".cart-trigger")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const updateQuantity = (id: number, change: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item)),
    )
  }

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = 49
  const total = subtotal + deliveryFee

  return (
    <>
      {/* Cart Trigger Button */}
      <Button
        variant="outline"
        size="icon"
        className="relative cart-trigger hover:border-primary/50 hover:bg-primary/5"
        onClick={() => setIsOpen(true)}
      >
        <ShoppingBag className="h-5 w-5" />
        <Badge className="absolute -right-2 -top-2 h-5 w-5 justify-center rounded-full p-0 text-[11px] animate-bounce-in bg-primary">
          {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        </Badge>
      </Button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed right-0 top-0 z-50 h-full w-full sm:w-96 cart-sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex h-full flex-col bg-background border-l shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b p-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">Your Cart</h2>
                  <Badge className="ml-2 bg-primary">{cartItems.length} items</Badge>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Cart Items */}
              {cartItems.length > 0 ? (
                <>
                  <ScrollArea className="flex-1 px-4">
                    <div className="space-y-4 py-4">
                      {cartItems.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex rounded-lg border p-3 card-hover"
                        >
                          <div className="h-20 w-20 overflow-hidden rounded-md bg-muted">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="ml-3 flex flex-1 flex-col">
                            <div className="flex justify-between">
                              <h3 className="font-medium line-clamp-1">{item.name}</h3>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-muted-foreground hover:text-destructive"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                            <span className="text-sm text-muted-foreground">₹{item.price} each</span>
                            <div className="mt-auto flex items-center justify-between">
                              <div className="flex items-center rounded-md border">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-7 w-7 rounded-r-none"
                                  onClick={() => updateQuantity(item.id, -1)}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <div className="flex h-7 w-8 items-center justify-center text-center text-sm">
                                  {item.quantity}
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-7 w-7 rounded-l-none"
                                  onClick={() => updateQuantity(item.id, 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                              <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>

                  {/* Summary */}
                  <div className="border-t p-4 space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>₹{subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Delivery Fee</span>
                        <span>₹{deliveryFee.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>₹{total.toFixed(2)}</span>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-glow transition-shadow"
                      size="lg"
                      asChild
                    >
                      <Link href="/checkout" onClick={() => setIsOpen(false)}>
                        Checkout <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <div className="text-center text-xs text-muted-foreground">
                      <p>Free delivery on orders over ₹500</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-1 flex-col items-center justify-center p-4 text-center">
                  <div className="mb-4 rounded-full bg-muted p-6">
                    <ShoppingBag className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Your cart is empty</h3>
                  <p className="mb-6 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
                  <Button
                    className="bg-gradient-to-r from-primary to-primary/80"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/">Start Shopping</Link>
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

