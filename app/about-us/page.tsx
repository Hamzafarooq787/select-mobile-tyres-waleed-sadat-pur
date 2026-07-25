import type { Metadata } from "next"
import Image from "next/image"
import { CTASection } from "@/components/cta-section"
import { Shield, Users, Clock, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Professional Mobile Tyre Service in London",
  description:
    "Learn about Select Mobile Tyres - London's trusted mobile tyre fitting service. Professional technicians, fast response, and reliable on-site service across all boroughs.",
  keywords:
    "mobile tyre fitting, mobile tyre fitting near me, mobile tyre service, mobile tyre repair, local mobile tyre fitters, best mobile tyre fitting, tyre fitting near me, about mobile tyre service, London tyre fitting company, professional mobile technicians",
}

export default function AboutPage() {
  return (
    <main className="pb-20 sm:pb-0">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-balance md:text-5xl">
              About Select Mobile Tyres
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              London's trusted mobile tyre fitting service, delivering professional on-site assistance when you need it
              most.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground text-balance md:text-4xl">Who We Are</h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Select Mobile Tyres is London's premier mobile tyre fitting service, bringing professional automotive
                  expertise directly to your location. Whether you're at home, at work, or stranded on the roadside, we
                  provide fast, reliable tyre services across all London boroughs.
                </p>
                <p>
                  We understand that tyre issues can happen at the most inconvenient times. That's why we've built our
                  entire service around convenience, speed, and professional quality. Our mobile technicians are fully
                  equipped to handle any tyre emergency or scheduled fitting, eliminating the need for you to visit a
                  garage.
                </p>
                <p>
                  With years of experience in the automotive industry and a commitment to customer satisfaction, we've
                  become the go-to choice for drivers across London who value their time and need reliable tyre services
                  delivered to their location.
                </p>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-full lg:min-h-[400px]">
              <Image
                src="/mobile-tyre-service-van-and-professional-technicia.jpg"
                alt="Select Mobile Tyres service in London"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground text-balance md:text-4xl">What We Do in London</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Comprehensive mobile tyre services delivered with professionalism and efficiency across all London areas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold text-foreground">Mobile Tyre Fitting</h3>
              <p className="leading-relaxed text-muted-foreground">
                Complete tyre fitting service at your chosen location across London. Our technicians arrive fully
                equipped with professional tools, balancing equipment, and a wide range of quality tyres to fit your
                vehicle.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold text-foreground">Emergency Response</h3>
              <p className="leading-relaxed text-muted-foreground">
                24/7 emergency tyre assistance throughout London. When you're stranded with a flat tyre or urgent tyre
                damage, we provide rapid response to get you safely back on the road.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold text-foreground">Specialist Services</h3>
              <p className="leading-relaxed text-muted-foreground">
                Expert fitting for run-flat tyres, TPMS-equipped vehicles, and high-performance tyres. Our technicians
                have the knowledge and equipment to handle all tyre types professionally.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold text-foreground">Roadside Assistance</h3>
              <p className="leading-relaxed text-muted-foreground">
                Complete roadside support including puncture repairs, tyre pressure checks, and full tyre replacement.
                We serve all London postcodes with fast arrival times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground text-balance md:text-4xl">Our Commitment to You</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  {value.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* London Coverage */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground text-balance md:text-4xl">Serving All of London</h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            We provide mobile tyre fitting services across all London boroughs. From Central London to the outer areas,
            our technicians cover the entire city with fast response times and professional service. No matter where you
            are in London, we'll come to you.
          </p>
          <p className="text-lg font-medium text-foreground">
            Available 24/7 for emergencies • Same-day service available • All postcodes covered
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Experience the Mobile Tyre Difference"
        description="Professional, reliable, and convenient tyre services across London. Call us today to see why we're the trusted choice for mobile tyre fitting."
      />
    </main>
  )
}

const values = [
  {
    title: "Reliability",
    description: "Fast response times and dependable service you can count on.",
    icon: <Shield className="h-8 w-8 text-accent" />,
  },
  {
    title: "Professionalism",
    description: "Qualified technicians delivering workshop-quality service at your location.",
    icon: <Award className="h-8 w-8 text-accent" />,
  },
  {
    title: "Fast Response",
    description: "Average 45-minute arrival times across London, 24/7 availability.",
    icon: <Clock className="h-8 w-8 text-accent" />,
  },
  {
    title: "Customer Focus",
    description: "Your convenience and satisfaction are our top priorities.",
    icon: <Users className="h-8 w-8 text-accent" />,
  },
]
