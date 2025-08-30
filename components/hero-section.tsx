import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted/20 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/professional-business-meeting-with-charts-and-docu.png')] bg-cover bg-center opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Welcome to <span className="gradient-text">Drummonds International</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground text-pretty fade-in-delay-1">
                Your trusted partner for professional auditing, accounting, and VAT services in Bahrain
              </p>
            </div>

            <div className="space-y-4 fade-in-delay-2">
              <p className="text-lg text-muted-foreground text-pretty">
                Any accountant can claim to understand your books, but do they understand your business? At Drummonds
                International, we go beyond numbers to deliver strategic insights that drive growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 btn-animate hover-lift pulse-accent"
                  asChild
                >
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="hover-glow bg-transparent" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>

            {/* Key features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-3 stagger-item">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground">Certified Auditors</span>
              </div>
              <div className="flex items-center gap-3 stagger-item">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground">VAT Specialists</span>
              </div>
              <div className="flex items-center gap-3 stagger-item">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground">Bahrain Expertise</span>
              </div>
              <div className="flex items-center gap-3 stagger-item">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground">Business Advisory</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative slide-in-right">
            <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-muted hover-lift">
              <img
                src="/professional-business-team-analyzing-financial-doc.png"
                alt="Professional auditing team at work"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating stats cards with animations */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-lg hover-glow float">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            <div
              className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-lg hover-glow float"
              style={{ animationDelay: "3s" }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
