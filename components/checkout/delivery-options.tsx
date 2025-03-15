"use client"

import { useState } from "react"
import { CalendarClock, Clock, MapPin, Truck, Home, Building, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"

const deliverySlots = [
  { id: "today-1", day: "Today", time: "2:00 PM - 4:00 PM", available: true },
  { id: "today-2", day: "Today", time: "4:00 PM - 6:00 PM", available: true },
  { id: "today-3", day: "Today", time: "6:00 PM - 8:00 PM", available: false },
  { id: "tomorrow-1", day: "Tomorrow", time: "10:00 AM - 12:00 PM", available: true },
  { id: "tomorrow-2", day: "Tomorrow", time: "12:00 PM - 2:00 PM", available: true },
  { id: "tomorrow-3", day: "Tomorrow", time: "2:00 PM - 4:00 PM", available: true },
  { id: "tomorrow-4", day: "Tomorrow", time: "4:00 PM - 6:00 PM", available: true },
  { id: "tomorrow-5", day: "Tomorrow", time: "6:00 PM - 8:00 PM", available: true },
]

const addresses = [
  { id: "addr1", name: "Home", address: "123 Main Street, Apt 4B, Mumbai, MH 400001", default: true },
  { id: "addr2", name: "Office", address: "456 Business Ave, Suite 200, Mumbai, MH 400002", default: false },
]

export default function DeliveryOptions() {
  const [selectedSlot, setSelectedSlot] = useState("today-1")
  const [selectedAddress, setSelectedAddress] = useState("addr1")
  const [showNewAddress, setShowNewAddress] = useState(false)

  return (
    <Card className="border-2 border-primary/10 bg-card/50 backdrop-blur">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Truck className="h-5 w-5 text-primary" />
          Delivery Options
        </CardTitle>
        <CardDescription>Choose when and where to receive your order</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="delivery" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger
              value="delivery"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Truck className="h-4 w-4 mr-2" />
              Delivery
            </TabsTrigger>
            <TabsTrigger
              value="pickup"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Home className="h-4 w-4 mr-2" />
              Pickup
            </TabsTrigger>
          </TabsList>
          <TabsContent value="delivery" className="space-y-6 pt-2">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-medium">Delivery Address</h3>
              </div>
              <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress} className="space-y-3">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className={`flex items-start space-x-3 rounded-lg border p-4 transition-all ${
                      selectedAddress === address.id ? "border-primary bg-primary/5" : "hover:border-primary/30"
                    }`}
                  >
                    <RadioGroupItem value={address.id} id={address.id} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={address.id} className="flex items-center gap-2 font-medium">
                        {address.name === "Home" ? (
                          <Home className="h-4 w-4 text-primary" />
                        ) : (
                          <Building className="h-4 w-4 text-primary" />
                        )}
                        {address.name}
                        {address.default && (
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                            Default
                          </span>
                        )}
                      </Label>
                      <p className="mt-1 text-sm text-muted-foreground">{address.address}</p>
                      <div className="mt-2 flex gap-2">
                        <Button variant="outline" size="sm" className="h-8 border-primary/20 hover:bg-primary/5">
                          Edit
                        </Button>
                        {!address.default && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 text-destructive hover:bg-destructive/5 border-destructive/20"
                          >
                            Delete
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <AnimatePresence>
                  {!showNewAddress ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-dashed border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                        onClick={() => setShowNewAddress(true)}
                      >
                        + Add New Address
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="rounded-lg border p-4"
                    >
                      <h4 className="font-medium mb-4 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        Add New Address
                      </h4>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="address-name">Address Name</Label>
                            <select
                              id="address-name"
                              className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              <option value="home">Home</option>
                              <option value="office">Office</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <input
                              id="phone"
                              className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="+91 98765 43210"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="street">Street Address</Label>
                          <input
                            id="street"
                            className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="123 Main Street, Apt 4B"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <input
                              id="city"
                              className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Mumbai"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="pincode">Pincode</Label>
                            <input
                              id="pincode"
                              className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="400001"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="default-address"
                            className="h-4 w-4 rounded border-primary/20 text-primary focus:ring-primary/30"
                          />
                          <Label htmlFor="default-address" className="text-sm">
                            Set as default address
                          </Label>
                        </div>
                        <div className="flex gap-2 justify-end">
                          <Button variant="outline" size="sm" onClick={() => setShowNewAddress(false)}>
                            Cancel
                          </Button>
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            Save Address
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </RadioGroup>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-medium">Delivery Time</h3>
              </div>
              <RadioGroup
                value={selectedSlot}
                onValueChange={setSelectedSlot}
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {deliverySlots.map((slot) => (
                  <div
                    key={slot.id}
                    className={`flex items-center space-x-3 rounded-lg border p-4 transition-all ${
                      !slot.available
                        ? "opacity-50 cursor-not-allowed"
                        : selectedSlot === slot.id
                          ? "border-primary bg-primary/5"
                          : "hover:border-primary/30"
                    }`}
                  >
                    <RadioGroupItem value={slot.id} id={slot.id} disabled={!slot.available} className="mt-0" />
                    <div className="flex-1">
                      <Label
                        htmlFor={slot.id}
                        className={`font-medium flex items-center gap-2 ${!slot.available ? "text-muted-foreground" : ""}`}
                      >
                        {slot.day}
                        {selectedSlot === slot.id && <CheckCircle2 className="h-4 w-4 text-primary ml-auto" />}
                      </Label>
                      <p className="text-sm text-muted-foreground">{slot.time}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </TabsContent>
          <TabsContent value="pickup" className="pt-2">
            <div className="space-y-4">
              <div className="mb-4 flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                <h3 className="font-medium">Select Store Location</h3>
              </div>

              <div className="rounded-lg border p-4">
                <div className="aspect-video w-full overflow-hidden rounded-md bg-muted mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=1000&auto=format&fit=crop"
                    alt="Store map"
                    className="h-full w-full object-cover"
                  />
                </div>

                <RadioGroup defaultValue="store1" className="space-y-3">
                  <div className="flex items-start space-x-3 rounded-lg border p-4 hover:border-primary/30 transition-all">
                    <RadioGroupItem value="store1" id="store1" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="store1" className="font-medium">
                        FreshCart - Bandra
                      </Label>
                      <p className="text-sm text-muted-foreground">24 Hill Road, Bandra West, Mumbai, 400050</p>
                      <p className="text-xs text-muted-foreground mt-1">Open: 8:00 AM - 10:00 PM</p>
                      <p className="text-xs text-primary mt-2">2.5 km away • 15 items in stock</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 rounded-lg border p-4 hover:border-primary/30 transition-all">
                    <RadioGroupItem value="store2" id="store2" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="store2" className="font-medium">
                        FreshCart - Andheri
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        42 Oshiwara Link Road, Andheri West, Mumbai, 400053
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Open: 8:00 AM - 11:00 PM</p>
                      <p className="text-xs text-primary mt-2">5.8 km away • 15 items in stock</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 rounded-lg border p-4 hover:border-primary/30 transition-all">
                    <RadioGroupItem value="store3" id="store3" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="store3" className="font-medium">
                        FreshCart - Powai
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        78 Central Avenue, Hiranandani Gardens, Powai, Mumbai, 400076
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Open: 9:00 AM - 10:00 PM</p>
                      <p className="text-xs text-primary mt-2">8.2 km away • 15 items in stock</p>
                    </div>
                  </div>
                </RadioGroup>

                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    View More Stores
                  </Button>
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2">
                  <CalendarClock className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Pickup Time</h3>
                </div>
                <RadioGroup defaultValue="pickup-1" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex items-center space-x-3 rounded-lg border p-4 hover:border-primary/30 transition-all">
                    <RadioGroupItem value="pickup-1" id="pickup-1" />
                    <div className="flex-1">
                      <Label htmlFor="pickup-1" className="font-medium">
                        Today
                      </Label>
                      <p className="text-sm text-muted-foreground">4:00 PM - 8:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 rounded-lg border p-4 hover:border-primary/30 transition-all">
                    <RadioGroupItem value="pickup-2" id="pickup-2" />
                    <div className="flex-1">
                      <Label htmlFor="pickup-2" className="font-medium">
                        Tomorrow
                      </Label>
                      <p className="text-sm text-muted-foreground">10:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

