import Image from "next/image"
import { CTASection } from "@/components/cta-section"
import { ServiceSchema } from "@/components/json-ld"
import { CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

interface ServicePageTemplateProps {
  serviceName: string
  serviceType: string
  description: string
  heroDescription: string
  imageSrc?: string
  features: string[]
  process: Array<{
    title: string
    description: string
  }>
  whyChoose: Array<{
    title: string
    description: string
  }>
}

export function ServicePageTemplate({
  serviceName,
  serviceType,
  description,
  heroDescription,
  imageSrc,
  features,
  process,
  whyChoose,
}: ServicePageTemplateProps) {
  return (
    <>
      <ServiceSchema serviceName={serviceType} description={description} />
      <main className="pb-20 sm:pb-0">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground">
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={`${serviceName} service in London`}
              fill
              className="object-cover opacity-10"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-balance md:text-5xl">
                {serviceName} in London
              </h1>
              <p className="text-lg leading-relaxed text-primary-foreground/90 md:text-xl">{heroDescription}</p>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground text-balance md:text-4xl">{serviceName}</h2>
                <p className="mb-6 text-lg leading-relaxed text-muted-foreground">{description}</p>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-square lg:aspect-auto lg:h-full lg:min-h-[400px]">
                <Image
                  src={
                    imageSrc ||
                    `/placeholder.svg?height=600&width=600&query=${serviceName.toLowerCase()} mobile service vehicle London`
                  }
                  alt={`${serviceName} - Professional mobile tyre service in London`}
                  fill
                  className="rounded-xl object-cover shadow-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground text-balance md:text-4xl">How It Works</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {process.map((step, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-foreground">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose This Service */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground text-balance md:text-4xl">
                Why Choose Us for {serviceName}?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {whyChoose.map((reason, index) => (
                <Card key={index} className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{reason.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{reason.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* London Coverage */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground text-balance md:text-3xl">
              Available Across All London Boroughs
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We provide {serviceName.toLowerCase()} services throughout London, covering all postcodes from Central
              London to the outer boroughs. Fast response times and consistent quality wherever you are.
            </p>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title={`Need ${serviceName} in London?`}
          description="Call now for professional service at your location. Fast response and expert fitting guaranteed."
        />
      </main>
    </>
  )
}
