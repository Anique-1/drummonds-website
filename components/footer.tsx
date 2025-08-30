"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-foreground">
                Drummonds
                <span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-pretty text-sm sm:text-base leading-relaxed">
              Leading provider of professional auditing, accounting, and VAT services in Bahrain. We help businesses
              achieve compliance and financial excellence.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground bg-transparent transition-colors duration-200 h-9 w-9"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground bg-transparent transition-colors duration-200 h-9 w-9"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground bg-transparent transition-colors duration-200 h-9 w-9"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground bg-transparent transition-colors duration-200 h-9 w-9"
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base">
                About Us
              </Link>
              <Link href="/services" className="block text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base">
                Our Services
              </Link>
              <Link href="/why-choose-us" className="block text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base">
                Why Choose Us
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            <div className="space-y-3">
              <Link
                href="/services/auditing"
                className="block text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base"
              >
                Auditing Services
              </Link>
              <Link
                href="/services/accounting"
                className="block text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base"
              >
                Accounting Services
              </Link>
              <Link href="/services/vat" className="block text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base">
                VAT Services Bahrain
              </Link>
              <Link
                href="/services/business-advisory"
                className="block text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base"
              >
                Business Advisory
              </Link>
              <Link
                href="/services/company-formation"
                className="block text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base"
              >
                Company Formation
              </Link>
            </div>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground text-sm sm:text-base">
                  <p>The Collective Hub</p>
                  <p>Yateem Center, Manama</p>
                  <p>Kingdom of Bahrain</p>
                </div>
              </div>
              
              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground text-sm sm:text-base">
                  <p>+973 35480599</p>
                  <p>+973 33690539</p>
                </div>
              </div>
              
              {/* Email Address - Fixed Display */}
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground text-sm sm:text-base break-all">
                  <a 
                    href="mailto:drummondsbusinesssolutions@gmail.com" 
                    className="hover:text-accent transition-colors underline-offset-2 hover:underline"
                  >
                    drummondsbusinesssolutions@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground text-sm sm:text-base">
                  <p>Sun - Thu: 8:00 AM - 6:00 PM</p>
                  <p>Fri - Sat: Closed</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1 text-sm h-10 border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200" 
                />
                <Button 
                  size="icon" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-200 h-10 w-10 flex-shrink-0"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Subscribe to get updates on VAT regulations and business insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="text-muted-foreground text-xs sm:text-sm order-2 sm:order-1">
            © 2025 Drummonds. All rights reserved. | Professional Auditing & VAT Services in Bahrain
          </div>
        </div>
      </div>
    </footer>
  )
}