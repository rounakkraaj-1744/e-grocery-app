import Link from "next/link"
import { Tag } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"

const offers = [
  {
    id: 1,
    title: "20% OFF on First Order",
    code: "FRESH20",
    description: "Use code FRESH20 at checkout",
    expiryDate: "Valid till June 30, 2024",
    color: "bg-primary/10 border-primary/20",
    textColor: "text-primary",
  },
  {
    id: 2,
    title: "Free Delivery",
    code: "FREEDEL",
    description: "On orders above ₹500",
    expiryDate: "Valid till June 15, 2024",
    color: "bg-secondary/10 border-secondary/20",
    textColor: "text-secondary-foreground",
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Free",
    code: "B1G1FREE",
    description: "On selected fruits",
    expiryDate: "Valid for this weekend only",
    color: "bg-accent/10 border-accent/20",
    textColor: "text-accent-foreground",
  },
  {
    id: 4,
    title: "15% OFF on Dairy",
    code: "DAIRY15",
    description: "On all dairy products",
    expiryDate: "Valid till June 20, 2024",
    color: "bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800/30",
    textColor: "text-blue-700 dark:text-blue-300",
  },
  {
    id: 5,
    title: "10% Cashback",
    code: "CASHBACK10",
    description: "On all orders above ₹1000",
    expiryDate: "Valid till end of month",
    color: "bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-800/30",
    textColor: "text-green-700 dark:text-green-300",
  },
]

export default function OffersSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Tag className="h-5 w-5 text-accent" />
        <h2 className="text-xl font-bold">Offers & Promotions</h2>
      </div>

      <ScrollArea className="w-full pb-4">
        <div className="flex space-x-4">
          {offers.map((offer) => (
            <Card key={offer.id} className={`w-[280px] shrink-0 border-2 ${offer.color}`}>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className={`font-bold ${offer.textColor}`}>{offer.title}</h3>
                  <div className="flex items-center gap-2">
                    <div className="rounded-md border border-dashed border-muted-foreground/50 bg-background px-2 py-1 text-sm font-mono font-bold">
                      {offer.code}
                    </div>
                    <button className="text-xs text-primary hover:underline">Copy</button>
                  </div>
                  <p className="text-sm text-muted-foreground">{offer.description}</p>
                  <p className="text-xs text-muted-foreground">{offer.expiryDate}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="flex justify-center">
        <Link
          href="/offers"
          className="rounded-full bg-accent px-6 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
        >
          View All Offers
        </Link>
      </div>
    </div>
  )
}

