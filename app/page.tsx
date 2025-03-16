import Link from "next/link"
import CategorySection from "@/components/products/category-section"
import FeaturedProducts from "@/components/products/featured-products"
import PromoBanner from "@/components/promo-banner"
import SearchBar from "@/components/search-bar"
import QuickReorder from "@/components/products/quick-reorder"
import OffersSection from "@/components/products/offers-section"
import RecentlyViewed from "@/components/products/recently-viewed"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, ShieldCheck, Clock, Leaf } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <SearchBar />
        </div>

        <div className="rounded-2xl overflow-hidden shadow-sm">
          <PromoBanner />
        </div>

        <section className="my-8 md:my-12">
          <h2 className="section-title">Shop by Category</h2>
          <CategorySection />
        </section>

        <section className="my-8 md:my-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-green-50 dark:bg-green-950/30 text-center">
              <Truck className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium text-sm">Free Delivery</h3>
              <p className="text-xs text-muted-foreground">On orders over ₹500</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-center">
              <ShieldCheck className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium text-sm">100% Secure</h3>
              <p className="text-xs text-muted-foreground">Secure payments</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-center">
              <Clock className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium text-sm">Quick Delivery</h3>
              <p className="text-xs text-muted-foreground">Within 24 hours</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-teal-50 dark:bg-teal-950/30 text-center">
              <Leaf className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium text-sm">Fresh Products</h3>
              <p className="text-xs text-muted-foreground">Farm to table</p>
            </div>
          </div>
        </section>

        <section className="my-8 md:my-12 bg-muted/30 p-6 md:p-8 rounded-2xl">
          <OffersSection />
        </section>

        <section className="my-8 md:my-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="section-title">Featured Products</h2>
            <Link href="/products" className="view-all-link">
              View All
            </Link>
          </div>
          <FeaturedProducts />
        </section>

        <section className="my-8 md:my-12 bg-gradient-to-r from-primary/5 to-secondary/5 p-6 md:p-8 rounded-2xl">
          <QuickReorder />
        </section>

        <section className="my-8 md:my-12">
          <RecentlyViewed />
        </section>
      </main>

      <Footer />
    </div>
  )
}