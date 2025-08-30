import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Target, BarChart, Lightbulb } from "lucide-react"
import Link from "next/link"

const advisoryServices = [
  {
    title: "Strategic Planning",
    description: "Develop comprehensive business strategies to achieve your long-term goals.",
    icon: Target,
  },
  {
    title: "Financial Analysis",
    description: "In-depth analysis of your financial performance and market position.",
    icon: BarChart,
  },
  {
    title: "Performance Improvement",
    description: "Identify opportunities to enhance operational efficiency and profitability.",
    icon: TrendingUp,
  },
  {
    title: "Growth Strategy",
    description: "Strategic guidance to scale your business and enter new markets.",
    icon: Lightbulb,
  },
]

export default function BusinessAdvisoryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">Business Advisory</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Strategic Business Advisory Services
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Transform your business with expert strategic guidance. Our advisors help you make informed decisions
                that drive sustainable growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/business-strategy-consultation-meeting-with-charts.png"
                alt="Business advisory consultation"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Our Advisory Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We provide strategic guidance to help your business overcome challenges and capitalize on opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advisoryServices.map((service, index) => {
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
