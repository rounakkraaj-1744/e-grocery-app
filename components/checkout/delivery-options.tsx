"use client"

import { useState } from "react"
import { CalendarClock, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl">
          <CalendarClock className="h-5 w-5 text-primary" />
          Delivery Options
        </CardTitle>
        <CardDescription>Choose when and where to receive your order</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="delivery" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="delivery">Delivery</TabsTrigger>
            <TabsTrigger value="pickup">Pickup</TabsTrigger>
          </TabsList>
          <TabsContent value="delivery" className="space-y-4 pt-4">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <h3 className="font-medium">Delivery Address</h3>
              </div>
              <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress} className="space-y-2">
                {addresses.map((address) => (
                  <div key={address.id} className="flex items-start space-x-2 rounded-md border p-3">
                    <RadioGroupItem value={address.id} id={address.id} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={address.id} className="flex items-center gap-2 font-medium">
                        {address.name}
                        {address.default && (
                          <span className="rounded-full bg-secondary/20 px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                            Default
                          </span>
                        )}
                      </Label>
                      <p className="text-sm text-muted-foreground">{address.address}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  + Add New Address
                </Button>
              </RadioGroup>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <h3 className="font-medium">Delivery Time</h3>
              </div>
              <RadioGroup
                value={selectedSlot}
                onValueChange={setSelectedSlot}
                className="grid grid-cols-1 gap-2 sm:grid-cols-2"
              >
                {deliverySlots.map((slot) => (
                  <div
                    key={slot.id}
                    className={`flex items-center space-x-2 rounded-md border p-3 ${!slot.available ? "opacity-50" : ""}`}
                  >
                    <RadioGroupItem value={slot.id} id={slot.id} disabled={!slot.available} />
                    <div className="flex-1">
                      <Label
                        htmlFor={slot.id}
                        className={`font-medium ${!slot.available ? "text-muted-foreground" : ""}`}
                      >
                        {slot.day}
                      </Label>
                      <p className="text-sm text-muted-foreground">{slot.time}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </TabsContent>
          <TabsContent value="pickup" className="pt-4">
            <div className="rounded-md border p-4 text-center">
              <p className="text-muted-foreground">Select a store location for pickup</p>
              <Button variant="outline" size="sm" className="mt-2">
                Find Nearby Stores
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}