"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingBag, Menu, X, Search, MapPin } from "lucide-react"
import { AuthModal } from "@/components/auth/auth-modal"
import { CartSidebar } from "@/components/ui/cart-sidebar"
import ThemeToggle from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/custom-sheet"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky flex items-center justify-center top-0 z-40 w-full transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur shadow-sm" : "bg-background"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-4">
                <Link href="/" className="flex items-center gap-2">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold gradient-text">FreshCart</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link href="/account"
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                    <span className="text-lg font-medium">My Account</span>
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold gradient-text">FreshCart</span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search for products" className="w-full pl-10 border-primary/20 focus-visible:ring-primary/30" />
            </div>

            <Button variant="ghost" size="icon" className="ml-2">
              <MapPin className="h-5 w-5" />
              <span className="sr-only">Location</span>
            </Button>
          </div>



          <Link href="/account" className="hidden md:block">
            <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary">
              My Account
            </Button>
          </Link>

          <AuthModal />
          <ThemeToggle />
          <CartSidebar />
        </div>
      </div>
    </header>
  )
}

