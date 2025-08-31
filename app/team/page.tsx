import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Abid Mehmood",
      role: "CA Finalist & GCIA",
      experience: "30+ Years Experience",
      specialization: "Strategic Leadership & Financial Advisory",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic%20with%20glasses.jpg-JmBcovDJUW6qvXAKmUUCfW9c4IVz54.jpeg",
      description:
        "Leading Drummonds International with extensive experience in strategic financial management, business advisory, and regulatory compliance across the MENA region.",
    },
    {
      name: "Hamid Mehmood",
      role: "Chartered Accountant Finalist - MPA, MBA, APFA",
      experience: "25+ Years Experience",
      specialization: "Financial Auditing & Compliance",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/senor%20ca%20finalist%20.jpg-vTltqWx1XqW9OflWvBlQlnoK8efXWa.jpeg",
      description:
        "Served as Director Tax and Audit at Rizwan & Company, Chartered Accountants, leading assignments related to statutory audits, tax advisory, and regulatory compliance. Oversaw audit engagements across diverse industries, ensured adherence to applicable accounting and tax laws, and provided strategic guidance to clients for effective financial management and compliance.",
    },
    {
      name: "Naila Ijaz",
      role: "CA Finalist & SAP FICO Consultant",
      experience: "12+ Years Experience",
      specialization: "SAP Financial Consulting & ERP Implementation",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Naila.jpg-C4M3LRUa0uNJX8UXdBSpCOwMT4CnEl.jpeg",
      description:
        "Expert in SAP FICO module implementation, financial process optimization, and ERP system integration with extensive experience in helping organizations streamline their financial operations and reporting systems across various industries.",
    },
    {
      name: "Shumaila Ijaz",
      role: "Human Resources Manager",
      experience: "8+ Years Experience",
      specialization: "Talent Management & Employee Relations",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HR%20Manager.jpg-1CQKWg3QvQilDWHeP95hMnMpPJYp3u.jpeg",
      description:
        "Leading our human resources initiatives with expertise in talent acquisition, employee development, performance management, and organizational culture building across the MENA region.",
    },
    {
      name: "Muhammad Ahmad",
      role: "VAT Specialist - Bahrain",
      experience: "VAT Compliance Expert",
      specialization: "Bahrain VAT & Tax Advisory",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pic%20White%20Background.JPG-KCT6DqP761OXYdu8s7rnJZFRm0mKWS.jpeg",
      description:
        "Expert in Bahrain VAT regulations, compliance, and tax advisory services with deep knowledge of NBR requirements.",
    },
    {
      name: "Kamran Masud Khan",
      role: "Banking Credit & Risk Management Expert",
      experience: "15+ Years Experience",
      specialization: "Credit Analysis & Risk Assessment",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kamran.jpg-tdS85nutRsGYQ6cItl3m1vLANiRD1h.jpeg",
      description:
        "Specialized in banking operations, credit risk assessment, and financial risk management with extensive experience in evaluating creditworthiness, portfolio management, and regulatory compliance across banking institutions in the MENA region.",
    },
    {
      name: "Muzamil Amjad",
      role: "Marketing Specialist",
      experience: "6+ Years Experience",
      specialization: "Digital Marketing & Brand Strategy",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/muzamil%20pic-QUT1opJy1ee4Tm2LIMcHkyFmDlpVXo.png",
      description:
        "Expert in digital marketing strategies, brand development, and market analysis with extensive experience in developing comprehensive marketing campaigns, social media management, and client acquisition strategies across diverse industries in the MENA region.",
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
                Meet Our Experts
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Our Professional Team
              </h1>
              <p className="text-xl text-foreground/80 mb-8 text-pretty">
                Meet our highly qualified team of CA finalists and VAT experts who bring decades of combined experience
                in financial services, auditing, and tax compliance across the MENA region at Drummonds International.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="relative mb-6">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={240}
                          height={240}
                          className="w-40 h-40 rounded-full mx-auto object-contain bg-white border-4 border-accent/20 group-hover:border-accent/40 transition-colors"
                        />
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                      <p className="text-accent font-semibold mb-2">{member.role}</p>

                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{member.experience}</span>
                      </div>

                      <Badge variant="outline" className="mb-4">
                        {member.specialization}
                      </Badge>

                      <p className="text-sm text-foreground/70 leading-relaxed">{member.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Expertise */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Combined Expertise</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Our Drummonds International team brings together decades of experience in financial services, auditing,
                and tax compliance across the MENA region.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">103+</h3>
                  <p className="text-foreground/70">Years Combined Experience</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">6</h3>
                  <p className="text-foreground/70">MENA Countries Served</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">100%</h3>
                  <p className="text-foreground/70">Professional Qualified</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
