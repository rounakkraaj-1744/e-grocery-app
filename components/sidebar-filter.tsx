"use client"

import { useState } from "react"
import { ChevronRight, Star } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function SidebarFilter() {
  const [priceRange, setPriceRange] = useState([49, 199])
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  const toggleCategory = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((c) => c !== category))
    } else {
      setExpandedCategories([...expandedCategories, category])
    }
  }

  const categories = [
    {
      name: "Dairy, Bread & Eggs",
      id: "dairy-bread-eggs",
      icon: "🥛",
      subcategories: [
        "Milk",
        "Milk Drinks",
        "Curd & Yogurt",
        "Eggs",
        "Bread",
        "Buns & Bakery",
        "Butter & More",
        "Cheese",
        "Paneer & Tofu",
        "Cream & Whitener",
        "Condensed Milk",
        "Vegan Drinks",
      ],
    },
    {
      name: "Snacks & Munchies",
      id: "snacks-munchies",
      icon: "🍿",
      subcategories: [
        "Chips & Crisps",
        "Nachos",
        "Popcorn",
        "Bhujia & Mixtures",
        "Namkeen Snacks",
        "Healthy Snacks",
        "Cakes & Rolls",
        "Energy Bars",
        "Papad & Fryums",
        "Rusks & Wafers",
      ],
    },
    {
      name: "Fruits & Vegetables",
      id: "fruits-vegetables",
      icon: "🍎",
      subcategories: [
        "Fresh Vegetables",
        "Herbs & Seasonings",
        "Fresh Fruits",
        "Organic Fruits & Vegetables",
        "Cuts & Sprouts",
        "Exotic Fruits & Veggies",
        "Flower Bouquets, Bunches",
      ],
    },
    {
      name: "Cold Drinks & Juices",
      id: "cold-drinks-juices",
      icon: "🥤",
      subcategories: [
        "Soft Drinks",
        "Fruit Juices",
        "Coldpress",
        "Energy Drinks",
        "Water & Ice Cubes",
        "Soda & Mixers",
        "Concentrates & Syrups",
        "Detox & Energy Drinks",
        "Juice Collection",
      ],
    },
    {
      name: "Baby Care",
      id: "baby-care",
      icon: "👶",
      subcategories: [
        "Baby Food",
        "Diapers & Wipes",
        "Baby Bath & Hygiene",
        "Baby Accessories",
        "Infant Formula",
        "Baby Clothing",
      ],
    },
    {
      name: "Bakery & Biscuits",
      id: "bakery-biscuits",
      icon: "🍪",
      subcategories: [
        "Cookies",
        "Glucose & Marie",
        "Sweet & Salty",
        "Healthy & Digestive",
        "Cream Biscuits",
        "Rusks & Wafers",
        "Cakes & Rolls",
        "Buns & Bakery",
      ],
    },
    {
      name: "Chicken, Meat & Fish",
      id: "chicken-meat-fish",
      icon: "🍗",
      subcategories: ["Chicken", "Sausage, Salami & Ham", "Exotic Meat", "Eggs", "Frozen Non-Veg Snacks"],
    },
  ]

  const stores = ["E-Grocery", "DealShare", "DMart", "Blinkit", "BigBasket", "StoreFront", "Spencers", "Online Grocery"]

  const ratings = [5, 4, 3, 2, 1]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Categories</h3>
        <div className="space-y-1 rounded-lg border overflow-hidden">
          {categories.map((category) => (
            <div key={category.id} className="border-b last:border-b-0">
              <button className="flex w-full items-center justify-between py-3 px-4 text-left hover:text-primary transition-colors"
                onClick={() => toggleCategory(category.id)}>
                <div className="flex items-center gap-2">
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                </div>
                <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${expandedCategories.includes(category.id) ? "rotate-90" : ""}`}
                />
              </button>

              {expandedCategories.includes(category.id) && (
                <div className="bg-muted/20 transition-all duration-150">
                  {category.subcategories.map((sub) => (
                    <Link href={`/categories/${category.id}/${sub.toLowerCase().replace(/\s+/g, "-")}`} key={sub}
                      className="block w-full py-2 px-4 pl-10 text-left text-sm hover:bg-muted/30 hover:text-primary transition-colors">
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-medium mb-4">Stores</h3>
        <div className="mb-3">
          <Input placeholder="Search by store" className="border-primary/20 focus-visible:ring-primary/30" />
        </div>
        <div className="space-y-2">
          {stores.map((store) => (
            <div key={store} className="flex items-center space-x-2">
              <Checkbox id={`store-${store}`} defaultChecked={store === "E-Grocery"} />
              <Label htmlFor={`store-${store}`} className="text-sm">
                {store}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-medium mb-4">Price</h3>
        <Slider defaultValue={priceRange} max={500} min={0} step={1} onValueChange={(value) => setPriceRange(value as number[])} className="py-4"/>
        <div className="mt-2 text-sm">
          Price: ₹{priceRange[0]} - ₹{priceRange[1]}
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-medium mb-4">Rating</h3>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={`rating-${rating}`} defaultChecked={rating === 4} />
              <Label htmlFor={`rating-${rating}`} className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}/>
                ))}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}