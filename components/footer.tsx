import Link from "next/link"
import { Phone, MessageCircle, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo.webp"
              alt="Select Mobile Tyres"
              width={80}
              height={80}
              className="mb-4 h-16 w-auto"
              sizes="80px"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Professional mobile tyre fitting service across London. Fast, reliable, and on-site assistance when you
              need it most.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-foreground">Services</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/mobile-tyre-fitting"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Mobile Tyre Fitting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/emergency-tyre-fitting"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Emergency Service
                </Link>
              </li>
              <li>
                <Link
                  href="/services/24-7-mobile-tyre-fitting"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  24/7 Assistance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-foreground">Contact Info</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+447775017966" className="transition-colors hover:text-primary">
                  +44 7775 017966
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="h-4 w-4 flex-shrink-0" />
                <a
                  href="https://wa.me/447775017966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Mobile service &mdash; serving customers across the United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground/80">
          <p>
            <span className="font-medium text-muted-foreground">Popular searches:</span> mobile tyre fitting near me,
            tyre fitting near me, mobile tyre repair near me, emergency tyre repair near me, emergency tyre fitting
            near me, local mobile tyre fitters, mobile fitting tyres near me, 24 hour mobile tyre fitting, 24hr
            mobile tyre fitting, mobile tyre fitting 24 hours, emergency mobile tyre fitting, roadside tyre repair,
            emergency tyre change, mobile tyre van, best mobile tyre fitting.
          </p>
        </div>

        <div className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <p>
              Design & Develop By{" "}
              <a
                href="https://linkedo.co.uk/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                Linkedo
              </a>
            </p>
            <p>&copy; {new Date().getFullYear()} Select Mobile Tyres. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
