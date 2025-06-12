import { ProductForm } from "../components/product-form"

export default function NewProductPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold tracking-tight">Add New Product</h1>
      <ProductForm />
    </div>
  )
}