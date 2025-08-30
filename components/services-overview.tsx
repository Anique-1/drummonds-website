import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, FileText, TrendingUp, Building, Users, Shield } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: FileText,
    title: "Auditing Services",
    description:
      "Comprehensive audit services ensuring compliance and accuracy for your business financial statements.",
    href: "/services/auditing",
  },
  {
    icon: Calculator,
    title: "Accounting Services",
    description: "Professional bookkeeping, financial reporting, and accounting solutions tailored to your needs.",
    href: "/services/accounting",
  },
  {
    icon: Shield,
    title: "VAT Services Bahrain",
    description: "Expert VAT registration, filing, and compliance services specifically for Bahrain businesses.",
    href: "/services/vat",
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    description: "Strategic business consulting to help you make informed decisions and drive growth.",
    href: "/services/business-advisory",
  },
  {
    icon: Building,
    title: "Company Formation",
    description: "Complete company setup and registration services in Bahrain with ongoing support.",
    href: "/services/company-formation",
  },
  {
    icon: Users,
    title: "Management Consulting",
    description: "Expert guidance on business operations, financial planning, and organizational development.",
    href: "/services/management-consulting",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Professional Services</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto text-pretty">
            Drummonds International is a firm of Chartered Accountants, Management Consultants and Business Advisors,
            providing specialist services across Bahrain and the Gulf region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover-lift"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-foreground/70 text-pretty">{service.description}</CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent hover-glow"
                  >
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 btn-animate" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
