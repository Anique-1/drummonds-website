import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CompanyOverview() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                About Drummonds International
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Your Trusted Financial Partners in Bahrain
              </h2>
            </div>

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
                performance could be improved. We assure that the processes are organized in a way to minimize unwanted
                interruptions to your operations.
              </p>

              <p>
                As Business Advisors, we aim to enhance clients' enterprise performance and ensure business grows to the
                next level and sustains such growth, overcoming challenges and capitalizing on opportunities.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Satisfied Clients</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/professional-accountants-working-with-financial-do.png"
                  alt="Drummonds International team at work"
                  className="w-full h-[500px] object-cover"
                />
              </CardContent>
            </Card>

            {/* Floating badge */}
            <div className="absolute top-6 left-6 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
              Bahrain VAT Specialists
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
