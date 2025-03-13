import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PromoBanner() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-primary text-primary-foreground">
      <div className="relative z-10 grid gap-4 p-6 md:grid-cols-2 md:gap-8 md:p-8">
        <div className="flex flex-col justify-center space-y-4">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Fresh Produce, Delivered Daily</h2>
            <p className="mt-2 max-w-md text-primary-foreground/90">
              Get 20% off on your first order with code <strong>FRESH20</strong>
            </p>
          </div>
          <Button asChild variant="secondary" className="w-fit">
            <Link href="/products" className="flex items-center gap-2">
              Shop Now <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="hidden md:flex md:items-center md:justify-end">
          <div className="aspect-square w-48 rounded-full bg-accent/20 p-2">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-accent/30">
              <span className="text-6xl">🥗</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-10" />
    </div>
  )
}

