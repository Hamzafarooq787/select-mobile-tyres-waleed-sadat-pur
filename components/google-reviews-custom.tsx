"use client"

import { Star } from "lucide-react"

const reviews = [
  {
    name: "Jeffry Romario",
    rating: 5,
    text: "Great services, highly recommended 👌 amin was great, great human being and fixed the tyres to top standard.",
  },
  {
    name: "A M",
    rating: 5,
    text: "Excellent professional and very friendly honest garage. Very good prices, polite and courteous. Thank you for all your help.",
  },
  {
    name: "Massood Rasa",
    rating: 5,
    text: "Best service in town and good quality tyre always. 🙂",
  },
  {
    name: "So Sa",
    rating: 5,
    text: "Amazing job by two lovely brothers well mannered and professional.",
  },
  {
    name: "Sasan",
    rating: 5,
    text: "Excellent service! The team was friendly, professional, and very quick. They replaced my tyres at a fair price and made the whole process smooth and hassle-free. Highly recommended.",
  },
  {
    name: "Nasem Alawaji",
    rating: 5,
    text: "Excellent service, exceptional care, and reasonable prices.",
  },
  {
    name: "Charles Francis",
    rating: 5,
    text: "Great service and efficient. Ask for Amin and he will look after you.",
  },
  {
    name: "Jude Fernando",
    rating: 5,
    text: "Provided outstanding service. I came here on a Friday bank holiday weekend, they didn't have the replacement tyre but provided a temporary one. Within 24 hours they fitted a brand new tyre. Highly recommend!",
  },
  {
    name: "Stephen Cullen",
    rating: 5,
    text: "Fantastic service, great staff, speedy and professional. Highly recommend them.",
  },
  {
    name: "Mian Ali",
    rating: 5,
    text: "Very nice service and came quickly.",
  },
  {
    name: "Mahir Gaas",
    rating: 5,
    text: "Fast and reliable. Great service. Highly recommended.",
  },
  {
    name: "SSK Cricket",
    rating: 5,
    text: "Amazing service. Highly recommend.",
  },
  {
    name: "Housam Alkoyd",
    rating: 5,
    text: "He is the best with tyres, I trust him, he always changes the wheels of my car. Try him and you won't regret it.",
  },
  {
    name: "Rohan Santa",
    rating: 5,
    text: "Great job changing tyres. Amazing team working here.",
  },
  {
    name: "Abdullah Aaad",
    rating: 5,
    text: "I changed 6 tyres on my recovery vehicle. The work was excellent and the price was very reasonable. I recommend it.",
  },
  {
    name: "Khaled Al-najar",
    rating: 5,
    text: "Amazing place and staff. Highly recommended.",
  },
  {
    name: "Wasif Khan Ahmad",
    rating: 5,
    text: "Really good mobile tyre service, friendly staff and fair pricing. Thank you very much.",
  },
  {
    name: "Watan Dar",
    rating: 5,
    text: "Best tyre shop around, great price and customer service. Thank you.",
  },
]

const GOOGLE_BUSINESS_URL = "https://www.google.com/search?q=Select+Mobile+Tyres+reviews"

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <a
      href={GOOGLE_BUSINESS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-80 flex-shrink-0 sm:w-96"
    >
      <div className="h-full rounded-2xl bg-card border border-border/50 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-accent/50">
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
  )
}

export function GoogleReviewsCustom() {
  const marqueeReviews = [...reviews, ...reviews]

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-secondary/50 to-background overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-extrabold text-foreground text-balance md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            Real 5-star Google reviews from customers who trust us for mobile tyre fitting.
          </p>
        </div>
      </div>

      {/* Continuous Reviews Slider */}
      <div className="group/marquee relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
        <div className="flex w-max animate-marquee gap-6 group-hover/marquee:[animation-play-state:paused] px-6">
          {marqueeReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
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
