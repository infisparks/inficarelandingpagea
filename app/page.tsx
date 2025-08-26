"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  CreditCard,
  Users,
  Bed,
  TestTube,
  Pill,
  Package,
  DollarSign,
  Shield,
  BarChart3,
  FileText,
  Settings,
  MessageCircle,
  Brain,
  Star,
  CheckCircle,
  Phone,
  Stethoscope,
  Heart,
  Activity,
  Zap,
  Globe,
  Award,
  Mail,
  Play,
  TrendingUp,
  Clock,
  Users2,
  Building2,
  Sparkles,
  Upload,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"
import { useRef, useEffect } from "react"

export default function HomePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState(null as any)
  const mobileCarouselRef = useRef<HTMLDivElement>(null)

  const handleBookDemo = () => {
    window.open(
      "https://wa.me/919958399157?text=Hi, I would like to book a demo for InfiCare healthcare management system.",
      "_blank",
    )
  }

  const openFeatureDialog = (feature: any) => {
    setSelectedFeature(feature)
    setIsDialogOpen(true)
  }

  useEffect(() => {
    const carousel = mobileCarouselRef.current
    if (!carousel) return

    let scrollAmount = 0
    let direction = 1 // 1 for right, -1 for left

    const scrollCarousel = () => {
      if (direction === 1) {
        scrollAmount += 1 // Adjust scroll speed here
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
          direction = -1
        }
      } else {
        scrollAmount -= 1 // Adjust scroll speed here
        if (scrollAmount <= 0) {
          direction = 1
        }
      }
      carousel.scrollTo({ left: scrollAmount, behavior: "smooth" })
    }

    const interval = setInterval(scrollCarousel, 50) // Adjust interval for smoother or faster scroll

    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: Calendar,
      title: "Appointment & Scheduling",
      description:
        "Smart scheduling system with automated reminders, conflict resolution, and multi-provider calendar management for seamless patient booking experience",
      image: "/soft/1.png",
    },
    {
      icon: CreditCard,
      title: "Cash/Billing Center",
      description:
        "Comprehensive billing management with multiple payment options, insurance processing, automated invoicing, and real-time financial reporting",
        image: "/soft/2.png",
      },
    {
      icon: Users,
      title: "O.P.D. Center",
      description:
        "Complete outpatient department management with intelligent queue management, consultation tracking, and patient flow optimization",
      image: "/modern-outpatient-department-management-interface.png",
    },
    {
      icon: Bed,
      title: "I.P.D. Center",
      description:
        "Advanced inpatient department management with smart bed allocation, discharge planning, care coordination, and patient monitoring systems",
        image: "/soft/3.png",

    },
    {
      icon: TestTube,
      title: "Laboratory",
      description:
        "State-of-the-art lab management with automated testing workflows, quality control protocols, digital reporting, and integration with diagnostic equipment",
        image: "/soft/4.png",

    },
    {
      icon: Pill,
      title: "Pharmacy & Medicine",
      description:
        "Integrated pharmacy management with inventory tracking, drug interaction alerts, prescription management, and automated dispensing systems",
        image: "/soft/5.png",

    },
    {
      icon: Package,
      title: "Inventory & Stock",
      description:
        "Smart inventory management with automated reordering, expiry tracking, vendor management, and real-time stock level monitoring",
        image: "/soft/6.png",

    },
    {
      icon: DollarSign,
      title: "Payroll Management",
      description:
        "Comprehensive payroll system with attendance tracking, benefits management, tax calculations, and automated salary processing",
        image: "/soft/7.png",

    },
    {
      icon: BarChart3,
      title: "Financial Account",
      description:
        "Complete financial management with advanced accounting, budgeting tools, financial reporting, and compliance management",
        image: "/soft/8.png",

    },
    {
      icon: Shield,
      title: "Security Control",
      description:
        "Enterprise-grade security features with role-based access control, audit trails, data encryption, and compliance monitoring",
        image: "/soft/9.png",

    },
    {
      icon: BarChart3,
      title: "MIS",
      description:
        "Advanced Management Information System with comprehensive analytics, business intelligence, predictive insights, and custom dashboards",
        image: "/soft/10.png",

    },
    {
      icon: FileText,
      title: "Print Receipt/Bills/Reports",
      description:
        "Customizable reporting system with automated generation, distribution, template management, and multi-format export capabilities",
        image: "/soft/1png",

    },
    {
      icon: Settings,
      title: "Administration & Monitoring",
      description:
        "Complete administrative control with real-time monitoring, performance tracking, system health alerts, and centralized management",
        image: "/soft/2.png",

    },
  ]

  const trustedHospitals = [
    {
      name: "Medford Hospital",
      description: "NABH Accredited Multi-Specialty Hospital",
      location: "Mumbai",
      icon: Building2,
      logo: "/logo/medford.png",
    },
    {
      name: "Gautami Medford NX Hospital",
      description: "Advanced Healthcare Center with 200+ Beds",
      location: "Mumbai",
      icon: Heart,
      logo: "/logo/gautami.png",
    },
    {
      name: "Medora Dentist Hospital",
      description: "Premier Dental Specialty Center",
      location: "Mumbai",
      icon: Stethoscope,
      logo: "/logo/medora.png",
    },
    {
      name: "Medbliss",
      description: "Integrated Healthcare Solutions Provider",
      location: "Mumbai",
      icon: Activity,
      logo: "/logo/medbliss.png",
    },
    {
      name: "Medzill",
      description: "Digital Health Solutions & Telemedicine",
      location: "Mumbai",
      icon: Globe,
      logo: "/logo/medzeal.png",
    },
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      hospital: "Medford Hospital",
      content:
        "InfiCare has transformed our hospital operations. The AI integration has reduced our administrative workload by 40%.",
      avatar: "/caring-doctor.png",
    },
    {
      name: "Michael Chen",
      role: "Hospital Administrator",
      hospital: "Advanced Healthcare Center",
      content:
        "The WhatsApp integration for patient communication has been a game-changer. Our patient satisfaction scores have increased significantly.",
      avatar: "/system-administrator.png",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Director of Operations",
      hospital: "Gautami Medford NX Hospital",
      content:
        "Comprehensive solution that covers everything from appointments to billing. The reporting features provide invaluable insights.",
      avatar: "/female-doctor.png",
    },
  ]

  const stats = [
    { number: "500+", label: "Healthcare Facilities", icon: Globe },
    { number: "40%", label: "Reduced Admin Work", icon: Zap },
    { number: "99.9%", label: "System Uptime", icon: Activity },
    { number: "24/7", label: "Support Available", icon: Heart },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Efficiency",
      description: "Streamline operations and reduce manual work by up to 60%",
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Automated processes save 4+ hours daily for healthcare staff",
    },
    {
      icon: Users2,
      title: "Better Patient Care",
      description: "Enhanced patient experience with faster service delivery",
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "HIPAA compliant with enterprise-grade security measures",
    },
  ]

  const pricingFeatures = [
    "Complete Healthcare Management Suite",
    "AI-Powered Analytics & Insights",
    "WhatsApp Integration for Patient Communication",
    "24/7 Technical Support",
    "Regular Updates & Maintenance",
    "Staff Training & Onboarding",
    "Data Migration Assistance",
    "Custom Reporting & Analytics",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2475E9] to-[#2475E9]/80 rounded-xl flex items-center justify-center shadow-lg">
              <img src="/inficarelogo.png" alt="InfiCare Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-2xl font-bold text-foreground">InfiCare</span>
              <p className="text-xs text-muted-foreground -mt-1">Healthcare Management</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Features
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Benefits
            </a>
            <a
              href="#testimonials"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Testimonials
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Pricing
            </a>
            <Button onClick={handleBookDemo} className="bg-[#2475E9] hover:bg-[#2475E9]/90 shadow-lg">
              <Phone className="w-4 h-4 mr-2" />
              Book Demo
            </Button>
          </nav>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={handleBookDemo}>
            <Phone className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2475E9]/8 via-background to-[#2475E9]/12"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-[#2475E9]/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-[#2475E9]/8 to-transparent rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-[#2475E9]/8 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-20 left-1/2 w-2 h-2 bg-[#2475E9] rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-[#2475E9]/60 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-[#2475E9]/80 rounded-full animate-ping delay-500"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="animate-fade-in-up">
                <Badge className="mb-6 bg-blue-100 from-[#2475E9]/10 to-[#2475E9]/20 text-[#2475E9] border-[#2475E9]/30 px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <Sparkles className="w-4 h-4 mr-2 animate-spin-slow" />
                  AI-Powered Healthcare Management
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </Badge>
              </div>

              <div className="animate-fade-in-up delay-200">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
                  Transform Healthcare with{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#2475E9] via-[#2475E9] to-[#1a5bb8] bg-clip-text text-transparent animate-gradient-x">
                      InfiCare
                    </span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#2475E9] to-[#1a5bb8] rounded-full animate-scale-x"></div>
                  </span>
                </h1>
              </div>

              <div className="animate-fade-in-up delay-300">
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Complete healthcare management solution with{" "}
                  <span className="text-[#2475E9] font-medium">AI integration</span> and{" "}
                  <span className="text-green-600 font-medium">WhatsApp communication</span>. Streamline operations,
                  improve patient care, and boost efficiency by <span className="text-[#2475E9] font-bold">60%</span>.
                </p>
              </div>

              <div className="animate-fade-in-up delay-400">
                <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                  <Button
                    onClick={handleBookDemo}
                    size="lg"
                    className="bg-gradient-to-r from-[#2475E9] to-[#1a5bb8] hover:from-[#1a5bb8] hover:to-[#2475E9] text-white text-lg px-8 py-4 shadow-2xl hover:shadow-[#2475E9]/25 transition-all duration-500 hover:scale-105 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Book Free Demo
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-4 bg-transparent border-2 border-[#2475E9]/30 text-[#2475E9] hover:bg-[#2475E9]/5 hover:border-[#2475E9] transition-all duration-300 group backdrop-blur-sm"
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 group-hover:text-[#2475E9] transition-all duration-300" />
                    Watch Demo
                  </Button>
                </div>
              </div>

              <div className="animate-fade-in-up delay-500">
                <div className="flex flex-col sm:flex-row gap-6 text-muted-foreground justify-center lg:justify-start">
                  <div className="flex items-center justify-center lg:justify-start group cursor-pointer">
                    <div className="w-10 h-10 bg-[#2475E9]/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-[#2475E9]/20 transition-colors">
                      <Phone className="w-4 h-4 text-[#2475E9]" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground/70 uppercase tracking-wide">Call Now</p>
                      <span className="font-medium group-hover:text-[#2475E9] transition-colors">+91 9958399157</span>
                    </div>
                  </div>
                  <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/infisparks%40gmail.com?compose=new" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center lg:justify-start group cursor-pointer">
                    <div className="w-10 h-10 bg-[#2475E9]/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-[#2475E9]/20 transition-colors">
                      <Mail className="w-4 h-4 text-[#2475E9]" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground/70 uppercase tracking-wide">Email Us</p>
                      <span className="font-medium group-hover:text-[#2475E9] transition-colors">
                        infisparks@gmail.com
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0 animate-fade-in-up delay-600">
              <div className="relative z-10 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2475E9]/20 via-[#2475E9]/10 to-[#2475E9]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse-slow"></div>
                <div className="relative bg-gradient-to-br from-white to-gray-50 p-2 rounded-2xl shadow-2xl border border-border/50">
                  <img
                    src="/modern-healthcare-management-dashboard-interface-w.png"
                    alt="InfiCare Dashboard"
                    className="w-full h-auto rounded-xl shadow-xl group-hover:scale-[1.02] transition-all duration-700"
                  />

                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#2475E9] to-[#1a5bb8] rounded-2xl flex items-center justify-center shadow-xl animate-bounce-slow">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl animate-pulse-slow">
                    <Activity className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute top-1/4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-float">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute top-3/4 -right-4 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg animate-float-delayed">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 animate-fade-in-up delay-700">
            <div className="text-center mb-8">
              <p className="text-muted-foreground/70 text-sm uppercase tracking-wide mb-4">
                Trusted by Healthcare Leaders
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#2475E9]/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-[#2475E9]" />
                  </div>
                  <span className="text-sm font-medium">5+ Hospitals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Users2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">10,000+ Patients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium">NABH Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2475E9]/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-[#2475E9]" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 md:mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2475E9]/3 via-background to-[#2475E9]/5"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-[#2475E9]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-[#2475E9]/8 to-transparent rounded-full blur-2xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-[#2475E9]/10 text-[#2475E9] border-[#2475E9]/20 shadow-lg backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Why Choose InfiCare
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Measurable Benefits for Your{" "}
              <span className="bg-gradient-to-r from-[#2475E9] to-[#1a5bb8] bg-clip-text text-transparent">
                Healthcare Facility
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join healthcare leaders who have transformed their operations with InfiCare and achieved remarkable
              results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center p-6 md:p-8 hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-[#2475E9]/30 group relative overflow-hidden bg-card/80 backdrop-blur-sm hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2475E9]/5 via-transparent to-[#2475E9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2475E9] to-[#1a5bb8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#2475E9]/10 to-[#2475E9]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-[#2475E9]/20 group-hover:to-[#2475E9]/30 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-[#2475E9]/20">
                    <benefit.icon className="w-8 h-8 md:w-10 md:h-10 text-[#2475E9] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 group-hover:text-[#2475E9] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 md:mt-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/10 to-green-500/20 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">60%</h3>
                <p className="text-muted-foreground font-medium">Efficiency Boost</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2475E9]/10 to-[#2475E9]/20 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-[#2475E9]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">4+</h3>
                <p className="text-muted-foreground font-medium">Hours Saved Daily</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/10 to-purple-500/20 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users2 className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">95%</h3>
                <p className="text-muted-foreground font-medium">Patient Satisfaction</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500/10 to-orange-500/20 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">100%</h3>
                <p className="text-muted-foreground font-medium">HIPAA Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Healthcare Management Suite */}
      <section id="features" className="py-16 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-[#2475E9]/10 text-[#2475E9] border-[#2475E9]/20">Complete Solution</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Healthcare Management Suite
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              From patient care to financial management, InfiCare covers every aspect of hospital operations
            </p>
          </div>

          <div className="relative">
            {/* Desktop Auto-Scroll Carousel */}
            <div className="hidden md:block overflow-hidden">
              <div className="auto-scroll-container flex gap-6" style={{ width: `${features.length * 400}px` }}>
                {[...features, ...features].map((feature, index) => (
                  <Card
                    key={index}
                    className="flex-shrink-0 w-96 bg-card hover:shadow-xl transition-all duration-300 group"
                    onClick={() => openFeatureDialog(feature)}
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-[#2475E9]/20 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-[#2475E9]" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="md:hidden px-4">
              <div
                className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory -mx-4 px-4"
                style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
                ref={mobileCarouselRef}
              >
                {features.map((feature, index) => (
                  <Card key={index} className="flex-shrink-0 w-72 bg-card shadow-lg snap-start" onClick={() => openFeatureDialog(feature)}>
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-[#2475E9]/20 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-[#2475E9]" />
                        </div>
                        <CardTitle className="text-base">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-[#2475E9]/10 text-[#2475E9] border-[#2475E9]/20">Customer Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Healthcare Leaders Say</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Trusted by healthcare professionals across the industry
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#2475E9] text-[#2475E9]" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="w-10 h-10 md:w-12 md:h-12 mr-3">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-[#2475E9]/10 text-[#2475E9]">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</p>
                      <p className="text-sm md:text-base text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm md:text-base text-[#2475E9] font-medium">{testimonial.hospital}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section id="trusted" className="py-16 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-[#2475E9]/10 text-[#2475E9] border-[#2475E9]/20">
              <Award className="w-4 h-4 mr-2" />
              Trusted Partners
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Leading Healthcare Providers
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Join these 5 leading hospitals and healthcare facilities in Mumbai that trust InfiCare for their digital
              transformation journey
            </p>
          </div>

          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4">
              {trustedHospitals.map((hospital, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-72 text-center p-6 hover:shadow-xl transition-all duration-300 border-2 border-[#2475E9]/20 group bg-white shadow-md snap-start"
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src={hospital.logo} alt={hospital.name} className="h-16 object-contain" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-[#2475E9] transition-colors">
                    {hospital.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{hospital.description}</p>
                  <div className="flex items-center justify-center text-sm text-[#2475E9] font-medium mb-4">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span>{hospital.location}</span>
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <Badge variant="secondary" className="text-xs bg-[#2475E9]/10 text-[#2475E9] border-[#2475E9]/20">
                      Active Client
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {trustedHospitals.map((hospital, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 border-2 border-[#2475E9]/20 group bg-white shadow-md relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2475E9]/5 via-transparent to-[#2475E9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src={hospital.logo} alt={hospital.name} className="h-24 object-contain" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-[#2475E9] transition-colors">
                    {hospital.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{hospital.description}</p>
                  <div className="flex items-center justify-center text-xs text-[#2475E9] font-medium">
                    <Building2 className="w-3 h-3 mr-1" />
                    <span>{hospital.location}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <Badge variant="secondary" className="text-xs bg-[#2475E9]/10 text-[#2475E9] border-[#2475E9]/20">
                      Active Client
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Success Metrics Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">40% Efficiency</h3>
              <p className="text-muted-foreground">Average improvement in operational efficiency</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2475E9]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-[#2475E9]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">10,000+ Patients</h3>
              <p className="text-muted-foreground">Served monthly across all partner facilities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Round-the-clock technical assistance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-green-500/10 text-green-600 border-green-500/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Integration
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Seamless Patient Communication</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience professional WhatsApp messaging for appointment reminders, test results, and instant support
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Automated Appointment Reminders</h3>
                      <p className="text-muted-foreground text-sm">
                        Send personalized appointment confirmations and reminders 24 hours before scheduled visits
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Instant Test Results</h3>
                      <p className="text-muted-foreground text-sm">
                        Share lab reports and diagnostic results securely through WhatsApp with patient consent
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">24/7 Support Channel</h3>
                      <p className="text-muted-foreground text-sm">
                        Provide instant support and answer patient queries through dedicated WhatsApp business number
                      </p>
                    </div>
                  </div>
                </div>
                <Button onClick={handleBookDemo} size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Try WhatsApp Demo
                </Button>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-3xl p-6 shadow-xl">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                    {/* WhatsApp Header */}
                    <div className="bg-green-600 text-white p-4 flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Stethoscope className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">InfiCare Hospital</h4>
                        <p className="text-xs opacity-90">Online</p>
                      </div>
                    </div>

                    {/* WhatsApp Messages */}
                    <div className="p-4 space-y-4 bg-gray-50 dark:bg-gray-800 min-h-[300px]">
                      {/* Incoming message */}
                      <div className="flex justify-start">
                        <div className="bg-white dark:bg-gray-700 rounded-lg p-3 max-w-xs shadow-sm">
                          <p className="text-sm text-gray-800 dark:text-gray-200">
                            🏥 <strong>Appointment Reminder</strong>
                            <br />
                            <br />
                            Hello Mr. Sharma,
                            <br />
                            <br />
                            Your appointment is scheduled for:
                            <br />📅 Tomorrow, Dec 15, 2024
                            <br />🕐 10:30 AM
                            <br />
                            👨‍⚕️ Dr. Priya Singh (Cardiology)
                            <br />📍 Room 205, 2nd Floor
                            <br />
                            <br />
                            Please arrive 15 minutes early.
                            <br />
                            <br />
                            Reply CONFIRM to confirm your appointment.
                          </p>
                          <p className="text-xs text-gray-500 mt-2">2:30 PM</p>
                        </div>
                      </div>

                      {/* Outgoing message */}
                      <div className="flex justify-end">
                        <div className="bg-green-500 text-white rounded-lg p-3 max-w-xs shadow-sm">
                          <p className="text-sm">CONFIRM</p>
                          <p className="text-xs opacity-75 mt-1">2:32 PM ✓✓</p>
                        </div>
                      </div>

                      {/* Another incoming message */}
                      <div className="flex justify-start">
                        <div className="bg-white dark:bg-gray-700 rounded-lg p-3 max-w-xs shadow-sm">
                          <p className="text-sm text-gray-800 dark:text-gray-200">
                            ✅ <strong>Appointment Confirmed!</strong>
                            <br />
                            <br />
                            Thank you for confirming. We look forward to seeing you tomorrow.
                            <br />
                            <br />📋 <strong>Lab Results Available</strong>
                            <br />
                            Your blood test results from Dec 10 are ready. Please visit our portal or call us to
                            discuss.
                            <br />
                            <br />
                            Need help? Reply HELP for assistance.
                          </p>
                          <p className="text-xs text-gray-500 mt-2">2:33 PM</p>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Input */}
                    <div className="bg-white dark:bg-gray-900 p-3 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
                          <p className="text-sm text-gray-500">Type a message...</p>
                        </div>
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce-slow">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-[#2475E9] rounded-xl flex items-center justify-center shadow-lg animate-pulse-slow">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-[#2475E9]/10 text-[#2475E9] border-[#2475E9]/20">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with InfiCare today. Custom pricing based on your facility size and requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden border-[#2475E9]/20 shadow-xl">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#2475E9] to-[#2475E9]/80"></div>
              <CardHeader className="text-center pb-8">
                <Badge className="mx-auto mb-4 bg-[#2475E9]/10 text-[#2475E9] border-[#2475E9]/20">Most Popular</Badge>
                <CardTitle className="text-2xl md:text-3xl font-bold">Enterprise Solution</CardTitle>
                <CardDescription className="text-base md:text-lg">
                  Complete healthcare management for your facility
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl md:text-4xl font-bold text-[#2475E9]">Custom Pricing</span>
                  <p className="text-muted-foreground mt-2">Based on facility size and requirements</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-[#2475E9] flex-shrink-0" />
                      <span className="text-muted-foreground text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 md:pt-6 text-center">
                  <Button
                    onClick={handleBookDemo}
                    size="lg"
                    variant="secondary"
                    className="bg-white text-[#2475E9] hover:bg-white/90 text-base md:text-lg px-8 md:px-12 w-full sm:w-auto"
                  >
                    <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                    Get Custom Quote
                  </Button>
                  <p className="text-sm text-muted-foreground mt-3">Free consultation • 1-day trial</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2475E9] to-[#2475E9]/80"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Ready to Transform Your Healthcare Operations?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto text-white">
            Join the digital healthcare revolution with InfiCare. Book a personalized demo and see how we can streamline
            your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button
              onClick={handleBookDemo}
              size="lg"
              variant="secondary"
              className="bg-white text-[#2475E9] hover:bg-white/90 text-base md:text-lg px-6 md:px-8 shadow-xl"
            >
              <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2" />
              Book Your Demo Now
            </Button>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/infisparks%40gmail.com?compose=new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-base md:text-lg px-6 md:px-8 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-11 border-white/20 text-white hover:bg-white/10 bg-transparent border"
            >
              <Mail className="w-4 md:w-5 h-4 md:h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2475E9] to-[#2475E9]/80 rounded-xl flex items-center justify-center shadow-lg">
                  <img src="/inficarelogo.png" alt="InfiCare Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-bold text-foreground">InfiCare</span>
                  <p className="text-xs text-muted-foreground -mt-1">Healthcare Management</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                Empowering healthcare with comprehensive management solutions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-muted-foreground text-sm md:text-base">
                  <Phone className="w-4 h-4 mr-2 text-[#2475E9]" />
                  <span>+91 9958399157</span>
                </div>
                <div className="flex items-center text-muted-foreground text-sm md:text-base">
                  <Mail className="w-4 h-4 mr-2 text-[#2475E9]" />
                  <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/infisparks%40gmail.com?compose=new" target="_blank" rel="noopener noreferrer">infisparks@gmail.com</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Integration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Get Started</h3>
              <Button
                onClick={handleBookDemo}
                className="w-full bg-[#2475E9] hover:bg-[#2475E9]/90 mb-3 text-sm md:text-base"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Demo
              </Button>
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/infisparks%40gmail.com?compose=new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm md:text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 border border-input bg-background hover:bg-accent hover:text-accent-foreground w-full"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>

          <div className="border-t mt-6 md:mt-8 pt-6 md:pt-8 text-center text-muted-foreground text-sm md:text-base">
            <p>&copy; 2024 InfiCare. All rights reserved. | Developed by InfiSparks</p>
          </div>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedFeature?.title}</DialogTitle>
            <DialogDescription>{selectedFeature?.description}</DialogDescription>
          </DialogHeader>
          {selectedFeature?.image && (
            <img src={selectedFeature.image} alt={selectedFeature.title} className="w-full h-auto rounded-lg mt-4" />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}