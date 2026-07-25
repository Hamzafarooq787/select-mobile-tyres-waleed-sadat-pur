export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
      "@type": "AutoRepair",
      name: "Select Mobile Tyres",
      telephone: "+447775017966",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "City",
      name: "London",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "££",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ServiceSchema({ serviceName, description }: { serviceName: string; description: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    description: description,
    provider: {
      "@type": "AutoRepair",
      name: "Select Mobile Tyres",
    telephone: "+447775017966",
      areaServed: {
        "@type": "City",
        name: "London",
      },
    },
    areaServed: {
      "@type": "City",
      name: "London",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
