"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { motion } from "framer-motion"

export function DownloadApp() {
  const [contactMethod, setContactMethod] = useState("phone")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="bg-muted/30 py-16 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="flex justify-center">
            <motion.div className="relative max-w-[300px]" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
              viewport={{ once: true }}>
              <div className="relative z-10">
                <svg width="300" height="600" viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="300" height="600" rx="40" fill="#111827" />
                  <rect x="10" y="10" width="280" height="580" rx="32" fill="#ffffff" />
                </svg>
              </div>
              <div className="absolute top-[60px] left-[10px] right-[10px] bottom-[60px] overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eVXCdp5LYHN8V0OoKNJ2V8lnI2QoUj.png"
                  alt="FreshCart Mobile App"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-xl z-20"></div>

              <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 w-[100px] h-[5px] bg-black rounded-full z-20"></div>

              <motion.div
                className="absolute -right-10 -top-10 w-20 h-20 bg-primary/10 rounded-full z-0"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}/>

              <motion.div className="absolute -left-5 bottom-20 w-12 h-12 bg-secondary/20 rounded-full z-0"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                }} />
            </motion.div>
          </div>

          <motion.div className="space-y-6" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }} >
            <div>
              <h2 className="text-3xl font-bold mb-2 gradient-text">Get the FreshCart app</h2>
              <p className="text-muted-foreground">
                We will send you a link, open it on your phone to download the app.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <RadioGroup defaultValue="phone" value={contactMethod} onValueChange={setContactMethod} className="flex gap-4 mb-4" >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email" />
                  <Label htmlFor="email">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="phone" />
                  <Label htmlFor="phone">Phone</Label>
                </div>
              </RadioGroup>

              <div className="flex gap-2">
                <Input type={contactMethod === "phone" ? "tel" : "email"}
                  placeholder={contactMethod === "phone" ? "Enter your phone number" : "Enter your email"}
                  className="border-primary/20 focus-visible:ring-primary/30" />
                <Button type="submit" className="bg-primary hover:bg-primary/90 whitespace-nowrap"  disabled={isSubmitting} >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
                      Sending...
                    </>
                  ) : ("Share app link")}
                </Button>
              </div>
            </form>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Download app from</p>
              <div className="flex gap-4">
                <a href="#" className="block transition-transform">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png"
                    alt="App Store" className="h-10"/>
                </a>
                <a href="#" className="block transition-transform">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png"
                    alt="Google Play" className="h-10"/>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}