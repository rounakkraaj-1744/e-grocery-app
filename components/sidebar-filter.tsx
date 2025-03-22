"use client"

import { useState } from "react"
import { ChevronRight, Star } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
            subcategories: [],
        },
        {
            name: "Snacks & Munchies",
            id: "snacks-munchies",
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
            subcategories: [],
        },
        {
            name: "Cold Drinks & Juices",
            id: "cold-drinks-juices",
            subcategories: [],
        },
        {
            name: "Breakfast & Instant Food",
            id: "breakfast-instant",
            subcategories: [],
        },
        {
            name: "Bakery & Biscuits",
            id: "bakery-biscuits",
            subcategories: [],
        },
        {
            name: "Chicken, Meat & Fish",
            id: "chicken-meat-fish",
            subcategories: [],
        },
    ]

    const stores = ["E-Grocery", "DealShare", "DMart", "Blinkit", "BigBasket", "StoreFront", "Spencers", "Online Grocery"]

    const ratings = [5, 4, 3, 2, 1]

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium mb-4">Categories</h3>
                <div className="space-y-1">
                    {categories.map((category) => (
                        <div key={category.id}>
                            <button className="flex w-full items-center justify-between py-2 text-left hover:text-primary transition-colors" onClick={() => toggleCategory(category.id)}>
                                <span>{category.name}</span>
                                {category.subcategories.length > 0 && (
                                    <ChevronRight
                                        className={`h-4 w-4 transition-transform ${expandedCategories.includes(category.id) ? "rotate-90" : ""}`}
                                    />
                                )}
                            </button>

                            {expandedCategories.includes(category.id) && category.subcategories.length > 0 && (
                                <div className="ml-4 mt-1 space-y-1 border-l pl-4">
                                    {category.subcategories.map((sub) => (
                                        <button key={sub} className="block w-full py-1.5 text-left text-sm hover:text-primary transition-colors">
                                            {sub}
                                        </button>
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
                                    <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`} />
                                ))}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

