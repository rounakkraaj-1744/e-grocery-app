import Link from "next/link"
import CategorySection from "@/components/products/category-section"
import FeaturedProducts from "@/components/products/featured-products"
import PromoBanner from "@/components/promo-banner"
import SearchBar from "@/components/search-bar"
import QuickReorder from "@/components/products/quick-reorder"
import OffersSection from "@/components/products/offers-section"
import RecentlyViewed from "@/components/products/recently-viewed"

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
    </div>
  )
}