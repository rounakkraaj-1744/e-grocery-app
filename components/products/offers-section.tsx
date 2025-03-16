"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Copy, CheckCircle2, Tag, Percent, Gift } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

const offers = [
  {
    id: 1,
    title: "Weekend Special",
    description: "Get 15% off on all orders above ₹1000",
    code: "WEEKEND15",
    discount: "15%",
    minOrder: "₹1000",
    expiryDate: "2025-05-31",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    id: 2,
    title: "First Order",
    description: "Get ₹200 off on your first order",
    code: "FIRST200",
    discount: "₹200",
    minOrder: "₹500",
    expiryDate: "2025-12-31",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/30",
  },
  {
    id: 3,
    title: "Free Delivery",
    description: "Free delivery on all orders above ₹750",
    code: "FREEDEL",
    discount: "Free Delivery",
    minOrder: "₹750",
    expiryDate: "2025-06-15",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
  },
  {
    id: 4,
    title: "Refer a Friend",
    description: "Get ₹100 for each friend you refer",
    code: "REFER100",
    discount: "₹100",
    minOrder: "No minimum",
    expiryDate: "2025-12-31",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
  },
]

export default function OffersSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [expiryDates, setExpiryDates] = useState<string[]>(
    offers.map((offer) => {
      const date = new Date(offer.expiryDate)
      return date.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })
    }),
  )

  const copyToClipboard = (code: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code)
      setCopiedCode(code)
      toast.success("Coupon code copied!",{
        description: `${code} has been copied to your clipboard.`,
      })
      setTimeout(() => setCopiedCode(null), 2000)
    }
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="section-title">Special Offers</h2>
        <Link href="/offers" className="view-all-link">
          View All Offers
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {offers.map((offer, index) => (
          <motion.div key={offer.id} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
            <Card
              className={`overflow-hidden border-2 border-transparent hover:border-primary/30 transition-all duration-300 ${offer.bgColor}`}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`bg-gradient-to-r ${offer.color} text-white`}>{offer.discount} OFF</Badge>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>Expires: {expiryDates[index]}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold">{offer.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{offer.description}</p>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 rounded-md bg-background/80 backdrop-blur p-2 border border-border">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-sm font-mono font-medium">{offer.code}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-auto h-6 px-2 text-xs hover:bg-primary hover:text-primary-foreground"
                      onClick={() => copyToClipboard(offer.code)}
                    >
                      {copiedCode === offer.code ? (
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                      ) : (
                        <Copy className="h-3 w-3 mr-1" />
                      )}
                      {copiedCode === offer.code ? "Copied" : "Copy"}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Percent className="h-3 w-3" />
                      <span>Min: {offer.minOrder}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Gift className="h-3 w-3 text-primary" />
                      <span>Apply at checkout</span>
                    </div>
                  </div>
                </div>

                <Button
                  className="mt-3 w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-glow transition-shadow text-xs h-8"
                  asChild
                >
                  <Link href="/offers">Apply Offer</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

