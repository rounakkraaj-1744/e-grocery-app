"use client"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// Mock search results
const mockProducts = [
  {
    id: 1,
    name: "Organic Fresh Avocado",
    category: "Fruits & Vegetables",
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Farm Fresh Eggs",
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Whole Grain Bread",
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Organic Milk",
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Fresh Strawberries",
    category: "Fruits & Vegetables",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=100&auto=format&fit=crop",
  },
]

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<typeof mockProducts>([])
  const [isSearching, setIsSearching] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.length > 1) {
      setIsSearching(true)
      const timer = setTimeout(() => {
        const filtered = mockProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase()),
        )
        setResults(filtered)
        setIsSearching(false)
      }, 300)

      return () => clearTimeout(timer)
    }
    else
      setResults([])
  }, [query])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node))
        setIsFocused(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", query)
  }

  return (
    <div className="relative w-full" ref={searchRef}>
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input type="search" placeholder="Search for groceries..."
          className="pl-10 pr-10 border-primary/20 focus-visible:ring-primary/30 h-12 text-base" value={query}
          onChange={(e) => setQuery(e.target.value)} onFocus={() => setIsFocused(true)} />
        {query && (
          <Button type="button" variant="ghost" size="icon" className="absolute right-0 top-0 h-full aspect-square"
            onClick={() => setQuery("")}>
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </form>

      <AnimatePresence>
        {isFocused && query.length > 1 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }} className="absolute z-10 mt-1 w-full">
            <Card className="overflow-hidden border-primary/20 shadow-lg">
              <div className="p-2">
                {isSearching ? (
                  <div className="flex items-center justify-center p-4">
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                    <span className="ml-2 text-sm">Searching...</span>
                  </div>
                ) : results.length > 0 ? (
                  <div className="max-h-[300px] overflow-auto">
                    {
                      results.map((product) => (
                        <Link key={product.id} href={`/product/${product.id}`}
                          className="flex items-center gap-3 rounded-md p-2 hover:bg-muted transition-colors"
                          onClick={() => setIsFocused(false)}>
                          <div className="h-10 w-10 overflow-hidden rounded-md bg-muted">
                            <img src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover"/>
                          </div>
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-xs text-muted-foreground">{product.category}</p>
                          </div>
                        </Link>
                      ))}
                  </div>
                ) : ( <div className="p-4 text-center text-sm text-muted-foreground">No results found for "{query}"</div> )}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}