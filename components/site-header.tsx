"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, MapPin, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { AuthModal } from "@/components/auth/auth-modal"
import { SidebarFilter } from "@/components/sidebar-filter"

export function SiteHeader() {
    const [cartCount, setCartCount] = useState(3)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                        <div className="px-2 py-6">
                            <SidebarFilter />
                        </div>
                    </SheetContent>
                </Sheet>

                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="text-xl font-bold text-primary">
                        <span className="inline-block text-primary">Fresh</span>
                        <span className="inline-block">Cart</span>
                    </span>
                </Link>

                

                <div className="flex items-center space-x-1">
                    <AuthModal />

                    <Button variant="ghost" size="icon" className="relative">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="sr-only">Cart</span>
                        {cartCount > 0 && (
                            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-primary-foreground">
                                {cartCount}
                            </Badge>
                        )}
                    </Button>
                </div>
            </div>
        </header>
    )
}