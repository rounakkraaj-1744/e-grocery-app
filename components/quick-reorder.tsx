import { Clock, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const previousOrders = [
  {
    id: "ord-001",
    date: "Yesterday",
    items: [
      {
        id: 1,
        name: "Organic Milk",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=100&auto=format&fit=crop",
        price: 79,
      },
      {
        id: 2,
        name: "Whole Wheat Bread",
        image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=100&auto=format&fit=crop",
        price: 59,
      },
      {
        id: 3,
        name: "Eggs (12 pack)",
        image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=100&auto=format&fit=crop",
        price: 89,
      },
    ],
    total: 227,
  },
  {
    id: "ord-002",
    date: "Last week",
    items: [
      {
        id: 4,
        name: "Fresh Apples",
        image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=100&auto=format&fit=crop",
        price: 99,
      },
      {
        id: 5,
        name: "Chicken Breast",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=100&auto=format&fit=crop",
        price: 199,
      },
    ],
    total: 298,
  },
  {
    id: "ord-003",
    date: "2 weeks ago",
    items: [
      {
        id: 6,
        name: "Pasta Sauce",
        image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?q=80&w=100&auto=format&fit=crop",
        price: 89,
      },
      {
        id: 7,
        name: "Spaghetti",
        image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=100&auto=format&fit=crop",
        price: 49,
      },
      {
        id: 8,
        name: "Parmesan Cheese",
        image: "https://images.unsplash.com/photo-1566454825481-9c31bd88eac9?q=80&w=100&auto=format&fit=crop",
        price: 129,
      },
    ],
    total: 267,
  },
]

export default function QuickReorder() {
  return (
    <Card className="border-2 border-secondary/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl">
          <RefreshCw className="h-5 w-5 text-secondary" />
          Quick Reorder
        </CardTitle>
        <CardDescription>Easily reorder your previous purchases</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <div className="flex space-x-4">
            {previousOrders.map((order) => (
              <div key={order.id} className="w-[280px] shrink-0">
                <div className="rounded-lg border-2 border-muted bg-card p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{order.date}</span>
                    </div>
                    <span className="text-sm font-medium">₹{order.total.toFixed(2)}</span>
                  </div>
                  <div className="space-y-2">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-2">
                        <div className="h-10 w-10 overflow-hidden rounded-md bg-muted">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1 truncate text-sm">{item.name}</div>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="mt-3 w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    size="sm"
                  >
                    Reorder All
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

