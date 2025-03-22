import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function DownloadApp() {
  return (
    <div className="bg-muted/30 py-16 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="flex justify-center">
            <div className="max-w-[300px]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eVXCdp5LYHN8V0OoKNJ2V8lnI2QoUj.png"
                alt="FreshCart Mobile App"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Get the FreshCart app</h2>
              <p className="text-muted-foreground">
                We will send you a link, open it on your phone to download the app.
              </p>
            </div>

            <RadioGroup defaultValue="phone" className="flex gap-4">
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
              <Input type="tel" placeholder="Phone" className="border-primary/20 focus-visible:ring-primary/30" />
              <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">Share app link</Button>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Download app from</p>
              <div className="flex gap-4">
                <a href="#" className="block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png"
                    alt="App Store"
                    className="h-10"
                  />
                </a>
                <a href="#" className="block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png"
                    alt="Google Play"
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}