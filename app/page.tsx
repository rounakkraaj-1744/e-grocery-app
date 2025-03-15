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
    <div className="min-h-screen bg-background p-6">
      <main className="items-center justify-center py-8">
        <div className="mb-8">
          <SearchBar />
        </div>

        <PromoBanner />

        <section className="my-12">
          <h2 className="mb-6 text-2xl font-bold gradient-text">Categories</h2>
          <CategorySection />
        </section>

        <section className="my-12">
          <OffersSection />
        </section>

        <section className="my-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold gradient-text">Featured Products</h2>
            <Link href="/products" className="text-sm font-medium text-primary hover:underline transition-colors">
              View All
            </Link>
          </div>
          <FeaturedProducts />
        </section>

        <section className="my-12">
          <QuickReorder />
        </section>

        <section className="my-12">
          <RecentlyViewed />
        </section>
      </main>
    </div>
  )
}

