"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner"
import {
  User, Package, Heart, CreditCard, MapPin, Bell, LogOut, Edit, Settings, Gift, ChevronRight, HelpCircle, Phone, Mail, Lock, Eye, EyeOff,
  Moon, Sun, BellRing, Trash2, AlertTriangle, ShieldAlert, UserCog, Palette, Laptop
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { useEffect } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("account")
  const [showPassword, setShowPassword] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [formState, setFormState] = useState({
    profile: {
      firstName: "Rahul",
      lastName: "Sharma",
      email: "rahul.sharma@example.com",
      phone: "+91 98765 43210",
      bio: "Tech enthusiast and avid online shopper.",
    },
    security: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      twoFactorEnabled: true,
      loginNotifications: true,
      rememberDevice: true,
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      orderUpdates: true,
      promotions: true,
      newslatter: false,
      accountAlerts: true,
    },
    preferences: {
      language: "english",
      currency: "inr",
      timezone: "asia-kolkata",
      theme: "system",
    },
    privacy: {
      profileVisibility: "public",
      activityTracking: true,
      dataSharing: false,
      cookiePreferences: "essential",
    },
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const handleInputChange = (section: string, field: string, value: string | boolean) => {
    setFormState({
      ...formState,
      [section]: {
        //@ts-ignore
        ...formState[section],
        [field]: value,
      },
    })
  }

  const handleSaveSettings = (section: string) => {
    //@ts-ignore
    console.log(`Saving ${section} settings:`, formState[section])
    toast.success("Settings saved", {
      description: `Your ${section} settings have been updated successfully.`,
    })
  }

  const handleDeleteAccount = () => {
    toast.success("Account deletion requested", {
      description: "We've sent a confirmation email. Please follow the instructions to delete your account.",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <h1 className="text-3xl font-bold gradient-text">Account Settings</h1>
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
                <Link
                  href="/account/settings"
                  className="flex items-center gap-3 p-3 border-t bg-primary/5 text-primary"
                >
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
                  Contact Support
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Settings
                </CardTitle>
                <CardDescription>Manage your account settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-6">
                    <TabsTrigger value="account" className="flex items-center gap-1">
                      <UserCog className="h-4 w-4 md:mr-1" />
                      <span className="hidden md:inline">Account</span>
                    </TabsTrigger>
                    <TabsTrigger value="security" className="flex items-center gap-1">
                      <Lock className="h-4 w-4 md:mr-1" />
                      <span className="hidden md:inline">Security</span>
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="flex items-center gap-1">
                      <BellRing className="h-4 w-4 md:mr-1" />
                      <span className="hidden md:inline">Notifications</span>
                    </TabsTrigger>
                    <TabsTrigger value="preferences" className="flex items-center gap-1">
                      <Palette className="h-4 w-4 md:mr-1" />
                      <span className="hidden md:inline">Preferences</span>
                    </TabsTrigger>
                    <TabsTrigger value="privacy" className="flex items-center gap-1">
                      <ShieldAlert className="h-4 w-4 md:mr-1" />
                      <span className="hidden md:inline">Privacy</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="account" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Profile Information</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={formState.profile.firstName}
                            onChange={(e) => handleInputChange("profile", "firstName", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={formState.profile.lastName}
                            onChange={(e) => handleInputChange("profile", "lastName", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formState.profile.email}
                            onChange={(e) => handleInputChange("profile", "email", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formState.profile.phone}
                            onChange={(e) => handleInputChange("profile", "phone", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea id="bio" placeholder="Tell us about yourself" className="min-h-[100px]" value={formState.profile.bio}
                            onChange={(e: { target: { value: any } }) => handleInputChange("profile", "bio", e.target.value)} />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Profile Picture</h3>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
                            alt="Profile"
                          />
                          <AvatarFallback>RS</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                          <Button variant="outline" size="sm">
                            Upload New Picture
                          </Button>
                          <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 2MB.</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button onClick={() => handleSaveSettings("profile")}>Save Changes</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="security" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Change Password</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <div className="relative">
                            <Input
                              id="currentPassword"
                              type={showCurrentPassword ? "text" : "password"}
                              value={formState.security.currentPassword}
                              onChange={(e) => handleInputChange("security", "currentPassword", e.target.value)}
                            />
                            <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full"
                              onClick={() => setShowCurrentPassword(!showCurrentPassword)} >
                              {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <div className="relative">
                            <Input id="newPassword" type={showPassword ? "text" : "password"} value={formState.security.newPassword} onChange={(e) => handleInputChange("security", "newPassword", e.target.value)} />
                            <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full" onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input id="confirmPassword" type="password" value={formState.security.confirmPassword}
                            onChange={(e) => handleInputChange("security", "confirmPassword", e.target.value)} />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Enable Two-Factor Authentication</Label>
                          <p className="text-sm text-muted-foreground">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Switch checked={formState.security.twoFactorEnabled}
                          onCheckedChange={(checked) => handleInputChange("security", "twoFactorEnabled", checked)} />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Login Security</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Login Notifications</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications for new login attempts
                            </p>
                          </div>
                          <Switch checked={formState.security.loginNotifications}
                            onCheckedChange={(checked) => handleInputChange("security", "loginNotifications", checked)} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Remember This Device</Label>
                            <p className="text-sm text-muted-foreground">Stay logged in on this device</p>
                          </div>
                          <Switch
                            checked={formState.security.rememberDevice}
                            onCheckedChange={(checked) => handleInputChange("security", "rememberDevice", checked)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button onClick={() => handleSaveSettings("security")}>Save Changes</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="notifications" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Notification Channels</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Email Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                          </div>
                          <Switch checked={formState.notifications.emailNotifications}
                            onCheckedChange={(checked) =>
                              handleInputChange("notifications", "emailNotifications", checked)
                            } />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>SMS Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                          </div>
                          <Switch checked={formState.notifications.smsNotifications}
                            onCheckedChange={(checked) =>
                              handleInputChange("notifications", "smsNotifications", checked)
                            } />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Push Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive push notifications on your devices</p>
                          </div>
                          <Switch checked={formState.notifications.pushNotifications}
                            onCheckedChange={(checked) =>
                              handleInputChange("notifications", "pushNotifications", checked)
                            } />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Notification Types</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Order Updates</Label>
                            <p className="text-sm text-muted-foreground">Notifications about your orders</p>
                          </div>
                          <Switch checked={formState.notifications.orderUpdates}
                            onCheckedChange={(checked) => handleInputChange("notifications", "orderUpdates", checked)} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Promotions & Offers</Label>
                            <p className="text-sm text-muted-foreground">
                              Notifications about sales and special offers
                            </p>
                          </div>
                          <Switch checked={formState.notifications.promotions}
                            onCheckedChange={(checked) => handleInputChange("notifications", "promotions", checked)} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Newsletter</Label>
                            <p className="text-sm text-muted-foreground">Weekly newsletter with product updates</p>
                          </div>
                          <Switch checked={formState.notifications.newslatter}
                            onCheckedChange={(checked) => handleInputChange("notifications", "newslatter", checked)} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Account Alerts</Label>
                            <p className="text-sm text-muted-foreground">Security and account-related notifications</p>
                          </div>
                          <Switch checked={formState.notifications.accountAlerts}
                            onCheckedChange={(checked) => handleInputChange("notifications", "accountAlerts", checked)} />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button onClick={() => handleSaveSettings("notifications")}>Save Changes</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="preferences" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Regional Settings</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="language">Language</Label>
                          <Select value={formState.preferences.language} onValueChange={(value) => handleInputChange("preferences", "language", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="english">English</SelectItem>
                              <SelectItem value="hindi">Hindi</SelectItem>
                              <SelectItem value="bengali">Bengali</SelectItem>
                              <SelectItem value="tamil">Tamil</SelectItem>
                              <SelectItem value="telugu">Telugu</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="currency">Currency</Label>
                          <Select value={formState.preferences.currency} onValueChange={(value) => handleInputChange("preferences", "currency", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select currency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="inr">Indian Rupee (₹)</SelectItem>
                              <SelectItem value="usd">US Dollar ($)</SelectItem>
                              <SelectItem value="eur">Euro (€)</SelectItem>
                              <SelectItem value="gbp">British Pound (£)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timezone">Time Zone</Label>
                          <Select value={formState.preferences.timezone}
                            onValueChange={(value) => handleInputChange("preferences", "timezone", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timezone" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asia-kolkata">Asia/Kolkata (GMT+5:30)</SelectItem>
                              <SelectItem value="america-new_york">America/New York (GMT-5:00)</SelectItem>
                              <SelectItem value="europe-london">Europe/London (GMT+0:00)</SelectItem>
                              <SelectItem value="australia-sydney">Australia/Sydney (GMT+11:00)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Theme Settings</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Theme Mode</Label>
                          <RadioGroup value={formState.preferences.theme}
                            onValueChange={(value) => {
                              handleInputChange("preferences", "theme", value)
                              if (value === "dark") setDarkMode(true)
                              else if (value === "light") setDarkMode(false)
                            }} className="flex gap-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="light" id="light" />
                              <Label htmlFor="light" className="flex items-center gap-1 cursor-pointer">
                                <Sun className="h-4 w-4" /> Light
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="dark" id="dark" />
                              <Label htmlFor="dark" className="flex items-center gap-1 cursor-pointer">
                                <Moon className="h-4 w-4" /> Dark
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="system" id="system" />
                              <Label htmlFor="system" className="flex items-center gap-1 cursor-pointer">
                                <Laptop className="h-4 w-4" /> System
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button onClick={() => handleSaveSettings("preferences")}>Save Changes</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="privacy" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Privacy Settings</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Profile Visibility</Label>
                          <RadioGroup value={formState.privacy.profileVisibility} onValueChange={(value) => handleInputChange("privacy", "profileVisibility", value)}
                            className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="public" id="public" />
                              <Label htmlFor="public" className="cursor-pointer">
                                Public
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="private" id="private" />
                              <Label htmlFor="private" className="cursor-pointer">
                                Private
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="friends" id="friends" />
                              <Label htmlFor="friends" className="cursor-pointer">
                                Friends Only
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Activity Tracking</Label>
                            <p className="text-sm text-muted-foreground">
                              Allow us to track your activity for a better experience
                            </p>
                          </div>
                          <Switch checked={formState.privacy.activityTracking}
                            onCheckedChange={(checked) => handleInputChange("privacy", "activityTracking", checked)} />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Data Sharing with Partners</Label>
                            <p className="text-sm text-muted-foreground">
                              Allow us to share your data with trusted partners
                            </p>
                          </div>
                          <Switch checked={formState.privacy.dataSharing}
                            onCheckedChange={(checked) => handleInputChange("privacy", "dataSharing", checked)} />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Cookie Preferences</h3>
                      <div className="space-y-2">
                        <RadioGroup value={formState.privacy.cookiePreferences}
                          onValueChange={(value) => handleInputChange("privacy", "cookiePreferences", value)} className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="essential" id="essential" />
                            <Label htmlFor="essential" className="cursor-pointer">
                              Essential Only
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="functional" id="functional" />
                            <Label htmlFor="functional" className="cursor-pointer">
                              Functional
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="all" id="all" />
                            <Label htmlFor="all" className="cursor-pointer">
                              All Cookies
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-destructive">Danger Zone</h3>
                      <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Warning</AlertTitle>
                        <AlertDescription>
                          Deleting your account is permanent. All your data will be wiped out immediately and you won't
                          be able to get it back.
                        </AlertDescription>
                      </Alert>
                      <Button variant="destructive" onClick={handleDeleteAccount}>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Account
                      </Button>
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button onClick={() => handleSaveSettings("privacy")}>Save Changes</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}