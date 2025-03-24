"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { User, Package, Heart, CreditCard, MapPin, Bell, LogOut, Edit, Settings, Gift, ChevronRight, HelpCircle, Phone, Mail, MessageSquare,
  Send, Clock, Video, CheckCircle2, Calendar, FileText, AlertCircle, Headphones,} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function ContactSupportPage() {
  const [formState, setFormState] = useState({
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    orderNumber: "",
    subject: "general",
    message: "",
    priority: "medium",
    attachments: [],
  })

  const handleInputChange = (field: string, value: string) => {
    setFormState({
      ...formState,
      [field]: value,
    })
  }

  const handleSubmitContactForm = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    toast.success("Support request submitted",{
      description: "We've received your message and will respond within 24 hours.",
    })
    setFormState({
      ...formState,
      orderNumber: "",
      message: "",
      attachments: [],
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <h1 className="text-3xl font-bold gradient-text">Contact Support</h1>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="button-outline">
              <HelpCircle className="h-4 w-4 mr-2" />
              Help Center
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
                <Link href="/help-center" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
                  <HelpCircle className="h-5 w-5" /> Help Center
                  <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/contact-support"
                  className="flex items-center gap-3 p-3 border-t bg-primary/5 text-primary"
                >
                  <Headphones className="h-5 w-5" /> Contact Support
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
                  <Clock className="h-4 w-4 text-primary" />
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
                    <span className="text-sm">support@freshcart.com</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-6">
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
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={formState.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="order-number">Order Number (Optional)</Label>
                      <Input
                        id="order-number"
                        placeholder="e.g. ORD-12345678"
                        value={formState.orderNumber}
                        onChange={(e) => handleInputChange("orderNumber", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority</Label>
                      <Select
                        value={formState.priority}
                        onValueChange={(value) => handleInputChange("priority", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select value={formState.subject} onValueChange={(value) => handleInputChange("subject", value)}>
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
                      value={formState.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
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
                  <p className="text-sm text-muted-foreground mb-2">Speak directly with our customer support team</p>
                  <p className="font-medium">+91 1800-123-4567</p>
                  <p className="text-xs text-muted-foreground mt-1">Available Mon-Fri, 9AM-8PM & Sat, 10AM-6PM IST</p>
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
                    <MessageSquare className="h-5 w-5 text-primary" />
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
                  <p className="text-sm text-muted-foreground mb-2">Schedule a video call with a support specialist</p>
                  <p className="text-xs text-muted-foreground">Available for Premium members only</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Call
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Your Support Tickets
                </CardTitle>
                <CardDescription>Track the status of your recent support requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-100">
                          In Progress
                        </Badge>
                        <span className="text-sm font-medium">Ticket #SR-2023-0458</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Opened: 2 days ago</span>
                    </div>
                    <h4 className="font-medium">Order Delivery Delay</h4>
                    <p className="text-sm text-muted-foreground mt-1 mb-3">
                      My order #ORD-87654321 was supposed to be delivered yesterday but I haven't received it yet.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Last updated: 6 hours ago</span>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-100">
                          Resolved
                        </Badge>
                        <span className="text-sm font-medium">Ticket #SR-2023-0412</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Opened: 7 days ago</span>
                    </div>
                    <h4 className="font-medium">Payment Issue</h4>
                    <p className="text-sm text-muted-foreground mt-1 mb-3">
                      I was charged twice for my order #ORD-76543210. Please refund the duplicate charge.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Resolved: 2 days ago</span>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-100">
                          Awaiting Response
                        </Badge>
                        <span className="text-sm font-medium">Ticket #SR-2023-0436</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Opened: 4 days ago</span>
                    </div>
                    <h4 className="font-medium">Product Information Request</h4>
                    <p className="text-sm text-muted-foreground mt-1 mb-3">
                      I need more information about the warranty for the smartphone I purchased.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Last updated: 1 day ago</span>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Support Tickets
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Important Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
                    <h4 className="font-medium text-amber-800 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      Holiday Support Hours
                    </h4>
                    <p className="text-sm text-amber-700 mt-1">
                      Our support team will have limited availability during the upcoming holiday season (Dec 24-Jan 2).
                      Please expect longer response times during this period.
                    </p>
                  </div>

                  <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
                    <h4 className="font-medium text-blue-800 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      System Maintenance
                    </h4>
                    <p className="text-sm text-blue-700 mt-1">
                      We will be performing scheduled maintenance on our systems on Sunday, November 12th from 2:00 AM
                      to 5:00 AM IST. Some services may be temporarily unavailable during this time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

