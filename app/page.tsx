import { SiteHeader } from "@/components/site-header"
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
      <SiteHeader />

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

      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">FreshCart</h3>
              <p className="text-sm text-muted-foreground">
                Your one-stop destination for fresh groceries and daily essentials.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    Fruits & Vegetables
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Dairy, Bread & Eggs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Snacks & Munchies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Bakery & Biscuits
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 FreshCart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}