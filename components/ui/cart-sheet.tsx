"use client"

import { ShoppingBag, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function CartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          <Badge className="absolute -right-2 -top-2 h-5 w-5 justify-center rounded-full p-0 text-[11px]">3</Badge>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle>Shopping Cart (3)</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-full pr-4">
          <div className="space-y-4 py-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="aspect-square h-20 w-20 overflow-hidden rounded-lg border bg-muted">
                  <img
                    src={`https://images.unsplash.com/photo-${1570913149827 + i * 100}-d2ac84ab3f9a?q=80&w=100&auto=format&fit=crop`}
                    alt={`Product ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">Product {i + 1}</h4>
                      <p className="text-sm text-muted-foreground">Quantity: 1</p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center rounded-md border">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-r-none">
                        <span>-</span>
                        <span className="sr-only">Remove one</span>
                      </Button>
                      <div className="flex h-8 w-8 items-center justify-center text-center text-sm">1</div>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-l-none">
                        <span>+</span>
                        <span className="sr-only">Add one</span>
                      </Button>
                    </div>
                    <div className="ml-auto font-medium">₹{149 + i * 20}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="grid gap-4 pr-6">
          <Separator />
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">₹447.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery Fee</span>
              <span className="font-medium">₹49.00</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>₹496.00</span>
            </div>
          </div>
          <Button asChild className="bg-gradient-to-r from-primary to-primary/90 font-medium">
            <Link href="/checkout">Proceed to Checkout</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

