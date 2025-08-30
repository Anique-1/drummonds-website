import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, FileText, Calculator, AlertCircle, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

const vatServices = [
  {
    title: "VAT Registration",
    description: "Complete VAT registration process with Bahrain's National Bureau for Revenue (NBR).",
    icon: FileText,
  },
  {
    title: "VAT Return Filing",
    description: "Accurate and timely VAT return preparation and submission to ensure compliance.",
    icon: Calculator,
  },
  {
    title: "VAT Compliance Review",
    description: "Comprehensive review of your VAT processes to ensure ongoing compliance.",
    icon: Shield,
  },
  {
    title: "VAT Advisory Services",
    description: "Expert guidance on VAT implications for business transactions and operations.",
    icon: AlertCircle,
  },
]

const vatBenefits = [
  "Avoid penalties and fines",
  "Ensure accurate VAT calculations",
  "Streamline VAT processes",
  "Expert knowledge of Bahrain VAT law",
  "Timely filing and compliance",
  "Ongoing support and guidance",
]

export default function VATServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">VAT Services Bahrain</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Expert VAT Services in <span className="text-accent">Bahrain</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Navigate Bahrain's VAT requirements with confidence. Our specialized team ensures full compliance with
                the National Bureau for Revenue (NBR) regulations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href="/contact">Get VAT Help</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/bahrain-vat-compliance-professional-consultation.png"
                alt="VAT consultation in Bahrain"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute top-6 left-6 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                Bahrain VAT Specialists
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VAT Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Bahrain VAT Compliance Made Simple
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Since January 2019, Bahrain has implemented a 10% VAT system. Our experts help you navigate every aspect
              of VAT compliance with the National Bureau for Revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vatServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
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

      {/* Key Information */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
                Bahrain VAT Key Facts
              </h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calculator className="h-5 w-5 text-accent" />
                      <span className="font-semibold">VAT Rate</span>
                    </div>
                    <p className="text-muted-foreground">Standard rate of 10% applies to most goods and services</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="h-5 w-5 text-accent" />
                      <span className="font-semibold">Registration Threshold</span>
                    </div>
                    <p className="text-muted-foreground">
                      Mandatory registration for businesses with annual turnover exceeding BHD 37,500
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="h-5 w-5 text-accent" />
                      <span className="font-semibold">Filing Frequency</span>
                    </div>
                    <p className="text-muted-foreground">
                      Quarterly VAT returns must be filed within 28 days of period end
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Our VAT Services?</h3>
              <div className="space-y-3">
                {vatBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <Link href="/contact">Schedule VAT Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </main>
  )
}
