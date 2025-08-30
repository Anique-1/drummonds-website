"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-accent text-accent-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Mobile layout - stacked vertically */}
          <div className="md:hidden flex flex-col gap-1 text-xs">
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-3 w-3" />
              <span>drummondsbusinesssolutions@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-3 w-3" />
              <span>+973 3548 0599 | +973 3369 0539</span>
            </div>
          </div>

          {/* Desktop layout - horizontal */}
          <div className="hidden md:flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>drummondsbusinesssolutions@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+973 3548 0599 | +973 3369 0539</span>
              </div>
            </div>
            <div>
              <span>Professional Auditing & VAT Services in Bahrain</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-foreground">
                Drummonds<span className="text-accent">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-accent transition-colors">
                HOME
              </Link>
              <Link href="/about" className="text-foreground hover:text-accent transition-colors">
                ABOUT US
              </Link>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
                  OUR SERVICES
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/services/auditing">Auditing Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/accounting">Accounting Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/vat">VAT Services Bahrain</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/business-advisory">Business Advisory</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/company-formation">Company Formation</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/ca-acca-experts">CA/ACCA Expert Services</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/team" className="text-foreground hover:text-accent transition-colors">
                OUR TEAM
              </Link>
              <Link href="/why-choose-us" className="text-foreground hover:text-accent transition-colors">
                WHY CHOOSE US
              </Link>
              <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
                CONTACT US
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-foreground hover:text-accent transition-colors">
                  HOME
                </Link>
                <Link href="/about" className="text-foreground hover:text-accent transition-colors">
                  ABOUT US
                </Link>
                <div className="pl-4 space-y-2">
                  <div className="text-muted-foreground text-sm font-medium">OUR SERVICES</div>
                  <Link href="/services/auditing" className="block text-foreground hover:text-accent transition-colors">
                    Auditing Services
                  </Link>
                  <Link
                    href="/services/accounting"
                    className="block text-foreground hover:text-accent transition-colors"
                  >
                    Accounting Services
                  </Link>
                  <Link href="/services/vat" className="block text-foreground hover:text-accent transition-colors">
                    VAT Services Bahrain
                  </Link>
                  <Link
                    href="/services/business-advisory"
                    className="block text-foreground hover:text-accent transition-colors"
                  >
                    Business Advisory
                  </Link>
                  <Link
                    href="/services/company-formation"
                    className="block text-foreground hover:text-accent transition-colors"
                  >
                    Company Formation
                  </Link>
                  <Link
                    href="/services/ca-acca-experts"
                    className="block text-foreground hover:text-accent transition-colors"
                  >
                    CA/ACCA Expert Services
                  </Link>
                </div>
                <Link href="/team" className="text-foreground hover:text-accent transition-colors">
                  OUR TEAM
                </Link>
                <Link href="/why-choose-us" className="text-foreground hover:text-accent transition-colors">
                  WHY CHOOSE US
                </Link>
                <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
                  CONTACT US
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
