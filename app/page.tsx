import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, MapPin, Shield, Wrench, CheckCircle2 } from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { GoogleReviewsCustom } from "@/components/google-reviews-custom"
import { MapEmbed } from "@/components/map-embed"
import { LocalBusinessSchema } from "@/components/json-ld"
import { ScrollAnimation } from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting London | 24/7 Emergency Tyre Service Near You",
  description:
    "Expert mobile tyre fitting service across London. Fast response, on-site service, 24/7 emergency assistance. Professional tyre replacement at your location. Call now!",
  keywords:
    "mobile tyre fitting, mobile tyre fitting near me, tyre fitting near me, mobile tyre repair, mobile tyre repair near me, mobile tyre replacement, mobile tyre service, tyre fitting, emergency tyre repair, emergency tyre repair near me, emergency tyre replacement, emergency mobile tyre fitting, roadside tyre repair, emergency tyre fitting, emergency tyre fitting near me, 24 hour tyre repair, mobile tyre fitting service, 24 hour mobile tyre fitting, 24hr mobile tyre fitting, mobile tyre fitting 24 hours, emergency tyre change, local mobile tyre fitters, mobile fitting tyres near me, mobile tyre van, emergency mobile tyre, 24 hour tyre replacement, best mobile tyre fitting, mobile tyre fitting London, emergency tyre service London, roadside tyre assistance, 24/7 tyre service",
  openGraph: {
    title: "Mobile Tyre Fitting London | 24/7 Emergency Service",
    description:
      "Professional mobile tyre fitting across London. Fast, reliable, on-site assistance when you need it most.",
  },
}

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <main className="pb-20 sm:pb-0">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent/80">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(220,38,38,0.15),transparent_60%)] md:bg-[radial-gradient(circle_at_50%_120%,rgba(220,38,38,0.1),transparent_50%)]" />
            <Image
              src="/images/services/select-mobile-tyres-branded-van.webp"
              alt="Professional mobile tyre fitting service"
              fill
              className="object-cover opacity-15 mix-blend-overlay md:opacity-20"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/40 md:to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-32 lg:px-16 lg:py-40">
            <div className="max-w-4xl">
              <h1 className="mb-5 text-3xl font-extrabold leading-snug text-balance text-primary-foreground md:mb-6 md:text-6xl md:leading-tight lg:text-7xl animate-fade-in-up">
                Mobile Tyre Fitting – Fast, Reliable, On-Site
              </h1>
              <p
                className="mb-8 text-base leading-relaxed text-primary-foreground/95 md:mb-10 md:text-2xl font-normal animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Professional mobile tyre service at your location. Emergency assistance, same-day fitting, and 24/7
                availability.
              </p>
              <div className="animate-fade-in-up pb-4 md:pb-0" style={{ animationDelay: "0.4s" }}>
                <Button
                  asChild
                  size="lg"
                  className="text-base md:h-16 md:px-10 md:text-lg bg-gray-900 hover:bg-gray-800 text-white font-bold transition-all duration-300 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] border-2 border-gray-800 w-60 h-11 px-9 text-center"
                >
                  <a href="tel:+447775017966">
                    <Clock className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/50 py-20 md:py-24">
          <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="grid gap-10 md:grid-cols-3 lg:gap-16">
              <ScrollAnimation delay={100}>
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 shadow-lg">
                    <Clock className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">Fast Response</p>
                    <p className="text-base text-muted-foreground">Average 45-minute arrival</p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={200}>
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 shadow-lg">
                    <MapPin className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">Wide Coverage</p>
                    <p className="text-base text-muted-foreground">We come to you</p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={300}>
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 shadow-lg">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">Fully Insured</p>
                    <p className="text-base text-muted-foreground">Professional service guarantee</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <ScrollAnimation>
              <div className="mb-20 text-center">
                <h2 className="mb-6 text-4xl font-extrabold text-foreground text-balance md:text-5xl lg:text-6xl">
                  Our Mobile Tyre Services
                </h2>
                <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
                  Professional on-site tyre fitting services. We come to you, whether you're at home, work, or
                  stranded on the roadside.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {services.map((service, index) => (
                <ScrollAnimation key={index} delay={100 * (index + 1)} className={`stagger-${index + 1}`}>
                  <Card className="group overflow-hidden transition-all duration-500 hover:shadow-2xl depth-card border-border/50 h-full rounded-2xl">
                    <Link href={service.href} className="block">
                      <div className="relative h-56 w-full overflow-hidden bg-muted image-zoom">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/40 to-transparent" />
                        <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/90 shadow-lg">
                          <Wrench className="h-7 w-7 text-accent-foreground" />
                        </div>
                      </div>
                      <div className="p-7 py-7 px-3">
                        <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="leading-relaxed text-muted-foreground text-base">{service.description}</p>
                      </div>
                    </Link>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/50 py-24 md:py-32">
          <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <ScrollAnimation>
              <div className="mb-20 text-center">
                <h2 className="mb-6 text-4xl font-extrabold text-foreground text-balance md:text-5xl">How It Works</h2>
                <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground border-0 px-0 mx-auto">
                  Getting your tyres fitted has never been easier. Three simple steps to get back on the road.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid gap-16 md:grid-cols-3 lg:gap-20">
              {steps.map((step, index) => (
                <ScrollAnimation key={index} delay={150 * (index + 1)}>
                  <div className="relative text-center">
                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/80 text-3xl font-black text-accent-foreground shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                      {index + 1}
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-foreground">{step.title}</h3>
                    <p className="leading-relaxed text-muted-foreground text-base">{step.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="grid gap-20 lg:grid-cols-2 lg:items-center lg:gap-24">
              <ScrollAnimation>
                <div>
                  <h2 className="mb-8 text-4xl font-extrabold text-foreground text-balance md:text-5xl">
                    Why Choose Select Mobile Tyres?
                  </h2>
                  <p className="mb-10 text-xl leading-relaxed text-muted-foreground">
                    We're a trusted mobile tyre fitting service, combining professional expertise with unmatched
                    convenience. Our technicians come to you, fully equipped to handle any tyre emergency.
                  </p>
                  <ul className="space-y-8">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-5">
                        <CheckCircle2 className="h-7 w-7 flex-shrink-0 text-accent mt-1" />
                        <div>
                          <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground text-base">{benefit.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={200}>
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[600px] image-zoom rounded-3xl overflow-hidden depth-card">
                  <Image
                    src="/images/services/professional-tyre-fitting-equipment.webp"
                    alt="Professional mobile tyre fitting service"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Google Reviews */}
        <GoogleReviewsCustom />

        {/* Location Map */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-4xl font-extrabold text-foreground text-balance md:text-5xl">Find Us</h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
                We come to you, wherever you are in the coverage area.
              </p>
            </div>
            <MapEmbed />
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title="Need a Mobile Tyre Fitting Service?"
          description="Call us now for fast, professional service at your location. Available 24/7 for emergencies."
        />
      </main>
    </>
  )
}

const services = [
  {
    title: "Mobile Tyre Fitting",
    description:
      "Complete tyre fitting service at your location. Professional installation with proper balancing and alignment checks.",
    href: "/services/mobile-tyre-fitting",
    image: "/images/services/mobile-tyre-fitting-service.webp",
  },
  {
    title: "Emergency Tyre Fitting",
    description: "Rapid response for tyre emergencies. Available when you need urgent assistance on the road.",
    href: "/services/emergency-tyre-fitting",
    image: "/images/services/emergency-tyre-fitting-roadside.webp",
  },
  {
    title: "24/7 Mobile Service",
    description: "Round-the-clock availability for tyre emergencies. Day or night, we're here to help.",
    href: "/services/24-7-mobile-tyre-fitting",
    image: "/images/services/24-7-mobile-tyre-fitting-night.webp",
  },
  {
    title: "Same Day Fitting",
    description: "Fast same-day tyre replacement service. Book in the morning, fitted by afternoon.",
    href: "/services/same-day-tyre-fitting",
    image: "/images/services/same-day-tyre-fitting-service.webp",
  },
  {
    title: "Run Flat Tyre Fitting",
    description:
      "Specialist run-flat tyre fitting service for vehicles with TPMS systems. Expert installation guaranteed.",
    href: "/services/run-flat-tyre-fitting",
    image: "/images/services/run-flat-tyre-fitting-mercedes.webp",
  },
  {
    title: "Roadside Assistance",
    description: "Complete roadside tyre assistance. From puncture repairs to full tyre replacement on-site.",
    href: "/services/roadside-tyre-assistance",
    image: "/images/services/roadside-tyre-assistance-service.webp",
  },
]

const steps = [
  {
    title: "Call or Book Online",
    description: "Contact us by phone or WhatsApp. Tell us your location and what you need.",
  },
  {
    title: "We Come to You",
    description: "Our mobile technician arrives at your chosen location with all necessary equipment and tyres.",
  },
  {
    title: "Professional Installation",
    description: "Expert fitting, balancing, and safety checks completed on-site. You're ready to drive away.",
  },
]

const benefits = [
  {
    title: "Fully Mobile Service",
    description: "No need to visit a garage. We come to your home, workplace, or roadside location.",
  },
  {
    title: "Expert Technicians",
    description: "Qualified professionals with years of experience in mobile tyre fitting and vehicle safety.",
  },
  {
    title: "Competitive Pricing",
    description: "Fair, transparent pricing with no hidden fees. Quality service at prices that work for you.",
  },
  {
    title: "24/7 Emergency Service",
    description: "Available around the clock for urgent tyre issues. Fast response times, wherever you are.",
  },
]
