import Link from "next/link"
import { ChevronLeft, Heart, Minus, Plus, ShoppingBag, Star } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ThemeToggle from "@/components/theme-toggle"

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = params.id

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <ChevronLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Back</span>
            </Link>
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
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src="https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=600&auto=format&fit=crop"
                alt="Organic Fresh Avocado"
                className="h-full w-full object-cover"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-4 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
              >
                <Heart className="h-4 w-4" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="overflow-hidden rounded-md border bg-muted">
                  <img
                    src={`https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=100&auto=format&fit=crop&crop=edges`}
                    alt={`Product view ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-2xl font-bold md:text-3xl">Organic Fresh Avocado</h1>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent stroke-accent" />
                  ))}
                  <Star className="h-4 w-4 fill-muted stroke-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">(42 reviews)</span>
              </div>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">₹149</span>
              <span className="text-sm text-muted-foreground line-through">₹199</span>
              <span className="rounded-full bg-secondary/20 px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                Save 25%
              </span>
            </div>

            <div className="mt-2">
              <p className="text-muted-foreground">
                Fresh, ripe avocados sourced from local organic farms. Rich in healthy fats and perfect for salads,
                sandwiches, or making guacamole.
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              <div>
                <h3 className="mb-2 font-medium">Quantity</h3>
                <div className="flex w-fit items-center rounded-lg border">
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-r-none">
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease</span>
                  </Button>
                  <div className="flex h-10 w-12 items-center justify-center text-center">1</div>
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-l-none">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase</span>
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Button className="flex-1 gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1 gap-2">
                  <Heart className="h-4 w-4" />
                  Add to Wishlist
                </Button>
              </div>
            </div>

            <div className="mt-6">
              <Tabs defaultValue="details">
                <TabsList className="w-full">
                  <TabsTrigger value="details" className="flex-1">
                    Details
                  </TabsTrigger>
                  <TabsTrigger value="nutrition" className="flex-1">
                    Nutrition
                  </TabsTrigger>
                  <TabsTrigger value="reviews" className="flex-1">
                    Reviews
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="mt-4">
                  <div className="space-y-4 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Origin</div>
                      <div>Maharashtra, India</div>
                      <div className="text-muted-foreground">Weight</div>
                      <div>~200g per piece</div>
                      <div className="text-muted-foreground">Storage</div>
                      <div>Room temperature until ripe, then refrigerate</div>
                      <div className="text-muted-foreground">Organic</div>
                      <div>Yes, certified organic</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="nutrition" className="mt-4">
                  <div className="space-y-4 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Calories</div>
                      <div>160 kcal per 100g</div>
                      <div className="text-muted-foreground">Fat</div>
                      <div>15g (23% DV)</div>
                      <div className="text-muted-foreground">Carbohydrates</div>
                      <div>9g (3% DV)</div>
                      <div className="text-muted-foreground">Protein</div>
                      <div>2g (4% DV)</div>
                      <div className="text-muted-foreground">Fiber</div>
                      <div>7g (25% DV)</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="reviews" className="mt-4">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">42 verified customer reviews</p>
                    <div className="space-y-4">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-muted" />
                              <div>
                                <p className="font-medium">Customer {i + 1}</p>
                                <div className="flex">
                                  {Array.from({ length: 5 - i % 2 }).map((_, j) => (
                                    <Star key={j} className="h-3 w-3 fill-accent stroke-accent" />
                                  ))}
                                  {Array.from({ length: i % 2 }).map((_, j) => (
                                    <Star key={j} className="h-3 w-3 fill-muted stroke-muted-foreground" />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <span className="text-xs text-muted-foreground">2 days ago</span>
                          </div>
                          <p className="mt-2 text-sm">
                            {i === 0
                              ? "These avocados were perfectly ripe and delicious. Will order again!"
                              : i === 1
                              ? "Good quality but one was a bit bruised. Overall satisfied with my purchase."
                              : "Amazing flavor and texture. Perfect for my avocado toast!"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
