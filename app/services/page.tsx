import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"
import { Wrench, Clock, Shield, Zap, CheckCircle, Phone } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "Mobile Tyre Services in London | Professional On-Site Tyre Fitting",
  description:
    "Complete range of mobile tyre services across London. Emergency fitting, 24/7 assistance, motorway breakdowns, and roadside service. Expert technicians at your location.",
  keywords:
    "mobile tyre fitting, mobile tyre fitting near me, tyre fitting near me, mobile tyre repair, mobile tyre replacement, mobile tyre service, mobile tyre repair near me, tyre fitting, emergency tyre repair, emergency tyre replacement, emergency mobile tyre fitting, emergency tyre repair near me, roadside tyre repair, emergency tyre fitting, emergency tyre fitting near me, 24 hour tyre repair, mobile tyre fitting service, 24 hour mobile tyre fitting, 24hr mobile tyre fitting, mobile tyre fitting 24 hours, emergency tyre change, local mobile tyre fitters, mobile fitting tyres near me, 24 hour tyre replacement, best mobile tyre fitting, mobile tyre services London, tyre fitting services, emergency tyre service, 24/7 tyre assistance, motorway tyre fitting London",
}

export default function ServicesPage() {
  return (
    <main className="pb-20 sm:pb-0">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent/80 py-24 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent_60%)]" />
        <div className="container relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollAnimation>
            <div className="max-w-4xl">
              <h1 className="mb-6 text-5xl font-extrabold leading-tight text-balance text-primary-foreground md:text-6xl">
                Mobile Tyre Services
              </h1>
              <p className="text-xl leading-relaxed text-primary-foreground/95 md:text-2xl font-normal">
                Comprehensive mobile tyre services delivered to your location. Professional fitting, emergency
                assistance, and specialist services available 24/7.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollAnimation>
            <div className="mb-20 text-center">
              <h2 className="mb-6 text-4xl font-extrabold text-foreground text-balance md:text-5xl">
                Our Complete Service Range
              </h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
                Professional mobile tyre services for all vehicle types. Whatever your tyre needs, we bring the
                solution to you.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {services.map((service, index) => (
              <ScrollAnimation key={index} delay={100 * (index + 1)}>
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
                        {service.icon}
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="mb-4 leading-relaxed text-muted-foreground text-base">{service.description}</p>
                      <span className="text-base font-bold text-accent">Learn more →</span>
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
              <h2 className="mb-6 text-4xl font-extrabold text-foreground text-balance md:text-5xl">
                What's Included in Every Service
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} delay={100 * (index + 1)}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-accent/20 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-5xl px-6 md:px-12 lg:px-16">
          <ScrollAnimation>
            <h2 className="mb-16 text-center text-4xl font-extrabold text-foreground text-balance md:text-5xl">
              Why Choose Mobile Tyre Fitting?
            </h2>
          </ScrollAnimation>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={index} delay={100 * (index + 1)}>
                <div className="flex gap-6">
                  <CheckCircle className="h-8 w-8 flex-shrink-0 text-accent mt-1" />
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{benefit.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Book Your Mobile Tyre Service?"
        description="Professional service at your location. Call now for immediate assistance or to schedule your appointment."
      />
    </main>
  )
}

const services = [
  {
    title: "Mobile Tyre Fitting",
    description:
      "Professional tyre fitting at your location. Full installation service with balancing and alignment checks.",
    href: "/services/mobile-tyre-fitting",
    icon: <Wrench className="h-7 w-7 text-accent-foreground" />,
    image: "/images/services/mobile-tyre-fitting-service.webp",
  },
  {
    title: "Mobile Tyre Replacement",
    description: "Complete tyre replacement service delivered to you. Quality tyres fitted on-site.",
    href: "/services/mobile-tyre-replacement",
    icon: <Wrench className="h-7 w-7 text-accent-foreground" />,
    image: "/images/services/mobile-tyre-replacement-new-wheel.webp",
  },
  {
    title: "Emergency Tyre Fitting",
    description: "Rapid emergency response for urgent tyre issues. Fast arrival times, wherever you are.",
    href: "/services/emergency-tyre-fitting",
    icon: <Zap className="h-7 w-7 text-accent-foreground" />,
    image: "/images/services/emergency-tyre-fitting-roadside.webp",
  },
  {
    title: "Same Day Tyre Fitting",
    description: "Fast same-day service. Book today, fitted today at your chosen location.",
    href: "/services/same-day-tyre-fitting",
    icon: <Clock className="h-7 w-7 text-accent-foreground" />,
    image: "/images/services/same-day-tyre-fitting-service.webp",
  },
  {
    title: "24/7 Mobile Tyre Fitting",
    description: "Round-the-clock availability for tyre emergencies. Day or night, we're ready to help.",
    href: "/services/24-7-mobile-tyre-fitting",
    icon: <Clock className="h-7 w-7 text-accent-foreground" />,
    image: "/images/services/24-7-mobile-tyre-fitting-night.webp",
  },
  {
    title: "Motorway Tyre Fitting",
    description: "Specialist tyre fitting for motorway breakdowns. Fast, safe response on the hard shoulder.",
    href: "/services/motorway-tyre-fitting",
    icon: <Shield className="h-7 w-7 text-accent-foreground" />,
    image: "/images/services/motorway-tyre-fitting-mercedes.webp",
  },
  {
    title: "Roadside Tyre Assistance",
    description: "Complete roadside support. From punctures to full replacements.",
    href: "/services/roadside-tyre-assistance",
    icon: <Phone className="h-7 w-7 text-accent-foreground" />,
    image: "/images/services/roadside-tyre-assistance-service.webp",
  },
]

const features = [
  {
    title: "Professional Installation",
    description: "Expert fitting by qualified technicians",
    icon: <Wrench className="h-8 w-8 text-accent" />,
  },
  {
    title: "Quality Guaranteed",
    description: "Premium tyres and workmanship",
    icon: <Shield className="h-8 w-8 text-accent" />,
  },
  {
    title: "Fast Service",
    description: "Quick arrival and efficient fitting",
    icon: <Zap className="h-8 w-8 text-accent" />,
  },
  {
    title: "Safety Checks",
    description: "Comprehensive post-fitting inspection",
    icon: <CheckCircle className="h-8 w-8 text-accent" />,
  },
]

const benefits = [
  {
    title: "Save Time",
    description: "No driving to garages or waiting rooms. We work around your schedule.",
  },
  {
    title: "Total Convenience",
    description: "Service at home, work, or roadside. You choose the location.",
  },
  {
    title: "Same Quality",
    description: "Identical professional standards to workshop service, at your location.",
  },
  {
    title: "No Stress",
    description: "Especially valuable in emergency situations or bad weather.",
  },
]
