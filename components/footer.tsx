import { ShoppingBag } from "lucide-react";

export default function Footer(){
    return(
        <footer className="border-t bg-muted py-6">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">FreshCart</span>
            </div>
            <div className="text-center text-sm text-muted-foreground md:text-right">
              <p>© 2024 FreshCart. All rights reserved.</p>
              <p>Fresh groceries delivered to your doorstep</p>
            </div>
          </div>
        </div>
      </footer>
    )
}