import Link from "next/link"
import { ChevronLeft, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import DeliveryOptions from "@/components/checkout/delivery-options"
import { PaymentMethods } from "@/components/checkout/payment-methods"

export default function CheckoutPage() {
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
      <SiteHeader />

      <main className="container pb-12 pt-6">
        <div className="mb-6 flex items-center">
          <Link
            href="/cart"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Cart
          </Link>
          <h1 className="ml-auto text-2xl font-bold">Checkout</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <DeliveryOptions />
            <PaymentMethods />
          </div>

          <div>
            <div className="sticky top-24 rounded-lg border-2 border-primary/10 bg-card/50 backdrop-blur">
              <div className="p-4">
                <h2 className="flex items-center gap-2 font-medium">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                  Order Summary
                </h2>
              </div>
              <Separator />
              <div className="max-h-[300px] overflow-auto p-4">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start gap-3">
                      <div className="h-16 w-16 overflow-hidden rounded-md bg-muted">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium line-clamp-1">{item.name}</h3>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                          <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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

                <Button className="mt-6 w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-glow transition-shadow">
                  Place Order
                </Button>

                <div className="mt-4 text-center text-xs text-muted-foreground">
                  <p>By placing your order, you agree to our</p>
                  <p>
                    <Button variant="link" className="h-auto p-0 text-xs text-primary">
                      Terms of Service
                    </Button>{" "}
                    and
                    <Button variant="link" className="h-auto p-0 text-xs text-primary">
                      Privacy Policy
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

