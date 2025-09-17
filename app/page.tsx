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
  X,
  ZoomIn,
  Maximize2,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState, useRef, useEffect } from "react"

export default function HomePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState(null as any)
  const [isImageZoomed, setIsImageZoomed] = useState(false)
  const [zoomedImageSrc, setZoomedImageSrc] = useState("")
  const mobileCarouselRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Enhanced mouse tracking for hero section
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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

  const handleImageZoom = (imageSrc: string) => {
    setZoomedImageSrc(imageSrc)
    setIsImageZoomed(true)
  }

  const closeImageZoom = () => {
    setIsImageZoomed(false)
    setZoomedImageSrc("")
  }

  useEffect(() => {
    const carousel = mobileCarouselRef.current
    if (!carousel) return

    let scrollAmount = 0
    let direction = 1
    let isScrolling = false

    const scrollCarousel = () => {
      if (isScrolling) return
      
      isScrolling = true
      if (direction === 1) {
        scrollAmount += 2
        const maxScrollAmount = (320 * features.length) - carousel.clientWidth
        if (scrollAmount >= maxScrollAmount) {
          direction = -1
        }
      } else {
        scrollAmount -= 2
        if (scrollAmount <= 0) {
          direction = 1
        }
      }
      carousel.scrollTo({ left: scrollAmount, behavior: "smooth" })
      setTimeout(() => { isScrolling = false }, 30)
    }

    const interval = setInterval(scrollCarousel, 40)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: BarChart3,
      title: "Smart Dashboard & Insights",
      description: "Get a bird's eye view of hospital operations with real-time analytics. Track OPD/IPD data, procedures, discharges, revenue, and more—all in one place. Make faster and smarter decisions with actionable insights.",
      image: "/soft/1.png",
      category: "Analytics"
    },
    {
      icon: Calendar,
      title: "Appointment Management",
      description: "Easily schedule and manage patient appointments. View details like patient info, consultation type, and fees with just a click. Ensure smooth patient flow and avoid scheduling conflicts.",
      image: "/soft/2.png",
      category: "Scheduling"
    },
    {
      icon: Users,
      title: "O.P.D Appointments Overview",
      description: "Stay organized with a clear view of Today, Weekly and All appointments. Patient details, service type, and billing are highlighted in simple cards for quick access. Edit or delete bookings instantly for better control.",
      image: "/soft/3.png",
      category: "Patient Care"
    },
    {
      icon: Stethoscope,
      title: "O.P.D Management System",
      description: "Manage Outpatient services effortlessly with a dedicated OPD module. Book appointments, search patients, and track visits with ease. Simplify front-desk operations for patients and staff alike.",
      image: "/soft/4.png",
      category: "Operations"
    },
    {
      icon: Pill,
      title: "I.P.D Patient Management",
      description: "Handle Inpatient admissions seamlessly with detailed tracking. Monitor TPA status, deposits, room allocation, and treatment progress. Keep everything updated in real time for better patient care.",
      image: "/soft/5.png",
      category: "Patient Care"
    },
    {
      icon: CreditCard,
      title: "Billing & Payments",
      description: "Simplify hospital billing with a transparent financial summary. Track hospital services, consultant charges, payments, and dues all in one place. Generate instant invoices and share digitally with patients.",
      image: "/soft/6.png",
      category: "Finance"
    },
    {
      icon: Activity,
      title: "OT & Procedure Management",
      description: "Digitally manage Operation Theatre details including OT type, date, surgeon, and procedure notes. Maintain accurate records of surgeries and ensure smooth coordination across teams.",
      image: "/soft/7.png",
      category: "Operations"
    },
    {
      icon: BarChart3,
      title: "Daily Collections Overview",
      description: "Keep a close eye on your hospital's revenue with daily collection reports. Track OPD/IPD payments by cash or online mode, and get a clear picture of total collections in real time.",
      image: "/soft/8.png",
      category: "Analytics"
    },
    {
      icon: CheckCircle,
      title: "Discharge Management",
      description: "Manage discharges efficiently with real-time patient status updates. Track admitted, discharged, partially discharged, or deceased cases instantly. Export data easily for records and reporting.",
      image: "/soft/9.png",
      category: "Operations"
    },
    {
      icon: Bed,
      title: "Bed Management System",
      description: "Optimize hospital resources with smart bed allocation. Monitor available, occupied, and ICU beds in real time. Ensure proper utilization of hospital capacity and improve patient admission processes.",
      image: "/soft/10.png",
      category: "Resources"
    }
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
      name: "Medzeal",
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
      content: "InfiCare has transformed our hospital operations. The AI integration has reduced our administrative workload by 40%.",
      avatar: "/caring-doctor.png",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Hospital Administrator",
      hospital: "Advanced Healthcare Center",
      content: "The WhatsApp integration for patient communication has been a game-changer. Our patient satisfaction scores have increased significantly.",
      avatar: "/system-administrator.png",
      rating: 5
    },
    {
      name: "Dr. Priya Sharma",
      role: "Director of Operations",
      hospital: "Gautami Medford NX Hospital",
      content: "Comprehensive solution that covers everything from appointments to billing. The reporting features provide invaluable insights.",
      avatar: "/female-doctor.png",
      rating: 5
    },
  ]

  const stats = [
    { number: "500+", label: "Healthcare Facilities", icon: Globe, color: "from-blue-500 to-blue-600" },
    { number: "40%", label: "Reduced Admin Work", icon: Zap, color: "from-green-500 to-green-600" },
    { number: "99.9%", label: "System Uptime", icon: Activity, color: "from-purple-500 to-purple-600" },
    { number: "24/7", label: "Support Available", icon: Heart, color: "from-red-500 to-red-600" },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Efficiency",
      description: "Streamline operations and reduce manual work by up to 60%",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Automated processes save 4+ hours daily for healthcare staff",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users2,
      title: "Better Patient Care",
      description: "Enhanced patient experience with faster service delivery",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "HIPAA compliant with enterprise-grade security measures",
      color: "from-orange-500 to-orange-600"
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
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-950/80 border-b border-border/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <img src="/inficarelogo.png" alt="InfiCare Logo" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">InfiCare</span>
                <p className="text-xs text-muted-foreground -mt-1 font-medium">Healthcare Management</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: "Features", href: "#features" },
                { name: "Benefits", href: "#benefits" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Pricing", href: "#pricing" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="relative text-muted-foreground hover:text-foreground transition-all duration-300 font-medium group"
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
              
              <Button 
                onClick={handleBookDemo} 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Book Demo
              </Button>
            </nav>
            
            <Button variant="ghost" size="sm" className="md:hidden" onClick={handleBookDemo}>
              <Phone className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-blue-950/30 dark:via-gray-950 dark:to-purple-950/30"></div>
          
          {/* Dynamic floating elements */}
          <div 
            className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
            style={{
              background: `radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.2) 100%)`,
              left: `${mousePosition.x * 0.02}%`,
              top: `${mousePosition.y * 0.02}%`,
              transform: `translate(-50%, -50%)`,
            }}
          ></div>
          
          <div 
            className="absolute w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"
            style={{
              background: `radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(59, 130, 246, 0.2) 100%)`,
              right: `${(100 - mousePosition.x) * 0.02}%`,
              bottom: `${(100 - mousePosition.y) * 0.02}%`,
              transform: `translate(50%, 50%)`,
            }}
          ></div>

          {/* Floating icons */}
          <div className="absolute top-20 left-1/4 w-3 h-3 bg-blue-600/60 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-600/40 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-green-500/50 rounded-full animate-ping delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8 animate-fade-in">
              <Badge className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 px-6 py-3 text-sm font-semibold shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>AI-Powered Healthcare Management</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                Transform Healthcare with{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient-x">
                    InfiCare
                  </span>
                  <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform scale-x-0 animate-scale-x animation-delay-1000"></div>
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Complete healthcare management solution with{" "}
                <span className="text-blue-600 font-semibold">AI integration</span> and{" "}
                <span className="text-green-600 font-semibold">WhatsApp communication</span>. 
                Streamline operations and boost efficiency by{" "}
                <span className="text-purple-600 font-bold text-2xl">60%</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={handleBookDemo}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Book Free Demo
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg border-2 border-gradient-to-r from-blue-600 to-purple-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <div className="flex items-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/70 uppercase tracking-wider font-semibold">Call Now</p>
                    <span className="font-bold text-lg group-hover:text-blue-600 transition-colors duration-300">+91 9958399157</span>
                  </div>
                </div>
                
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/infisparks%40gmail.com?compose=new" target="_blank" rel="noopener noreferrer" className="flex items-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/70 uppercase tracking-wider font-semibold">Email Us</p>
                    <span className="font-bold text-lg group-hover:text-purple-600 transition-colors duration-300">infisparks@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Content - Enhanced Dashboard */}
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-1000 animate-pulse-slow"></div>
              
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4 rounded-3xl shadow-2xl border border-border/50 group-hover:shadow-3xl transition-all duration-700">
                <img
                  src="/modern-healthcare-management-dashboard-interface-w.png"
                  alt="InfiCare Dashboard"
                  className="w-full h-auto rounded-2xl shadow-xl group-hover:scale-[1.02] transition-all duration-700"
                  loading="eager"
                />

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl animate-bounce-slow">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-18 h-18 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse-slow">
                  <Activity className="w-9 h-9 text-white" />
                </div>
                
                <div className="absolute top-1/4 -left-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl animate-float">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute top-3/4 -right-6 w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl animate-float-delayed">
                  <Brain className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-20 text-center">
            <p className="text-muted-foreground/70 text-sm uppercase tracking-wider mb-8 font-semibold">
              Trusted by Healthcare Leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {[
                { icon: Building2, text: "5+ Hospitals", color: "text-blue-600" },
                { icon: Users2, text: "10,000+ Patients", color: "text-green-600" },
                { icon: Award, text: "NABH Certified", color: "text-purple-600" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 group hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section id="benefits" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-blue-950/20 dark:via-gray-950 dark:to-purple-950/20"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-semibold shadow-lg">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Why Choose InfiCare
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Measurable Benefits for Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Healthcare Facility
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join healthcare leaders who have transformed their operations with InfiCare and achieved remarkable results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-2xl transition-all duration-500 border-0 group relative overflow-hidden bg-white/80 backdrop-blur-sm hover:scale-105 shadow-lg"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section with Zoomable Images */}
      <section id="features" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-purple-200 px-4 py-2 text-sm font-semibold shadow-lg">
              <Package className="w-4 h-4 mr-2 animate-pulse" />
              Complete Solution
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Complete Healthcare Management Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From patient care to financial management, InfiCare covers every aspect of hospital operations with advanced technology
            </p>
          </div>

          {/* Desktop Enhanced Auto-Scroll Carousel */}
          <div className="hidden lg:block relative overflow-hidden">
            <div className="flex gap-8 animate-scroll-slow" style={{ width: `${features.length * 420}px` }}>
              {[...features, ...features].map((feature, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-96 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 border-0 group cursor-pointer relative overflow-hidden shadow-lg hover:scale-105"
                  onClick={() => openFeatureDialog(feature)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 cursor-zoom-in"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleImageZoom(feature.image || "/placeholder.svg")
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                    
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-2 py-1">
                      {feature.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg font-bold group-hover:text-blue-600 transition-colors duration-300">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                      {feature.description}
                    </CardDescription>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-4 text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleImageZoom(feature.image || "/placeholder.svg")
                      }}
                    >
                      <Maximize2 className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile Enhanced Carousel */}
          <div className="lg:hidden">
            <div
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory -mx-4 px-4"
              style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
              ref={mobileCarouselRef}
            >
              {features.map((feature, index) => (
                <Card key={index} className="flex-shrink-0 w-80 bg-white/90 backdrop-blur-sm shadow-lg snap-start border-0 group cursor-pointer relative overflow-hidden hover:shadow-xl transition-all duration-300" onClick={() => openFeatureDialog(feature)}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-48 object-cover cursor-zoom-in group-hover:scale-105 transition-transform duration-500"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleImageZoom(feature.image || "/placeholder.svg")
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                    
                    <Badge className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-2 py-1">
                      {feature.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center shadow-md">
                        <feature.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-base font-bold">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {feature.description}
                    </CardDescription>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 text-xs"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleImageZoom(feature.image || "/placeholder.svg")
                      }}
                    >
                      <Maximize2 className="w-3 h-3 mr-1" />
                      View Full Size
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 border-green-200 px-4 py-2 text-sm font-semibold shadow-lg">
              <Star className="w-4 h-4 mr-2 animate-pulse" />
              Customer Stories
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">What Healthcare Leaders Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by healthcare professionals across the industry
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 hover:shadow-2xl transition-all duration-500 p-8 group relative overflow-hidden shadow-lg hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <CardContent className="relative z-10 p-0">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-8 leading-relaxed text-lg relative">
                    <div className="text-6xl text-blue-200 absolute -top-4 -left-2 font-serif">"</div>
                    <p className="relative z-10">{testimonial.content}</p>
                  </blockquote>
                  
                  <div className="flex items-center">
                    <Avatar className="w-16 h-16 mr-4 shadow-lg">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 text-lg font-bold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                      <p className="text-blue-600 font-semibold">{testimonial.hospital}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Trusted By Section */}
      <section id="trusted" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 px-4 py-2 text-sm font-semibold shadow-lg">
              <Award className="w-4 h-4 mr-2 animate-pulse" />
              Trusted Partners
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Trusted by Leading Healthcare Providers
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Join these 5 leading hospitals and healthcare facilities in Mumbai that trust InfiCare for their digital transformation journey
            </p>
          </div>

          {/* Mobile Enhanced Carousel */}
          <div className="lg:hidden">
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-4 px-4">
              {trustedHospitals.map((hospital, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-80 text-center p-8 hover:shadow-2xl transition-all duration-500 border-0 group bg-white/90 backdrop-blur-sm shadow-lg snap-start hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="relative mb-8">
                      <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl p-4">
                        <img src={hospital.logo} alt={hospital.name} className="max-h-20 max-w-20 object-contain" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {hospital.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{hospital.description}</p>
                    
                    <div className="flex items-center justify-center text-sm text-blue-600 font-semibold mb-6">
                      <Building2 className="w-4 h-4 mr-2" />
                      <span>{hospital.location}</span>
                    </div>
                    
                    <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 text-xs px-3 py-1">
                      ✓ Active Client
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Desktop Enhanced Grid */}
          <div className="hidden lg:grid grid-cols-5 gap-8 mb-16">
            {trustedHospitals.map((hospital, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-2xl transition-all duration-500 border-0 group bg-white/90 backdrop-blur-sm shadow-lg relative overflow-hidden hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg p-3">
                      <img src={hospital.logo} alt={hospital.name} className="max-h-16 max-w-16 object-contain" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {hospital.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{hospital.description}</p>
                  
                  <div className="flex items-center justify-center text-xs text-blue-600 font-medium mb-4">
                    <Building2 className="w-3 h-3 mr-1" />
                    <span>{hospital.location}</span>
                  </div>
                  
                  <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 text-xs px-2 py-1">
                    ✓ Active
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, stat: "40%", label: "Efficiency Improvement", color: "from-green-500 to-emerald-600" },
              { icon: Users2, stat: "10,000+", label: "Patients Served Monthly", color: "from-blue-500 to-blue-600" },
              { icon: Clock, stat: "24/7", label: "Technical Support", color: "from-purple-500 to-purple-600" }
            ].map((metric, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className={`w-20 h-20 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <metric.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:scale-110 transition-transform duration-300">{metric.stat}</h3>
                <p className="text-muted-foreground font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced WhatsApp Integration Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 px-4 py-2 text-sm font-semibold shadow-lg">
              <MessageCircle className="w-4 h-4 mr-2 animate-pulse" />
              WhatsApp Integration
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Seamless Patient Communication</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Experience professional WhatsApp messaging for appointment reminders, test results, and instant support
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                    icon: CheckCircle,
                    title: "Automated Appointment Reminders",
                    description: "Send personalized appointment confirmations and reminders 24 hours before scheduled visits",
                    color: "from-green-500 to-emerald-600"
                  },
                  {
                    icon: FileText,
                    title: "Instant Test Results",
                    description: "Share lab reports and diagnostic results securely through WhatsApp with patient consent",
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: MessageCircle,
                    title: "24/7 Support Channel",
                    description: "Provide instant support and answer patient queries through dedicated WhatsApp business number",
                    color: "from-purple-500 to-purple-600"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-green-600 transition-colors duration-300">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}

                <Button onClick={handleBookDemo} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Try WhatsApp Demo
                </Button>
              </div>

              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-green-500/20 via-emerald-500/10 to-green-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-1000"></div>
                
                <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20 rounded-3xl p-6 shadow-2xl">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
                    {/* WhatsApp Header */}
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Stethoscope className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">InfiCare Hospital</h4>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                          <p className="text-sm opacity-90">Online</p>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Messages */}
                    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-800 min-h-[400px]">
                      {/* Incoming message */}
                      <div className="flex justify-start">
                        <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-tl-md p-4 max-w-xs shadow-lg">
                          <div className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                            <div className="flex items-center space-x-2 mb-3">
                              <div className="text-2xl">🏥</div>
                              <span className="font-bold text-blue-600">Appointment Reminder</span>
                            </div>
                            
                            <p className="mb-3">Hello Mr. Sharma,</p>
                            
                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 mb-3">
                              <p className="font-semibold mb-2">Your appointment is scheduled for:</p>
                              <div className="space-y-1 text-sm">
                                <p>📅 Tomorrow, Dec 15, 2024</p>
                                <p>🕐 10:30 AM</p>
                                <p>👨‍⚕️ Dr. Priya Singh (Cardiology)</p>
                                <p>📍 Room 205, 2nd Floor</p>
                              </div>
                            </div>
                            
                            <p className="text-xs text-green-600 font-medium">Please arrive 15 minutes early.</p>
                            <p className="text-xs text-gray-500 mt-2">Reply CONFIRM to confirm</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-3">2:30 PM</p>
                        </div>
                      </div>

                      {/* Outgoing message */}
                      <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl rounded-tr-md p-4 max-w-xs shadow-lg">
                          <p className="text-sm font-medium">CONFIRM</p>
                          <p className="text-xs opacity-75 mt-2 flex items-center justify-end space-x-1">
                            <span>2:32 PM</span>
                            <CheckCircle className="w-3 h-3" />
                            <CheckCircle className="w-3 h-3" />
                          </p>
                        </div>
                      </div>

                      {/* Another incoming message */}
                      <div className="flex justify-start">
                        <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-tl-md p-4 max-w-xs shadow-lg">
                          <div className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                            <div className="flex items-center space-x-2 mb-3">
                              <div className="text-xl">✅</div>
                              <span className="font-bold text-green-600">Confirmed!</span>
                            </div>
                            
                            <p className="mb-3">Thank you for confirming. We look forward to seeing you tomorrow.</p>
                            
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="text-lg">📋</div>
                                <span className="font-bold text-yellow-600">Lab Results Available</span>
                              </div>
                              <p className="text-xs">Your blood test results from Dec 10 are ready. Please visit our portal or call us to discuss.</p>
                            </div>
                            
                            <p className="text-xs text-gray-500 mt-3">Need help? Reply HELP for assistance.</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-3">2:33 PM</p>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Input */}
                    <div className="bg-white dark:bg-gray-900 p-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-3">
                        <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-3">
                          <p className="text-sm text-gray-500">Type a message...</p>
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                          <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced floating elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl animate-bounce-slow">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl animate-pulse-slow">
                  <Heart className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50/30 dark:from-gray-900 dark:to-purple-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-purple-200 px-4 py-2 text-sm font-semibold shadow-lg">
              <DollarSign className="w-4 h-4 mr-2 animate-pulse" />
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get started with InfiCare today. Custom pricing based on your facility size and requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50"></div>
              
              <CardHeader className="text-center pb-8 relative z-10">
                <Badge className="mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-lg">
                  <Star className="w-4 h-4 mr-2" />
                  Most Popular
                </Badge>
                <CardTitle className="text-3xl md:text-4xl font-bold mb-4">Enterprise Solution</CardTitle>
                <CardDescription className="text-lg mb-6">
                  Complete healthcare management for your facility
                </CardDescription>
                <div className="mb-6">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    Custom Pricing
                  </div>
                  <p className="text-muted-foreground text-lg">Based on facility size and requirements</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8 p-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-8 text-center">
                  <Button
                    onClick={handleBookDemo}
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group mb-4"
                  >
                    <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Get Custom Quote
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-green-600 font-semibold">Free consultation</span> • <span className="text-blue-600 font-semibold">1-day trial</span> • <span className="text-purple-600 font-semibold">No setup fees</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-xl animate-spin-slow"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-8 bg-white/20 text-white border-white/30 px-6 py-3 text-sm font-semibold backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            Ready to Transform?
          </Badge>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Ready to Transform Your Healthcare Operations?
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Join the digital healthcare revolution with InfiCare. Book a personalized demo and see how we can streamline your operations in just 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              onClick={handleBookDemo}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group font-semibold"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Book Your Demo Now
            </Button>
            
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/infisparks%40gmail.com?compose=new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-lg px-10 py-4 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border-2 border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Email Us
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span className="font-medium">Free Demo</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span className="font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span className="font-medium">HIPAA Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <img src="/inficarelogo.png" alt="InfiCare Logo" className="w-12 h-12 object-contain" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-lg"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">InfiCare</span>
                  <p className="text-xs text-gray-400 -mt-1 font-medium">Healthcare Management</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering healthcare with comprehensive management solutions and cutting-edge technology.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group cursor-pointer">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600/30 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="font-medium">+91 9958399157</span>
                </div>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/infisparks%40gmail.com?compose=new" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-600/30 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="font-medium">infisparks@gmail.com</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Product</h3>
              <ul className="space-y-3">
                {["Features", "Pricing", "Integration", "API"].map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Support</h3>
              <ul className="space-y-3">
                {["Documentation", "Help Center", "Contact Us", "Status"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Get Started</h3>
              <div className="space-y-4">
                <Button
                  onClick={handleBookDemo}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <MessageCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  WhatsApp Demo
                </Button>
                <a
                  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/infisparks%40gmail.com?compose=new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 border border-gray-600 bg-transparent hover:bg-gray-800 hover:text-white w-full text-gray-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 InfiCare. All rights reserved. | Developed with ❤️ by <span className="text-blue-400 font-semibold">InfiSparks</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Enhanced Feature Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <DialogHeader>
            <div className="flex items-center space-x-3 mb-4">
              {selectedFeature?.icon && (
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center shadow-lg">
                  <selectedFeature.icon className="w-6 h-6 text-blue-600" />
                </div>
              )}
              <div>
                <DialogTitle className="text-2xl font-bold text-foreground">{selectedFeature?.title}</DialogTitle>
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-2 py-1 mt-1">
                  {selectedFeature?.category}
                </Badge>
              </div>
            </div>
            <DialogDescription className="text-muted-foreground text-lg leading-relaxed">
              {selectedFeature?.description}
            </DialogDescription>
          </DialogHeader>
          
          {selectedFeature?.image && (
            <div className="mt-6 relative group">
              <img 
                src={selectedFeature.image} 
                alt={selectedFeature.title} 
                className="w-full h-auto rounded-xl shadow-lg cursor-zoom-in group-hover:scale-[1.02] transition-transform duration-300" 
                onClick={() => handleImageZoom(selectedFeature.image)}
              />
              <div className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Enhanced Image Zoom Modal */}
      {isImageZoomed && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-7xl max-h-screen p-4 w-full h-full flex items-center justify-center">
            <img
              src={zoomedImageSrc}
              alt="Zoomed view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <Button
              onClick={closeImageZoom}
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-0 shadow-lg"
            >
              <X className="w-6 h-6" />
            </Button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              Click outside or press ESC to close
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes scroll-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
        }
        
        .animate-scale-x {
          animation: scale-x 2s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-scroll-slow {
          animation: scroll-slow 60s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .auto-scroll-container {
          animation: scroll-slow 40s linear infinite;
        }
        
        .auto-scroll-container:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}