import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Emergency Tyre Fitting London | 24/7 Urgent Tyre Service",
  description:
    "Emergency mobile tyre fitting across London. Fast response for urgent tyre issues. Available 24/7 for roadside emergencies. Call now for immediate assistance!",
  keywords:
    "emergency tyre repair, emergency tyre replacement, emergency mobile tyre fitting, emergency tyre repair near me, emergency tyre fitting near me, emergency tyre change, emergency mobile tyre, roadside tyre repair, 24 hour tyre repair, mobile tyre fitting near me, emergency tyre fitting London, urgent tyre service, 24/7 tyre fitting, emergency roadside tyres",
}

export default function EmergencyTyreFittingPage() {
  return (
    <ServicePageTemplate
      serviceName="Emergency Tyre Fitting"
      serviceType="Emergency Tyre Fitting"
      description="Rapid emergency tyre fitting service. When you have an urgent tyre issue, we provide fast response and professional on-site assistance to get you moving again."
      heroDescription="24/7 emergency mobile tyre service. Fast response when you need urgent assistance."
      imageSrc="/images/services/emergency-tyre-fitting-roadside.webp"
      features={[
        "Rapid emergency response",
        "Available for all urgent tyre issues",
        "Fast arrival times - typically under 60 minutes",
        "Complete mobile fitting service",
        "Professional roadside assistance",
        "All vehicle types covered",
      ]}
      process={[
        {
          title: "Call Immediately",
          description: "Contact us right away for emergency assistance. Provide your location and issue.",
        },
        {
          title: "Rapid Response",
          description: "Our nearest mobile technician is dispatched immediately to your location.",
        },
        {
          title: "On-Site Solution",
          description: "Professional assessment and fitting on-site. You're back on the road quickly.",
        },
      ]}
      whyChoose={[
        {
          title: "Genuine 24/7 Service",
          description: "Real emergency availability day and night, every day of the year.",
        },
        {
          title: "Fast Arrival",
          description: "Priority dispatch for emergencies with typically under 60-minute response times.",
        },
        {
          title: "Fully Equipped",
          description: "Our emergency units carry common tyre sizes and all necessary fitting equipment.",
        },
        {
          title: "Experienced Team",
          description: "Technicians trained in emergency response and roadside tyre fitting.",
        },
      ]}
    />
  )
}
