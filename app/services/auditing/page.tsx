import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, CheckCircle, Shield, TrendingUp, Users, Clock } from "lucide-react"
import Link from "next/link"

const auditServices = [
  {
    title: "External Audits",
    description: "Independent examination of your financial statements to provide assurance to stakeholders.",
    icon: FileText,
  },
  {
    title: "Internal Audits",
    description: "Comprehensive review of internal controls and processes to identify risks and improvements.",
    icon: Shield,
  },
  {
    title: "Compliance Audits",
    description: "Ensure your business meets all regulatory requirements and industry standards.",
    icon: CheckCircle,
  },
  {
    title: "Performance Audits",
    description: "Evaluate operational efficiency and effectiveness to optimize business performance.",
    icon: TrendingUp,
  },
]

const benefits = [
  "Enhanced credibility with stakeholders",
  "Improved internal controls",
  "Risk identification and mitigation",
  "Regulatory compliance assurance",
  "Better decision-making insights",
  "Increased investor confidence",
]

export default function AuditingServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">Auditing Services</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Professional Auditing Services in Bahrain
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Our experienced team of chartered accountants provides comprehensive auditing services to ensure your
                financial statements are accurate, compliant, and trustworthy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/professional-auditor-reviewing-financial-documents.png"
                alt="Professional auditor at work"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Our Auditing Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We provide a full range of auditing services tailored to meet your business needs and regulatory
              requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {auditServices.map((service, index) => {
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

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
                Why Choose Our Auditing Services?
              </h2>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-accent" />
                    <CardTitle>Expert Team</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our certified auditors bring years of experience and deep knowledge of Bahrain regulations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-accent" />
                    <CardTitle>Timely Delivery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We understand deadlines matter and ensure all audit reports are delivered on time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
