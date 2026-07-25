import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Motorway Tyre Fitting | Fast Roadside Breakdown Tyre Service",
  description:
    "Specialist motorway tyre fitting service for breakdowns. Fast, safe response on the hard shoulder to get you back on the road. Call now for immediate assistance!",
  keywords:
    "motorway tyre fitting, motorway breakdown tyre service, hard shoulder tyre assistance, motorway breakdown assistance, mobile tyre fitting near me, emergency tyre repair near me, roadside tyre repair, mobile tyre fitting service, best mobile tyre fitting",
}

export default function MotorwayTyreFittingPage() {
  return (
    <ServicePageTemplate
      serviceName="Motorway Tyre Fitting"
      serviceType="Motorway Tyre Fitting"
      description="Specialist tyre fitting service for motorway breakdowns. Our technicians reach you safely on the hard shoulder or nearest safe location, fully equipped to get you back on the road quickly."
      heroDescription="Fast, safe tyre fitting for motorway breakdowns. Specialist response when you need it most."
      imageSrc="/images/services/motorway-tyre-fitting-mercedes.webp"
      features={[
        "Rapid response to motorway breakdowns",
        "Safety-first approach on the hard shoulder",
        "Fully equipped mobile units",
        "Coordination with recovery services where needed",
        "All major tyre brands carried",
        "Available 24/7 for emergencies",
      ]}
      process={[
        {
          title: "Call for Help",
          description: "Contact us with your location or nearest junction marker. We'll dispatch immediately.",
        },
        {
          title: "Safe Arrival",
          description: "Our technician arrives fully equipped, prioritizing your safety on the roadside.",
        },
        {
          title: "Fast Fitting",
          description: "Tyre assessed and replaced or repaired on-site, getting you moving again safely.",
        },
      ]}
      whyChoose={[
        {
          title: "Motorway Specialists",
          description: "Trained and equipped for the unique safety demands of motorway breakdowns.",
        },
        {
          title: "Rapid Response",
          description: "Fast arrival times when every minute on the hard shoulder counts.",
        },
        {
          title: "Fully Stocked Vans",
          description: "Wide range of tyre sizes carried to resolve most breakdowns on the first visit.",
        },
        {
          title: "24/7 Emergency Cover",
          description: "Available around the clock, including nights, weekends, and holidays.",
        },
      ]}
    />
  )
}
