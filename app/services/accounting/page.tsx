import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, FileText, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

const accountingServices = [
  {
    title: "Bookkeeping Services",
    description: "Accurate recording and maintenance of your financial transactions and records.",
    icon: FileText,
  },
  {
    title: "Financial Reporting",
    description: "Comprehensive financial statements and reports for informed decision-making.",
    icon: TrendingUp,
  },
  {
    title: "Management Accounts",
    description: "Detailed management reports to help you understand your business performance.",
    icon: Calculator,
  },
  {
    title: "Payroll Services",
    description: "Complete payroll processing including salary calculations and compliance.",
    icon: Users,
  },
]

export default function AccountingServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">Accounting Services</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Professional Accounting Services
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Keep your finances organized and compliant with our comprehensive accounting services. From bookkeeping
                to financial reporting, we handle it all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/professional-accountant-working-with-financial-rep.png"
                alt="Professional accounting services"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Our Accounting Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We provide comprehensive accounting solutions to keep your business finances accurate and compliant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {accountingServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-pretty">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
