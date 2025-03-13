import { ShoppingBag, Link } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";

export default function Header (){
    return(
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between py-4">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">FreshCart</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Link href="/cart">
                      <Button variant="outline" size="icon" className="relative">
                        <ShoppingBag className="h-5 w-5" />
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                          3
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </header>
    );
}