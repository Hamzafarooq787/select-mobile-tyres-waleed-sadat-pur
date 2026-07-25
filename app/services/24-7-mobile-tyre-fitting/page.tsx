import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "24/7 Mobile Tyre Fitting London | Round-the-Clock Tyre Service",
  description:
    "24-hour mobile tyre fitting service in London. Available day and night for emergency and scheduled appointments. Call anytime for professional on-site service!",
  keywords: "24/7 tyre fitting London, 24 hour tyre service, night tyre fitting, round the clock tyre service",
}

export default function TwentyFourSevenPage() {
  return (
    <ServicePageTemplate
      serviceName="24/7 Mobile Tyre Fitting"
      serviceType="24/7 Mobile Tyre Fitting"
      description="Round-the-clock mobile tyre fitting service across London. Day or night, weekday or weekend, we're available to provide professional tyre service at your location."
      heroDescription="24-hour mobile tyre service in London. Available anytime, day or night, for your convenience."
      imageSrc="/images/services/24-7-mobile-tyre-fitting.jpg"
      features={[
        "True 24/7 availability every day",
        "Night and weekend service",
        "Emergency and scheduled appointments",
        "All London areas covered",
        "Professional service at any hour",
        "No additional night charges for emergencies",
      ]}
      process={[
        {
          title: "Call Anytime",
          description: "Our phone lines are staffed 24/7. Call whenever you need tyre service in London.",
        },
        {
          title: "Immediate Dispatch",
          description: "Technicians available around the clock. We dispatch to your location any time.",
        },
        {
          title: "Professional Service",
          description: "Same quality service whether it's midday or midnight. Expert fitting guaranteed.",
        },
      ]}
      whyChoose={[
        {
          title: "Always Available",
          description: "Real 24/7 service, not just emergency hours. Book scheduled appointments at night too.",
        },
        {
          title: "Shift Worker Friendly",
          description: "Perfect for those who work nights or irregular hours. Service when it suits you.",
        },
        {
          title: "Emergency Ready",
          description: "Immediate response for tyre emergencies at any hour across London.",
        },
        {
          title: "Consistent Quality",
          description: "Professional standards maintained regardless of time of day or night.",
        },
      ]}
    />
  )
}
