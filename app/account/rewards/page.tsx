"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {User, Package, Heart, CreditCard, MapPin, Bell, LogOut, Edit, Settings, Gift, ChevronRight, CheckCircle2, Award, HelpCircle, FileText,
  Phone, Mail, Clock, ArrowRight, ChevronDown, ChevronUp, Info, Zap,} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function RewardsPage() {
  const [activeTab, setActiveTab] = useState("rewards")
  const [expandedFaq, setExpandedFaq] = useState(null)

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  const rewardItems = [
    {
      id: 1,
      name: "₹100 Off Your Next Order",
      points: 100,
      description: "Get ₹100 discount on any order above ₹500",
      expiresIn: "Never expires",
      category: "discount",
    },
    {
      id: 2,
      name: "Free Delivery for a Month",
      points: 150,
      description: "Unlimited free delivery for 30 days",
      expiresIn: "Never expires",
      category: "delivery",
    },
    {
      id: 3,
      name: "Premium Product Bundle",
      points: 200,
      description: "Get a curated bundle of premium products",
      expiresIn: "Never expires",
      category: "product",
    },
    {
      id: 4,
      name: "₹300 Store Credit",
      points: 300,
      description: "Add ₹300 to your FreshCart wallet",
      expiresIn: "Never expires",
      category: "credit",
    },
    {
      id: 5,
      name: "Priority Customer Support",
      points: 250,
      description: "Get priority customer support for 3 months",
      expiresIn: "Never expires",
      category: "service",
    },
    {
      id: 6,
      name: "Early Access to New Products",
      points: 200,
      description: "Get early access to new product launches for 2 months",
      expiresIn: "Never expires",
      category: "service",
    },
  ]

  const pointsHistory = [
    {
      id: 1,
      type: "earned",
      amount: 20,
      description: "Order #ORD123451",
      date: "April 11, 2025",
    },
    {
      id: 2,
      type: "earned",
      amount: 40,
      description: "Order #ORD123452",
      date: "April 12, 2025",
    },
    {
      id: 3,
      type: "redeemed",
      amount: 100,
      description: "₹100 Discount Coupon",
      date: "April 13, 2025",
    },
    {
      id: 4,
      type: "earned",
      amount: 60,
      description: "Order #ORD123453",
      date: "April 14, 2025",
    },
    {
      id: 5,
      type: "earned",
      amount: 100,
      description: "Welcome Bonus",
      date: "April 5, 2025",
    },
    {
      id: 6,
      type: "earned",
      amount: 80,
      description: "Order #ORD123454",
      date: "April 15, 2025",
    },
    {
      id: 7,
      type: "earned",
      amount: 120,
      description: "Birthday Bonus",
      date: "April 8, 2025",
    },
  ]

  const faqs = [
    {
      id: 1,
      question: "How do I earn reward points?",
      answer:
        "You earn points with every purchase you make. Generally, you earn 1 point for every ₹10 spent. Special promotions may offer bonus points on specific products or during certain periods.",
    },
    {
      id: 2,
      question: "When do my points expire?",
      answer:
        "Points earned through regular purchases are valid for 12 months from the date of earning. Bonus points may have different expiration periods, which will be communicated when they are awarded.",
    },
    {
      id: 3,
      question: "How do I redeem my points?",
      answer:
        "You can redeem your points for various rewards in the Rewards section of your account. Simply browse available rewards, select the one you want, and click 'Redeem'. The points will be deducted from your balance and the reward will be applied to your account.",
    },
    {
      id: 4,
      question: "What are the different membership tiers?",
      answer:
        "We have three membership tiers: Silver (0-250 points), Gold (251-500 points), and Platinum (501+ points). Higher tiers offer better benefits, including higher point earning rates, exclusive rewards, and special promotions.",
    },
    {
      id: 5,
      question: "Can I transfer my points to someone else?",
      answer:
        "Currently, points cannot be transferred between accounts. They are tied to your specific account and can only be redeemed by you.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <h1 className="text-3xl font-bold gradient-text">My Rewards</h1>
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
                <Link href="/account/orders" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
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
                <Link
                  href="/account/rewards"
                  className="flex items-center gap-3 p-3 border-t bg-primary/5 text-primary"
                >
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
                  <p className="text-xs mt-2 text-white/80">Earn 180 more points to reach Platinum status</p>
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

            <Tabs defaultValue="rewards" value={activeTab} onValueChange={setActiveTab}>
              <div className="bg-card rounded-lg border p-1">
                <TabsList className="w-full grid grid-cols-3 bg-transparent">
                  <TabsTrigger
                    value="rewards"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md"
                  >
                    <Gift className="h-4 w-4 mr-2" />
                    Rewards
                  </TabsTrigger>
                  <TabsTrigger
                    value="history"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md"
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Points History
                  </TabsTrigger>
                  <TabsTrigger
                    value="faq"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md"
                  >
                    <HelpCircle className="h-4 w-4 mr-2" />
                    FAQ
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
                  <TabsContent value="rewards" className="mt-6 space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Gift className="h-5 w-5 text-primary" />
                          Available Rewards
                        </CardTitle>
                        <CardDescription>Redeem your points for these exclusive rewards</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                          {rewardItems.map((reward) => (
                            <div
                              key={reward.id}
                              className="rounded-lg border p-4 hover:border-primary/30 transition-all"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <Badge className="bg-primary text-primary-foreground">{reward.points} Points</Badge>
                                <Button variant="outline" size="sm" className="h-7 text-xs button-outline">
                                  Redeem
                                </Button>
                              </div>
                              <h4 className="font-medium">{reward.name}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{reward.description}</p>
                              <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                <span>{reward.expiresIn}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          Membership Benefits
                        </CardTitle>
                        <CardDescription>Exclusive benefits for Gold members</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="rounded-lg border p-4">
                            <h3 className="font-medium mb-2 flex items-center gap-2">
                              <Zap className="h-4 w-4 text-amber-500" />
                              Gold Member Benefits
                            </h3>
                            <div className="space-y-3">
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                                <div>
                                  <p className="font-medium text-sm">2x Points on Weekend Orders</p>
                                  <p className="text-xs text-muted-foreground">
                                    Earn double points on all orders placed during weekends
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                                <div>
                                  <p className="font-medium text-sm">Free Delivery on Orders Above ₹500</p>
                                  <p className="text-xs text-muted-foreground">No delivery fee on orders above ₹500</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                                <div>
                                  <p className="font-medium text-sm">Priority Customer Support</p>
                                  <p className="text-xs text-muted-foreground">
                                    Get faster responses from our customer support team
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-success mt-0.5" />
                                <div>
                                  <p className="font-medium text-sm">Exclusive Gold Member Offers</p>
                                  <p className="text-xs text-muted-foreground">
                                    Access to special promotions only for Gold members
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-lg border p-4 bg-muted/30">
                            <h3 className="font-medium mb-2 flex items-center gap-2">
                              <Award className="h-4 w-4 text-primary" />
                              Upgrade to Platinum
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              Earn 180 more points to unlock these additional benefits:
                            </p>
                            <div className="space-y-3">
                              <div className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 text-primary mt-0.5" />
                                <div>
                                  <p className="font-medium text-sm">3x Points on All Orders</p>
                                  <p className="text-xs text-muted-foreground">Triple points on every purchase</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 text-primary mt-0.5" />
                                <div>
                                  <p className="font-medium text-sm">Free Delivery on All Orders</p>
                                  <p className="text-xs text-muted-foreground">No minimum order value required</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 text-primary mt-0.5" />
                                <div>
                                  <p className="font-medium text-sm">Early Access to New Products</p>
                                  <p className="text-xs text-muted-foreground">Shop new arrivals before anyone else</p>
                                </div>
                              </div>
                            </div>
                            <Button className="w-full mt-4 button-primary">Shop to Earn More Points</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="history" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          Points Activity
                        </CardTitle>
                        <CardDescription>Track your points earning and redemption history</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-lg border overflow-hidden">
                          <div className="divide-y">
                            {pointsHistory.map((activity) => (
                              <div
                                key={activity.id}
                                className="p-3 flex items-center justify-between hover:bg-muted/30 transition-colors"
                              >
                                <div>
                                  <p className="font-medium text-sm">
                                    {activity.type === "earned" ? "Points Earned" : "Points Redeemed"}
                                  </p>
                                  <p className="text-xs text-muted-foreground">{activity.description}</p>
                                </div>
                                <div className="text-right">
                                  <p
                                    className={`font-medium ${activity.type === "redeemed" ? "text-destructive" : "text-success"}`}
                                  >
                                    {activity.type === "redeemed" ? "-" : "+"}
                                    {activity.amount}
                                  </p>
                                  <p className="text-xs text-muted-foreground">{activity.date}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t p-4">
                        <Button variant="outline" className="w-full button-outline">
                          View Complete History
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="faq" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          Frequently Asked Questions
                        </CardTitle>
                        <CardDescription>Learn more about our rewards program</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {faqs.map((faq) => (
                            <div key={faq.id} className="rounded-lg border overflow-hidden">
                              <button
                                className="w-full p-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
                                onClick={() => toggleFaq(faq.id)}
                              >
                                <h3 className="font-medium text-left">{faq.question}</h3>
                                {expandedFaq === faq.id ? (
                                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                                ) : (
                                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                                )}
                              </button>
                              {expandedFaq === faq.id && (
                                <div className="p-4 pt-0 border-t">
                                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="border-t p-4">
                        <div className="w-full rounded-lg bg-muted/30 p-4 flex items-start gap-3">
                          <Info className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h4 className="font-medium text-sm">Still have questions?</h4>
                            <p className="text-xs text-muted-foreground mb-3">
                              If you have any other questions about our rewards program, please contact our customer
                              support team.
                            </p>
                            <Button variant="outline" size="sm" className="h-8 button-outline">
                              <Mail className="h-3 w-3 mr-1" />
                              Contact Support
                            </Button>
                          </div>
                        </div>
                      </CardFooter>
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