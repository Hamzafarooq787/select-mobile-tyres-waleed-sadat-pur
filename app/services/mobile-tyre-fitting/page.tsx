import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting London | Professional On-Site Tyre Installation",
  description:
    "Expert mobile tyre fitting service across London. Professional installation at your location with balancing and safety checks. Fast service, quality tyres. Call now!",
  keywords:
    "mobile tyre fitting, mobile tyre fitting near me, tyre fitting near me, mobile tyre fitting service, tyre fitting, local mobile tyre fitters, mobile fitting tyres near me, best mobile tyre fitting, mobile tyre van, mobile tyre fitting London, on-site tyre installation, mobile tyre service, tyre fitting at home",
}

export default function MobileTyreFittingPage() {
  return (
    <ServicePageTemplate
      serviceName="Mobile Tyre Fitting"
      serviceType="Mobile Tyre Fitting"
      description="Professional mobile tyre fitting service delivered to your location anywhere in London. Our expert technicians bring workshop-quality service to your home, workplace, or roadside location."
      heroDescription="Complete mobile tyre fitting service across London. Professional installation, balancing, and safety checks performed at your chosen location."
      imageSrc="/images/services/mobile-tyre-fitting.jpg"
      features={[
        "Professional tyre fitting at your location",
        "Complete wheel balancing included",
        "Post-fitting safety inspection",
        "Disposal of old tyres included",
        "Wide range of quality tyres available",
        "Same-day service available across London",
      ]}
      process={[
        {
          title: "Contact Us",
          description: "Call or WhatsApp with your location and vehicle details. We'll provide an immediate quote.",
        },
        {
          title: "We Travel to You",
          description: "Our mobile technician arrives at your London location with all necessary equipment and tyres.",
        },
        {
          title: "Professional Fitting",
          description: "Expert installation with proper balancing, torque settings, and comprehensive safety checks.",
        },
      ]}
      whyChoose={[
        {
          title: "No Garage Visit Required",
          description: "Save time and hassle. We come to your home, office, or any location in London.",
        },
        {
          title: "Workshop-Quality Service",
          description: "Professional equipment and expert technicians ensure perfect fitting every time.",
        },
        {
          title: "Fast & Convenient",
          description: "Average 45-minute arrival time. Service completed while you continue your day.",
        },
        {
          title: "All London Areas",
          description: "Complete coverage across all London boroughs with consistent service quality.",
        },
      ]}
    />
  )
}
