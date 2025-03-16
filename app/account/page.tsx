"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { User, Package, Heart, CreditCard, MapPin, Bell, LogOut, Edit, ShoppingBag, Calendar, Settings, Shield, Gift, Truck, Clock, ChevronRight, Star, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold gradient-text mb-8">My Account</h1>
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
                  <Button variant="outline" size="icon" className="absolute -right-2 -bottom-2 h-8 w-8 rounded-full bg-background">
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
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div className="rounded-lg border p-2">
                    <p className="font-bold text-lg text-primary">12</p>
                    <p className="text-muted-foreground">Orders</p>
                  </div>
                  <div className="rounded-lg border p-2">
                    <p className="font-bold text-lg text-primary">₹4,320</p>
                    <p className="text-muted-foreground">Spent</p>
                  </div>
                  <div className="rounded-lg border p-2">
                    <p className="font-bold text-lg text-primary">320</p>
                    <p className="text-muted-foreground">Points</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="rounded-lg border overflow-hidden">
              <div className="flex flex-col">
                <Link href="/account" className="flex items-center gap-3 p-3 bg-primary/5 text-primary">
                  <User className="h-5 w-5" /> Account Overview
                </Link>
                <Link href="/account/orders" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
                  <Package className="h-5 w-5" /> Orders
                  <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link href="/account/wishlist" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
                  <Heart className="h-5 w-5" /> Wishlist
                  <Badge className="ml-auto">8</Badge>
                </Link>
                <Link href="/account/payment" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
                  <CreditCard className="h-5 w-5" /> Payment Methods
                  <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link href="/account/addresses" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
                  <MapPin className="h-5 w-5" /> Addresses
                  <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link href="/account/notifications" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
                  <Bell className="h-5 w-5" /> Notifications
                  <Badge className="ml-auto bg-primary text-primary-foreground">3</Badge>
                </Link>
                <Link href="/account/settings" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
                  <Settings className="h-5 w-5" /> Settings
                  <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link href="/logout" className="flex items-center gap-3 p-3 border-t text-destructive hover:bg-destructive/5 group">
                  <LogOut className="h-5 w-5" /> Logout
                </Link>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="border-b pb-0 mb-6">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="profile" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none"
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger 
                  value="settings" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none"
                >
                  Settings
                </TabsTrigger>
              </TabsList>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <TabsContent value="overview" className="mt-0 space-y-8">
                    <div className="grid gap-6 md:grid-cols-3">
                      <Card className="border-2 border-primary/10 hover-shadow-glow">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Gift className="h-5 w-5 text-primary" />
                            Rewards
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold">320</div>
                          <p className="text-sm text-muted-foreground">Points Available</p>
                          <div className="mt-4">
                            <Button variant="outline" size="sm" className="w-full button-outline">
                              Redeem Points
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-2 border-primary/10 hover-shadow-glow">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Truck className="h-5 w-5 text-primary" />
                            Delivery
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-success" />
                            <span className="font-medium">Active Delivery</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">Order #ORD123456</p>
                          <div className="mt-4">
                            <Button variant="outline" size="sm" className="w-full button-outline">
                              Track Order
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-2 border-primary/10 hover-shadow-glow">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Star className="h-5 w-5 text-primary" />
                            Reviews
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold">8</div>
                          <p className="text-sm text-muted-foreground">Pending Reviews</p>
                          <div className="mt-4">
                            <Button variant="outline" size="sm" className="w-full button-outline">
                              Write Reviews
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          Recent Orders
                        </CardTitle>
                        <CardDescription>Track and manage your recent orders</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[1, 2].map((id) => (
                            <div key={id} className="rounded-lg border p-4 hover:border-primary/30 transition-all">
                              <div className="flex justify-between">
                                <p className="font-medium">Order #ORD12345{id}</p>
                                <Badge className="bg-success text-success-foreground">Delivered</Badge>
                              </div>
                              <Separator className="my-4" />
                              <div className="flex items-center gap-4">
                                <ShoppingBag className="h-6 w-6 text-primary" />
                                <span className="text-sm text-muted-foreground">3 items</span>
                                <div className="ml-auto flex gap-4">
                                  <p className="font-medium">₹347.00</p>
                                  <Button size="sm" className="h-8 button-primary">Reorder</Button>
                                  <Button variant="outline" size="sm" className="h-8 button-outline">Details</Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 text-center">
                          <Button variant="outline" className="button-outline">
                            View All Orders
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <div className="grid gap-6 md:grid-cols-2">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Heart className="h-5 w-5 text-primary" />
                            Wishlist
                          </CardTitle>
                          <CardDescription>Your saved items for later</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {[1, 2].map((id) => (
                              <div key={id} className="flex items-center gap-3">
                                <div className="h-16 w-16 overflow-hidden rounded-md bg-muted">
                                  <img
                                    src={`https://images.unsplash.com/photo-${id === 1 ? '1519162808019-7de1683fa2ad' : '1598965675045-45c5e72c7d05'}?q=80&w=100&auto=format&fit=crop`}
                                    alt={`Wishlist item ${id}`}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-medium line-clamp-1">{id === 1 ? 'Organic Fresh Avocado' : 'Farm Fresh Eggs (12 pack)'}</h3>
                                  <p className="text-sm text-muted-foreground">₹{id === 1 ? '149.00' : '89.00'}</p>
                                </div>
                                <Button size="sm" className="h-8 button-primary">Add to Cart</Button>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 text-center">
                            <Button variant="outline" className="button-outline">
                              View Wishlist
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-primary" />
                            Upcoming Deliveries
                          </CardTitle>
                          <CardDescription>Your scheduled deliveries</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="rounded-lg border p-4">
                              <div className="flex justify-between">
                                <p className="font-medium">Order #ORD123456</p>
                                <Badge className="bg-secondary text-secondary-foreground">Tomorrow</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">Delivery slot: 2:00 PM - 4:00 PM</p>
                              <div className="mt-2 flex items-center gap-2">
                                <Truck className="h-4 w-4 text-primary" />
                                <span className="text-sm">3 items</span>
                              </div>
                            </div>
                            <div className="rounded-lg border p-4">
                              <div className="flex justify-between">
                                <p className="font-medium">Order #ORD123457</p>
                                <Badge className="bg-accent text-accent-foreground">Next Week</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">Delivery slot: 10:00 AM - 12:00 PM</p>
                              <div className="mt-2 flex items-center gap-2">
                                <Truck className="h-4 w-4 text-primary" />
                                <span className="text-sm">5 items</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 text-center">
                            <Button variant="outline" className="button-outline">
                              Manage Deliveries
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="profile" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <User className="h-5 w-5 text-primary" />
                          Personal Information
                        </CardTitle>
                        <CardDescription>Manage your personal details</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Full Name</label>
                            <input 
                              type="text" 
                              value="Rahul Sharma" 
                              className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Email Address</label>
                            <input 
                              type="email" 
                              value="rahul.sharma@example.com" 
                              className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Phone Number</label>
                            <input 
                              type="tel" 
                              value="+91 98765 43210" 
                              className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Date of Birth</label>
                            <input 
                              type="date" 
                              value="1990-05-15" 
                              className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Bio</label>
                          <textarea 
                            rows={3}
                            placeholder="Tell us a bit about yourself"
                            className="flex w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          ></textarea>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button className="button-primary">Save Changes</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="settings" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          Security Settings
                        </CardTitle>
                        <CardDescription>Manage your account security</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Current Password</label>
                          <input 
                            type="password" 
                            placeholder="Enter your current password" 
                            className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                        
                        <div className="grid gap-6 md:grid-cols-2">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">New Password</label>
                            <input 
                              type="password" 
                              placeholder="Enter new password" 
                              className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Confirm New Password</label>
                            <input 
                              type="password" 
                              placeholder="Confirm new password" 
                              className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-4">
                          <h3 className="font-medium">Two-Factor Authentication</h3>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm">Protect your account with 2FA</p>
                              <p className="text-xs text-muted-foreground">
                                Add an extra layer of security to your account
                              </p>
                            </div>
                            <Button variant="outline" className="button-outline">Enable 2FA</Button>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="font-medium">Login Sessions</h3>
                          <div className="rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-medium">Current Session</p>
                                <p className="text-xs text-muted-foreground">Mumbai, India • Chrome on Windows</p>
                              </div>
                              <Badge className="bg-success text-success-foreground">Active</Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button className="button-primary">Update Security Settings</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
