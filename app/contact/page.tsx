"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["The Collective Hub", "Yateem Center, Manama", "Kingdom of Bahrain"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+973 35480599", "+973 33690539"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["drummondsbusinesssolutions@gmail.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Sunday - Thursday: 8:00 AM - 6:00 PM", "Friday - Saturday: Closed"],
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);

    try {
      // Use backend URL from .env
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
      const res = await fetch(`${backendUrl}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (data.status === "success") {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Failed to send message. Please try again.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Failed to send message. Please try again.");
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Mobile Optimized */}
      <section className="bg-gradient-to-br from-background via-background to-muted/20 pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 text-xs sm:text-sm">
            Contact Us
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Get in Touch with Our Experts
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to take your business to the next level? Contact Drummonds International today for professional
            auditing, accounting, and business advisory services in Bahrain.
          </p>
        </div>
      </section>

      {/* Contact Information & Form - Mobile First Layout */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12">
            
            {/* Contact Information - Stacked on Mobile */}
            <div className="order-2 lg:order-1">
              <div className="mb-6 lg:mb-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  Contact Information
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We're here to help you with all your auditing, accounting, and business advisory needs. 
                  Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-xs sm:text-sm text-muted-foreground break-words">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Quick Contact Card */}
              <Card className="bg-accent text-accent-foreground mt-6">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Quick Contact</h3>
                  <p className="text-sm text-accent-foreground/80 mb-3">
                    For urgent matters or immediate assistance
                  </p>
                  <div className="space-y-1">
                    <p className="font-medium text-sm">Emergency Hotline: +973 35480599</p>
                    <p className="text-xs text-accent-foreground/80">Available 24/7 for existing clients</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form - Priority on Mobile */}
            <div className="order-1 lg:order-2">
              <Card className="shadow-lg">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl">Send Us a Message</CardTitle>
                  <CardDescription className="text-sm">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="h-10 sm:h-11 border-2 border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="h-10 sm:h-11 border-2 border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Phone and Company Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+973 35480599"
                          className="h-10 sm:h-11 border-2 border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-foreground">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="h-10 sm:h-11 border-2 border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-foreground">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-10 sm:h-11 px-3 py-2 border-2 border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-md bg-background text-sm transition-all duration-200 appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: 'right 0.5rem center',
                          backgroundSize: '1.25em 1.25em',
                          backgroundRepeat: 'no-repeat'
                        }}
                      >
                        <option value="">Select a service</option>
                        <option value="auditing">Auditing Services</option>
                        <option value="accounting">Accounting Services</option>
                        <option value="vat">VAT Services Bahrain</option>
                        <option value="business-advisory">Business Advisory</option>
                        <option value="company-formation">Company Formation</option>
                        <option value="management-consulting">Management Consulting</option>
                        <option value="ca-acca">CA/ACCA Expert Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        required
                        className="resize-vertical min-h-[100px] border-2 border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-10 sm:h-11 text-sm sm:text-base"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <span className="animate-spin mr-2">&#9696;</span> Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                    {status === "success" && (
                      <p className="text-green-600 text-sm mt-2">Your message was sent successfully!</p>
                    )}
                    {status === "error" && (
                      <p className="text-red-600 text-sm mt-2">{errorMsg}</p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Visit Our Office
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Located in the heart of Manama, our office is easily accessible and equipped with modern facilities to
              serve our clients better.
            </p>
          </div>

          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="w-full h-[250px] sm:h-[300px] lg:h-[400px]">
                <iframe
                  title="Drummonds International Office Location"
                  src="https://www.google.com/maps?q=The+Collective+Hub,+Yateem+Center,+Manama,+Bahrain&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
