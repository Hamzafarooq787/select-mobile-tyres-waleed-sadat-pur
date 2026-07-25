import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Roadside Tyre Assistance London | Mobile Emergency Tyre Help",
  description:
    "Complete roadside tyre assistance across London. Puncture repairs, emergency fitting, and full replacement on-site. Fast response 24/7. Call now for help!",
  keywords: "roadside tyre assistance London, roadside tyre help, mobile puncture repair, roadside tyre replacement",
}

export default function RoadsideTyreAssistancePage() {
  return (
    <ServicePageTemplate
      serviceName="Roadside Tyre Assistance"
      serviceType="Roadside Tyre Assistance"
      description="Comprehensive roadside tyre assistance throughout London. Whether you have a puncture, blowout, or tyre damage, we provide complete on-site support to get you safely moving again."
      heroDescription="Complete roadside tyre assistance across London. Fast response for punctures, damage, and emergencies."
      imageSrc="/images/services/roadside-tyre-assistance.jpg"
      features={[
        "Fast roadside response across London",
        "Puncture assessment and repair",
        "Full tyre replacement if needed",
        "Pressure checks and adjustments",
        "Spare tyre fitting assistance",
        "Available 24/7 for emergencies",
      ]}
      process={[
        {
          title: "Contact Us",
          description: "Call from the roadside with your location. We'll dispatch assistance immediately.",
        },
        {
          title: "Swift Arrival",
          description: "Our mobile unit reaches you quickly with all necessary tools and equipment.",
        },
        {
          title: "On-Site Resolution",
          description: "Assess the issue and provide the best solution - repair or replacement on-site.",
        },
      ]}
      whyChoose={[
        {
          title: "Rapid Response",
          description: "Fast arrival times when you're stranded. We understand the urgency.",
        },
        {
          title: "Complete Solutions",
          description: "From simple punctures to full replacements - all handled on-site.",
        },
        {
          title: "London Coverage",
          description: "Wherever you're stranded in London, we can reach you quickly.",
        },
        {
          title: "Safety First",
          description: "Professional assessment ensuring you're safe to continue your journey.",
        },
      ]}
    />
  )
}
