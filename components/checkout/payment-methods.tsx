"use client"

import { useState } from "react"
import { CreditCard, Landmark, Wallet, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function PaymentMethods() {
  const [paymentMethod, setPaymentMethod] = useState("card")

  return (
    <Card className="border-2 border-primary/10 bg-card/50 backdrop-blur">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl">
          <CreditCard className="h-5 w-5 text-primary" />
          Payment Method
        </CardTitle>
        <CardDescription>Choose how you want to pay</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
          <div className="flex flex-col space-y-4">
            <div className="flex items-start space-x-3 rounded-lg border p-4 hover:border-primary/30 transition-colors">
              <RadioGroupItem value="card" id="card" className="mt-1" />
              <div className="flex-1">
                <Label htmlFor="card" className="flex items-center gap-2 font-medium">
                  <CreditCard className="h-4 w-4 text-primary" />
                  Credit/Debit Card
                </Label>

                {paymentMethod === "card" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input
                        id="card-number"
                        placeholder="1234 5678 9012 3456"
                        className="border-primary/20 focus-visible:ring-primary/30"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          className="border-primary/20 focus-visible:ring-primary/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" className="border-primary/20 focus-visible:ring-primary/30" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Your card details are secure and encrypted</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            <div className="flex items-start space-x-3 rounded-lg border p-4 hover:border-primary/30 transition-colors">
              <RadioGroupItem value="upi" id="upi" className="mt-1" />
              <div className="flex-1">
                <Label htmlFor="upi" className="flex items-center gap-2 font-medium">
                  <Wallet className="h-4 w-4 text-primary" />
                  UPI Payment
                </Label>

                {paymentMethod === "upi" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="upi-id">UPI ID</Label>
                      <Input
                        id="upi-id"
                        placeholder="username@upi"
                        className="border-primary/20 focus-visible:ring-primary/30"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="flex flex-col items-center justify-center rounded-md border p-2 hover:border-primary/30 cursor-pointer">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png"
                          alt="Google Pay"
                          className="h-8"
                        />
                        <span className="text-xs mt-1">GPay</span>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-md border p-2 hover:border-primary/30 cursor-pointer">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/512px-Paytm_Logo_%28standalone%29.svg.png"
                          alt="Paytm"
                          className="h-8"
                        />
                        <span className="text-xs mt-1">Paytm</span>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-md border p-2 hover:border-primary/30 cursor-pointer">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/512px-UPI-Logo-vector.svg.png"
                          alt="PhonePe"
                          className="h-8"
                        />
                        <span className="text-xs mt-1">PhonePe</span>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-md border p-2 hover:border-primary/30 cursor-pointer">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Bhim_UPI_Logo.svg/512px-Bhim_UPI_Logo.svg.png"
                          alt="BHIM"
                          className="h-8"
                        />
                        <span className="text-xs mt-1">BHIM</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            <div className="flex items-start space-x-3 rounded-lg border p-4 hover:border-primary/30 transition-colors">
              <RadioGroupItem value="banking" id="banking" className="mt-1" />
              <div className="flex-1">
                <Label htmlFor="banking" className="flex items-center gap-2 font-medium">
                  <Landmark className="h-4 w-4 text-primary" />
                  Net Banking
                </Label>

                {paymentMethod === "banking" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="bank">Select Bank</Label>
                      <select
                        id="bank"
                        className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select your bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="kotak">Kotak Mahindra Bank</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </RadioGroup>

        <div className="mt-6">
          <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-glow transition-shadow">
            Pay Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

