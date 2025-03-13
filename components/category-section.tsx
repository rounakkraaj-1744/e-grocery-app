import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    icon: "🍎",
    color: "bg-green-100 dark:bg-green-900/20 border-green-300 dark:border-green-800",
    subcategories: [
      "Fresh Fruits",
      "Fresh Vegetables",
      "Herbs & Seasonings",
      "Organic",
      "Exotic Fruits",
      "Cut & Prepared",
    ],
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Dairy & Eggs",
    icon: "🥛",
    color: "bg-blue-100 dark:bg-blue-900/20 border-blue-300 dark:border-blue-800",
    subcategories: ["Milk", "Butter & Cheese", "Curd & Yogurt", "Paneer & Tofu", "Eggs", "Plant-based Alternatives"],
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Bakery",
    icon: "🍞",
    color: "bg-amber-100 dark:bg-amber-900/20 border-amber-300 dark:border-amber-800",
    subcategories: [
      "Bread",
      "Buns & Rolls",
      "Cakes & Pastries",
      "Cookies & Rusks",
      "Gourmet Bread",
      "Gluten-free Options",
    ],
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Meat & Seafood",
    icon: "🥩",
    color: "bg-red-100 dark:bg-red-900/20 border-red-300 dark:border-red-800",
    subcategories: ["Chicken", "Mutton", "Fish & Seafood", "Marinades", "Cold Cuts", "Plant-based Meat"],
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Snacks",
    icon: "🍿",
    color: "bg-purple-100 dark:bg-purple-900/20 border-purple-300 dark:border-purple-800",
    subcategories: ["Chips & Crisps", "Namkeen & Savory", "Cookies", "Chocolates", "Dry Fruits & Nuts", "Energy Bars"],
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Beverages",
    icon: "🥤",
    color: "bg-cyan-100 dark:bg-cyan-900/20 border-cyan-300 dark:border-cyan-800",
    subcategories: ["Water", "Soft Drinks", "Juices", "Tea & Coffee", "Health Drinks", "Energy Drinks"],
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Breakfast & Cereal",
    icon: "🥣",
    color: "bg-yellow-100 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-800",
    subcategories: [
      "Cereals",
      "Oats & Porridge",
      "Breakfast Mixes",
      "Honey & Spreads",
      "Jams & Marmalade",
      "Breakfast Bars",
    ],
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Staples & Cooking",
    icon: "🌾",
    color: "bg-orange-100 dark:bg-orange-900/20 border-orange-300 dark:border-orange-800",
    subcategories: ["Rice & Rice Products", "Atta & Flours", "Dals & Pulses", "Edible Oils", "Spices", "Sugar & Salt"],
    image: "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Sauces & Condiments",
    icon: "🍯",
    color: "bg-rose-100 dark:bg-rose-900/20 border-rose-300 dark:border-rose-800",
    subcategories: ["Ketchup & Sauces", "Dips & Spreads", "Mayonnaise", "Vinegar", "Cooking Pastes", "Salad Dressings"],
    image: "https://images.unsplash.com/photo-1563599175592-c58dc214deff?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Frozen Foods",
    icon: "❄️",
    color: "bg-sky-100 dark:bg-sky-900/20 border-sky-300 dark:border-sky-800",
    subcategories: [
      "Frozen Vegetables",
      "Ice Cream",
      "Frozen Snacks",
      "Frozen Desserts",
      "Ready-to-cook",
      "Frozen Fruits",
    ],
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Personal Care",
    icon: "🧴",
    color: "bg-pink-100 dark:bg-pink-900/20 border-pink-300 dark:border-pink-800",
    subcategories: ["Bath & Body", "Hair Care", "Skin Care", "Oral Care", "Feminine Hygiene", "Men's Grooming"],
    image: "https://images.unsplash.com/photo-1631730359585-5e3aa7a6de0c?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "Household",
    icon: "🧹",
    color: "bg-indigo-100 dark:bg-indigo-900/20 border-indigo-300 dark:border-indigo-800",
    subcategories: [
      "Cleaning Supplies",
      "Detergents",
      "Kitchen Supplies",
      "Tissues & Rolls",
      "Repellents",
      "Fresheners",
    ],
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=300&auto=format&fit=crop",
  },
]

export default function CategorySection() {
  return (
    <div className="flex flex-col space-y-8">
      {/* Icon grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center">
        {categories.map((category) => (
          <Link key={category.id} href={`/products?category=${category.id}`} className="group">
            <div
              className={`flex flex-col items-center rounded-xl border-2 p-4 text-center transition-all hover:shadow-md ${category.color}`}
            >
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/80 shadow-sm">
                <span className="text-3xl">{category.icon}</span>
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured categories with subcategories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.slice(0, 6).map((category) => (
          <Card key={category.id} className={`overflow-hidden border-2 ${category.color}`}>
            <div className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                <span className="text-2xl">{category.icon}</span>
              </div>
              <div>
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.subcategories.length} subcategories</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-0">
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="border-l p-0">
                <ul className="grid grid-rows-3 gap-y-2 p-4 text-sm">
                  {category.subcategories.slice(0, 3).map((subcat, index) => (
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
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="/categories"
          className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          View All Categories
        </Link>
      </div>
    </div>
  )
}

