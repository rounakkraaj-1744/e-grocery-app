import CategorySection from "@/components/products/category-section"
import { DownloadApp } from "@/components/download-app"
import { SidebarFilter } from "@/components/sidebar-filter"
import FeaturedProducts from "@/components/products/featured-products"
import OffersSection from "@/components/products/offers-section"
import PromoBanner from "@/components/promo-banner"
import RecentlyViewed from "@/components/products/recently-viewed"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <PromoBanner />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
          <div className="hidden md:block">
            <SidebarFilter />
          </div>

          <div className="space-y-12">
            <CategorySection />
            <FeaturedProducts />
            <OffersSection />
            <RecentlyViewed />
          </div>
        </div>
      </main>

      <DownloadApp />
    </div>
  )
}