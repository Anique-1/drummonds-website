import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building, FileText, CreditCard, Shield } from "lucide-react"
import Link from "next/link"

const formationServices = [
  {
    title: "Company Registration",
    description: "Complete company registration process with Bahrain's Ministry of Industry and Commerce.",
    icon: Building,
  },
  {
    title: "License Applications",
    description: "Assistance with obtaining all necessary business licenses and permits.",
    icon: FileText,
  },
  {
    title: "Bank Account Setup",
    description: "Help with opening corporate bank accounts with major Bahraini banks.",
    icon: CreditCard,
  },
  {
    title: "Ongoing Compliance",
    description: "Continuous support to ensure your company remains compliant with all regulations.",
    icon: Shield,
  },
]

export default function CompanyFormationPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">Company Formation</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Company Formation Services in Bahrain
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Start your business in Bahrain with confidence. We handle all aspects of company formation, from
                registration to ongoing compliance support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href="/contact">Start Your Company</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/bahrain-company-formation-business-registration.png"
                alt="Company formation in Bahrain"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Formation Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We provide end-to-end company formation services to get your business up and running in Bahrain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {formationServices.map((service, index) => {
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
