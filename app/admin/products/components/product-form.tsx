"use client"

import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Camera, Loader2, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const categories = [
  "Fruits",
  "Vegetables",
  "Dairy",
  "Bakery",
  "Meat",
  "Seafood",
  "Frozen Foods",
  "Snacks",
  "Beverages",
  "Canned Goods",
  "Dry Goods",
  "Condiments",
  "Dairy Alternatives",
  "Health Foods",
  "International Foods",
]

interface ProductFormProps {
  initialData?: any
}

export function ProductForm({ initialData }: ProductFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("basic")
  const [productData, setProductData] = useState({
    name: initialData?.name || "",
    description: initialData?.description || "",
    category: initialData?.category || "",
    price: initialData?.price || "",
    originalPrice: initialData?.originalPrice || "",
    discount: initialData?.discount || "",
    stock: initialData?.stock || "",
    status: initialData?.status || "In Stock",
    featured: initialData?.featured || false,
    tags: initialData?.tags || [],
    nutritionInfo: initialData?.nutritionInfo || {
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
      fiber: "",
    },
    origin: initialData?.origin || "",
    storageInstructions: initialData?.storageInstructions || "",
  })

  const [newTag, setNewTag] = useState("")
  const [imagePreview, setImagePreview] = useState(initialData?.image || "/placeholder.svg")

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      toast.success( initialData ? "Product updated" : "Product created", {
        description: `${productData.name} has been ${initialData ? "updated" : "added"} successfully.`,
      })
      router.push("/admin/products")
    }, 1500)
  }

  const handleChange = (field: string, value: string | boolean) => {
    setProductData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNestedChange = (parent: string, field: string, value: string) => {
    setProductData((prev) => ({
      ...prev,
      [parent]: {
        //@ts-ignore
        ...prev[parent],
        [field]: value,
      },
    }))
  }

  const handleImageUpload = (e: { target: { files: any[] } }) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const addTag = () => {
    if (newTag.trim() && !productData.tags.includes(newTag.trim())) {
      setProductData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }))
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: any) => {
    setProductData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag: any) => tag !== tagToRemove),
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-[1fr_250px]">
        <div className="space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="pricing">Pricing & Inventory</TabsTrigger>
              <TabsTrigger value="details">Additional Details</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4 pt-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input id="name" placeholder="Enter product name" value={productData.name}
                    onChange={(e) => handleChange("name", e.target.value)} required/>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter product description"
                    value={productData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={productData.category} onValueChange={(value) => handleChange("category", value)}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="featured"
                    checked={productData.featured}
                    onCheckedChange={(checked) => handleChange("featured", checked)}
                  />
                  <label htmlFor="featured"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Featured product
                  </label>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-4 pt-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input id="price" type="number" step="0.01" min="0" placeholder="0.00" value={productData.price}
                    onChange={(e) => handleChange("price", e.target.value)} required/>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="originalPrice">Original Price ($)</Label>
                  <Input
                    id="originalPrice"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                    value={productData.originalPrice}
                    onChange={(e) => handleChange("originalPrice", e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">Leave empty if there's no discount</p>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="discount">Discount (%)</Label>
                  <Input
                    id="discount"
                    type="number"
                    min="0"
                    max="100"
                    placeholder="0"
                    value={productData.discount}
                    onChange={(e) => handleChange("discount", e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="stock">Stock Quantity</Label>
                  <Input
                    id="stock"
                    type="number"
                    min="0"
                    placeholder="0"
                    value={productData.stock}
                    onChange={(e) => handleChange("stock", e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={productData.status} onValueChange={(value) => handleChange("status", value)}>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="In Stock">In Stock</SelectItem>
                      <SelectItem value="Low Stock">Low Stock</SelectItem>
                      <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="details" className="space-y-4 pt-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label>Tags</Label>
                  <div className="flex flex-wrap gap-2">
                    {productData.tags.map((tag: boolean | Key | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => (
                      <div key={tag} className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-sm">
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-1 rounded-full p-1 hover:bg-muted-foreground/20"
                        >
                          <X className="h-3 w-3" />
                          <span className="sr-only">Remove tag</span>
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a tag"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addTag()
                        }
                      }}
                    />
                    <Button type="button" variant="outline" size="icon" onClick={addTag}>
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Add tag</span>
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Nutrition Information</Label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="calories" className="text-xs">
                        Calories
                      </Label>
                      <Input
                        id="calories"
                        placeholder="e.g., 105"
                        value={productData.nutritionInfo.calories}
                        onChange={(e) => handleNestedChange("nutritionInfo", "calories", e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="protein" className="text-xs">
                        Protein
                      </Label>
                      <Input
                        id="protein"
                        placeholder="e.g., 1.3g"
                        value={productData.nutritionInfo.protein}
                        onChange={(e) => handleNestedChange("nutritionInfo", "protein", e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="carbs" className="text-xs">
                        Carbohydrates
                      </Label>
                      <Input
                        id="carbs"
                        placeholder="e.g., 27g"
                        value={productData.nutritionInfo.carbs}
                        onChange={(e) => handleNestedChange("nutritionInfo", "carbs", e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="fat" className="text-xs">
                        Fat
                      </Label>
                      <Input
                        id="fat"
                        placeholder="e.g., 0.4g"
                        value={productData.nutritionInfo.fat}
                        onChange={(e) => handleNestedChange("nutritionInfo", "fat", e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="fiber" className="text-xs">
                        Fiber
                      </Label>
                      <Input
                        id="fiber"
                        placeholder="e.g., 3.1g"
                        value={productData.nutritionInfo.fiber}
                        onChange={(e) => handleNestedChange("nutritionInfo", "fiber", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="grid gap-2">
                  <Label htmlFor="origin">Origin</Label>
                  <Input
                    id="origin"
                    placeholder="e.g., Local Farms, Imported, etc."
                    value={productData.origin}
                    onChange={(e) => handleChange("origin", e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="storageInstructions">Storage Instructions</Label>
                  <Textarea
                    id="storageInstructions"
                    placeholder="How to store this product"
                    value={productData.storageInstructions}
                    onChange={(e) => handleChange("storageInstructions", e.target.value)}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Product Image</Label>
                  <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted/20">
                    <Image
                      src={imagePreview || "/placeholder.svg"}
                      alt="Product preview"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity hover:opacity-100">
                      <Label
                        htmlFor="image-upload"
                        className="flex cursor-pointer items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                      >
                        <Camera className="h-4 w-4" />
                        Change Image
                      </Label>
                      <Input id="image-upload" type="file" accept="image/*" className="sr-only"/>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Upload a high-quality image to showcase your product.</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Product Summary</h3>
                  <div className="rounded-md bg-muted p-3">
                    <div className="text-xs">
                      <div className="font-medium">{productData.name || "Product Name"}</div>
                      <div className="mt-1 line-clamp-2 text-muted-foreground">
                        {productData.description || "Product description will appear here"}
                      </div>
                      <div className="mt-2">
                        <span className="font-medium">${Number(productData.price || 0).toFixed(2)}</span>
                        {productData.discount > 0 && (
                          <span className="ml-2 text-muted-foreground line-through">
                            ${Number(productData.originalPrice || 0).toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-2">
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {initialData ? "Update Product" : "Create Product"}
            </Button>
            <Button type="button" variant="outline" onClick={() => router.push("/admin/products")}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}