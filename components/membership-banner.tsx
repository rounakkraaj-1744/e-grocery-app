import { Award, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MembershipBanner() {
  return (
    <div className="relative overflow-hidden rounded-lg border-2 border-accent/30 bg-card">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/10" />
      <div className="relative z-10 grid gap-4 p-6 md:grid-cols-[1fr_200px] md:gap-8 md:p-8">
        <div className="flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-2">
            <Award className="h-6 w-6 text-accent" />
            <h2 className="text-xl font-bold md:text-2xl">FreshCart Premium</h2>
          </div>
          <p className="text-muted-foreground">Join our premium membership program and enjoy exclusive benefits</p>
          <ul className="grid gap-2 text-sm">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              <span>Free delivery on all orders</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              <span>5% cashback on every purchase</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              <span>Early access to deals and promotions</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              <span>Priority customer support</span>
            </li>
          </ul>
          <Button className="w-fit bg-accent text-accent-foreground hover:bg-accent/90">Join Premium</Button>
        </div>
        <div className="hidden md:flex md:items-center md:justify-end">
          <div className="aspect-square w-36 rounded-full bg-accent/20 p-2">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-accent/30">
              <span className="text-5xl">🏆</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

