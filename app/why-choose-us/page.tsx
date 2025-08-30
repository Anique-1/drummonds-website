import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, Users, Clock, Shield, TrendingUp, Globe } from "lucide-react"
import Link from "next/link"

const reasons = [
  {
    icon: Award,
    title: "Certified Expertise",
    description:
      "Our team consists of certified Chartered Accountants with extensive experience in Bahrain's regulatory environment.",
  },
  {
    icon: Shield,
    title: "VAT Specialists",
    description: "Deep expertise in Bahrain VAT regulations and compliance with the National Bureau for Revenue (NBR).",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "We tailor our services to meet your specific business needs and provide personalized attention to every client.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "We understand the importance of deadlines and ensure all our services are delivered on time, every time.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth Focus",
    description: "Beyond compliance, we help you identify opportunities for growth and operational improvements.",
  },
  {
    icon: Globe,
    title: "Local & International Standards",
    description: "We combine local Bahrain expertise with international best practices and standards.",
  },
]

const testimonials = [
  {
    quote:
      "Drummonds International has been instrumental in helping us navigate Bahrain's VAT requirements. Their expertise saved us time and money.",
    author: "Ahmed Al-Mahmood",
    company: "Manufacturing Company",
  },
  {
    quote:
      "The audit services provided by Drummonds International are thorough and professional. They helped us improve our internal controls significantly.",
    author: "Sarah Johnson",
    company: "Trading Company",
  },
  {
    quote: "Their business advisory services helped us make strategic decisions that led to 30% growth in our revenue.",
    author: "Mohammed Hassan",
    company: "Service Company",
  },
]

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <Badge variant="secondary" className="mb-4">
            Why Choose Drummonds International
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Your Success is Our <span className="gradient-text">Priority</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty fade-in-delay-1">
            With over 15 years of experience and 500+ satisfied clients, Drummonds International is your trusted partner
            for all auditing, accounting, and business advisory needs in Bahrain.
          </p>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Why Businesses Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Here's what sets Drummonds Intl apart from other accounting and auditing firms in Bahrain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <Card key={index} className="hover-lift hover-glow stagger-item">
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-pretty">
                      {reason.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Our Track Record</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Numbers that speak to our commitment and success in serving businesses across Bahrain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover-lift scale-in">
              <div className="text-5xl font-bold text-accent mb-4">15+</div>
              <div className="text-lg font-medium text-foreground mb-2">Years of Excellence</div>
              <div className="text-muted-foreground">Serving businesses in Bahrain</div>
            </Card>
            <Card className="text-center p-8 hover-lift scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold text-accent mb-4">500+</div>
              <div className="text-lg font-medium text-foreground mb-2">Satisfied Clients</div>
              <div className="text-muted-foreground">Across various industries</div>
            </Card>
            <Card className="text-center p-8 hover-lift scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold text-accent mb-4">100%</div>
              <div className="text-lg font-medium text-foreground mb-2">Compliance Rate</div>
              <div className="text-muted-foreground">VAT and audit compliance</div>
            </Card>
            <Card className="text-center p-8 hover-lift scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl font-bold text-accent mb-4">24/7</div>
              <div className="text-lg font-medium text-foreground mb-2">Support Available</div>
              <div className="text-muted-foreground">For our valued clients</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Don't just take our word for it. Here's what our clients have to say about working with Drummonds
              International.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift hover-glow stagger-item">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex text-accent mb-4">
                      {[...Array(5)].map((_, i) => (
                        <CheckCircle key={i} className="h-5 w-5" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic text-pretty">"{testimonial.quote}"</p>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
            Ready to Experience the Drummonds International Difference?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-pretty opacity-90 fade-in-delay-1">
            Join hundreds of satisfied clients who trust Drummonds International for their auditing, accounting, and
            business advisory needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-delay-2">
            <Button size="lg" variant="secondary" className="btn-animate hover-lift" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent hover-glow"
              asChild
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
