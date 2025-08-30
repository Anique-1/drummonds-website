import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Globe, Users, Award, TrendingUp, FileText } from "lucide-react"
import Link from "next/link"

export default function CAACCAExpertsPage() {
  const regions = ["Saudi Arabia", "Qatar", "UAE (Dubai)", "Kuwait", "Bahrain", "Oman"]

  const services = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Financial Statement Preparation",
      description: "Expert preparation of comprehensive financial statements following international standards",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Management Accounting",
      description: "Strategic financial analysis and management reporting for informed decision-making",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Compliance & Regulatory",
      description: "Ensuring full compliance with local and international accounting standards",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Financial Consulting",
      description: "Expert advisory services for complex financial matters and business decisions",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                Professional Excellence
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                CA & ACCA Expert Services
              </h1>
              <p className="text-xl text-foreground/80 mb-8 text-pretty">
                Access highly qualified Chartered Accountants and ACCA professionals for comprehensive financial
                services across the MENA region. Our experts bring decades of experience in financial management,
                compliance, and strategic advisory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Expert Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/team">Meet Our Experts</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Coverage */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">MENA Region Coverage</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Our CA and ACCA experts provide professional services across the entire MENA region, ensuring consistent
                quality and compliance standards.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {regions.map((region, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Globe className="h-8 w-8 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground">{region}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Expert Financial Services</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Our qualified CA and ACCA professionals provide comprehensive financial services tailored to your
                business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-accent mb-4">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Experts */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Our CA & ACCA Experts?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Qualified Professionals</h3>
                      <p className="text-foreground/70">
                        CA finalists and ACCA qualified experts with 15-25+ years of experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Regional Expertise</h3>
                      <p className="text-foreground/70">
                        Deep understanding of MENA region financial regulations and practices
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Comprehensive Services</h3>
                      <p className="text-foreground/70">
                        Full spectrum of financial services from basic bookkeeping to strategic advisory
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Quality Assurance</h3>
                      <p className="text-foreground/70">
                        Rigorous quality control and adherence to international standards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get Started Today</h3>
                <p className="text-foreground/70 mb-6">
                  Connect with our CA and ACCA experts to discuss your financial service needs and discover how we can
                  support your business growth across the MENA region.
                </p>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
