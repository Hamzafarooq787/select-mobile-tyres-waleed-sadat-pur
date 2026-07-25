"use client"

import { Star } from "lucide-react"

const reviews = [
  {
    name: "James Thompson",
    rating: 5,
    text: "Incredible service! Had a flat tyre at 11pm and they arrived within 40 minutes. Professional, fast, and saved my night. Highly recommend!",
  },
  {
    name: "Sarah Mitchell",
    rating: 5,
    text: "Best mobile tyre service in London. Came to my office, fitted new tyres while I worked. Couldn't be more convenient!",
  },
  {
    name: "David Chen",
    rating: 5,
    text: "Puncture on the M25, called these guys and they were there in under an hour. Expert service and fair pricing. Will use again.",
  },
  {
    name: "Emma Richardson",
    rating: 5,
    text: "Dumitru was fantastic! Very professional and explained everything clearly. New tyres fitted at home in 45 minutes.",
  },
  {
    name: "Mohammed Ali",
    rating: 5,
    text: "Emergency tyre change at 2am - they actually answered and came out! Lifesaver. Can't thank them enough for the quick response.",
  },
  {
    name: "Lisa Johnson",
    rating: 5,
    text: "Great experience from start to finish. Booked online, received confirmation, and tyres fitted same day. Very impressed with the service.",
  },
]

const GOOGLE_BUSINESS_URL = "https://www.google.com/search?q=Select+Mobile+Tyres+reviews"

export function GoogleReviewsCustom() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-extrabold text-foreground text-balance md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            Real Google reviews from customers who trust us for mobile tyre fitting across London.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <a
              key={index}
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block group cursor-pointer"
            >
              <div className="h-full rounded-2xl bg-card border border-border/50 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-accent/50">
                {/* Google Badge */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                      <svg viewBox="0 0 24 24" className="h-5 w-5">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">Google Review</span>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="mb-4 flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="mb-4 text-base leading-relaxed text-foreground line-clamp-4">{review.text}</p>

                {/* Reviewer Name */}
                <p className="font-semibold text-foreground">{review.name}</p>
              </div>
            </a>
          ))}
        </div>

        {/* View All Reviews CTA */}
        <div className="mt-12 text-center">
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold text-accent hover:text-accent/80 transition-colors"
          >
            View all reviews on Google
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
