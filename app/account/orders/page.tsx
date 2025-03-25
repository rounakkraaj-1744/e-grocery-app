"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { User, Package, Heart, CreditCard, MapPin, Bell, LogOut, Edit, Calendar, Settings, Gift, Truck, Clock, ChevronRight, Star, CheckCircle2, Wallet, Percent, Award, Zap, BarChart3, Bookmark, HelpCircle, FileText, Phone, Mail, Tag, Copy, Filter, Search } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("all")
  const router = useRouter ()
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <h1 className="text-3xl font-bold gradient-text">My Orders</h1>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="button-outline" onClick={() => { router.push("/account/help") }}>
              <HelpCircle className="h-4 w-4 mr-2" />
              Help Center
            </Button>
            <Button variant="outline" size="sm" className="button-outline" onClick={() => { router.push("/account/support") }}>
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
                      <Progress value={75} className="h-2 bg-muted" />
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
                <Link href="/account/orders" className="flex items-center gap-3 p-3 border-t bg-primary/5 text-primary">
                  <Package className="h-5 w-5" /> Orders
                  <Badge className="ml-auto">12</Badge>
                </Link>
                <Link href="/account/wishlist" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
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
                    <span>support@OneHyperMart.com</span>
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
                  <Package className="h-5 w-5 text-primary" />
                  Order History
                </CardTitle>
                <CardDescription>View and manage your orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <div className="relative w-full sm:w-80">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search orders..."
                        className="w-full pl-9 bg-background"
                      />
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-full sm:w-40">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Orders</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="shipped">Shipped</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-2 w-full md:w-auto">
                    <Button variant="outline" size="sm" className="w-full md:w-auto button-outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" className="w-full md:w-auto button-outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Date Range
                    </Button>
                  </div>
                </div>

                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
                  <div className="bg-card rounded-lg border p-1">
                    <TabsList className="w-full grid grid-cols-5 bg-transparent">
                      <TabsTrigger
                        value="all"
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md"
                      >
                        All
                      </TabsTrigger>
                      <TabsTrigger
                        value="processing"
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md"
                      >
                        Processing
                      </TabsTrigger>
                      <TabsTrigger
                        value="shipped"
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md"
                      >
                        Shipped
                      </TabsTrigger>
                      <TabsTrigger
                        value="delivered"
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md"
                      >
                        Delivered
                      </TabsTrigger>
                      <TabsTrigger
                        value="cancelled"
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md"
                      >
                        Cancelled
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <TabsContent value="all" className="space-y-6 mt-0">
                        {[1, 2, 3, 4, 5].map((id) => (
                          <div key={id} className="rounded-lg border overflow-hidden">
                            <div className="bg-muted/30 p-4 flex flex-wrap items-center justify-between gap-4">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-medium">Order #ORD12345{id}</h3>
                                  <Badge
                                    className={
                                      id === 1
                                        ? "bg-blue-500 text-white"
                                        : id === 2
                                          ? "bg-amber-500 text-white"
                                          : id === 3
                                            ? "bg-success text-success-foreground"
                                            : id === 4
                                              ? "bg-destructive text-destructive-foreground"
                                              : "bg-secondary text-secondary-foreground"
                                    }
                                  >
                                    {id === 1 ? "Shipped" : id === 2 ? "Processing" : id === 3 ? "Delivered" : id === 4 ? "Cancelled" : "Completed"}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    <span>April {10 + id}, 2025</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    <span>Home</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-bold">₹{347 * id}.00</p>
                                <p className="text-sm text-muted-foreground">{2 + id} items</p>
                              </div>
                            </div>

                            <div className="p-4 grid gap-4 md:grid-cols-[2fr_1fr]">
                              <div className="space-y-3">
                                {[1, 2, 3].slice(0, 2 + (id % 2)).map((itemId) => (
                                  <div key={itemId} className="flex items-center gap-3">
                                    <div className="h-16 w-16 overflow-hidden rounded-md bg-muted">
                                      <img
                                        src={`https://images.unsplash.com/photo-${itemId === 1 ? "1519162808019-7de1683fa2ad" : itemId === 2 ? "1598965675045-45c5e72c7d05" : "1464965911861-746a04b4bca6"}?q=80&w=100&auto=format&fit=crop`}
                                        alt={`Order item ${itemId}`}
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="text-sm font-medium line-clamp-1">
                                        {itemId === 1
                                          ? "Organic Fresh Avocado"
                                          : itemId === 2
                                            ? "Farm Fresh Eggs (12 pack)"
                                            : "Fresh Strawberries (250g)"}
                                      </h4>
                                      <div className="flex items-center justify-between mt-1">
                                        <p className="text-xs text-muted-foreground">Qty: {itemId}</p>
                                        <p className="text-sm font-medium">
                                          ₹{itemId === 1 ? "149.00" : itemId === 2 ? "89.00" : "129.00"}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="space-y-3">
                                {id === 1 && (
                                  <div className="rounded-lg border p-3 bg-blue-50 dark:bg-blue-950/30">
                                    <div className="flex items-center gap-2">
                                      <Truck className="h-4 w-4 text-blue-500" />
                                      <h4 className="text-sm font-medium">Delivery Status</h4>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">Your order is on the way!</p>
                                    <div className="mt-2">
                                      <Progress value={75} className="h-1.5 bg-muted" />
                                      <div className="flex items-center justify-between mt-1">
                                        <span className="text-[10px] text-muted-foreground">Packed</span>
                                        <span className="text-[10px] text-muted-foreground">Out for Delivery</span>
                                      </div>
                                    </div>
                                    <Button
                                      size="sm"
                                      className="w-full mt-2 h-7 text-xs bg-blue-500 hover:bg-blue-600"
                                    >
                                      Track Order
                                    </Button>
                                  </div>
                                )}

                                {id === 2 && (
                                  <div className="rounded-lg border p-3 bg-amber-50 dark:bg-amber-950/30">
                                    <div className="flex items-center gap-2">
                                      <Clock className="h-4 w-4 text-amber-500" />
                                      <h4 className="text-sm font-medium">Processing</h4>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">Your order is being prepared</p>
                                    <div className="mt-2">
                                      <Progress value={30} className="h-1.5 bg-muted" />
                                      <div className="flex items-center justify-between mt-1">
                                        <span className="text-[10px] text-muted-foreground">Confirmed</span>
                                        <span className="text-[10px] text-muted-foreground">Packing</span>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                <div className="rounded-lg border p-3">
                                  <h4 className="text-sm font-medium">Order Summary</h4>
                                  <div className="mt-2 space-y-1 text-xs">
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">Subtotal</span>
                                      <span>₹{347 * id - 49}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">Delivery Fee</span>
                                      <span>₹49.00</span>
                                    </div>
                                    <Separator className="my-1" />
                                    <div className="flex justify-between font-medium">
                                      <span>Total</span>
                                      <span>₹{347 * id}.00</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                  {id !== 4 && (
                                    <Button size="sm" className="h-8 button-primary">
                                      {id === 3 ? "Reorder" : "Track Order"}
                                    </Button>
                                  )}
                                  {id === 3 && (
                                    <Button variant="outline" size="sm" className="h-8 button-outline">
                                      <Star className="h-3 w-3 mr-1" />
                                      Write Review
                                    </Button>
                                  )}
                                  {id === 2 && (
                                    <Button variant="outline" size="sm" className="h-8 button-outline text-destructive hover:bg-destructive/10 hover:text-destructive">
                                      Cancel Order
                                    </Button>
                                  )}
                                  <Button variant="outline" size="sm" className="h-8 button-outline">
                                    Need Help?
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </TabsContent>

                      <TabsContent value="processing" className="space-y-6 mt-0">
                        <div className="rounded-lg border overflow-hidden">
                          <div className="bg-muted/30 p-4 flex flex-wrap items-center justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">Order #ORD123452</h3>
                                <Badge className="bg-amber-500 text-white">Processing</Badge>
                              </div>
                              <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>April 12, 2025</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  <span>Home</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold">₹694.00</p>
                              <p className="text-sm text-muted-foreground">4 items</p>
                            </div>
                          </div>

                          <div className="p-4 grid gap-4 md:grid-cols-[2fr_1fr]">
                            <div className="space-y-3">
                              {[1, 2].map((itemId) => (
                                <div key={itemId} className="flex items-center gap-3">
                                  <div className="h-16 w-16 overflow-hidden rounded-md bg-muted">
                                    <img
                                      src={`https://images.unsplash.com/photo-${itemId === 1 ? "1519162808019-7de1683fa2ad" : "1598965675045-45c5e72c7d05"}?q=80&w=100&auto=format&fit=crop`}
                                      alt={`Order item ${itemId}`}
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-sm font-medium line-clamp-1">
                                      {itemId === 1 ? "Organic Fresh Avocado" : "Farm Fresh Eggs (12 pack)"}
                                    </h4>
                                    <div className="flex items-center justify-between mt-1">
                                      <p className="text-xs text-muted-foreground">Qty: {itemId}</p>
                                      <p className="text-sm font-medium">
                                        ₹{itemId === 1 ? "149.00" : "89.00"}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="space-y-3">
                              <div className="rounded-lg border p-3 bg-amber-50 dark:bg-amber-950/30">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-amber-500" />
                                  <h4 className="text-sm font-medium">Processing</h4>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">Your order is being prepared</p>
                                <div className="mt-2">
                                  <Progress value={30} className="h-1.5 bg-muted" />
                                  <div className="flex items-center justify-between mt-1">
                                    <span className="text-[10px] text-muted-foreground">Confirmed</span>
                                    <span className="text-[10px] text-muted-foreground">Packing</span>
                                  </div>
                                </div>
                              </div>

                              <div className="rounded-lg border p-3">
                                <h4 className="text-sm font-medium">Order Summary</h4>
                                <div className="mt-2 space-y-1 text-xs">
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>₹645.00</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Delivery Fee</span>
                                    <span>₹49.00</span>
                                  </div>
                                  <Separator className="my-1" />
                                  <div className="flex justify-between font-medium">
                                    <span>Total</span>
                                    <span>₹694.00</span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col gap-2">
                                <Button size="sm" className="h-8 button-primary">
                                  Track Order
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 button-outline text-destructive hover:bg-destructive/10 hover:text-destructive">
                                  Cancel Order
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 button-outline">
                                  Need Help?
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="shipped" className="space-y-6 mt-0">
                        <div className="rounded-lg border overflow-hidden">
                          <div className="bg-muted/30 p-4 flex flex-wrap items-center justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">Order #ORD123451</h3>
                                <Badge className="bg-blue-500 text-white">Shipped</Badge>
                              </div>
                              <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>April 11, 2025</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  <span>Home</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold">₹347.00</p>
                              <p className="text-sm text-muted-foreground">3 items</p>
                            </div>
                          </div>

                          <div className="p-4 grid gap-4 md:grid-cols-[2fr_1fr]">
                            <div className="space-y-3">
                              {[1, 2, 3].map((itemId) => (
                                <div key={itemId} className="flex items-center gap-3">
                                  <div className="h-16 w-16 overflow-hidden rounded-md bg-muted">
                                    <img
                                      src={`https://images.unsplash.com/photo-${itemId === 1 ? "1519162808019-7de1683fa2ad" : itemId === 2 ? "1598965675045-45c5e72c7d05" : "1464965911861-746a04b4bca6"}?q=80&w=100&auto=format&fit=crop`}
                                      alt={`Order item ${itemId}`}
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-sm font-medium line-clamp-1">
                                      {itemId === 1
                                        ? "Organic Fresh Avocado"
                                        : itemId === 2
                                          ? "Farm Fresh Eggs (12 pack)"
                                          : "Fresh Strawberries (250g)"}
                                    </h4>
                                    <div className="flex items-center justify-between mt-1">
                                      <p className="text-xs text-muted-foreground">Qty: {itemId}</p>
                                      <p className="text-sm font-medium">
                                        ₹{itemId === 1 ? "149.00" : itemId === 2 ? "89.00" : "129.00"}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="space-y-3">
                              <div className="rounded-lg border p-3 bg-blue-50 dark:bg-blue-950/30">
                                <div className="flex items-center gap-2">
                                  <Truck className="h-4 w-4 text-blue-500" />
                                  <h4 className="text-sm font-medium">Delivery Status</h4>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">Your order is on the way!</p>
                                <div className="mt-2">
                                  <Progress value={75} className="h-1.5 bg-muted" />
                                  <div className="flex items-center justify-between mt-1">
                                    <span className="text-[10px] text-muted-foreground">Packed</span>
                                    <span className="text-[10px] text-muted-foreground">Out for Delivery</span>
                                  </div>
                                </div>
                                <Button
                                  size="sm"
                                  className="w-full mt-2 h-7 text-xs bg-blue-500 hover:bg-blue-600"
                                >
                                  Track Order
                                </Button>
                              </div>

                              <div className="rounded-lg border p-3">
                                <h4 className="text-sm font-medium">Order Summary</h4>
                                <div className="mt-2 space-y-1 text-xs">
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>₹298.00</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Delivery Fee</span>
                                    <span>₹49.00</span>
                                  </div>
                                  <Separator className="my-1" />
                                  <div className="flex justify-between font-medium">
                                    <span>Total</span>
                                    <span>₹347.00</span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col gap-2">
                                <Button size="sm" className="h-8 button-primary">
                                  Track Order
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 button-outline">
                                  Need Help?
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="delivered" className="space-y-6 mt-0">
                        <div className="rounded-lg border overflow-hidden">
                          <div className="bg-muted/30 p-4 flex flex-wrap items-center justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">Order #ORD123453</h3>
                                <Badge className="bg-success text-success-foreground">Delivered</Badge>
                              </div>
                              <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>April 13, 2025</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  <span>Home</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold">₹1,041.00</p>
                              <p className="text-sm text-muted-foreground">5 items</p>
                            </div>
                          </div>

                          <div className="p-4 grid gap-4 md:grid-cols-[2fr_1fr]">
                            <div className="space-y-3">
                              {[1, 2, 3].map((itemId) => (
                                <div key={itemId} className="flex items-center gap-3">
                                  <div className="h-16 w-16 overflow-hidden rounded-md bg-muted">
                                    <img
                                      src={`https://images.unsplash.com/photo-${itemId === 1 ? "1519162808019-7de1683fa2ad" : itemId === 2 ? "1598965675045-45c5e72c7d05" : "1464965911861-746a04b4bca6"}?q=80&w=100&auto=format&fit=crop`}
                                      alt={`Order item ${itemId}`}
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-sm font-medium line-clamp-1">
                                      {itemId === 1
                                        ? "Organic Fresh Avocado"
                                        : itemId === 2
                                          ? "Farm Fresh Eggs (12 pack)"
                                          : "Fresh Strawberries (250g)"}
                                    </h4>
                                    <div className="flex items-center justify-between mt-1">
                                      <p className="text-xs text-muted-foreground">Qty: {itemId}</p>
                                      <p className="text-sm font-medium">
                                        ₹{itemId === 1 ? "149.00" : itemId === 2 ? "89.00" : "129.00"}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="space-y-3">
                              <div className="rounded-lg border p-3 bg-success/10">
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-success" />
                                  <h4 className="text-sm font-medium">Delivered Successfully</h4>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">Delivered on April 14, 2025</p>
                              </div>

                              <div className="rounded-lg border p-3">
                                <h4 className="text-sm font-medium">Order Summary</h4>
                                <div className="mt-2 space-y-1 text-xs">
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>₹992.00</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Delivery Fee</span>
                                    <span>₹49.00</span>
                                  </div>
                                  <Separator className="my-1" />
                                  <div className="flex justify-between font-medium">
                                    <span>Total</span>
                                    <span>₹1,041.00</span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col gap-2">
                                <Button size="sm" className="h-8 button-primary">
                                  Reorder
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 button-outline">
                                  <Star className="h-3 w-3 mr-1" />
                                  Write Review
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 button-outline">
                                  Need Help?
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="cancelled" className="space-y-6 mt-0">
                        <div className="rounded-lg border overflow-hidden">
                          <div className="bg-muted/30 p-4 flex flex-wrap items-center justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">Order #ORD123454</h3>
                                <Badge className="bg-destructive text-destructive-foreground">Cancelled</Badge>
                              </div>
                              <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>April 14, 2025</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  <span>Home</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold">₹1,388.00</p>
                              <p className="text-sm text-muted-foreground">6 items</p>
                            </div>
                          </div>

                          <div className="p-4 grid gap-4 md:grid-cols-[2fr_1fr]">
                            <div className="space-y-3">
                              {[1, 2, 3].map((itemId) => (
                                <div key={itemId} className="flex items-center gap-3">
                                  <div className="h-16 w-16 overflow-hidden rounded-md bg-muted">
                                    <img
                                      src={`https://images.unsplash.com/photo-${itemId === 1 ? "1519162808019-7de1683fa2ad" : itemId === 2 ? "1598965675045-45c5e72c7d05" : "1464965911861-746a04b4bca6"}?q=80&w=100&auto=format&fit=crop`}
                                      alt={`Order item ${itemId}`}
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-sm font-medium line-clamp-1">
                                      {itemId === 1
                                        ? "Organic Fresh Avocado"
                                        : itemId === 2
                                          ? "Farm Fresh Eggs (12 pack)"
                                          : "Fresh Strawberries (250g)"}
                                    </h4>
                                    <div className="flex items-center justify-between mt-1">
                                      <p className="text-xs text-muted-foreground">Qty: {itemId}</p>
                                      <p className="text-sm font-medium">
                                        ₹{itemId === 1 ? "149.00" : itemId === 2 ? "89.00" : "129.00"}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="space-y-3">
                              <div className="rounded-lg border p-3 bg-destructive/10">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-destructive" />
                                  <h4 className="text-sm font-medium">Order Cancelled</h4>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">Cancelled on April 14, 2025</p>
                                <p className="text-xs text-muted-foreground mt-1">Reason: Out of stock items</p>
                              </div>

                              <div className="rounded-lg border p-3">
                                <h4 className="text-sm font-medium">Order Summary</h4>
                                <div className="mt-2 space-y-1 text-xs">
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>₹1,339.00</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Delivery Fee</span>
                                    <span>₹49.00</span>
                                  </div>
                                  <Separator className="my-1" />
                                  <div className="flex justify-between font-medium">
                                    <span>Total</span>
                                    <span>₹1,388.00</span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col gap-2">
                                <Button size="sm" className="h-8 button-primary">
                                  Reorder
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 button-outline">
                                  Need Help?
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </motion.div>
                  </AnimatePresence>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
