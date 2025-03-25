"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { toast } from "sonner"
import { User,  Package,  Heart,  CreditCard,  MapPin,  Bell,  LogOut,  Edit,  Settings,  Gift,  ChevronRight,  HelpCircle,  Phone,  Mail,  MessageSquare,  Search,  FileText,  ShoppingBag,  Truck,  RefreshCw,  CreditCardIcon,  Clock,  Send, ArrowRight, ExternalLink,  ThumbsUp, ThumbsDown, Headphones, Video,MessagesSquare,} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"


export default function HelpCenterPage() {
 const router = useRouter ()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("help-center")

  const handleSubmitContactForm = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    toast.success("Support request submitted",{
      description: "We've received your message and will respond within 24 hours.",
    })
  }

  const handleSearchSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    toast.success("Searching...", {
      description: `Finding results for "${searchQuery}"`,
    })
  }

  const handleFeedback = (type: string) => {
    toast.success("Thank you for your feedback",{
      description: "Your input helps us improve our help center.",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <h1 className="text-3xl font-bold gradient-text">Help & Support</h1>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="button-outline">
              <HelpCircle className="h-4 w-4 mr-2" />
              FAQs
            </Button>
            <Button variant="outline" size="sm" className="button-outline">
              <Phone className="h-4 w-4 mr-2" />
              Call Us
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
                <Link href="/account/rewards" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
                  <Gift className="h-5 w-5" /> Rewards
                  <Badge className="ml-auto bg-amber-500 text-white">Gold</Badge>
                </Link>
                <Link href="/account/settings" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
                  <Settings className="h-5 w-5" /> Settings
                  <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link href="/logout" className="flex items-center gap-3 p-3 border-t text-destructive hover:bg-destructive/5 group" >
                  <LogOut className="h-5 w-5" /> Logout
                </Link>
              </div>
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Headphones className="h-4 w-4 text-primary" />
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <Separator className="my-2" />
                  <p className="text-xs text-muted-foreground">All times are in Indian Standard Time (IST)</p>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="w-full space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">+91 1800-123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">support@OneHyperMart.com</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-6">
            <Tabs defaultValue="help-center" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 w-full mb-6">
                <TabsTrigger value="help-center" className="flex items-center gap-1">
                  <HelpCircle className="h-4 w-4 mr-1" />
                  Help Center
                </TabsTrigger>
                <TabsTrigger value="contact-support" className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Contact Support
                </TabsTrigger>
              </TabsList>

              {/* Help Center Tab */}
              <TabsContent value="help-center" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-primary" />
                      Search Help Center
                    </CardTitle>
                    <CardDescription>Find answers to your questions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSearchSubmit} className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search for help articles..."
                        className="pl-10 pr-16"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <Button type="submit" size="sm" className="absolute right-1 top-1/2 -translate-y-1/2 h-8">
                        Search
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <ShoppingBag className="h-5 w-5 text-primary" />
                        Orders & Purchases
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <ArrowRight className="h-3 w-3" />
                            Track your order
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <ArrowRight className="h-3 w-3" />
                            Order cancellation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <ArrowRight className="h-3 w-3" />
                            Missing items
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <ArrowRight className="h-3 w-3" />
                            Damaged products
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="ghost" size="sm" className="gap-1">
                        View all articles
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <RefreshCw className="h-5 w-5 text-primary" />
                        Returns & Refunds
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <ArrowRight className="h-3 w-3" />
                            Return policy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <ArrowRight className="h-3 w-3" />
                            How to return an item
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <ArrowRight className="h-3 w-3" />
                            Refund timeline
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <ArrowRight className="h-3 w-3" />
                            Exchange process
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="ghost" size="sm" className="gap-1">
                        View all articles
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Truck className="h-5 w-5 text-primary" />
                        Shipping & Delivery
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <ArrowRight className="h-3 w-3" />
                            Delivery timeframes
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <ArrowRight className="h-3 w-3" />
                            Shipping methods
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <ArrowRight className="h-3 w-3" />
                            International shipping
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <ArrowRight className="h-3 w-3" />
                            Delivery issues
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="ghost" size="sm" className="gap-1">
                        View all articles
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CreditCardIcon className="h-5 w-5 text-primary" />
                        Payment & Billing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <ArrowRight className="h-3 w-3" />
                            Payment methods
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <ArrowRight className="h-3 w-3" />
                            Failed transactions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <ArrowRight className="h-3 w-3" />
                            Invoices and receipts
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <ArrowRight className="h-3 w-3" />
                            Promo codes and discounts
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="ghost" size="sm" className="gap-1">
                        View all articles
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Frequently Asked Questions
                    </CardTitle>
                    <CardDescription>Quick answers to common questions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>How do I track my order?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-2">
                            You can track your order by following these steps:
                          </p>
                          <ol className="list-decimal pl-5 space-y-1 text-muted-foreground">
                            <li>Log in to your account</li>
                            <li>Go to "Orders" in your account menu</li>
                            <li>Find the order you want to track</li>
                            <li>Click on "Track Order" to see the current status</li>
                          </ol>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Was this helpful?</span>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" onClick={() => handleFeedback("positive")}>
                                <ThumbsUp className="h-4 w-4 mr-1" /> Yes
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleFeedback("negative")}>
                                <ThumbsDown className="h-4 w-4 mr-1" /> No
                              </Button>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>What is your return policy?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-2">
                            Our return policy allows you to return most items within 30 days of delivery for a full
                            refund. The item must be in its original condition and packaging.
                          </p>
                          <p className="text-muted-foreground mb-2">
                            Please note that some items are not eligible for return, such as:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>Perishable goods</li>
                            <li>Personalized items</li>
                            <li>Digital products</li>
                            <li>Items marked as final sale</li>
                          </ul>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Was this helpful?</span>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" onClick={() => handleFeedback("positive")}>
                                <ThumbsUp className="h-4 w-4 mr-1" /> Yes
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleFeedback("negative")}>
                                <ThumbsDown className="h-4 w-4 mr-1" /> No
                              </Button>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>How long does shipping take?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-2">
                            Shipping times vary based on your location and the shipping method selected:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>
                              <span className="font-medium">Standard Shipping:</span> 3-5 business days
                            </li>
                            <li>
                              <span className="font-medium">Express Shipping:</span> 1-2 business days
                            </li>
                            <li>
                              <span className="font-medium">Same-Day Delivery:</span> Available in select cities for
                              orders placed before 2 PM
                            </li>
                          </ul>
                          <p className="text-muted-foreground mt-2">
                            Please note that these are estimated delivery times and may vary during peak seasons or due
                            to unforeseen circumstances.
                          </p>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Was this helpful?</span>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" onClick={() => handleFeedback("positive")}>
                                <ThumbsUp className="h-4 w-4 mr-1" /> Yes
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleFeedback("negative")}>
                                <ThumbsDown className="h-4 w-4 mr-1" /> No
                              </Button>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>How do I apply a promo code?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-2">To apply a promo code to your order:</p>
                          <ol className="list-decimal pl-5 space-y-1 text-muted-foreground">
                            <li>Add items to your cart</li>
                            <li>Proceed to checkout</li>
                            <li>Look for the "Promo Code" or "Discount Code" field</li>
                            <li>Enter your code and click "Apply"</li>
                            <li>The discount will be applied to your order total if the code is valid</li>
                          </ol>
                          <p className="text-muted-foreground mt-2">
                            If your code isn't working, check that it hasn't expired and that you meet any minimum
                            purchase requirements.
                          </p>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Was this helpful?</span>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" onClick={() => handleFeedback("positive")}>
                                <ThumbsUp className="h-4 w-4 mr-1" /> Yes
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleFeedback("negative")}>
                                <ThumbsDown className="h-4 w-4 mr-1" /> No
                              </Button>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-2">To reset your password:</p>
                          <ol className="list-decimal pl-5 space-y-1 text-muted-foreground">
                            <li>Go to the login page</li>
                            <li>Click on "Forgot Password"</li>
                            <li>Enter the email address associated with your account</li>
                            <li>Check your email for a password reset link</li>
                            <li>Click the link and follow the instructions to create a new password</li>
                          </ol>
                          <p className="text-muted-foreground mt-2">
                            If you don't receive the email, check your spam or junk folder. If you still can't find it,
                            you can request another reset link or contact our support team for assistance.
                          </p>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Was this helpful?</span>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" onClick={() => handleFeedback("positive")}>
                                <ThumbsUp className="h-4 w-4 mr-1" /> Yes
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleFeedback("negative")}>
                                <ThumbsDown className="h-4 w-4 mr-1" /> No
                              </Button>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All FAQs
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Contact Support Tab */}
              <TabsContent value="contact-support" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Contact Our Support Team
                    </CardTitle>
                    <CardDescription>We're here to help with any questions or concerns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitContactForm} className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Your name" defaultValue="Rahul Sharma" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            defaultValue="rahul.sharma@example.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="order-number">Order Number (Optional)</Label>
                        <Input id="order-number" placeholder="e.g. ORD-12345678" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select defaultValue="general">
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="order">Order Issue</SelectItem>
                            <SelectItem value="return">Return or Refund</SelectItem>
                            <SelectItem value="product">Product Information</SelectItem>
                            <SelectItem value="shipping">Shipping Question</SelectItem>
                            <SelectItem value="payment">Payment Problem</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Please describe your issue in detail..."
                          className="min-h-[150px]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Attachments (Optional)</Label>
                        <div className="border-2 border-dashed rounded-lg p-4 text-center">
                          <Button variant="outline" type="button" className="mb-2">
                            Choose Files
                          </Button>
                          <p className="text-xs text-muted-foreground">
                            Drag and drop files here or click to browse. Max 5 files, 5MB each (JPG, PNG, PDF).
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button type="submit" className="gap-2">
                          <Send className="h-4 w-4" />
                          Submit Request
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                <div className="grid gap-6 md:grid-cols-3">
                  <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Phone className="h-5 w-5 text-primary" />
                        Call Us
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        Speak directly with our customer support team
                      </p>
                      <p className="font-medium">+91 1800-123-4567</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Available Mon-Fri, 9AM-8PM & Sat, 10AM-6PM IST
                      </p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" size="sm" className="w-full">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MessagesSquare className="h-5 w-5 text-primary" />
                        Live Chat
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">Chat with our support team in real-time</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                          <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span> Online
                        </Badge>
                        <span className="text-xs text-muted-foreground">Average wait: 2 mins</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" size="sm" className="w-full">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Start Chat
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Video className="h-5 w-5 text-primary" />
                        Video Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        Schedule a video call with a support specialist
                      </p>
                      <p className="text-xs text-muted-foreground">Available for Premium members only</p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" size="sm" className="w-full">
                        <Video className="h-4 w-4 mr-2" />
                        Schedule Call
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Response Times
                    </CardTitle>
                    <CardDescription>What to expect when you contact us</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <MessageSquare className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Live Chat</h4>
                          <p className="text-sm text-muted-foreground">Immediate response during business hours</p>
                          <Badge variant="outline" className="mt-1 bg-green-50 text-green-700 border-green-100">
                            Fastest
                          </Badge>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Phone Support</h4>
                          <p className="text-sm text-muted-foreground">Average wait time of 2-5 minutes</p>
                          <Badge variant="outline" className="mt-1 bg-blue-50 text-blue-700 border-blue-100">
                            Quick
                          </Badge>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Email Support</h4>
                          <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                          <Badge variant="outline" className="mt-1 bg-orange-50 text-orange-700 border-orange-100">
                            Standard
                          </Badge>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Video className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Video Support</h4>
                          <p className="text-sm text-muted-foreground">Scheduled appointments within 48 hours</p>
                          <Badge variant="outline" className="mt-1 bg-purple-50 text-purple-700 border-purple-100">
                            Premium
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}