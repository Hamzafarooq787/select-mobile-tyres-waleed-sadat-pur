import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Mobile Tyre Fitting London - 24/7 Service",
  description:
    "Contact Select Mobile Tyres for fast tyre fitting service in London. Call +44 7775 017966 or WhatsApp for immediate assistance. Available 24/7 across all London boroughs.",
  keywords:
    "mobile tyre fitting near me, tyre fitting near me, emergency tyre repair near me, emergency tyre fitting near me, mobile tyre repair near me, local mobile tyre fitters, mobile fitting tyres near me, contact mobile tyre London, emergency tyre service contact, mobile tyre phone number London",
}

export default function ContactPage() {
  return (
    <main className="pb-20 sm:pb-0">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-balance md:text-5xl">
              Contact Mobile Tyre Service in London
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              Need mobile tyre fitting in London? We're here to help 24/7. Call now for immediate assistance or to book
              your service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground text-balance md:text-4xl">Get In Touch</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Choose your preferred way to contact us. We're available 24/7 for emergency tyre services across London.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            <Card className="p-8 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Call Us</h3>
              <p className="mb-4 text-muted-foreground">Speak directly to our team for immediate assistance</p>
              <Button asChild size="lg" className="w-full">
                <a href="tel:+447775017966">+44 7775 017966</a>
              </Button>
            </Card>

            <Card className="p-8 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <MessageCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">WhatsApp</h3>
              <p className="mb-4 text-muted-foreground">Message us for quick responses and quotes</p>
              <Button asChild size="lg" variant="outline" className="w-full bg-transparent">
                <a href="https://wa.me/447775017966" target="_blank" rel="noopener noreferrer">
                  Start Chat
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Information */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">Service Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex justify-between">
                  <span>Emergency Service:</span>
                  <span className="font-medium text-foreground">24/7</span>
                </p>
                <p className="flex justify-between">
                  <span>Scheduled Appointments:</span>
                  <span className="font-medium text-foreground">All time Available </span>
                </p>
                <p className="flex justify-between">
                  <span>Phone Support:</span>
                  <span className="font-medium text-foreground">24/7</span>
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">Our Location & Service Area</h3>
              <div className="mb-4 text-muted-foreground">
                <p className="mb-1 font-medium text-foreground">Address:</p>
                <p className="text-sm">Park Royal, London</p>
              </div>
              <div className="text-muted-foreground">
                <p className="mb-2 font-medium text-foreground">Service Area:</p>
                <p className="text-sm">
                  We provide mobile tyre fitting services across all London boroughs and surrounding areas.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground text-balance md:text-4xl">
              What to Expect When You Call
            </h2>
            <div className="space-y-4 text-left text-lg leading-relaxed text-muted-foreground">
              <p>
                When you contact us, our friendly team will ask for your location in London and details about your
                vehicle and tyre needs. We'll provide an immediate quote and estimated arrival time.
              </p>
              <p>
                For emergency services, we prioritize rapid response and aim to reach you within 45 minutes across most
                London areas. For scheduled appointments, you can choose a time that suits your schedule.
              </p>
              <p>
                Our mobile technicians arrive fully equipped with professional tools and a range of quality tyres. All
                work is completed on-site to the highest professional standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-accent py-16 text-accent-foreground">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">Need Emergency Tyre Service in London?</h2>
          <p className="mb-8 text-lg text-accent-foreground/90">
            Don't wait – call us now for immediate roadside assistance anywhere in London.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-base">
            <a href="tel:+447775017966" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call +44 7775 017966 Now
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
