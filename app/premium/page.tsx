import Link from "next/link"
import { Award, Check, ChevronLeft, Crown, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ThemeToggle from "@/components/theme-toggle"

export default function PremiumPage() {
  const plans = [
    {
      name: "Monthly",
      price: "₹199",
      description: "Perfect for trying out premium benefits",
      features: [
        "Free delivery on all orders",
        "5% cashback on every purchase",
        "Early access to deals and promotions",
        "Priority customer support",
      ],
      popular: false,
      color: "border-primary/20 bg-primary/5 hover:bg-primary/10",
      buttonColor: "bg-primary hover:bg-primary/90",
    },
    {
      name: "Yearly",
      price: "₹1,999",
      description: "Our most popular plan with the best value",
      features: [
        "Free delivery on all orders",
        "10% cashback on every purchase",
        "Early access to deals and promotions",
        "Priority customer support",
        "Exclusive monthly offers",
        "Free premium recipe collection",
      ],
      popular: true,
      color: "border-accent/30 bg-accent/5 hover:bg-accent/10",
      buttonColor: "bg-accent hover:bg-accent/90 text-accent-foreground",
    },
    {
      name: "Family",
      price: "₹2,999",
      description: "Share premium benefits with your family",
      features: [
        "Free delivery on all orders",
        "10% cashback on every purchase",
        "Early access to deals and promotions",
        "Priority customer support",
        "Exclusive monthly offers",
        "Free premium recipe collection",
        "Up to 4 family member accounts",
      ],
      popular: false,
      color: "border-secondary/20 bg-secondary/5 hover:bg-secondary/10",
      buttonColor: "bg-secondary hover:bg-secondary/90 text-secondary-foreground",
    },
  ]

  const benefits = [
    {
      title: "Free Delivery",
      description: "Enjoy free delivery on all your orders with no minimum order value",
      icon: <Zap className="h-6 w-6 text-primary" />,
    },
    {
      title: "Premium Cashback",
      description: "Earn up to 10% cashback on every purchase you make",
      icon: <Crown className="h-6 w-6 text-accent" />,
    },
    {
      title: "Priority Support",
      description: "Get priority customer support and dedicated assistance",
      icon: <Shield className="h-6 w-6 text-secondary" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <ChevronLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/account" className="hidden md:block text-sm font-medium hover:text-primary">
              My Account
            </Link>
            <ThemeToggle />
            <Link href="/cart">
              <Button variant="outline" size="icon" className="relative cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" className="h-5 w-5">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="bg-red-500 absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white">
                  3
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="items-center justify-center pb-12 pt-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                <Award className="mr-1 h-4 w-4" />
                FreshCart Premium
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">Elevate Your Shopping Experience</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Join FreshCart Premium and enjoy exclusive benefits like free delivery, cashback on purchases, and early
              access to deals and promotions.
            </p>
          </div>

          <div className="mb-16 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-muted p-3">{benefit.icon}</div>
                <h3 className="mb-2 text-xl font-medium">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="mb-6 text-center text-3xl font-bold">Choose Your Plan</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative overflow-hidden border-2 transition-all ${plan.color}`}>
                  {plan.popular && (
                    <div className="absolute right-0 top-0 bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.name !== "Monthly" && <span className="text-muted-foreground"> / year</span>}
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className={`w-full ${plan.buttonColor}`}>
                      {plan.popular ? "Get Started" : "Subscribe"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="rounded-lg border-2 border-muted bg-card p-6 text-center">
            <h3 className="mb-2 text-xl font-medium">100% Satisfaction Guarantee</h3>
            <p className="text-muted-foreground">
              Try FreshCart Premium risk-free. If you're not completely satisfied, we'll refund your subscription within
              the first 14 days.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

