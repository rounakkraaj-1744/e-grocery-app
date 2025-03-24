"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { User, Package, Heart, CreditCard, MapPin, Bell, LogOut, Edit, Calendar, Settings, Gift, Truck, ChevronRight, Star, CheckCircle2, Wallet, Percent, Award, HelpCircle, FileText, Phone, Mail, Search, ShoppingCart, Trash2, X, Plus, Minus } from 'lucide-react'
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Organic Fresh Avocado",
      price: 149.00,
      image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=100&auto=format&fit=crop",
      rating: 4.7,
      inStock: true,
      category: "Fruits & Vegetables"
    },
    {
      id: 2,
      name: "Farm Fresh Eggs (12 pack)",
      price: 89.00,
      image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=100&auto=format&fit=crop",
      rating: 4.5,
      inStock: true,
      category: "Dairy & Eggs"
    },
    {
      id: 3,
      name: "Fresh Strawberries (250g)",
      price: 129.00,
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=100&auto=format&fit=crop",
      rating: 4.8,
      inStock: true,
      category: "Fruits & Vegetables"
    },
    {
      id: 4,
      name: "Organic Honey (500g)",
      price: 199.00,
      image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=100&auto=format&fit=crop",
      rating: 4.9,
      inStock: true,
      category: "Pantry"
    },
    {
      id: 5,
      name: "Whole Grain Bread",
      price: 45.00,
      image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=100&auto=format&fit=crop",
      rating: 4.3,
      inStock: false,
      category: "Bakery"
    },
    {
      id: 6,
      name: "Organic Almond Milk (1L)",
      price: 120.00,
      image: "https://images.unsplash.com/photo-1600788907416-456578634209?q=80&w=100&auto=format&fit=crop",
      rating: 4.6,
      inStock: true,
      category: "Dairy & Eggs"
    },
    {
      id: 7,
      name: "Premium Dark Chocolate",
      price: 159.00,
      image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=100&auto=format&fit=crop",
      rating: 4.8,
      inStock: true,
      category: "Snacks"
    },
    {
      id: 8,
      name: "Organic Quinoa (500g)",
      price: 179.00,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=100&auto=format&fit=crop",
      rating: 4.4,
      inStock: true,
      category: "Pantry"
    }
  ])

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <h1 className="text-3xl font-bold gradient-text">My Wishlist</h1>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="button-outline">
              <HelpCircle className="h-4 w-4 mr-2" />
              Help Center
            </Button>
            <Button variant="outline" size="sm" className="button-outline">
              <Phone className="h-4 w-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[280px_1fr]">
          <div className="space-y-6">
            <Card className="border-2 border-primary/10 overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4">
                <div className="relative mx-auto w-24 h-24">
                  <Avatar className="h-24 w-24 border-4 border-background">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
                      alt="Profile"
                    />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute -right-2 -bottom-2 h-8 w-8 rounded-full bg-background"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 text-center">
                  <h2 className="font-medium text-lg">Rahul Sharma</h2>
                  <p className="text-sm text-muted-foreground">rahul.sharma@example.com</p>
                  <div className="mt-2 flex justify-center gap-2">
                    <Badge className="bg-primary/10 text-primary">Premium Member</Badge>
                    <Badge className="bg-secondary/10 text-secondary-foreground">Since 2023</Badge>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Loyalty Level</span>
                      <span className="text-xs text-primary">Gold</span>
                    </div>
                    <div className="relative pt-1">
                      <Progress value={75} className="h-2 bg-muted"/>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-muted-foreground">320 points</span>
                        <span className="text-xs text-muted-foreground">500 points for Platinum</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div className="rounded-lg border p-2">
                      <p className="font-bold text-lg text-primary">12</p>
                      <p className="text-xs text-muted-foreground">Orders</p>
                    </div>
                    <div className="rounded-lg border p-2">
                      <p className="font-bold text-lg text-primary">₹4,320</p>
                      <p className="text-xs text-muted-foreground">Spent</p>
                    </div>
                    <div className="rounded-lg border p-2">
                      <p className="font-bold text-lg text-primary">320</p>
                      <p className="text-xs text-muted-foreground">Points</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-lg border overflow-hidden">
              <div className="flex flex-col">
                <Link href="/account" className="flex items-center gap-3 p-3 hover:bg-muted/50 group">
                  <User className="h-5 w-5" /> Account Overview
                </Link>
                <Link href="/account/orders" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
                  <Package className="h-5 w-5" /> Orders
                  <Badge className="ml-auto">12</Badge>
                </Link>
                <Link href="/account/wishlist" className="flex items-center gap-3 p-3 border-t bg-primary/5 text-primary">
                  <Heart className="h-5 w-5" /> Wishlist
                  <Badge className="ml-auto">8</Badge>
                </Link>
                <Link href="/checkout/payment" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
                  <CreditCard className="h-5 w-5" /> Payment Methods
                  <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/account/addresses"
                  className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group"
                >
                  <MapPin className="h-5 w-5" /> Addresses
                  <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/account/notifications"
                  className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group"
                >
                  <Bell className="h-5 w-5" /> Notifications
                  <Badge className="ml-auto bg-primary text-primary-foreground">3</Badge>
                </Link>
                <Link href="/account/rewards" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
                  <Gift className="h-5 w-5" /> Rewards
                  <Badge className="ml-auto bg-amber-500 text-white">Gold</Badge>
                </Link>
                <Link href="/account/settings" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
                  <Settings className="h-5 w-5" /> Settings
                  <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/logout"
                  className="flex items-center gap-3 p-3 border-t text-destructive hover:bg-destructive/5 group"
                >
                  <LogOut className="h-5 w-5" /> Logout
                </Link>
              </div>
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground mb-4">
                  Our customer support team is here to help you with any questions or concerns.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+91 1800-123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>support@freshcart.com</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" size="sm" className="w-full button-outline">
                  <FileText className="h-4 w-4 mr-2" />
                  View FAQs
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  My Wishlist
                </CardTitle>
                <CardDescription>Items you've saved for later</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
                  <div className="relative w-full md:w-80">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search wishlist..."
                      className="w-full pl-9 bg-background"
                    />
                  </div>
                  <div className="flex gap-2 w-full md:w-auto">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-full md:w-40">
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="fruits">Fruits & Vegetables</SelectItem>
                        <SelectItem value="dairy">Dairy & Eggs</SelectItem>
                        <SelectItem value="bakery">Bakery</SelectItem>
                        <SelectItem value="pantry">Pantry</SelectItem>
                        <SelectItem value="snacks">Snacks</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm" className="w-full md:w-auto button-outline">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add All to Cart
                    </Button>
                  </div>
                </div>

                {wishlistItems.length > 0 ? (
                  <div className="space-y-4">
                    {wishlistItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        className="rounded-lg border p-4 hover:border-primary/20 transition-all"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 items-center">
                          <div className="h-20 w-20 overflow-hidden rounded-md bg-muted">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-xs ml-1">{item.rating}</span>
                              </div>
                              <Badge className="text-xs">{item.category}</Badge>
                              {!item.inStock && (
                                <Badge variant="outline" className="text-xs text-destructive border-destructive">
                                  Out of Stock
                                </Badge>
                              )}
                            </div>
                            <p className="font-bold mt-1">₹{item.price.toFixed(2)}</p>
                          </div>
                          <div className="flex flex-col gap-2 md:items-end">
                            <Button 
                              size="sm" 
                              className="h-8 button-primary"
                              disabled={!item.inStock}
                            >
                              <ShoppingCart className="h-3 w-3 mr-1" />
                              Add to Cart
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="h-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
                              onClick={() => removeFromWishlist(item.id)}
                            >
                              <Trash2 className="h-3 w-3 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="mx-auto w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                      <Heart className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
                    <p className="text-muted-foreground mb-6">
                      Browse our products and add items to your wishlist
                    </p>
                    <Button className="button-primary">
                      Start Shopping
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Percent className="h-5 w-5 text-primary" />
                  Recommended for You
                </CardTitle>
                <CardDescription>Based on your wishlist and browsing history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {[1, 2, 3, 4].map((id) => (
                    <div key={id} className="rounded-lg border p-3 hover:border-primary/20 transition-all">
                      <div className="relative h-36 mb-3">
                        <img
                          src={`https://images.unsplash.com/photo-${id === 1 ? "1550583724-b2692b85b150" : id === 2 ? "1481931098196-2dcba9c5a2e3" : id === 3 ? "1490885578174-acda8905c2c6" : "1553787503-411c03fe4322"}?q=80&w=200&auto=format&fit=crop`}
                          alt={`Recommended product ${id}`}
                          className="h-full w-full object-cover rounded-md"
                        />
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="absolute top-2 right-2 h-7 w-7 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                        >
                          <Heart className="h-4 w-4 text-primary" />
                        </Button>
                      </div>
                      <h4 className="font-medium text-sm line-clamp-1">
                        {id === 1 ? "Organic Blueberries (125g)" : id === 2 ? "Artisan Sourdough Bread" : id === 3 ? "Cold Pressed Olive Oil" : "Assorted Nuts Mix (200g)"}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs ml-1">{4.3 + (id * 0.1)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <p className="font-bold">₹{(id * 50) + 99}</p>
                        <Button size="sm" className="h-7 w-7 p-0">
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t p-4">
                <Button variant="outline" className="w-full button-outline">
                  View More Recommendations
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
