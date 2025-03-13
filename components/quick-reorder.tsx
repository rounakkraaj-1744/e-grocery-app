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
        image: "/placeholder.svg?height=80&width=80&text=Milk",
        price: 3.99,
      },
      {
        id: 2,
        name: "Whole Wheat Bread",
        image: "/placeholder.svg?height=80&width=80&text=Bread",
        price: 2.99,
      },
      {
        id: 3,
        name: "Eggs (12 pack)",
        image: "/placeholder.svg?height=80&width=80&text=Eggs",
        price: 3.49,
      },
    ],
    total: 10.47,
  },
  {
    id: "ord-002",
    date: "Last week",
    items: [
      {
        id: 4,
        name: "Fresh Apples",
        image: "/placeholder.svg?height=80&width=80&text=Apples",
        price: 4.99,
      },
      {
        id: 5,
        name: "Chicken Breast",
        image: "/placeholder.svg?height=80&width=80&text=Chicken",
        price: 7.99,
      },
    ],
    total: 12.98,
  },
  {
    id: "ord-003",
    date: "2 weeks ago",
    items: [
      {
        id: 6,
        name: "Pasta Sauce",
        image: "/placeholder.svg?height=80&width=80&text=Sauce",
        price: 3.49,
      },
      {
        id: 7,
        name: "Spaghetti",
        image: "/placeholder.svg?height=80&width=80&text=Pasta",
        price: 1.99,
      },
      {
        id: 8,
        name: "Parmesan Cheese",
        image: "/placeholder.svg?height=80&width=80&text=Cheese",
        price: 4.99,
      },
    ],
    total: 10.47,
  },
]

export default function QuickReorder() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl">
          <RefreshCw className="h-5 w-5 text-primary" />
          Quick Reorder
        </CardTitle>
        <CardDescription>Easily reorder your previous purchases</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <div className="flex space-x-4">
            {previousOrders.map((order) => (
              <div key={order.id} className="w-[280px] shrink-0">
                <div className="rounded-lg border bg-card p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{order.date}</span>
                    </div>
                    <span className="text-sm font-medium">${order.total.toFixed(2)}</span>
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
                  <Button className="mt-3 w-full" size="sm">
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

