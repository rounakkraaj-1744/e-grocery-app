"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Package,
  Heart,
  CreditCard,
  MapPin,
  Bell,
  LogOut,
  Edit,
  Calendar,
  Settings,
  Gift,
  Truck,
  Clock,
  ChevronRight,
  Star,
  CheckCircle2,
  Wallet,
  Percent,
  Award,
  Zap,
  BarChart3,
  Bookmark,
  HelpCircle,
  FileText,
  Phone,
  Mail,
  Tag,
  Copy,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <h1 className="text-3xl font-bold gradient-text">My Account</h1>
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
                <Link href="/account" className="flex items-center gap-3 p-3 bg-primary/5 text-primary">
                  <User className="h-5 w-5" /> Account Overview
                </Link>
                <Link href="/account/orders" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
                  <Package className="h-5 w-5" /> Orders
                  <Badge className="ml-auto">12</Badge>
                </Link>
                <Link href="/account/wishlist" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
                  <Heart className="h-5 w-5" /> Wishlist
                  <Badge className="ml-auto">8</Badge>
                </Link>
                <Link href="/account/payment" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
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

          <div className="space-y-8">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
              <div className="bg-card rounded-lg border p-1">
                <TabsList className="w-full grid grid-cols-4 bg-transparent">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md"
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="orders"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md"
                  >
                    <Package className="h-4 w-4 mr-2" />
                    Orders
                  </TabsTrigger>
                  <TabsTrigger
                    value="rewards"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md"
                  >
                    <Award className="h-4 w-4 mr-2" />
                    Rewards
                  </TabsTrigger>
                  <TabsTrigger
                    value="profile"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
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
                  <TabsContent value="overview" className="mt-6 space-y-6">
                    <div className="grid gap-4 md:grid-cols-3">
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
                          <div className="mt-3">
                            <div className="relative pt-1">
                              <Progress value={75} className="h-2 bg-muted"/>
                              <div className="flex items-center justify-between mt-1">
                                <span className="text-xs text-muted-foreground">Gold Member</span>
                                <span className="text-xs text-muted-foreground">180 to Platinum</span>
                              </div>
                            </div>
                          </div>
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
                            <Wallet className="h-5 w-5 text-primary" />
                            Wallet
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold">₹250</div>
                          <p className="text-sm text-muted-foreground">Store Credit</p>
                          <div className="mt-3 flex items-center gap-2">
                            <Badge className="bg-success/10 text-success">
                              <Zap className="h-3 w-3 mr-1" />
                              Cashback
                            </Badge>
                            <Badge className="bg-secondary/10 text-secondary-foreground">
                              <Percent className="h-3 w-3 mr-1" />
                              Refunds
                            </Badge>
                          </div>
                          <div className="mt-4">
                            <Button variant="outline" size="sm" className="w-full button-outline">
                              View Transactions
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-2 border-primary/10 hover-shadow-glow">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Truck className="h-5 w-5 text-primary" />
                            Active Delivery
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-success" />
                            <span className="font-medium">Order #ORD123456</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">Arriving Tomorrow, 2:00 PM - 4:00 PM</p>
                          <div className="mt-3">
                            <div className="relative pt-1">
                              <Progress value={75} className="h-2 bg-muted"/>
                              <div className="flex items-center justify-between mt-1">
                                <span className="text-xs text-muted-foreground">Packed</span>
                                <span className="text-xs text-muted-foreground">Out for Delivery</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Button variant="outline" size="sm" className="w-full button-outline">
                              Track Order
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-primary" />
                            Recent Orders
                          </CardTitle>
                          <CardDescription>Your latest purchases</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                          <div className="divide-y">
                            {[1, 2, 3].map((id) => (
                              <div key={id} className="p-4 hover:bg-muted/30 transition-colors">
                                <div className="flex justify-between">
                                  <p className="font-medium">Order #ORD12345{id}</p>
                                  <Badge className="bg-success text-success-foreground">Delivered</Badge>
                                </div>
                                <div className="flex items-center justify-between mt-2 text-sm">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-muted-foreground">April {10 + id}, 2025</span>
                                  </div>
                                  <p className="font-medium">₹{347 * id}.00</p>
                                </div>
                                <div className="flex items-center gap-2 mt-3">
                                  <Button size="sm" className="h-8 button-primary">
                                    Reorder
                                  </Button>
                                  <Button variant="outline" size="sm" className="h-8 button-outline">
                                    Details
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="border-t p-4">
                          <Button variant="outline" className="w-full button-outline">
                            View All Orders
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center gap-2">
                            <Bookmark className="h-5 w-5 text-primary" />
                            Saved Items
                          </CardTitle>
                          <CardDescription>Products in your wishlist</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                          <div className="divide-y">
                            {[1, 2, 3].map((id) => (
                              <div key={id} className="p-4 hover:bg-muted/30 transition-colors">
                                <div className="flex items-center gap-3">
                                  <div className="h-12 w-12 overflow-hidden rounded-md bg-muted">
                                    <img
                                      src={`https://images.unsplash.com/photo-${id === 1 ? "1519162808019-7de1683fa2ad" : id === 2 ? "1598965675045-45c5e72c7d05" : "1464965911861-746a04b4bca6"}?q=80&w=100&auto=format&fit=crop`}
                                      alt={`Wishlist item ${id}`}
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="font-medium text-sm line-clamp-1">
                                      {id === 1
                                        ? "Organic Fresh Avocado"
                                        : id === 2
                                          ? "Farm Fresh Eggs (12 pack)"
                                          : "Fresh Strawberries (250g)"}
                                    </h3>
                                    <div className="flex items-center justify-between mt-1">
                                      <p className="text-sm font-bold">
                                        ₹{id === 1 ? "149.00" : id === 2 ? "89.00" : "129.00"}
                                      </p>
                                      <div className="flex items-center gap-1">
                                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                        <span className="text-xs">{4.5 + id * 0.1}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <Button size="sm" className="h-8 button-primary">
                                    Add
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="border-t p-4">
                          <Button variant="outline" className="w-full button-outline">
                            View Wishlist
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2">
                          <Percent className="h-5 w-5 text-primary" />
                          Exclusive Offers
                        </CardTitle>
                        <CardDescription>Special deals just for you</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="rounded-lg border p-4 bg-blue-50 dark:bg-blue-950/30">
                            <Badge className="bg-blue-500 text-white mb-2">15% OFF</Badge>
                            <h3 className="font-bold">Weekend Special</h3>
                            <p className="text-sm text-muted-foreground mb-3">Get 15% off on all orders above ₹1000</p>
                            <div className="flex items-center gap-2 rounded-md bg-background/80 backdrop-blur p-2 border border-border">
                              <Tag className="h-4 w-4 text-primary" />
                              <span className="text-sm font-mono font-medium">WEEKEND15</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="ml-auto h-6 px-2 text-xs hover:bg-primary hover:text-primary-foreground"
                              >
                                <Copy className="h-3 w-3 mr-1" />
                                Copy
                              </Button>
                            </div>
                          </div>

                          <div className="rounded-lg border p-4 bg-green-50 dark:bg-green-950/30">
                            <Badge className="bg-green-500 text-white mb-2">FREE</Badge>
                            <h3 className="font-bold">Free Delivery</h3>
                            <p className="text-sm text-muted-foreground mb-3">Free delivery on all orders above ₹750</p>
                            <div className="flex items-center gap-2 rounded-md bg-background/80 backdrop-blur p-2 border border-border">
                              <Tag className="h-4 w-4 text-primary" />
                              <span className="text-sm font-mono font-medium">FREEDEL</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="ml-auto h-6 px-2 text-xs hover:bg-primary hover:text-primary-foreground"
                              >
                                <Copy className="h-3 w-3 mr-1" />
                                Copy
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="orders" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Package className="h-5 w-5 text-primary" />
                          Order History
                        </CardTitle>
                        <CardDescription>View and manage your orders</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {[1, 2, 3, 4].map((id) => (
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
                                            ? "bg-success text-success-foreground"
                                            : "bg-secondary text-secondary-foreground"
                                      }
                                    >
                                      {id === 1 ? "In Transit" : id === 2 ? "Delivered" : "Completed"}
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
                                      <div className="h-12 w-12 overflow-hidden rounded-md bg-muted">
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
                                        <Progress value={75} className="h-1.5 bg-muted"/>
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
                                    <Button size="sm" className="h-8 button-primary">
                                      Reorder
                                    </Button>
                                    {id === 2 && (
                                      <Button variant="outline" size="sm" className="h-8 button-outline">
                                        <Star className="h-3 w-3 mr-1" />
                                        Write Review
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
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="rewards" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          Rewards Program
                        </CardTitle>
                        <CardDescription>Earn and redeem points with every purchase</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="rounded-lg border overflow-hidden">
                          <div className="bg-gradient-to-r from-amber-400 to-amber-500 p-6 text-white">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-xl font-bold">Gold Member</h3>
                                <p className="text-white/80">Since January 2025</p>
                              </div>
                              <Award className="h-12 w-12" />
                            </div>
                            <div className="mt-4">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm">Progress to Platinum</span>
                                <span className="text-sm">320/500 points</span>
                              </div>
                              <div className="w-full bg-white/30 rounded-full h-2.5">
                                <div className="bg-white h-2.5 rounded-full" style={{ width: "64%" }}></div>
                              </div>
                              <p className="text-xs mt-2 text-white/80">
                                Earn 180 more points to reach Platinum status
                              </p>
                            </div>
                          </div>

                          <div className="p-4 grid gap-4 md:grid-cols-3">
                            <div className="text-center p-3 rounded-lg border">
                              <div className="text-3xl font-bold text-primary">320</div>
                              <p className="text-sm text-muted-foreground">Available Points</p>
                            </div>
                            <div className="text-center p-3 rounded-lg border">
                              <div className="text-3xl font-bold text-primary">1,240</div>
                              <p className="text-sm text-muted-foreground">Lifetime Points</p>
                            </div>
                            <div className="text-center p-3 rounded-lg border">
                              <div className="text-3xl font-bold text-primary">920</div>
                              <p className="text-sm text-muted-foreground">Points Redeemed</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-4">Available Rewards</h3>
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-lg border p-4 hover:border-primary/30 transition-all">
                              <div className="flex items-center justify-between mb-2">
                                <Badge className="bg-primary text-primary-foreground">100 Points</Badge>
                                <Button variant="outline" size="sm" className="h-7 text-xs button-outline">
                                  Redeem
                                </Button>
                              </div>
                              <h4 className="font-medium">₹100 Off Your Next Order</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                Get ₹100 discount on any order above ₹500
                              </p>
                            </div>

                            <div className="rounded-lg border p-4 hover:border-primary/30 transition-all">
                              <div className="flex items-center justify-between mb-2">
                                <Badge className="bg-primary text-primary-foreground">150 Points</Badge>
                                <Button variant="outline" size="sm" className="h-7 text-xs button-outline">
                                  Redeem
                                </Button>
                              </div>
                              <h4 className="font-medium">Free Delivery for a Month</h4>
                              <p className="text-sm text-muted-foreground mt-1">Unlimited free delivery for 30 days</p>
                            </div>

                            <div className="rounded-lg border p-4 hover:border-primary/30 transition-all">
                              <div className="flex items-center justify-between mb-2">
                                <Badge className="bg-primary text-primary-foreground">200 Points</Badge>
                                <Button variant="outline" size="sm" className="h-7 text-xs button-outline">
                                  Redeem
                                </Button>
                              </div>
                              <h4 className="font-medium">Premium Product Bundle</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                Get a curated bundle of premium products
                              </p>
                            </div>

                            <div className="rounded-lg border p-4 hover:border-primary/30 transition-all">
                              <div className="flex items-center justify-between mb-2">
                                <Badge className="bg-primary text-primary-foreground">300 Points</Badge>
                                <Button variant="outline" size="sm" className="h-7 text-xs button-outline">
                                  Redeem
                                </Button>
                              </div>
                              <h4 className="font-medium">₹300 Store Credit</h4>
                              <p className="text-sm text-muted-foreground mt-1">Add ₹300 to your FreshCart wallet</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-4">Recent Points Activity</h3>
                          <div className="rounded-lg border overflow-hidden">
                            <div className="divide-y">
                              {[1, 2, 3, 4, 5].map((id) => (
                                <div
                                  key={id}
                                  className="p-3 flex items-center justify-between hover:bg-muted/30 transition-colors"
                                >
                                  <div>
                                    <p className="font-medium text-sm">
                                      {id % 2 === 0 ? "Points Earned" : id === 3 ? "Points Redeemed" : "Bonus Points"}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {id % 2 === 0
                                        ? "Order #ORD12345" + id
                                        : id === 3
                                          ? "₹100 Discount Coupon"
                                          : "Welcome Bonus"}
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <p className={`font-medium ${id === 3 ? "text-destructive" : "text-success"}`}>
                                      {id === 3 ? "-100" : "+" + id * 20}
                                    </p>
                                    <p className="text-xs text-muted-foreground">April {10 - id}, 2025</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="profile" className="mt-6">
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
                            <Label htmlFor="name" className="text-sm font-medium">
                              Full Name
                            </Label>
                            <input
                              id="name"
                              type="text"
                              value="Rahul Sharma"
                              className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">
                              Email Address
                            </Label>
                            <input
                              id="email"
                              type="email"
                              value="rahul.sharma@example.com"
                              className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-medium">
                              Phone Number
                            </Label>
                            <input
                              id="phone"
                              type="tel"
                              value="+91 98765 43210"
                              className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dob" className="text-sm font-medium">
                              Date of Birth
                            </Label>
                            <input
                              id="dob"
                              type="date"
                              value="1990-05-15"
                              className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>

                        <Separator />

                        <div className="space-y-2">
                          <Label htmlFor="bio" className="text-sm font-medium">
                            Bio
                          </Label>
                          <textarea
                            id="bio"
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
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}