import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import {
  Mic,
  FileText,
  Users,
  Globe,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Smartphone,
  Mail,
  MessageSquare,
  Zap,
  ListTodo,
  Sparkles,
  Play,
  ArrowRight,
  Check,
  Star,
  Monitor,
  Clock,
  Shield,
  Layers,
  Send,
  Calendar,
  Target,
  TrendingUp,
  Headphones,
  Languages,
  Bot,
  Wand2
} from 'lucide-react';

// Animated text reveal component
const AnimatedText = ({ text, className = "", delay = 0, once = true }) => {
  const words = text.split(' ');
  
  return (
    <motion.span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once }}
          transition={{ 
            duration: 0.5, 
            delay: delay + i * 0.05,
            ease: [0.25, 0.4, 0.25, 1]
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Scroll-triggered section wrapper
const RevealSection = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Premium Logo Component
const Logo = ({ variant = "dark" }) => (
  <div className="flex items-center gap-3">
    <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden ${
      variant === "dark" ? "bg-black" : "bg-white"
    }`}>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/10" />
      <svg 
        viewBox="0 0 24 24" 
        className={`w-5 h-5 ${variant === "dark" ? "text-white" : "text-black"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    </div>
    <span className={`text-xl font-semibold tracking-tight ${
      variant === "dark" ? "text-black" : "text-white"
    }`}>
      FounderVox
    </span>
  </div>
);

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "/pricing", label: "Pricing" },
    { to: "/download", label: "Download" },
    { href: "#features", label: "Features" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        data-testid="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-black/5' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" data-testid="logo-link">
              <Logo />
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                link.to ? (
                  <Link
                    key={i}
                    to={link.to}
                    data-testid={`nav-${link.label.toLowerCase()}`}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      location.pathname === link.to 
                        ? 'text-black bg-black/5' 
                        : 'text-gray-600 hover:text-black hover:bg-black/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={i}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-black/5 rounded-full transition-all duration-300"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/signin"
                data-testid="nav-signin"
                className="btn-premium text-white px-6 py-2.5 rounded-full text-sm font-medium"
              >
                Get Started
              </Link>
            </div>

            <button
              data-testid="mobile-menu-toggle"
              className="md:hidden p-2 rounded-full hover:bg-black/5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden"
            data-testid="mobile-menu"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-2"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="block text-2xl font-medium text-black py-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="block text-2xl font-medium text-black py-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/signin"
                  className="btn-premium text-white px-8 py-4 rounded-full text-lg font-medium text-center block mt-6"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Premium Hero Section
const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-gradient-subtle">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 1px)`,
        backgroundSize: '48px 48px'
      }} />
      
      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-black/[0.03] border border-black/[0.05] px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">Now in public beta</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-black mb-6 leading-[0.95]"
          >
            <span className="text-shine">Speak.</span>
            <br />
            <span className="text-gray-400">We organize.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Turn your voice into organized notes, tasks, and content. Built for founders who think faster than they type.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            to="/download"
            data-testid="hero-download-btn"
            className="group btn-premium text-white px-8 py-4 rounded-full text-base font-medium flex items-center gap-3"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Start Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            data-testid="hero-demo-btn"
            className="flex items-center gap-3 text-gray-600 px-8 py-4 rounded-full text-base font-medium hover:text-black hover:bg-black/5 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
              <Play className="w-4 h-4 ml-0.5" />
            </div>
            Watch Demo
          </button>
        </motion.div>

        {/* Premium Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Demo Container */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-[32px] p-2 shadow-premium-xl">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[28px] p-8 overflow-hidden">
              {/* Window Controls */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-gray-500 text-sm">FounderVox</span>
              </div>

              {/* Demo Content Grid */}
              <div className="grid md:grid-cols-5 gap-6">
                {/* Voice Input Panel */}
                <div className="md:col-span-2 space-y-4">
                  <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-12 h-12 bg-white rounded-xl flex items-center justify-center"
                      >
                        <Mic className="w-5 h-5 text-black" />
                      </motion.div>
                      <div>
                        <p className="text-white font-medium text-sm">Recording</p>
                        <p className="text-gray-500 text-xs">Speak naturally...</p>
                      </div>
                    </div>
                    
                    {/* Waveform */}
                    <div className="flex items-center gap-1 h-12 mb-4">
                      {[...Array(24)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            height: [8, Math.random() * 32 + 8, 8],
                          }}
                          transition={{ 
                            duration: 0.8, 
                            repeat: Infinity, 
                            delay: i * 0.05,
                            ease: "easeInOut"
                          }}
                          className="w-1 bg-gradient-to-t from-gray-600 to-gray-400 rounded-full"
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      "Schedule a call with the investors for next Tuesday, prepare the pitch deck, and follow up on the product roadmap..."
                    </p>
                  </div>
                </div>

                {/* AI Output Panel */}
                <div className="md:col-span-3 space-y-3">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-medium text-blue-400">MEETING</span>
                    </div>
                    <p className="text-white text-sm">Investor call scheduled</p>
                    <p className="text-gray-500 text-xs mt-1">Tuesday, 2:00 PM</p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <ListTodo className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-medium text-emerald-400">TASK</span>
                    </div>
                    <p className="text-white text-sm">Prepare pitch deck</p>
                    <p className="text-gray-500 text-xs mt-1">Due: Monday</p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Send className="w-4 h-4 text-violet-400" />
                      <span className="text-xs font-medium text-violet-400">FOLLOW-UP</span>
                    </div>
                    <p className="text-white text-sm">Product roadmap review</p>
                    <p className="text-gray-500 text-xs mt-1">Email draft ready</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Notification Cards */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-1/4 hidden lg:block"
          >
            <div className="glass rounded-2xl p-4 shadow-premium-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">Email sent</p>
                  <p className="text-xs text-gray-500">Investor follow-up</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-8 top-1/3 hidden lg:block"
          >
            <div className="glass rounded-2xl p-4 shadow-premium-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">3 tasks created</p>
                  <p className="text-xs text-gray-500">Auto-organized</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -left-4 bottom-1/4 hidden lg:block"
          >
            <div className="glass rounded-2xl p-4 shadow-premium-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-500 rounded-xl flex items-center justify-center">
                  <Languages className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">12+ languages</p>
                  <p className="text-xs text-gray-500">Auto-detected</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-black/20 flex items-start justify-center p-2"
        >
          <motion.div 
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-black/40 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Social Proof Section
const SocialProofSection = () => {
  const logos = [
    "Y Combinator", "Sequoia", "a16z", "Accel", "Index"
  ];

  return (
    <section className="py-16 px-6 border-y border-black/5 bg-white">
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <p className="text-center text-sm text-gray-400 mb-8 tracking-wide uppercase">
            Trusted by founders from
          </p>
          <div className="flex items-center justify-center gap-12 flex-wrap opacity-40">
            {logos.map((logo, i) => (
              <span key={i} className="text-xl font-semibold text-gray-900">{logo}</span>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

// Features Section with better layout
const FeaturesSection = () => {
  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice-First Capture",
      description: "Just speak. Our AI transcribes with 99% accuracy in 12+ languages, understanding context and intent.",
      color: "bg-black"
    },
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "AI Organization",
      description: "Notes auto-categorize into meetings, ideas, tasks. Never manually sort or tag again.",
      color: "bg-gray-800"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Sync",
      description: "Assign tasks from voice notes. Share insights instantly. Keep everyone aligned.",
      color: "bg-gray-700"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Multi-Format Export",
      description: "One recording → emails, social posts, PRDs, action items. Choose your output.",
      color: "bg-gray-600"
    }
  ];

  return (
    <section id="features" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <RevealSection className="text-center mb-20">
          <p className="text-sm font-medium text-gray-400 tracking-wide uppercase mb-4">Features</p>
          <h2 className="text-4xl md:text-6xl font-semibold text-black mb-6 tracking-tight">
            Everything you need.
            <span className="block text-gray-300">Nothing you don't.</span>
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <RevealSection key={index} delay={index * 0.1}>
              <div
                className="card-premium group bg-gray-50 hover:bg-white border border-transparent hover:border-black/5 rounded-3xl p-8 md:p-10 shadow-premium hover:shadow-premium-lg"
                data-testid={`feature-card-${index}`}
              >
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{feature.description}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works - Premium version
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Record",
      description: "Tap and speak. Share ideas, tasks, notes as they come.",
      icon: <Mic className="w-8 h-8" />
    },
    {
      number: "02",
      title: "Process",
      description: "AI transcribes, categorizes, and formats in real-time.",
      icon: <Bot className="w-8 h-8" />
    },
    {
      number: "03",
      title: "Action",
      description: "Review, assign, send. Everything ready to go.",
      icon: <Target className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <RevealSection className="text-center mb-20">
          <p className="text-sm font-medium text-gray-400 tracking-wide uppercase mb-4">How it works</p>
          <h2 className="text-4xl md:text-6xl font-semibold text-black tracking-tight">
            Three steps to clarity
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <RevealSection key={index} delay={index * 0.15}>
              <div 
                className="relative text-center"
                data-testid={`step-${index}`}
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto bg-white rounded-3xl shadow-premium-lg flex items-center justify-center text-black">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-black mb-3">{step.title}</h3>
                <p className="text-gray-500 text-lg">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%]">
                    <svg className="w-full h-4 text-gray-200" viewBox="0 0 100 10">
                      <path d="M0 5 H85 L80 0 M85 5 L80 10" fill="none" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  </div>
                )}
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section - Refined
const StatsSection = () => {
  const stats = [
    { number: "99%", label: "Accuracy", description: "Industry-leading transcription" },
    { number: "500ms", label: "Response", description: "Near-instant processing" },
    { number: "12+", label: "Languages", description: "Global support built-in" }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }} />
      
      <div className="max-w-7xl mx-auto relative">
        <RevealSection className="text-center mb-20">
          <p className="text-sm font-medium text-gray-500 tracking-wide uppercase mb-4">Performance</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Built for speed.
            <span className="block text-gray-500">Optimized for accuracy.</span>
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <RevealSection key={index} delay={index * 0.1}>
              <div 
                className="text-center p-10 bg-white/[0.03] border border-white/[0.05] rounded-3xl"
                data-testid={`stat-${index}`}
              >
                <div className="text-6xl md:text-7xl font-semibold text-white mb-2">{stat.number}</div>
                <div className="text-xl font-medium text-gray-300 mb-2">{stat.label}</div>
                <p className="text-gray-500">{stat.description}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section - Premium
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does FounderVox work?",
      answer: "Simply tap to record and speak your thoughts. Our AI transcribes in real-time with 99% accuracy, then automatically categorizes your content into notes, tasks, meetings, and more. From there, you can export to emails, social posts, or action items with one click."
    },
    {
      question: "Who is FounderVox for?",
      answer: "FounderVox is built for founders, executives, and professionals who think faster than they type. If you're constantly capturing ideas, managing tasks, and communicating with teams, FounderVox helps you do it all through voice."
    },
    {
      question: "Is there a free plan?",
      answer: "Yes! Our Starter plan is completely free and includes 5 voice notes per day, basic AI categorization, and email formatting. Perfect for trying FounderVox and experiencing voice-first productivity."
    },
    {
      question: "What languages are supported?",
      answer: "We support 12+ languages including English, Spanish, French, German, Chinese, Japanese, Portuguese, and more. Our AI automatically detects your language and handles accents with ease."
    },
    {
      question: "Can I collaborate with my team?",
      answer: "Absolutely! With Pro and Team plans, assign tasks directly from voice notes, share organized notes with collaborators, and work in shared workspaces. Keep everyone aligned without extra meetings."
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <RevealSection className="text-center mb-16">
          <p className="text-sm font-medium text-gray-400 tracking-wide uppercase mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight">
            Common questions
          </h2>
        </RevealSection>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <RevealSection key={index} delay={index * 0.05}>
              <div
                className="border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors"
                data-testid={`faq-${index}`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-black pr-8">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                      <div className="px-6 pb-5 text-gray-500 leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section - High converting
const CTASection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <RevealSection className="text-center">
          <h2 className="text-4xl md:text-6xl font-semibold text-black tracking-tight mb-6">
            Ready to think out loud?
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Join thousands of founders who've made the switch to voice-first productivity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/download"
              data-testid="cta-download-btn"
              className="btn-premium text-white px-10 py-4 rounded-full text-lg font-medium flex items-center gap-3"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="text-gray-600 hover:text-black px-8 py-4 rounded-full text-lg font-medium transition-colors"
            >
              View Pricing →
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            No credit card required • Free forever plan
          </p>
        </RevealSection>
      </div>
    </section>
  );
};

// Footer - Premium
const Footer = () => {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", to: "/pricing" },
      { label: "Download", to: "/download" },
      { label: "Changelog", href: "#" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
    Resources: [
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Status", href: "#" },
    ],
    Legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2">
            <Logo variant="light" />
            <p className="text-gray-500 mt-4 text-sm leading-relaxed max-w-xs">
              Voice-first productivity for founders who think faster than they type.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    {link.to ? (
                      <Link to={link.to} className="text-gray-500 hover:text-white text-sm transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2025 FounderVox. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-600 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Home Page
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

// Pricing Page with Toggle
const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [platform, setPlatform] = useState('desktop');

  const plans = [
    {
      name: "Starter",
      price: { monthly: "Free", yearly: "Free" },
      description: "Essential features to get started.",
      features: [
        "5 voice notes per day",
        "Basic AI categorization",
        "Email formatting",
        "Single language",
        "7-day history"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: { monthly: "$19", yearly: "$15" },
      period: "/ month",
      description: "Unlimited power for individuals.",
      features: [
        "Unlimited voice notes",
        "Advanced AI organization",
        "All export formats",
        "12+ languages",
        "Unlimited history",
        "Task collaboration",
        "Priority support"
      ],
      cta: "Start Trial",
      popular: true
    },
    {
      name: "Team",
      price: { monthly: "$49", yearly: "$39" },
      period: "/ month",
      description: "For teams that move together.",
      features: [
        "Everything in Pro",
        "Unlimited members",
        "Shared workspaces",
        "Team analytics",
        "Admin controls",
        "API access",
        "Dedicated support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-gray-400 tracking-wide uppercase mb-4">Pricing</p>
          <h1 className="text-4xl md:text-6xl font-semibold text-black tracking-tight mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Start free. Upgrade when you're ready.
          </p>
        </motion.div>

        {/* Platform Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setPlatform('desktop')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                platform === 'desktop' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              <Monitor className="w-4 h-4" />
              Desktop
            </button>
            <button
              onClick={() => setPlatform('mobile')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                platform === 'mobile' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile
            </button>
          </div>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center items-center gap-4 mb-16"
        >
          <span className={`text-sm ${billingPeriod === 'monthly' ? 'text-black' : 'text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
            className="relative w-14 h-7 bg-black rounded-full p-1 transition-colors"
          >
            <motion.div
              animate={{ x: billingPeriod === 'yearly' ? 26 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-5 h-5 bg-white rounded-full"
            />
          </button>
          <span className={`text-sm ${billingPeriod === 'yearly' ? 'text-black' : 'text-gray-400'}`}>
            Yearly <span className="text-emerald-500 font-medium">-20%</span>
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-black text-white shadow-premium-xl scale-105'
                  : 'bg-white shadow-premium border border-gray-100'
              }`}
              data-testid={`pricing-card-${index}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white text-xs font-medium px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.description}
              </p>
              
              <div className="mb-8">
                <span className="text-5xl font-semibold">{plan.price[billingPeriod]}</span>
                {plan.period && (
                  <span className={plan.popular ? 'text-gray-400' : 'text-gray-500'}>{plan.period}</span>
                )}
              </div>

              <button
                className={`w-full py-3.5 rounded-full font-medium mb-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-gray-400' : 'text-gray-400'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <RevealSection>
          <div className="bg-white rounded-3xl shadow-premium overflow-hidden border border-gray-100">
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-2xl font-semibold text-black">Compare all features</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left p-6 font-medium text-gray-500">Feature</th>
                    <th className="p-6 font-medium">Starter</th>
                    <th className="p-6 font-medium bg-gray-50">Pro</th>
                    <th className="p-6 font-medium">Team</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { feature: "Voice notes", starter: "5/day", pro: "Unlimited", team: "Unlimited" },
                    { feature: "AI categorization", starter: "Basic", pro: "Advanced", team: "Advanced" },
                    { feature: "Export formats", starter: "Email", pro: "All", team: "All + API" },
                    { feature: "Languages", starter: "1", pro: "12+", team: "12+" },
                    { feature: "History", starter: "7 days", pro: "Unlimited", team: "Unlimited" },
                    { feature: "Collaboration", starter: false, pro: true, team: true },
                    { feature: "Analytics", starter: false, pro: false, team: true },
                    { feature: "Support", starter: "Community", pro: "Priority", team: "Dedicated" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-50">
                      <td className="p-6 text-gray-700">{row.feature}</td>
                      <td className="p-6 text-center">
                        {typeof row.starter === 'boolean' 
                          ? row.starter 
                            ? <Check className="w-5 h-5 mx-auto text-black" /> 
                            : <span className="text-gray-300">—</span>
                          : row.starter}
                      </td>
                      <td className="p-6 text-center bg-gray-50">
                        {typeof row.pro === 'boolean'
                          ? row.pro
                            ? <Check className="w-5 h-5 mx-auto text-black" />
                            : <span className="text-gray-300">—</span>
                          : row.pro}
                      </td>
                      <td className="p-6 text-center">
                        {typeof row.team === 'boolean'
                          ? row.team
                            ? <Check className="w-5 h-5 mx-auto text-black" />
                            : <span className="text-gray-300">—</span>
                          : row.team}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

// Download Page
const DownloadPage = () => {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 bg-gradient-subtle">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-gray-400 tracking-wide uppercase mb-4">Download</p>
          <h1 className="text-4xl md:text-6xl font-semibold text-black tracking-tight mb-4">
            Get FounderVox
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Available on all your devices. Syncs everywhere.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-10 shadow-premium border border-gray-100 text-center"
            data-testid="download-mobile"
          >
            <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-black mb-2">Mobile</h2>
            <p className="text-gray-500 mb-8">Capture ideas on the go</p>
            
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for iOS
              </button>
              <button className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 text-black px-6 py-4 rounded-xl font-medium hover:border-black transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.523 2.306l-9.25 16.044a.5.5 0 00.433.75h4.628a.5.5 0 00.433-.25l9.25-16.044a.5.5 0 00-.433-.75h-4.628a.5.5 0 00-.433.25zm-11.046 0L3.477 7.35a.5.5 0 000 .5l3 5.194a.5.5 0 00.866 0l3-5.194a.5.5 0 000-.5L7.343 2.306a.5.5 0 00-.866 0z"/>
                </svg>
                Download for Android
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">iOS 15+ or Android 10+</p>
          </motion.div>

          {/* Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-10 shadow-premium border border-gray-100 text-center"
            data-testid="download-desktop"
          >
            <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-2xl font-semibold text-black mb-2">Desktop</h2>
            <p className="text-gray-500 mb-8">Full-featured experience</p>
            
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for Mac
              </button>
              <button className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 text-black px-6 py-4 rounded-xl font-medium hover:border-black transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                </svg>
                Download for Windows
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">macOS 12+ or Windows 10+</p>
          </motion.div>
        </div>

        {/* Features */}
        <RevealSection>
          <div className="bg-black rounded-3xl p-10 text-white">
            <h3 className="text-xl font-semibold mb-8 text-center">Everything included</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Real-time transcription",
                "AI categorization",
                "Multi-format export",
                "Task assignment",
                "12+ languages",
                "Cloud sync",
                "Offline mode",
                "Dark mode",
                "Keyboard shortcuts"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                  <Check className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

// Sign In Page
const SignInPage = () => {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 bg-gradient-subtle flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="bg-white rounded-3xl p-10 shadow-premium-lg max-w-md w-full border border-gray-100"
        data-testid="signin-page"
      >
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mic className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-semibold text-black mb-2">Welcome back</h1>
          <p className="text-gray-500">Sign in to your account</p>
        </div>
        
        <div className="space-y-4 mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-black transition-colors text-black placeholder:text-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-black transition-colors text-black placeholder:text-gray-400"
          />
        </div>
        
        <button className="w-full btn-premium text-white py-3.5 rounded-xl font-medium mb-6">
          Sign In
        </button>
        
        <p className="text-center text-gray-500 text-sm">
          Don't have an account?{' '}
          <a href="#" className="text-black font-medium hover:underline">
            Get started free
          </a>
        </p>
      </motion.div>
    </section>
  );
};

// Main App
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
