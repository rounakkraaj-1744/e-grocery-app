import Link from "next/link"
import { ChevronLeft, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import ThemeToggle from "@/components/theme-toggle"

export default function CartPage() {
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

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = 49
  const total = subtotal + deliveryFee

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <ChevronLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Continue Shopping</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container pb-8 pt-6">
        <h1 className="mb-6 text-2xl font-bold">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="rounded-lg border-2 border-muted bg-card">
                <div className="p-4">
                  <h2 className="font-medium">Cart Items ({cartItems.length})</h2>
                </div>
                <Separator />
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="grid grid-cols-[80px_1fr] gap-4 p-4">
                      <div className="aspect-square overflow-hidden rounded-md bg-muted">
                        <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <h3 className="font-medium">{item.name}</h3>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Remove</span>
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground">₹{item.price.toFixed(2)} each</p>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center rounded-lg border">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-r-none">
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Decrease</span>
                            </Button>
                            <div className="flex h-8 w-8 items-center justify-center text-center text-sm">
                              {item.quantity}
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-l-none">
                              <Plus className="h-3 w-3" />
                              <span className="sr-only">Increase</span>
                            </Button>
                          </div>
                          <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24 rounded-lg border-2 border-muted bg-card">
                <div className="p-4">
                  <h2 className="font-medium">Order Summary</h2>
                </div>
                <Separator />
                <div className="p-4">
                  <div className="space-y-2">
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

                  <Button className="mt-6 w-full">Proceed to Checkout</Button>

                  <div className="mt-4 text-center text-xs text-muted-foreground">
                    <p>Free delivery on orders over ₹500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg border bg-card py-12">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 text-xl font-medium">Your cart is empty</h2>
            <p className="mt-2 text-center text-muted-foreground">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button asChild className="mt-6">
              <Link href="/">Start Shopping</Link>
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
