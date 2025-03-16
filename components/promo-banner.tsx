"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

// Mock Promotions
const promos = [
  {
    id: 1,
    title: "Summer Fruits Festival",
    description: "Enjoy 20% off on all seasonal summer fruits. Limited time offer!",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2070&auto=format&fit=crop",
    badge: "20% OFF",
    color: "from-orange-500/70 to-amber-500/70",
    textColor: "text-white dark:text-white",
    link: "/offers/summer-fruits",
    expiryDate: "2025-06-30",
  },
  {
    id: 2,
    title: "Organic Week Special",
    description: "Buy any 3 organic products and get 1 free. Pure and natural goodness!",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2070&auto=format&fit=crop",
    badge: "BUY 3 GET 1",
    color: "from-green-500/70 to-emerald-500/70",
    textColor: "text-white dark:text-white",
    link: "/offers/organic-week",
    expiryDate: "2025-05-15",
  },
  {
    id: 3,
    title: "Premium Meat Festival",
    description: "Up to 15% off on premium meat cuts. Perfect for your weekend BBQ!",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2070&auto=format&fit=crop",
    badge: "15% OFF",
    color: "from-red-500/70 to-rose-500/70",
    textColor: "text-white dark:text-white",
    link: "/offers/meat-festival",
    expiryDate: "2025-07-10",
  },
]

export default function PromoBanner() {
  const [currentPromo, setCurrentPromo] = useState(0)
  const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const promo = promos[currentPromo]
      const difference = new Date(promo.expiryDate).getTime() - new Date().getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

        setTimeLeft(`${days}d ${hours}h left`)
      }
      else 
        setTimeLeft("Expired")
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 60000)

    return () => clearInterval(timer)
  }, [currentPromo])

  const promo = promos[currentPromo]

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.div key={promo.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} className="relative">
          <div className="relative aspect-[21/9] overflow-hidden">
            <img src={promo.image || "/placeholder.svg"} alt={promo.title} className="h-full w-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-r ${promo.color} mix-blend-multiply`} />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-6 md:px-12 lg:w-2/3">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-4">
                <Badge className="bg-white text-foreground dark:bg-white dark:text-foreground">{promo.badge}</Badge>
                <h2 className={`text-2xl font-bold ${promo.textColor} md:text-4xl`}>{promo.title}</h2>
                <p className={`${promo.textColor} md:text-lg`}>{promo.description}</p>

                <div className="flex items-center gap-4">
                  <Button asChild size="lg"
                    className="bg-white text-foreground hover:bg-white/90 dark:bg-white dark:text-foreground dark:hover:bg-white/90"
                  >
                    <Link href={promo.link}>
                      Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <div className="flex items-center gap-1 rounded-full bg-black/30 px-3 py-1 text-sm text-white backdrop-blur-sm">
                    <Clock className="h-4 w-4" />
                    <span>{timeLeft}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {promos.map((_, index) => (
          <button key={index} className={`h-2 w-2 rounded-full transition-all ${currentPromo === index ? "w-8 bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentPromo(index)}/>
        ))}
      </div>
    </div>
  )
}