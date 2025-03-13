"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bell,
  ChevronLeft,
  CreditCard,
  Heart,
  Home,
  Package,
  Settings,
  ShoppingBag,
  User,
  Shield,
  Calendar,
  MapPin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import ThemeToggle from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile")

  const orders = [
    {
      id: "ORD-12345",
      date: "June 10, 2024",
      status: "Delivered",
      total: "₹547.00",
      items: 3,
    },
    {
      id: "ORD-12344",
      date: "June 5, 2024",
      status: "Processing",
      total: "₹298.00",
      items: 2,
    },
    {
      id: "ORD-12343",
      date: "May 28, 2024",
      status: "Delivered",
      total: "₹267.00",
      items: 3,
    },
  ]

  const addresses = [
    {
      id: 1,
      name: "Home",
      address: "123 Main Street, Apt 4B, Mumbai, MH 400001",
      default: true,
    },
    {
      id: 2,
      name: "Office",
      address: "456 Business Ave, Suite 200, Mumbai, MH 400002",
      default: false,
    },
  ]

  const wishlist = [
    {
      id: 1,
      name: "Organic Avocado",
      price: 149,
      image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=100&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Fresh Strawberries",
      price: 129,
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=100&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Organic Honey",
      price: 199,
      image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=100&auto=format&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <ChevronLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/cart">
              <Button variant="outline" size="icon" className="relative cursor-pointer">
                <ShoppingBag className="h-5 w-5" />
                <span className="bg-red-500 absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white">
                  3
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="items-center justify-center pb-12 pt-6">
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <div className="relative">
            <Avatar className="h-24 w-24 border-4 border-primary/20">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" />
              <AvatarFallback>RK</AvatarFallback>
            </Avatar>
            <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
              Premium
            </Badge>
          </div>
          <h1 className="mt-4 text-2xl font-bold">Rahul Kumar</h1>
          <p className="text-muted-foreground">Member since June 2023</p>
        </div>

        <Tabs defaultValue="profile" className="w-full" onValueChange={setActiveTab}>
          <div className="mb-8 flex justify-center">
            <TabsList className="grid w-full max-w-3xl grid-cols-4 md:grid-cols-7">
              <TabsTrigger value="profile" className="flex flex-col items-center gap-1 py-2">
                <User className="h-4 w-4" />
                <span className="text-xs">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex flex-col items-center gap-1 py-2">
                <Package className="h-4 w-4" />
                <span className="text-xs">Orders</span>
              </TabsTrigger>
              <TabsTrigger value="addresses" className="flex flex-col items-center gap-1 py-2">
                <MapPin className="h-4 w-4" />
                <span className="text-xs">Addresses</span>
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="flex flex-col items-center gap-1 py-2">
                <Heart className="h-4 w-4" />
                <span className="text-xs">Wishlist</span>
              </TabsTrigger>
              <TabsTrigger value="payment" className="flex flex-col items-center gap-1 py-2">
                <CreditCard className="h-4 w-4" />
                <span className="text-xs">Payment</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex flex-col items-center gap-1 py-2">
                <Bell className="h-4 w-4" />
                <span className="text-xs">Alerts</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex flex-col items-center gap-1 py-2">
                <Settings className="h-4 w-4" />
                <span className="text-xs">Settings</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="mx-auto max-w-4xl">
            <TabsContent value="profile">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-2 border-primary/10 bg-card/50 backdrop-blur">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <User className="h-5 w-5 text-primary" />
                      Personal Information
                    </CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          defaultValue="Rahul"
                          className="border-primary/20 focus-visible:ring-primary/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          defaultValue="Kumar"
                          className="border-primary/20 focus-visible:ring-primary/30"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="rahul.kumar@example.com"
                        className="border-primary/20 focus-visible:ring-primary/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        defaultValue="+91 98765 43210"
                        className="border-primary/20 focus-visible:ring-primary/30"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button className="bg-gradient-to-r from-primary to-primary/80">Save Changes</Button>
                  </CardFooter>
                </Card>

                <Card className="border-2 border-primary/10 bg-card/50 backdrop-blur">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Shield className="h-5 w-5 text-primary" />
                      Account Security
                    </CardTitle>
                    <CardDescription>Manage your password and security settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input
                        id="current-password"
                        type="password"
                        className="border-primary/20 focus-visible:ring-primary/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input
                        id="new-password"
                        type="password"
                        className="border-primary/20 focus-visible:ring-primary/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        className="border-primary/20 focus-visible:ring-primary/30"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button className="bg-gradient-to-r from-primary to-primary/80">Update Password</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="orders">
              <Card className="border-2 border-primary/10 bg-card/50 backdrop-blur">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Package className="h-5 w-5 text-primary" />
                    Order History
                  </CardTitle>
                  <CardDescription>View and track your orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {orders.map((order, index) => (
                      <div
                        key={order.id}
                        className={`rounded-lg ${
                          index % 2 === 0 ? "bg-primary/5" : "bg-secondary/5"
                        } p-4 transition-all hover:shadow-md`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                              <Calendar className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div>
                              <p className="font-medium">{order.id}</p>
                              <p className="text-sm text-muted-foreground">{order.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`rounded-full px-2 py-1 text-xs font-medium ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                  : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                              }`}
                            >
                              {order.status}
                            </span>
                            <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5">
                              View Details
                            </Button>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{order.items} items</span>
                          <span className="font-medium">{order.total}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="addresses">
              <Card className="border-2 border-primary/10 bg-card/50 backdrop-blur">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <MapPin className="h-5 w-5 text-primary" />
                    Delivery Addresses
                  </CardTitle>
                  <CardDescription>Manage your delivery addresses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {addresses.map((address) => (
                      <div
                        key={address.id}
                        className={`rounded-lg border-2 ${
                          address.default ? "border-primary/20 bg-primary/5" : "border-muted"
                        } p-4 transition-all hover:shadow-md`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <Home className="h-4 w-4 text-primary" />
                              <p className="font-medium">{address.name}</p>
                              {address.default && (
                                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                  Default
                                </span>
                              )}
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">{address.address}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="h-8 border-primary/20 hover:bg-primary/5">
                              Edit
                            </Button>
                            {!address.default && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
                              >
                                Delete
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="flex h-full min-h-[120px] items-center justify-center rounded-lg border-2 border-dashed border-muted p-4 text-center">
                      <div>
                        <Button variant="outline" className="mb-2 border-primary/20 hover:bg-primary/5">
                          + Add New Address
                        </Button>
                        <p className="text-xs text-muted-foreground">Add a new delivery address</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wishlist">
              <Card className="border-2 border-primary/10 bg-card/50 backdrop-blur">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Heart className="h-5 w-5 text-primary" />
                    Wishlist
                  </CardTitle>
                  <CardDescription>Products you've saved for later</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {wishlist.map((item) => (
                      <div
                        key={item.id}
                        className="group overflow-hidden rounded-lg border-2 border-muted bg-card transition-all hover:border-primary/20 hover:shadow-md"
                      >
                        <div className="relative aspect-square bg-muted">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 text-red-500 backdrop-blur-sm"
                          >
                            <Heart className="h-4 w-4 fill-current" />
                            <span className="sr-only">Remove from wishlist</span>
                          </Button>
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium">{item.name}</h3>
                          <div className="mt-1 flex items-center justify-between">
                            <span className="text-sm font-bold">₹{item.price}</span>
                            <Button size="sm" className="h-8 bg-primary text-primary-foreground">
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="flex aspect-square flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted p-4 text-center">
                      <div className="mb-2 rounded-full bg-muted p-2">
                        <ShoppingBag className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <p className="text-sm font-medium">Continue Shopping</p>
                      <p className="mt-1 text-xs text-muted-foreground">Add more items to your wishlist</p>
                      <Button asChild variant="link" className="mt-2 text-primary">
                        <Link href="/">Browse Products</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payment">
              <Card className="border-2 border-primary/10 bg-card/50 backdrop-blur">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Payment Methods
                  </CardTitle>
                  <CardDescription>Manage your payment methods</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex min-h-[200px] flex-col items-center justify-center rounded-lg border p-6 text-center">
                    <div className="mb-4 rounded-full bg-muted p-3">
                      <CreditCard className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground">No payment methods added yet</p>
                    <Button className="mt-4 bg-gradient-to-r from-primary to-primary/80">Add Payment Method</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card className="border-2 border-primary/10 bg-card/50 backdrop-blur">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Bell className="h-5 w-5 text-primary" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg bg-primary/5 p-4">
                      <div>
                        <p className="font-medium">Order Updates</p>
                        <p className="text-sm text-muted-foreground">Receive updates about your orders</p>
                      </div>
                      <Switch defaultChecked className="data-[state=checked]:bg-primary" />
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-card p-4">
                      <div>
                        <p className="font-medium">Promotions and Offers</p>
                        <p className="text-sm text-muted-foreground">Receive notifications about deals and discounts</p>
                      </div>
                      <Switch defaultChecked className="data-[state=checked]:bg-primary" />
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-primary/5 p-4">
                      <div>
                        <p className="font-medium">Product Recommendations</p>
                        <p className="text-sm text-muted-foreground">Get personalized product suggestions</p>
                      </div>
                      <Switch className="data-[state=checked]:bg-primary" />
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-card p-4">
                      <div>
                        <p className="font-medium">Newsletter</p>
                        <p className="text-sm text-muted-foreground">Receive our weekly newsletter</p>
                      </div>
                      <Switch defaultChecked className="data-[state=checked]:bg-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card className="border-2 border-primary/10 bg-card/50 backdrop-blur">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Settings className="h-5 w-5 text-primary" />
                    Account Settings
                  </CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <select
                          id="language"
                          className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="en">English</option>
                          <option value="hi">Hindi</option>
                          <option value="mr">Marathi</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency">Currency</Label>
                        <select
                          id="currency"
                          className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="inr">Indian Rupee (₹)</option>
                          <option value="usd">US Dollar ($)</option>
                        </select>
                      </div>
                    </div>

                    <div className="rounded-lg bg-primary/5 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Dark Mode</p>
                          <p className="text-sm text-muted-foreground">Toggle between light and dark mode</p>
                        </div>
                        <ThemeToggle />
                      </div>
                    </div>

                    <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                      <h3 className="mb-2 font-medium text-destructive">Danger Zone</h3>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  )
}

