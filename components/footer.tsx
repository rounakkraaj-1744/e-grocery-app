import Link from "next/link"
import {
  ShoppingBag,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Shield,
  Truck,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-muted/30 pt-12 pb-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold gradient-text">FreshCart</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              FreshCart delivers premium quality groceries right to your doorstep in Berhampur, Odisha. Enjoy fresh
              produce, pantry essentials, and specialty items with fast delivery and exceptional service.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8 border-primary/20 hover:bg-primary/10 hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8 border-primary/20 hover:bg-primary/10 hover:text-primary"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8 border-primary/20 hover:bg-primary/10 hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8 border-primary/20 hover:bg-primary/10 hover:text-primary"
              >
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@freshcart.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>123 Gosaninuagaon Main Road, Berhampur, Odisha 760001, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/categories/fruits-vegetables"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Fruits & Vegetables
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/dairy-eggs"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dairy & Eggs
                </Link>
              </li>
              <li>
                <Link href="/categories/bakery" className="text-muted-foreground hover:text-primary transition-colors">
                  Bakery
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/meat-seafood"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Meat & Seafood
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/pantry-staples"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Pantry Staples
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/beverages"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Beverages
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest offers and updates.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="border-primary/20 focus-visible:ring-primary/30"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>

            <div className="mt-6">
              <h3 className="font-bold mb-3">We Accept</h3>
              <div className="flex flex-wrap gap-2">
                <div className="bg-card rounded-md p-1 border">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/100px-Mastercard-logo.svg.png"
                    alt="Mastercard"
                    className="h-6"
                  />
                </div>
                <div className="bg-card rounded-md p-1 border">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/100px-Visa_Inc._logo.svg.png"
                    alt="Visa"
                    className="h-6"
                  />
                </div>
                <div className="bg-card rounded-md p-1 border">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/100px-American_Express_logo_%282018%29.svg.png"
                    alt="American Express"
                    className="h-6"
                  />
                </div>
                <div className="bg-card rounded-md p-1 border">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/100px-PayPal.svg.png"
                    alt="PayPal"
                    className="h-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t">
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Free Delivery in Berhampur</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Money Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} FreshCart. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

