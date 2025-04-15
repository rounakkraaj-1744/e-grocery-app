"use client"

import { useParams } from "next/navigation"
import { ProductForm } from "../../components/product-form"

export default function EditProductPage() {
  const params = useParams()
  const productId = params.id as string

  const product = {
    id: productId,
    name: "Organic Bananas",
    description: "Fresh organic bananas sourced from local farmers. Perfect for smoothies, baking, or a quick snack.",
    category: "Fruits",
    price: 1.99,
    originalPrice: 2.49,
    discount: 20,
    stock: 150,
    status: "In Stock",
    image: "/placeholder.svg",
    featured: true,
    tags: ["organic", "fruit", "fresh"],
    nutritionInfo: {
      calories: 105,
      protein: "1.3g",
      carbs: "27g",
      fat: "0.4g",
      fiber: "3.1g",
    },
    origin: "Local Farms",
    storageInstructions: "Store at room temperature. Refrigerate to slow ripening.",
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold tracking-tight">Edit Product</h1>
      <ProductForm initialData={product} />
    </div>
  )
}
