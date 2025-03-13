import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import CategorySection from "@/components/category-section"
import FeaturedProducts from "@/components/featured-products"
import PromoBanner from "@/components/promo-banner"
import SearchBar from "@/components/search-bar"
import ThemeToggle from "@/components/theme-toggle"
import DeliveryOptions from "@/components/delivery-options"
import QuickReorder from "@/components/quick-reorder"
import OffersSection from "@/components/offers-section"
import MembershipBanner from "@/components/membership-banner"
import RecentlyViewed from "@/components/recently-viewed"

export default function Home() {
  return (
    <div className="min-h-screen justify-center items-center bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">FreshCart</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                  3
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container pb-8 pt-6">
        <div className="mb-8">
          <SearchBar />
        </div>

        <PromoBanner />

        <section className="my-8">
          <h2 className="mb-6 text-2xl font-bold">Categories</h2>
          <CategorySection />
        </section>

        <section className="my-8">
          <OffersSection />
        </section>

        <section className="my-8">
          <DeliveryOptions />
        </section>

        <section className="my-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link href="/products" className="text-sm font-medium text-primary">
              View All
            </Link>
          </div>
          <FeaturedProducts />
        </section>

        <section className="my-8">
          <QuickReorder />
        </section>

        <section className="my-8">
          <MembershipBanner />
        </section>

        <section className="my-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Daily Essentials</h2>
            <Link href="/products?category=essentials" className="text-sm font-medium text-primary">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Link key={i} href={`/product/${i + 11}`} className="group">
                <div className="overflow-hidden rounded-xl border-2 border-muted bg-card transition-all hover:border-primary/20 hover:shadow-md">
                  <div className="aspect-square bg-muted">
                    <img
                      src={`https://images.unsplash.com/photo-${1570913149827 + i * 100}-d2ac84ab3f9a?q=80&w=200&auto=format&fit=crop`}
                      alt={`Essential ${i + 1}`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Essential Item {i + 1}</h3>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-sm font-bold">₹{(99 + i * 20).toFixed(2)}</span>
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
        </section>

        <section className="my-8">
          <RecentlyViewed />
        </section>
      </main>

      <footer className="border-t bg-muted py-6">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">FreshCart</span>
            </div>
            <div className="text-center text-sm text-muted-foreground md:text-right">
              <p>© 2024 FreshCart. All rights reserved.</p>
              <p>Fresh groceries delivered to your doorstep</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}