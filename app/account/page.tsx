import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { User, Package, Heart, CreditCard, MapPin, Bell, LogOut, Edit, ShoppingBag } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <h1 className="mb-6 text-3xl font-bold">My Account</h1>
        <div className="grid gap-8 md:grid-cols-[240px_1fr]">
          <div className="space-y-6">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-4 text-center">
                <div className="relative mx-auto w-20 h-20 rounded-full overflow-hidden bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                  <Button variant="outline" size="icon" className="absolute -right-2 -top-2 h-6 w-6 rounded-full">
                    <Edit className="h-3 w-3" />
                  </Button>
                </div>
                <h2 className="mt-4 font-medium">Rahul Sharma</h2>
                <p className="text-sm text-muted-foreground">rahul.sharma@example.com</p>
                <Badge className="mt-2 bg-primary text-primary-foreground">Premium Member</Badge>
              </CardContent>
            </Card>
            <div className="rounded-lg border">
              <div className="flex flex-col">
                <Link href="/account" className="flex items-center gap-3 p-3 bg-primary/5 text-primary">
                  <User className="h-5 w-5" /> Account Overview
                </Link>
                <Link href="/account/orders" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50">
                  <Package className="h-5 w-5" /> Orders
                </Link>
                <Link href="/account/wishlist" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50">
                  <Heart className="h-5 w-5" /> Wishlist
                </Link>
                <Link href="/account/payment" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50">
                  <CreditCard className="h-5 w-5" /> Payment Methods
                </Link>
                <Link href="/account/addresses" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50">
                  <MapPin className="h-5 w-5" /> Addresses
                </Link>
                <Link href="/account/notifications" className="flex items-center gap-3 p-3 border-t hover:bg-muted/50">
                  <Bell className="h-5 w-5" /> Notifications
                </Link>
                <Link href="/logout" className="flex items-center gap-3 p-3 border-t text-red-500 hover:bg-destructive hover:text-white transition-all duration-75">
                  <LogOut className="h-5 w-5" /> Logout
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <Tabs defaultValue="overview">
              <TabsList className="border-b pb-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>Track and manage your recent orders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2].map((id) => (
                        <div key={id} className="rounded-lg border p-4">
                          <div className="flex justify-between">
                            <p className="font-medium">Order #ORD12345{id}</p>
                            <Badge className="bg-success text-success-foreground">Delivered</Badge>
                          </div>
                          <Separator className="my-4" />
                          <div className="flex items-center gap-4">
                            <ShoppingBag className="h-6 w-6" />
                            <span className="text-sm text-muted-foreground">3 items</span>
                            <div className="ml-auto flex gap-4">
                              <p className="font-medium">₹347.00</p>
                              <Button size="sm" className="h-8">Reorder</Button>
                              <Button variant="outline" size="sm" className="h-8">Details</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}
