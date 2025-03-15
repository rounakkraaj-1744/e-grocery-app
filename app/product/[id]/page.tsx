import { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Star, ShoppingCart, Heart, Share2, Truck, Clock, ShieldCheck, Leaf, Award, ChevronRight, Minus, Plus } from 'lucide-react'

export const metadata: Metadata = {
  title: "Organic Fresh Avocado | FreshCart",
  description: "Premium quality organic avocados, rich in nutrients and perfect for your healthy lifestyle.",
}

export default function ProductPage({ params }: { params: { id: string } }) {
  // This would normally fetch product data based on the ID
  const product = {
    id: params.id,
    name: "Organic Fresh Avocado",
    description: "Premium quality organic avocados, rich in nutrients and perfect for your healthy lifestyle. Our avocados are sourced from certified organic farms and are free from pesticides and chemicals.",
    price: 149,
    originalPrice: 199,
    discount: 25,
    rating: 4.8,
    reviews: 124,
    stock: 15,
    sku: "AVD-ORG-001",
    weight: "250g (approx.)",
    category: "Fruits & Vegetables",
    subcategory: "Fruits",
    tags: ["organic", "fresh", "fruit", "healthy", "superfood"],
    badge: "Organic",
    isNew: true,
    isBestseller: true,
    images: [
      "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590005354167-6da97870c757?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601039641847-7857b994d704?q=80&w=1200&auto=format&fit=crop",
    ],
    nutrition: {
      calories: "160 kcal",
      fat: "15g",
      carbs: "9g",
      protein: "2g",
      fiber: "7g",
    },
    benefits: [
      "Rich in healthy fats",
      "Good source of fiber",
      "Contains vitamins K, E, C, B5, B6, and folate",
      "High in potassium",
      "Helps reduce cholesterol and triglyceride levels",
    ],
    relatedProducts: [2, 5, 6],
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/categories/fruits-vegetables" className="hover:text-foreground">
            Fruits & Vegetables
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/categories/fruits" className="hover:text-foreground">Fruits</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Organic Fresh Avocado</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border bg-muted/50">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-md border bg-muted/50">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - View ${index + 1}`}
                    className="h-24 w-full object-cover transition-transform hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {product.badge && (
                  <Badge className="bg-primary text-primary-foreground">{product.badge}</Badge>
                )}
                {product.isNew && (
                  <Badge className="bg-secondary text-secondary-foreground">New</Badge>
                )}
                {product.isBestseller && (
                  <Badge className="bg-accent text-accent-foreground">Bestseller</Badge>
                )}
              </div>
              <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
              
              <div className="mt-2 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                <span className="text-sm text-muted-foreground">SKU: {product.sku}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">₹{product.price}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                  <Badge className="bg-destructive text-destructive-foreground">
                    {product.discount}% OFF
                  </Badge>
                </>
              )}
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">Weight:</span>
                <span>{product.weight}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Category:</span>
                <Link href={`/categories/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary hover:underline">
                  {product.category}
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Availability:</span>
                <span className={product.stock > 0 ? "text-success" : "text-destructive"}>
                  {product.stock > 0 ? `In Stock (${product.stock} left)` : "Out of Stock"}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center rounded-md border">
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-r-none">
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <div className="flex h-10 w-12 items-center justify-center text-center">1</div>
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-l-none">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
                <Button className="flex-1 gap-2 bg-primary hover:bg-primary/90">
                  <ShoppingCart className="h-4 w-4" /> Add to Cart
                </Button>
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 gap-2 border-primary/20 hover:bg-primary/5">
                  <Heart className="h-4 w-4" /> Add to Wishlist
                </Button>
                <Button variant="outline" className="gap-2 border-primary/20 hover:bg-primary/5">
                  <Share2 className="h-4 w-4" /> Share
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 rounded-lg border p-3">
                <Truck className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-xs text-muted-foreground">On orders over ₹500</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg border p-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Same Day Delivery</p>
                  <p className="text-xs text-muted-foreground">Order before 2 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg border p-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Quality Guarantee</p>
                  <p className="text-xs text-muted-foreground">100% satisfaction</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg border p-3">
                <Leaf className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">100% Organic</p>
                  <p className="text-xs text-muted-foreground">Certified products</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b pb-px">
              <TabsTrigger value="description" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">
                Description
              </TabsTrigger>
              <TabsTrigger value="nutrition" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">
                Nutrition Facts
              </TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="space-y-4">
                <p>{product.description}</p>
                <h3 className="text-lg font-medium">Benefits</h3>
                <ul className="ml-6 list-disc space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="nutrition" className="mt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Nutrition Information</h3>
                <p className="text-sm text-muted-foreground">Per 100g serving</p>
                <div className="rounded-lg border">
                  <div className="grid grid-cols-2 border-b p-4">
                    <span className="font-medium">Calories</span>
                    <span>{product.nutrition.calories}</span>
                  </div>
                  <div className="grid grid-cols-2 border-b p-4">
                    <span className="font-medium">Total Fat</span>
                    <span>{product.nutrition.fat}</span>
                  </div>
                  <div className="grid grid-cols-2 border-b p-4">
                    <span className="font-medium">Total Carbohydrates</span>
                    <span>{product.nutrition.carbs}</span>
                  </div>
                  <div className="grid grid-cols-2 border-b p-4">
                    <span className="font-medium">Protein</span>
                    <span>{product.nutrition.protein}</span>
                  </div>
                  <div className="grid grid-cols-2 p-4">
                    <span className="font-medium">Dietary Fiber</span>
                    <span>{product.nutrition.fiber}</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold">{product.rating}</div>
                    <div className="flex items-center justify-center gap-1 text-yellow-400">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current text-yellow-400/30" />
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Based on {product.reviews} reviews
                    </div>
                  </div>
                  <Separator orientation="vertical" className="h-20" />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-8 text-sm">5★</span>
                      <div className="h-2 flex-1 rounded-full bg-muted">
                        <div className="h-2 w-[75%] rounded-full bg-yellow-400"></div>
                      </div>
                      <span className="w-8 text-sm text-muted-foreground">75%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-8 text-sm">4★</span>
                      <div className="h-2 flex-1 rounded-full bg-muted">
                        <div className="h-2 w-[20%] rounded-full bg-yellow-400"></div>
                      </div>
                      <span className="w-8 text-sm text-muted-foreground">20%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-8 text-sm">3★</span>
                      <div className="h-2 flex-1 rounded-full bg-muted">
                        <div className="h-2 w-[5%] rounded-full bg-yellow-400"></div>
                      </div>
                      <span className="w-8 text-sm text-muted-foreground">5%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-8 text-sm">2★</span>
                      <div className="h-2 flex-1 rounded-full bg-muted">
                        <div className="h-2 w-[0%] rounded-full bg-yellow-400"></div>
                      </div>
                      <span className="w-8 text-sm text-muted-foreground">0%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-8 text-sm">1★</span>
                      <div className="h-2 flex-1 rounded-full bg-muted">
                        <div className="h-2 w-[0%] rounded-full bg-yellow-400"></div>
                      </div>
                      <span className="w-8 text-sm text-muted-foreground">0%</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full">Write a Review</Button>
                
                <Separator />
                
                <div className="space-y-6">
                  {/* Sample reviews */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">Excellent quality and freshness</h4>
                        <div className="flex items-center gap-2">
                          <div className="flex text-yellow-400">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                          <span className="text-sm text-muted-foreground">Verified Purchase</span>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">2 days ago</span>
                    </div>
                    <p className="text-sm">
                      These avocados are perfect! They arrived in excellent condition and ripened beautifully. The taste is rich and creamy, exactly what you'd expect from high-quality organic avocados. Will definitely purchase again.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-medium">Rahul S.</span>
                      <span className="text-muted-foreground">Mumbai, India</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">Great value for money</h4>
                        <div className="flex items-center gap-2">
                          <div className="flex text-yellow-400">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4" />
                          </div>
                          <span className="text-sm text-muted-foreground">Verified Purchase</span>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">1 week ago</span>
                    </div>
                    <p className="text-sm">
                      I've been buying these organic avocados for months now, and they're consistently good. Occasionally one might be a bit underripe, but overall the quality is excellent for the price. Delivery is always prompt too.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-medium">Priya M.</span>
                      <span className="text-muted-foreground">Delhi, India</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">Load More Reviews</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold gradient-text">You May Also Like</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {/* Sample related products */}
            <div className="rounded-lg border transition-all hover:border-primary/30 hover:shadow-md">
              <div className="aspect-square overflow-hidden rounded-t-lg bg-muted/50">
                <img
                  src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=300&auto=format&fit=crop"
                  alt="Fresh Strawberries"
                  className="h-full w-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Fresh Strawberries (250g)</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold">₹129</span>
                  <Button size="sm" className="h-8 bg-primary hover:bg-primary/90">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border transition-all hover:border-primary/30 hover:shadow-md">
              <div className="aspect-square overflow-hidden rounded-t-lg bg-muted/50">
                <img
                  src="https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=300&auto=format&fit=crop"
                  alt="Farm Fresh Eggs"
                  className="h-full w-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Farm Fresh Eggs (12 pack)</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold">₹89</span>
                  <Button size="sm" className="h-8 bg-primary hover:bg-primary/90">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border transition-all hover:border-primary/30 hover:shadow-md">
              <div className="aspect-square overflow-hidden rounded-t-lg bg-muted/50">
                <img
                  src="https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=300&auto=format&fit=crop"
                  alt="Organic Spinach"
                  className="h-full w-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Organic Spinach (200g)</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold">₹49</span>
                  <Button size="sm" className="h-8 bg-primary hover:bg-primary/90">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border transition-all hover:border-primary/30 hover:shadow-md">
              <div className="aspect-square overflow-hidden rounded-t-lg bg-muted/50">
                <img
                  src="https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=300&auto=format&fit=crop"
                  alt="Organic Milk"
                  className="h-full w-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Organic Milk (1L)</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold">₹65</span>
                  <Button size="sm" className="h-8 bg-primary hover:bg-primary/90">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
