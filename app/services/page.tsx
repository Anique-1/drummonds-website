import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, FileText, TrendingUp, Building, Users, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: FileText,
    title: "Auditing Services",
    description:
      "Comprehensive audit services ensuring compliance and accuracy for your business financial statements.",
    features: ["External Audits", "Internal Audits", "Compliance Reviews", "Risk Assessment"],
    href: "/services/auditing",
  },
  {
    icon: Calculator,
    title: "Accounting Services",
    description: "Professional bookkeeping, financial reporting, and accounting solutions tailored to your needs.",
    features: ["Bookkeeping", "Financial Reporting", "Management Accounts", "Payroll Services"],
    href: "/services/accounting",
  },
  {
    icon: Shield,
    title: "VAT Services Bahrain",
    description: "Expert VAT registration, filing, and compliance services specifically for Bahrain businesses.",
    features: ["VAT Registration", "VAT Returns", "VAT Compliance", "VAT Advisory"],
    href: "/services/vat",
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    description: "Strategic business consulting to help you make informed decisions and drive growth.",
    features: ["Strategic Planning", "Financial Analysis", "Performance Improvement", "Growth Strategy"],
    href: "/services/business-advisory",
  },
  {
    icon: Building,
    title: "Company Formation",
    description: "Complete company setup and registration services in Bahrain with ongoing support.",
    features: ["Company Registration", "License Applications", "Bank Account Setup", "Ongoing Compliance"],
    href: "/services/company-formation",
  },
  {
    icon: Users,
    title: "Management Consulting",
    description: "Expert guidance on business operations, financial planning, and organizational development.",
    features: ["Operations Consulting", "Financial Planning", "Process Improvement", "Change Management"],
    href: "/services/management-consulting",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Professional Services for Your Business Success
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Drummonds International provides comprehensive auditing, accounting, and business advisory services to help
            your business thrive in Bahrain and beyond.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-pretty">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </main>
  )
}
