import Link from "next/link"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    icon: "🍎",
    color: "bg-secondary/20",
    subcategories: [
      "Fresh Fruits",
      "Fresh Vegetables",
      "Herbs & Seasonings",
      "Organic",
      "Exotic Fruits",
      "Cut & Prepared",
    ],
  },
  {
    id: 2,
    name: "Dairy & Eggs",
    icon: "🥛",
    color: "bg-blue-100 dark:bg-blue-900/20",
    subcategories: ["Milk", "Butter & Cheese", "Curd & Yogurt", "Paneer & Tofu", "Eggs", "Plant-based Alternatives"],
  },
  {
    id: 3,
    name: "Bakery",
    icon: "🍞",
    color: "bg-amber-100 dark:bg-amber-900/20",
    subcategories: [
      "Bread",
      "Buns & Rolls",
      "Cakes & Pastries",
      "Cookies & Rusks",
      "Gourmet Bread",
      "Gluten-free Options",
    ],
  },
  {
    id: 4,
    name: "Meat & Seafood",
    icon: "🥩",
    color: "bg-red-100 dark:bg-red-900/20",
    subcategories: ["Chicken", "Mutton", "Fish & Seafood", "Marinades", "Cold Cuts", "Plant-based Meat"],
  },
  {
    id: 5,
    name: "Snacks",
    icon: "🍿",
    color: "bg-purple-100 dark:bg-purple-900/20",
    subcategories: ["Chips & Crisps", "Namkeen & Savory", "Cookies", "Chocolates", "Dry Fruits & Nuts", "Energy Bars"],
  },
  {
    id: 6,
    name: "Beverages",
    icon: "🥤",
    color: "bg-cyan-100 dark:bg-cyan-900/20",
    subcategories: ["Water", "Soft Drinks", "Juices", "Tea & Coffee", "Health Drinks", "Energy Drinks"],
  },
  {
    id: 7,
    name: "Breakfast & Cereal",
    icon: "🥣",
    color: "bg-yellow-100 dark:bg-yellow-900/20",
    subcategories: [
      "Cereals",
      "Oats & Porridge",
      "Breakfast Mixes",
      "Honey & Spreads",
      "Jams & Marmalade",
      "Breakfast Bars",
    ],
  },
  {
    id: 8,
    name: "Staples & Cooking",
    icon: "🌾",
    color: "bg-orange-100 dark:bg-orange-900/20",
    subcategories: ["Rice & Rice Products", "Atta & Flours", "Dals & Pulses", "Edible Oils", "Spices", "Sugar & Salt"],
  },
  {
    id: 9,
    name: "Sauces & Condiments",
    icon: "🍯",
    color: "bg-rose-100 dark:bg-rose-900/20",
    subcategories: ["Ketchup & Sauces", "Dips & Spreads", "Mayonnaise", "Vinegar", "Cooking Pastes", "Salad Dressings"],
  },
  {
    id: 10,
    name: "Frozen Foods",
    icon: "❄️",
    color: "bg-sky-100 dark:bg-sky-900/20",
    subcategories: [
      "Frozen Vegetables",
      "Ice Cream",
      "Frozen Snacks",
      "Frozen Desserts",
      "Ready-to-cook",
      "Frozen Fruits",
    ],
  },
  {
    id: 11,
    name: "Personal Care",
    icon: "🧴",
    color: "bg-pink-100 dark:bg-pink-900/20",
    subcategories: ["Bath & Body", "Hair Care", "Skin Care", "Oral Care", "Feminine Hygiene", "Men's Grooming"],
  },
  {
    id: 12,
    name: "Household",
    icon: "🧹",
    color: "bg-indigo-100 dark:bg-indigo-900/20",
    subcategories: [
      "Cleaning Supplies",
      "Detergents",
      "Kitchen Supplies",
      "Tissues & Rolls",
      "Repellents",
      "Fresheners",
    ],
  },
]

export default function CategorySection() {
  return (
    <div className="space-y-6">
      <ScrollArea className="w-full whitespace-nowrap pb-4">
        <div className="flex space-x-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="flex flex-col items-center rounded-lg p-4 text-center transition-colors hover:bg-muted/50"
            >
              <div className={`mb-3 flex h-16 w-16 items-center justify-center rounded-full ${category.color}`}>
                <span className="text-3xl">{category.icon}</span>
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.slice(0, 6).map((category) => (
          <Card key={category.id} className="overflow-hidden">
            <div className="flex items-center gap-4 p-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${category.color}`}>
                <span className="text-2xl">{category.icon}</span>
              </div>
              <div>
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.subcategories.length} subcategories</p>
              </div>
            </div>
            <CardContent className="border-t p-0">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 p-4 text-sm">
                {category.subcategories.map((subcat, index) => (
                  <li key={index}>
                    <Link
                      href={`/products?category=${category.id}&subcategory=${index}`}
                      className="text-muted-foreground hover:text-foreground hover:underline"
                    >
                      {subcat}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Link href="/categories" className="text-sm font-medium text-primary hover:underline">
          View All Categories
        </Link>
      </div>
    </div>
  )
}

