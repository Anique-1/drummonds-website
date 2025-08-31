import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Globe, Target, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every service we provide, ensuring the highest quality standards.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We conduct our business with the utmost integrity, transparency, and ethical standards.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description:
      "Our clients are at the center of everything we do. We tailor our services to meet their unique needs.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "We embrace innovation and continuously improve our processes to deliver better results.",
  },
]

const achievements = [
  "15+ years of professional excellence in Bahrain",
  "500+ satisfied clients across various industries",
  "Certified Chartered Accountants and Business Advisors",
  "Specialized expertise in Bahrain VAT regulations",
  "Comprehensive audit and assurance services",
  "Strategic business advisory and consulting",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            About Drummonds International
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Your Trusted Financial Partners in Bahrain
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            With over 15 years of experience, Drummonds International has been providing exceptional auditing,
            accounting, and business advisory services to businesses across Bahrain and the Gulf region.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Story & Mission</h2>
              <div className="space-y-4 text-muted-foreground text-pretty">
                <p className="text-lg">
                  Drummonds International is a firm of Chartered Accountants, Management Consultants and Business
                  Advisors. With offices in Bahrain, we provide specialist end-to-end services right through feasibility
                  studies, company incorporation, accounting & book keeping, audit & assurance, and assists clients in
                  terms of all global and local legal compliances.
                </p>
                <p>
                  Our approach is constructive and business oriented. Our experts focus their efforts to understand
                  exactly how your business and its financial systems have been performing, and identify how that
                  performance could be improved. We assure that the processes are organized in a way to minimize
                  unwanted interruptions to your operations.
                </p>
                <p>
                  As Business Advisors, we aim to enhance clients' enterprise performance and ensure business grows to
                  the next level and sustains such growth, overcoming challenges and capitalizing on opportunities.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/drummonds-professional-office-team.png"
                alt="Drummonds International team in professional office"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute bottom-6 left-6 bg-card border border-border rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              These values guide everything we do and shape how we serve our clients every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-pretty">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our experienced leadership team brings decades of expertise in auditing, accounting, and business advisory
              services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic%20with%20glasses.jpg-JmBcovDJUW6qvXAKmUUCfW9c4IVz54.jpeg"
                    alt="Managing Partner"
                    className="w-full h-[500px] object-contain bg-white"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Abid Mehmood</h2>
                <p className="text-accent font-medium mb-4">Managing Partner CA Finalist & GCIA</p>
              </div>
              <div className="space-y-4 text-muted-foreground text-pretty">
                <p>
                  Leading Drummonds International with extensive experience in strategic financial management, business
                  advisory, and regulatory compliance across the MENA region.
                </p>
                <p>
                  Core competencies include financial management, managerial finance, and new business development. With
                  a strong track record of helping business leaders better understand their finances, plan their cash
                  flows, optimize their budgets, measure their key performance indicators, and make strategic decisions
                  that align with their goals.
                </p>
                <p>
                  Specialized in providing Outsourced CFO Services on a part-time, project-based, or as-needed basis for
                  small to mid-sized businesses that need high-level financial strategy and expertise across the MENA
                  region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">Our Track Record</h2>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                We're proud of what we've accomplished and the trust our clients place in us.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Clients Served</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
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
