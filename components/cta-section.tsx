import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

interface CTASectionProps {
  title: string
  description: string
}

export function CTASection({ title, description }: CTASectionProps) {
  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold text-balance md:text-4xl mb-4">{title}</h2>
        <p className="mb-8 text-lg text-primary-foreground/90 text-balance">{description}</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
            <a href="tel:+447775017966" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call  07775 017966
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
          >
            <a href="https://wa.me/+447775017966" className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
