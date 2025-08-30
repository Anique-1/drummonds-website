import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Settings, TrendingUp, Target } from "lucide-react"
import Link from "next/link"

const consultingServices = [
  {
    title: "Operations Consulting",
    description: "Optimize your business operations for maximum efficiency and productivity.",
    icon: Settings,
  },
  {
    title: "Financial Planning",
    description: "Strategic financial planning to ensure sustainable growth and profitability.",
    icon: TrendingUp,
  },
  {
    title: "Process Improvement",
    description: "Identify and implement process improvements to reduce costs and increase quality.",
    icon: Target,
  },
  {
    title: "Change Management",
    description: "Guide your organization through successful transformation and change initiatives.",
    icon: Users,
  },
]

export default function ManagementConsultingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">Management Consulting</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Expert Management Consulting Services
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Transform your organization with our expert management consulting services. We help you optimize
                operations, improve processes, and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href="/contact">Get Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/management-consulting-team-meeting-strategy-plann.png"
                alt="Management consulting services"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Consulting Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our management consulting services help organizations improve performance and achieve their strategic
              objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => {
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
