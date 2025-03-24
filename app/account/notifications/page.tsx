"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { User, Package, Heart, CreditCard, MapPin, Bell, LogOut, Edit, Calendar, Settings, Gift, Truck, ChevronRight, Star, CheckCircle2, Wallet, Percent, Award, HelpCircle, FileText, Phone, Mail, Search, ShoppingCart, Trash2, MoreHorizontal, Check, AlertCircle, Info, Tag, Clock, ShieldCheck } from 'lucide-react'
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: "order",
            title: "Order Delivered",
            message: "Your order #ORD123453 has been delivered successfully.",
            time: "2 hours ago",
            isRead: false,
            icon: <CheckCircle2 className="h-5 w-5 text-success" />
        },
        {
            id: 2,
            type: "promotion",
            title: "Weekend Special Offer",
            message: "Get 15% off on all orders above ₹1000 this weekend. Use code WEEKEND15.",
            time: "Yesterday",
            isRead: false,
            icon: <Tag className="h-5 w-5 text-primary" />
        },
        {
            id: 3,
            type: "order",
            title: "Order Shipped",
            message: "Your order #ORD123451 has been shipped and is on the way.",
            time: "2 days ago",
            isRead: true,
            icon: <Truck className="h-5 w-5 text-blue-500" />
        },
        {
            id: 4,
            type: "account",
            title: "Password Changed",
            message: "Your account password was changed successfully.",
            time: "3 days ago",
            isRead: true,
            icon: <ShieldCheck className="h-5 w-5 text-green-500" />
        },
        {
            id: 5,
            type: "promotion",
            title: "New Products Added",
            message: "Check out our new collection of organic fruits and vegetables.",
            time: "5 days ago",
            isRead: true,
            icon: <Info className="h-5 w-5 text-blue-500" />
        },
        {
            id: 6,
            type: "reward",
            title: "You've Earned 50 Points",
            message: "You earned 50 reward points from your recent purchase.",
            time: "1 week ago",
            isRead: true,
            icon: <Award className="h-5 w-5 text-amber-500" />
        },
        {
            id: 7,
            type: "order",
            title: "Order Confirmed",
            message: "Your order #ORD123450 has been confirmed and is being processed.",
            time: "1 week ago",
            isRead: true,
            icon: <Check className="h-5 w-5 text-primary" />
        }
    ])

    const [notificationSettings, setNotificationSettings] = useState({
        orderUpdates: true,
        promotions: true,
        accountActivity: true,
        rewards: true,
        emailNotifications: true,
        pushNotifications: true,
        smsNotifications: false
    })

    const handleToggleSetting = (setting: string) => {
        setNotificationSettings({
            ...notificationSettings,
            //@ts-ignore
            [setting]: !notificationSettings[setting]
        })
    }

    const markAsRead = (id: number) => {
        setNotifications(notifications.map(notification =>
            notification.id === id ? { ...notification, isRead: true } : notification
        ))
    }

    const markAllAsRead = () => {
        setNotifications(notifications.map(notification => ({ ...notification, isRead: true })))
    }

    const deleteNotification = (id: number) => {
        setNotifications(notifications.filter(notification => notification.id !== id))
    }

    const clearAllNotifications = () => {
        setNotifications([])
    }

    const unreadCount = notifications.filter(notification => !notification.isRead).length

    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold gradient-text">My Notifications</h1>
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
                                    className="flex items-center gap-3 p-3 border-t bg-primary/5 text-primary"
                                >
                                    <Bell className="h-5 w-5" /> Notifications
                                    <Badge className="ml-auto bg-primary text-primary-foreground">{unreadCount}</Badge>
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
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <CardTitle className="flex items-center gap-2">
                                            <Bell className="h-5 w-5 text-primary" />
                                            Notifications
                                        </CardTitle>
                                        <CardDescription>Stay updated with your orders and offers</CardDescription>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="button-outline"
                                            onClick={markAllAsRead}
                                            disabled={unreadCount === 0}
                                        >
                                            <Check className="h-4 w-4 mr-2" />
                                            Mark All as Read
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="button-outline text-destructive hover:bg-destructive/10 hover:text-destructive"
                                            onClick={clearAllNotifications}
                                            disabled={notifications.length === 0}
                                        >
                                            <Trash2 className="h-4 w-4 mr-2" />
                                            Clear All
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {notifications.length > 0 ? (
                                    <div className="space-y-4">
                                        {notifications.map((notification) => (
                                            <motion.div
                                                key={notification.id}
                                                initial={{ opacity: 1 }}
                                                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                                className={`rounded-lg border p-4 ${!notification.isRead ? 'border-primary/30 bg-primary/5' : ''} transition-all`}
                                            >
                                                <div className="flex gap-4">
                                                    <div className={`h-10 w-10 rounded-full ${!notification.isRead ? 'bg-primary/10' : 'bg-muted'} flex items-center justify-center shrink-0`}>
                                                        {notification.icon}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between">
                                                            <h3 className={`font-medium ${!notification.isRead ? 'text-primary' : ''}`}>
                                                                {notification.title}
                                                            </h3>
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-xs text-muted-foreground">{notification.time}</span>
                                                                <DropdownMenu>
                                                                    <DropdownMenuTrigger asChild>
                                                                        <Button variant="ghost" size="icon" className="h-7 w-7">
                                                                            <MoreHorizontal className="h-4 w-4" />
                                                                        </Button>
                                                                    </DropdownMenuTrigger>
                                                                    <DropdownMenuContent align="end">
                                                                        {!notification.isRead && (
                                                                            <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                                                                                <Check className="h-4 w-4 mr-2" />
                                                                                Mark as Read
                                                                            </DropdownMenuItem>
                                                                        )}
                                                                        <DropdownMenuItem
                                                                            className="text-destructive focus:text-destructive"
                                                                            onClick={() => deleteNotification(notification.id)}
                                                                        >
                                                                            <Trash2 className="h-4 w-4 mr-2" />
                                                                            Delete
                                                                        </DropdownMenuItem>
                                                                    </DropdownMenuContent>
                                                                </DropdownMenu>
                                                            </div>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                                                        <div className="flex gap-2 mt-3">
                                                            {notification.type === "order" && (
                                                                <Button size="sm" className="h-7 text-xs button-primary">
                                                                    View Order
                                                                </Button>
                                                            )}
                                                            {notification.type === "promotion" && (
                                                                <Button size="sm" className="h-7 text-xs button-primary">
                                                                    Shop Now
                                                                </Button>
                                                            )}
                                                            {notification.type === "reward" && (
                                                                <Button size="sm" className="h-7 text-xs button-primary">
                                                                    View Rewards
                                                                </Button>
                                                            )}
                                                            {!notification.isRead && (
                                                                <Button
                                                                    variant="outline"
                                                                    size="sm"
                                                                    className="h-7 text-xs button-outline"
                                                                    onClick={() => markAsRead(notification.id)}
                                                                >
                                                                    Mark as Read
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <div className="mx-auto w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                                            <Bell className="h-8 w-8 text-muted-foreground" />
                                        </div>
                                        <h3 className="text-lg font-medium mb-2">No notifications</h3>
                                        <p className="text-muted-foreground mb-6">
                                            You don't have any notifications at the moment
                                        </p>
                                        <Button className="button-primary">
                                            <ShoppingCart className="h-4 w-4 mr-2" />
                                            Continue Shopping
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Settings className="h-5 w-5 text-primary" />
                                    Notification Settings
                                </CardTitle>
                                <CardDescription>Manage how you receive notifications</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-base font-medium mb-3">Notification Types</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label className="text-base">Order Updates</Label>
                                                    <p className="text-sm text-muted-foreground">
                                                        Receive notifications about your order status
                                                    </p>
                                                </div>
                                                <Switch
                                                    checked={notificationSettings.orderUpdates}
                                                    onCheckedChange={() => handleToggleSetting('orderUpdates')}
                                                />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label className="text-base">Promotions & Offers</Label>
                                                    <p className="text-sm text-muted-foreground">
                                                        Receive notifications about deals and special offers
                                                    </p>
                                                </div>
                                                <Switch
                                                    checked={notificationSettings.promotions}
                                                    onCheckedChange={() => handleToggleSetting('promotions')}
                                                />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label className="text-base">Account Activity</Label>
                                                    <p className="text-sm text-muted-foreground">
                                                        Receive notifications about your account security and changes
                                                    </p>
                                                </div>
                                                <Switch
                                                    checked={notificationSettings.accountActivity}
                                                    onCheckedChange={() => handleToggleSetting('accountActivity')}
                                                />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label className="text-base">Rewards & Points</Label>
                                                    <p className="text-sm text-muted-foreground">
                                                        Receive notifications about your rewards program
                                                    </p>
                                                </div>
                                                <Switch
                                                    checked={notificationSettings.rewards}
                                                    onCheckedChange={() => handleToggleSetting('rewards')}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-medium mb-3">Notification Channels</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label className="text-base">Email Notifications</Label>
                                                    <p className="text-sm text-muted-foreground">
                                                        Receive notifications via email
                                                    </p>
                                                </div>
                                                <Switch
                                                    checked={notificationSettings.emailNotifications}
                                                    onCheckedChange={() => handleToggleSetting('emailNotifications')}
                                                />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label className="text-base">Push Notifications</Label>
                                                    <p className="text-sm text-muted-foreground">
                                                        Receive notifications on your device
                                                    </p>
                                                </div>
                                                <Switch
                                                    checked={notificationSettings.pushNotifications}
                                                    onCheckedChange={() => handleToggleSetting('pushNotifications')}
                                                />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-0.5">
                                                    <Label className="text-base">SMS Notifications</Label>
                                                    <p className="text-sm text-muted-foreground">
                                                        Receive notifications via SMS
                                                    </p>
                                                </div>
                                                <Switch
                                                    checked={notificationSettings.smsNotifications}
                                                    onCheckedChange={() => handleToggleSetting('smsNotifications')}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="border-t p-4">
                                <Button className="w-full button-primary">
                                    Save Preferences
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}