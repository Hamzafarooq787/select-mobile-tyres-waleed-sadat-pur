import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Same Day Tyre Fitting London | Fast Mobile Tyre Service Today",
  description:
    "Same-day mobile tyre fitting across London. Book in the morning, fitted by afternoon. Fast service at your location. No garage appointment needed. Call now!",
  keywords:
    "mobile tyre fitting near me, tyre fitting near me, mobile tyre fitting service, best mobile tyre fitting, mobile fitting tyres near me, same day tyre fitting London, fast tyre service, urgent tyre fitting, quick tyre replacement London",
}

export default function SameDayTyreFittingPage() {
  return (
    <ServicePageTemplate
      serviceName="Same Day Tyre Fitting"
      serviceType="Same Day Tyre Fitting"
      description="Fast same-day mobile tyre fitting service across London. Need tyres fitted today? We provide rapid service at your location without the wait of traditional garages."
      heroDescription="Same-day mobile tyre service in London. Book now and get your tyres fitted at your location today."
      imageSrc="/images/services/same-day-tyre-fitting.jpg"
      features={[
        "Same-day service across London",
        "No garage appointment necessary",
        "Service at your chosen location",
        "Wide tyre selection available",
        "Professional fitting included",
        "Flexible time slots available",
      ]}
      process={[
        {
          title: "Book Today",
          description: "Call before midday for same-day service. We'll confirm availability and timing.",
        },
        {
          title: "Choose Your Time",
          description: "Select a convenient time slot. We work around your schedule across London.",
        },
        {
          title: "Fitted Today",
          description: "Our technician arrives on time with your tyres and completes fitting on-site.",
        },
      ]}
      whyChoose={[
        {
          title: "No Waiting Days",
          description: "Get your tyres fitted the same day instead of waiting for garage appointments.",
        },
        {
          title: "Total Flexibility",
          description: "Choose your time and location across London. We work around your schedule.",
        },
        {
          title: "Reliable Service",
          description: "On-time arrival and efficient fitting. Your time is valuable.",
        },
        {
          title: "Professional Quality",
          description: "Same high standards as workshop service, delivered to your location.",
        },
      ]}
    />
  )
}
