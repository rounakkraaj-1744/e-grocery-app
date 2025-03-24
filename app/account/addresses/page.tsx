"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
    User, Package, Heart, CreditCard, MapPin, Bell, LogOut, Edit, Settings, Gift, Truck, ChevronRight, Percent, HelpCircle, FileText,
    Phone, Mail, Search, Plus, Home, Building, MoreHorizontal, Trash2, Check, Clock,
} from "lucide-react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export default function AddressesPage() {
    const router = useRouter ()
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            name: "Home",
            fullName: "Rahul Sharma",
            address: "123 Gandhi Nagar, Near City Hospital",
            city: "Berhampur",
            state: "Odisha",
            pincode: "760001",
            phone: "+91 98765 43210",
            isDefault: true,
            icon: <Home className="h-4 w-4" />,
        },
        {
            id: 2,
            name: "Office",
            fullName: "Rahul Sharma",
            address: "Tech Hub, Ambapua Main Road",
            city: "Berhampur",
            state: "Odisha",
            pincode: "760010",
            phone: "+91 98765 43210",
            isDefault: false,
            icon: <Building className="h-4 w-4" />,
        },
        {
            id: 3,
            name: "Parents' Home",
            fullName: "Vijay Sharma",
            address: "45 Gopalpur Beach Road",
            city: "Berhampur",
            state: "Odisha",
            pincode: "760008",
            phone: "+91 87654 32109",
            isDefault: false,
            icon: <Home className="h-4 w-4" />,
        },
    ])

    const [showAddForm, setShowAddForm] = useState(false)
    const [editingAddress, setEditingAddress] = useState(null)

    const handleSetDefault = (id: number) => {
        setAddresses(
            addresses.map((address) => ({
                ...address,
                isDefault: address.id === id,
            })),
        )
    }

    const handleDeleteAddress = (id: number) => {
        setAddresses(addresses.filter((address) => address.id !== id))
    }

    const handleEditAddress = (address: any) => {
        setEditingAddress(address)
        setShowAddForm(true)
    }

    const handleCancelEdit = () => {
        setEditingAddress(null)
        setShowAddForm(false)
    }

    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold gradient-text">My Addresses</h1>
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
                                <Link href="/account/addresses" className="flex items-center gap-3 p-3 border-t bg-primary/5 text-primary">
                                    <MapPin className="h-5 w-5" /> Addresses
                                    <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                                <Link href="/account/notifications" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50 group">
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
                                <Link href="/logout" className="flex items-center gap-3 p-3 border-t text-destructive hover:bg-destructive/5 group">
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
                                    <MapPin className="h-5 w-5 text-primary" />
                                    Saved Addresses
                                </CardTitle>
                                <CardDescription>Manage your delivery addresses</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
                                    <div className="relative w-full md:w-80">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input type="search" placeholder="Search addresses..." className="w-full pl-9 bg-background" />
                                    </div>
                                    <Button className="w-full md:w-auto button-primary"
                                        onClick={() => {
                                            setEditingAddress(null)
                                            setShowAddForm(true)
                                        }}>
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add New Address
                                    </Button>
                                </div>

                                {showAddForm && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                                        className="mb-6" >
                                        <Card>
                                            <CardHeader className="pb-3">
                                                <CardTitle className="text-lg">{editingAddress ? "Edit Address" : "Add New Address"}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <form className="space-y-4">
                                                    <div className="grid gap-4 md:grid-cols-2">
                                                        <div className="space-y-2">
                                                            <Label htmlFor="address-name">Address Name</Label>
                                                            <Input id="address-name" placeholder="e.g. Home, Office, etc." defaultValue={editingAddress?.name || ""} />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="full-name">Full Name</Label>
                                                            <Input
                                                                id="full-name"
                                                                placeholder="Full Name"
                                                                defaultValue={editingAddress?.fullName || ""}
                                                            />
                                                        </div>
                                                        <div className="space-y-2 md:col-span-2">
                                                            <Label htmlFor="address-line">Address</Label>
                                                            <Input
                                                                id="address-line"
                                                                placeholder="Street Address, Apartment, etc."
                                                                defaultValue={editingAddress?.address || ""}
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="city">City</Label>
                                                            <Input id="city" placeholder="City" defaultValue={editingAddress?.city || ""} />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="state">State</Label>
                                                            <Input id="state" placeholder="State" defaultValue={editingAddress?.state || ""} />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="pincode">PIN Code</Label>
                                                            <Input id="pincode" placeholder="PIN Code" defaultValue={editingAddress?.pincode || ""} />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="phone">Phone Number</Label>
                                                            <Input id="phone" placeholder="Phone Number" defaultValue={editingAddress?.phone || ""} />
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <Label>Address Type</Label>
                                                        <RadioGroup
                                                            defaultValue={editingAddress?.name?.toLowerCase() || "home"}
                                                            className="flex gap-4"
                                                        >
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="home" id="home" />
                                                                <Label htmlFor="home" className="flex items-center gap-1 cursor-pointer">
                                                                    <Home className="h-4 w-4" /> Home
                                                                </Label>
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="office" id="office" />
                                                                <Label htmlFor="office" className="flex items-center gap-1 cursor-pointer">
                                                                    <Building className="h-4 w-4" /> Office
                                                                </Label>
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="other" id="other" />
                                                                <Label htmlFor="other" className="flex items-center gap-1 cursor-pointer">
                                                                    <MapPin className="h-4 w-4" /> Other
                                                                </Label>
                                                            </div>
                                                        </RadioGroup>
                                                    </div>

                                                    <div className="flex items-center space-x-2">
                                                        <input
                                                            type="checkbox"
                                                            id="default-address"
                                                            className="h-4 w-4 rounded border-primary/20 text-primary focus:ring-primary/30"
                                                            defaultChecked={editingAddress?.isDefault || false}
                                                        />
                                                        <Label htmlFor="default-address" className="text-sm cursor-pointer">
                                                            Set as default address
                                                        </Label>
                                                    </div>
                                                </form>
                                            </CardContent>
                                            <CardFooter className="flex justify-between border-t p-4">
                                                <Button variant="outline" onClick={handleCancelEdit}>
                                                    Cancel
                                                </Button>
                                                <Button className="button-primary">{editingAddress ? "Update Address" : "Save Address"}</Button>
                                            </CardFooter>
                                        </Card>
                                    </motion.div>
                                )}

                                {addresses.length > 0 ? (
                                    <div className="space-y-4">
                                        {addresses.map((address) => (
                                            <div key={address.id}
                                                className={`rounded-lg border p-4 ${address.isDefault ? "border-primary/30 bg-primary/5" : "hover:border-primary/20"} transition-all`}
                                            >
                                                <div className="flex items-start justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                            {address.icon}
                                                        </div>
                                                        <div>
                                                            <h3 className="font-medium flex items-center gap-2">
                                                                {address.name}
                                                                {address.isDefault && (
                                                                    <Badge className="bg-primary/20 text-primary text-xs">Default</Badge>
                                                                )}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                                <MoreHorizontal className="h-4 w-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuItem onClick={() => handleEditAddress(address)}>
                                                                <Edit className="h-4 w-4 mr-2" />
                                                                Edit
                                                            </DropdownMenuItem>
                                                            {!address.isDefault && (
                                                                <DropdownMenuItem onClick={() => handleSetDefault(address.id)}>
                                                                    <Check className="h-4 w-4 mr-2" />
                                                                    Set as Default
                                                                </DropdownMenuItem>
                                                            )}
                                                            <DropdownMenuItem className="text-destructive focus:text-destructive"
                                                                onClick={() => handleDeleteAddress(address.id)}>
                                                                <Trash2 className="h-4 w-4 mr-2" />
                                                                Delete
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                                <Separator className="my-3" />
                                                <div className="space-y-1 text-sm">
                                                    <p className="font-medium">{address.fullName}</p>
                                                    <p className="text-muted-foreground">{address.address}</p>
                                                    <p className="text-muted-foreground">
                                                        {address.city}, {address.state} - {address.pincode}
                                                    </p>
                                                    <p className="text-muted-foreground">{address.phone}</p>
                                                </div>
                                                <div className="flex gap-2 mt-4">
                                                    <Button variant="outline" size="sm" className="h-8 button-outline"
                                                        onClick={() => handleEditAddress(address)} >
                                                        <Edit className="h-3 w-3 mr-1" />
                                                        Edit
                                                    </Button>
                                                    {!address.isDefault && (
                                                        <Button variant="outline" size="sm" className="h-8 button-outline"
                                                            onClick={() => handleSetDefault(address.id)} >
                                                            <Check className="h-3 w-3 mr-1" />
                                                            Set as Default
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <div className="mx-auto w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                                            <MapPin className="h-8 w-8 text-muted-foreground" />
                                        </div>
                                        <h3 className="text-lg font-medium mb-2">No addresses saved yet</h3>
                                        <p className="text-muted-foreground mb-6">Add your delivery addresses to make checkout faster</p>
                                        <Button className="button-primary"
                                            onClick={() => {
                                                setEditingAddress(null)
                                                setShowAddForm(true)
                                            }} >
                                            <Plus className="h-4 w-4 mr-2" />
                                            Add New Address
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Truck className="h-5 w-5 text-primary" />
                                    Delivery Information
                                </CardTitle>
                                <CardDescription>Important information about our delivery service</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="rounded-lg border p-4">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Truck className="h-4 w-4 text-primary" />
                                            Delivery Areas
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            We currently deliver to all major cities and surrounding areas. Enter your PIN code during
                                            checkout to confirm if delivery is available in your area.
                                        </p>
                                    </div>

                                    <div className="rounded-lg border p-4">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-primary" />
                                            Delivery Timings
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Standard delivery: 2-3 business days
                                            <br />
                                            Express delivery: Same day delivery for orders placed before 2 PM
                                        </p>
                                    </div>

                                    <div className="rounded-lg border p-4">
                                        <h3 className="font-medium mb-2 flex items-center gap-2">
                                            <Percent className="h-4 w-4 text-primary" />
                                            Free Delivery
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Free delivery on all orders above ₹750. A delivery fee of ₹49 applies to orders below this amount.
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