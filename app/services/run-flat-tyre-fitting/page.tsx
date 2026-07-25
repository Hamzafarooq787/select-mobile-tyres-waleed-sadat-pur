import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Run Flat Tyre Fitting London | TPMS Mobile Tyre Service",
  description:
    "Specialist run-flat tyre fitting service in London. Expert installation for TPMS-equipped vehicles. Mobile service at your location. Professional standards guaranteed!",
  keywords: "run flat tyre fitting London, TPMS tyre service, run flat tyre replacement, mobile run flat fitting",
}

export default function RunFlatTyreFittingPage() {
  return (
    <ServicePageTemplate
      serviceName="Run Flat Tyre Fitting"
      serviceType="Run Flat Tyre Fitting"
      description="Specialist mobile service for run-flat tyre fitting across London. Our technicians have the expertise and equipment to properly fit run-flat tyres and service TPMS systems."
      heroDescription="Expert run-flat tyre fitting in London. Specialist service for TPMS-equipped vehicles at your location."
      imageSrc="/images/services/run-flat-tyre-fitting.jpg"
      features={[
        "Specialist run-flat tyre expertise",
        "TPMS system service and reset",
        "Correct fitting procedures followed",
        "Full range of run-flat tyres available",
        "Mobile service across London",
        "All premium vehicle brands covered",
      ]}
      process={[
        {
          title: "Specialist Consultation",
          description: "Discuss your vehicle's specific requirements. We'll recommend the correct run-flat tyres.",
        },
        {
          title: "Expert Mobile Service",
          description: "Our specialist technician arrives with proper equipment and run-flat tyres.",
        },
        {
          title: "Professional Installation",
          description: "Precise fitting following manufacturer specifications. TPMS reset and full system check.",
        },
      ]}
      whyChoose={[
        {
          title: "Specialist Knowledge",
          description: "Expert understanding of run-flat tyres, TPMS systems, and premium vehicle requirements.",
        },
        {
          title: "Correct Equipment",
          description: "Proper tools and procedures for run-flat fitting and TPMS servicing.",
        },
        {
          title: "Premium Vehicle Experience",
          description: "Extensive experience with BMW, Mercedes, Mini, and other premium brands.",
        },
        {
          title: "Mobile Convenience",
          description: "Specialist service delivered to your London location. No need to visit dealers.",
        },
      ]}
    />
  )
}
