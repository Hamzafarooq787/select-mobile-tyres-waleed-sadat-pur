import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Mobile Tyre Replacement London | On-Site Tyre Change Service",
  description:
    "Fast mobile tyre replacement across London. Quality tyres fitted at your location. Professional service with same-day availability. Call for immediate assistance!",
  keywords:
    "mobile tyre replacement, mobile tyre repair, mobile tyre repair near me, 24 hour tyre replacement, emergency tyre replacement, mobile tyre service, mobile tyre fitting near me, mobile tyre replacement London, tyre change service, on-site tyre replacement, mobile tyre change",
}

export default function MobileTyreReplacementPage() {
  return (
    <ServicePageTemplate
      serviceName="Mobile Tyre Replacement"
      serviceType="Mobile Tyre Replacement"
      description="Complete mobile tyre replacement service. We supply and fit quality tyres at your location, whether you need one tyre or a full set."
      heroDescription="Professional tyre replacement delivered to your location. Quality tyres, expert fitting, and comprehensive service."
      imageSrc="/images/services/mobile-tyre-replacement.jpg"
      features={[
        "Wide selection of quality tyre brands",
        "Competitive pricing on all tyres",
        "Complete fitting service included",
        "Wheel balancing and alignment check",
        "Old tyre disposal handled",
        "Same-day replacement available",
      ]}
      process={[
        {
          title: "Get Your Quote",
          description: "Tell us your tyre size and vehicle type. We'll quote for supply and fitting.",
        },
        {
          title: "Mobile Service",
          description: "Our technician brings your new tyres to your location with all fitting equipment.",
        },
        {
          title: "Expert Installation",
          description: "Professional replacement with balancing, safety checks, and proper disposal of old tyres.",
        },
      ]}
      whyChoose={[
        {
          title: "Quality Tyres",
          description: "We supply premium and budget tyres from trusted manufacturers to suit your needs.",
        },
        {
          title: "Transparent Pricing",
          description: "Clear quotes with no hidden fees. Supply and fitting included in one price.",
        },
        {
          title: "Wide Coverage",
          description: "Available across a wide area with fast response times.",
        },
        {
          title: "Professional Standards",
          description: "Every replacement meets manufacturer specifications and safety requirements.",
        },
      ]}
    />
  )
}
