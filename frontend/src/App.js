import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic,
  FileText,
  Users,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Smartphone,
  Mail,
  Zap,
  ListTodo,
  Sparkles,
  Play,
  ArrowRight,
  Check,
  Monitor,
  Calendar,
  Send,
  Languages,
  Folder,
  Share2,
  PenTool,
  Globe,
  Bell,
  Lock,
  Cloud,
  Repeat
} from 'lucide-react';

// Premium Logo Component
const Logo = ({ variant = "dark" }) => (
  <div className="flex items-center gap-2.5">
    <div className={`relative w-9 h-9 rounded-xl flex items-center justify-center ${
      variant === "dark" ? "bg-black" : "bg-white"
    }`}>
      <Mic className={`w-4 h-4 ${variant === "dark" ? "text-white" : "text-black"}`} />
    </div>
    <span className={`text-lg font-semibold tracking-tight ${
      variant === "dark" ? "text-black" : "text-white"
    }`}>
      Founder Note
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
      <nav
        data-testid="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-black/5' 
            : 'py-4 bg-transparent'
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
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
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
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-black/5 rounded-lg transition-all duration-200"
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
                className="btn-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium"
              >
                Get Started
              </Link>
            </div>

            <button
              data-testid="mobile-menu-toggle"
              className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link, i) => (
                link.to ? (
                  <Link
                    key={i}
                    to={link.to}
                    className="text-xl font-medium text-black py-3 px-4 rounded-lg hover:bg-black/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={i}
                    href={link.href}
                    className="text-xl font-medium text-black py-3 px-4 rounded-lg hover:bg-black/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <Link
                to="/signin"
                className="btn-primary text-white px-6 py-3 rounded-lg text-lg font-medium text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Hero Section - Clean without scroll effects
const HeroSection = () => {
  return (
    <section className="min-h-screen pt-28 pb-16 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6 leading-[1.1]"
          >
            Speak your ideas.
            <br />
            <span className="text-violet-600">We'll organize them.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Transform voice into organized notes, tasks, emails, and content. 
            Built for founders who think faster than they type.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            to="/download"
            data-testid="hero-download-btn"
            className="btn-primary text-white px-8 py-4 rounded-xl text-base font-medium flex items-center gap-3"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Start Free
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            data-testid="hero-demo-btn"
            className="btn-secondary flex items-center gap-3 px-8 py-4 rounded-xl text-base font-medium"
          >
            <Play className="w-4 h-4" />
            Watch Demo
          </button>
        </motion.div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Demo Container */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-2xl p-1.5 shadow-premium-xl">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 md:p-8 overflow-hidden">
              {/* Window Controls */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-gray-500 text-sm">Founder Note</span>
              </div>

              {/* Demo Content Grid */}
              <div className="grid md:grid-cols-5 gap-4 md:gap-6">
                {/* Voice Input Panel */}
                <div className="md:col-span-2 space-y-4">
                  <div className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-4 md:p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-11 h-11 bg-white rounded-xl flex items-center justify-center"
                      >
                        <Mic className="w-5 h-5 text-black" />
                      </motion.div>
                      <div>
                        <p className="text-white font-medium text-sm">Recording</p>
                        <p className="text-gray-500 text-xs">Speak naturally...</p>
                      </div>
                    </div>
                    
                    {/* Waveform */}
                    <div className="flex items-center gap-0.5 h-10 mb-4">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            height: [6, Math.random() * 28 + 6, 6],
                          }}
                          transition={{ 
                            duration: 0.8, 
                            repeat: Infinity, 
                            delay: i * 0.05,
                            ease: "easeInOut"
                          }}
                          className="w-1 bg-gradient-to-t from-violet-600 to-violet-400 rounded-full"
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      "Schedule investor call for Tuesday, prepare pitch deck by Monday, and send roadmap update to the team..."
                    </p>
                  </div>
                </div>

                {/* AI Output Panel */}
                <div className="md:col-span-3 space-y-3">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-medium text-blue-400 uppercase tracking-wide">Meeting</span>
                    </div>
                    <p className="text-white text-sm font-medium">Investor call scheduled</p>
                    <p className="text-gray-500 text-xs mt-1">Tuesday, 2:00 PM</p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <ListTodo className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-medium text-emerald-400 uppercase tracking-wide">Task</span>
                    </div>
                    <p className="text-white text-sm font-medium">Prepare pitch deck</p>
                    <p className="text-gray-500 text-xs mt-1">Due: Monday</p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Send className="w-4 h-4 text-violet-400" />
                      <span className="text-xs font-medium text-violet-400 uppercase tracking-wide">Email</span>
                    </div>
                    <p className="text-white text-sm font-medium">Roadmap update to team</p>
                    <p className="text-gray-500 text-xs mt-1">Draft ready to send</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 lg:-left-8 top-1/4 hidden md:block"
          >
            <div className="bg-white rounded-xl p-3 shadow-premium-lg border border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-violet-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-violet-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">Email drafted</p>
                  <p className="text-xs text-gray-500">Ready to send</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-4 lg:-right-8 top-1/3 hidden md:block"
          >
            <div className="bg-white rounded-xl p-3 shadow-premium-lg border border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Check className="w-4 h-4 text-emerald-600" />
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
            className="absolute left-8 bottom-4 hidden lg:block"
          >
            <div className="bg-white rounded-xl p-3 shadow-premium-lg border border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Languages className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">12+ languages</p>
                  <p className="text-xs text-gray-500">Auto-detected</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Features Section - Card based with gradient backgrounds
const FeaturesSection = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8 text-white" />,
      title: "Voice Capture",
      description: "Just speak naturally. Our AI transcribes with 99% accuracy in 12+ languages.",
      gradient: "gradient-violet",
      illustration: (
        <div className="relative h-48 flex items-center justify-center">
          <div className="absolute w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
            <Mic className="w-10 h-10 text-white" />
          </div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-32 h-32 border-2 border-white/30 rounded-full"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="absolute w-44 h-44 border-2 border-white/20 rounded-full"
          />
        </div>
      )
    },
    {
      icon: <Folder className="w-8 h-8 text-white" />,
      title: "Smart Organization",
      description: "Notes auto-categorize into meetings, ideas, tasks. Never manually sort again.",
      gradient: "gradient-blue",
      illustration: (
        <div className="relative h-48 flex items-center justify-center">
          <div className="space-y-2">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2"
            >
              <div className="w-3 h-3 rounded bg-yellow-300" />
              <span className="text-white text-sm">Meeting Notes</span>
            </motion.div>
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2 ml-4"
            >
              <div className="w-3 h-3 rounded bg-green-300" />
              <span className="text-white text-sm">Tasks</span>
            </motion.div>
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2"
            >
              <div className="w-3 h-3 rounded bg-purple-300" />
              <span className="text-white text-sm">Ideas</span>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Team Collaboration",
      description: "Assign tasks from voice notes. Share insights instantly with your team.",
      gradient: "gradient-emerald",
      illustration: (
        <div className="relative h-48 flex items-center justify-center">
          <div className="flex -space-x-3">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white font-medium text-sm ${
                  ['bg-white/30', 'bg-white/25', 'bg-white/20', 'bg-white/15'][i]
                }`}
              >
                {['A', 'B', 'C', '+2'][i]}
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      icon: <Share2 className="w-8 h-8 text-white" />,
      title: "Multi-Format Export",
      description: "One recording → emails, social posts, action items. Choose your output.",
      gradient: "gradient-orange",
      illustration: (
        <div className="relative h-48 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: <Mail className="w-4 h-4" />, label: "Email" },
              { icon: <FileText className="w-4 h-4" />, label: "Doc" },
              { icon: <ListTodo className="w-4 h-4" />, label: "Tasks" },
              { icon: <PenTool className="w-4 h-4" />, label: "Post" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/20 backdrop-blur rounded-lg p-3 flex flex-col items-center gap-1"
              >
                <div className="text-white">{item.icon}</div>
                <span className="text-white text-xs">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Everything you need to capture ideas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features designed for founders who move fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover rounded-2xl overflow-hidden"
              data-testid={`feature-card-${index}`}
            >
              {/* Gradient Illustration Area */}
              <div className={`${feature.gradient} p-8`}>
                {feature.illustration}
              </div>
              
              {/* Content Area */}
              <div className="bg-white p-6 border-x border-b border-gray-100 rounded-b-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 ${feature.gradient} rounded-xl flex items-center justify-center`}>
                    {React.cloneElement(feature.icon, { className: "w-5 h-5 text-white" })}
                  </div>
                  <h3 className="text-xl font-semibold text-black">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works - Original style
const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Start Recording",
      description: "Tap the mic and speak naturally. Share your ideas, tasks, or notes as they come to you."
    },
    {
      number: "2",
      title: "AI Processes",
      description: "Our AI transcribes, categorizes, and formats your voice into structured, actionable content."
    },
    {
      number: "3",
      title: "Take Action",
      description: "Review organized notes, assign tasks, send emails, or share content—all from one recording."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Voice to action in 3 steps
          </h2>
          <p className="text-lg text-gray-600">
            The fastest way to capture and organize your thoughts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
              data-testid={`step-${index}`}
            >
              <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100 card-hover">
                <div className="w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center text-2xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ChevronRight className="w-6 h-6 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    { number: "99%", label: "Accuracy", description: "Industry-leading transcription" },
    { number: "500ms", label: "Response", description: "Near-instant processing" },
    { number: "12+", label: "Languages", description: "Global support built-in" }
  ];

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Built for speed and accuracy
          </h2>
          <p className="text-lg text-gray-400">
            Powered by the latest AI for reliable performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white/[0.03] border border-white/[0.06] rounded-2xl"
              data-testid={`stat-${index}`}
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-lg font-medium text-gray-300 mb-1">{stat.label}</div>
              <p className="text-gray-500 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does Founder Note work?",
      answer: "Simply tap to record and speak your thoughts. Our AI transcribes in real-time with 99% accuracy, then automatically categorizes your content into notes, tasks, meetings, and more. From there, you can export to emails, social posts, or action items with one click."
    },
    {
      question: "Who is Founder Note for?",
      answer: "Founder Note is built for founders, executives, and professionals who think faster than they type. If you're constantly capturing ideas, managing tasks, and communicating with teams, Founder Note helps you do it all through voice."
    },
    {
      question: "Is there a free plan?",
      answer: "Yes! Our Starter plan is completely free and includes 5 voice notes per day, basic AI categorization, and email formatting. Perfect for trying Founder Note and experiencing voice-first productivity."
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
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden"
              data-testid={`faq-${index}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base font-medium text-black pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
          Ready to think out loud?
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Join thousands of founders who've switched to voice-first productivity.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/download"
            data-testid="cta-download-btn"
            className="btn-primary text-white px-10 py-4 rounded-xl text-lg font-medium flex items-center gap-3"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/pricing"
            className="btn-secondary px-8 py-4 rounded-xl text-lg font-medium"
          >
            View Pricing
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          No credit card required • Free forever plan
        </p>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", to: "/pricing" },
      { label: "Download", to: "/download" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
    Resources: [
      { label: "Help Center", href: "#" },
      { label: "Contact", href: "#" },
    ],
    Legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Logo variant="light" />
            <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-xs">
              Voice-first productivity for founders who think faster than they type.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium text-white mb-4 text-sm">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link, i) => (
                  <li key={i}>
                    {link.to ? (
                      <Link to={link.to} className="text-gray-400 hover:text-white text-sm transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Founder Note. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            All systems operational
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
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

// Pricing Page with Desktop/Mobile different features
const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [platform, setPlatform] = useState('desktop');

  const desktopPlans = [
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
        "Desktop shortcuts",
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
        "SSO integration",
        "Dedicated support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const mobilePlans = [
    {
      name: "Starter",
      price: { monthly: "Free", yearly: "Free" },
      description: "Capture ideas on the go.",
      features: [
        "3 voice notes per day",
        "Basic transcription",
        "Notes sync",
        "Single language",
        "3-day history"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: { monthly: "$9", yearly: "$7" },
      period: "/ month",
      description: "Full mobile experience.",
      features: [
        "Unlimited voice notes",
        "Offline recording",
        "Quick capture widget",
        "12+ languages",
        "Unlimited history",
        "Apple Watch app",
        "Siri shortcuts",
        "Priority support"
      ],
      cta: "Start Trial",
      popular: true
    },
    {
      name: "Pro + Desktop",
      price: { monthly: "$24", yearly: "$19" },
      period: "/ month",
      description: "Mobile + Desktop bundle.",
      features: [
        "Everything in Mobile Pro",
        "Full desktop access",
        "Cross-device sync",
        "Team collaboration",
        "All export formats",
        "Desktop shortcuts",
        "API access",
        "Priority support"
      ],
      cta: "Start Trial",
      popular: false
    }
  ];

  const plans = platform === 'desktop' ? desktopPlans : mobilePlans;

  return (
    <section className="min-h-screen pt-28 pb-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-gray-600">
            Start free. Upgrade when you're ready.
          </p>
        </div>

        {/* Platform Toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-white rounded-xl p-1 shadow-sm border border-gray-100">
            <button
              onClick={() => setPlatform('desktop')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                platform === 'desktop' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              <Monitor className="w-4 h-4" />
              Desktop
            </button>
            <button
              onClick={() => setPlatform('mobile')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                platform === 'mobile' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile
            </button>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-black' : 'text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
            className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
              billingPeriod === 'yearly' ? 'bg-violet-600' : 'bg-gray-300'
            }`}
          >
            <motion.div
              animate={{ x: billingPeriod === 'yearly' ? 24 : 2 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute top-1 w-4 h-4 bg-white rounded-full shadow"
            />
          </button>
          <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-black' : 'text-gray-400'}`}>
            Yearly <span className="text-violet-600 font-medium">-20%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 md:p-8 card-hover ${
                plan.popular
                  ? 'bg-black text-white shadow-premium-xl'
                  : 'bg-white shadow-premium border border-gray-100'
              }`}
              data-testid={`pricing-card-${index}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-violet-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price[billingPeriod]}</span>
                {plan.period && (
                  <span className={plan.popular ? 'text-gray-400' : 'text-gray-500'}>{plan.period}</span>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-xl font-medium mb-6 transition-all duration-200 ${
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
                      plan.popular ? 'text-violet-400' : 'text-violet-600'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-2xl shadow-premium overflow-hidden border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-black">Compare all features</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left p-4 font-medium text-gray-500">Feature</th>
                  <th className="p-4 font-medium">Starter</th>
                  <th className="p-4 font-medium bg-gray-50">Pro</th>
                  <th className="p-4 font-medium">{platform === 'desktop' ? 'Team' : 'Pro + Desktop'}</th>
                </tr>
              </thead>
              <tbody>
                {(platform === 'desktop' ? [
                  { feature: "Voice notes", starter: "5/day", pro: "Unlimited", team: "Unlimited" },
                  { feature: "Languages", starter: "1", pro: "12+", team: "12+" },
                  { feature: "History", starter: "7 days", pro: "Unlimited", team: "Unlimited" },
                  { feature: "Export formats", starter: "Email", pro: "All", team: "All + API" },
                  { feature: "Collaboration", starter: false, pro: true, team: true },
                  { feature: "Support", starter: "Community", pro: "Priority", team: "Dedicated" },
                ] : [
                  { feature: "Voice notes", starter: "3/day", pro: "Unlimited", team: "Unlimited" },
                  { feature: "Languages", starter: "1", pro: "12+", team: "12+" },
                  { feature: "History", starter: "3 days", pro: "Unlimited", team: "Unlimited" },
                  { feature: "Offline mode", starter: false, pro: true, team: true },
                  { feature: "Desktop access", starter: false, pro: false, team: true },
                  { feature: "Support", starter: "Community", pro: "Priority", team: "Priority" },
                ]).map((row, i) => (
                  <tr key={i} className="border-b border-gray-50">
                    <td className="p-4 text-gray-700">{row.feature}</td>
                    <td className="p-4 text-center">
                      {typeof row.starter === 'boolean' 
                        ? row.starter 
                          ? <Check className="w-4 h-4 mx-auto text-violet-600" /> 
                          : <span className="text-gray-300">—</span>
                        : row.starter}
                    </td>
                    <td className="p-4 text-center bg-gray-50">
                      {typeof row.pro === 'boolean'
                        ? row.pro
                          ? <Check className="w-4 h-4 mx-auto text-violet-600" />
                          : <span className="text-gray-300">—</span>
                        : row.pro}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.team === 'boolean'
                        ? row.team
                          ? <Check className="w-4 h-4 mx-auto text-violet-600" />
                          : <span className="text-gray-300">—</span>
                        : row.team}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

// Download Page
const DownloadPage = () => {
  return (
    <section className="min-h-screen pt-28 pb-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Get Founder Note
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Available on all your devices. Syncs everywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Mobile */}
          <div className="bg-white rounded-2xl p-8 shadow-premium border border-gray-100 text-center card-hover">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-black mb-2">Mobile</h2>
            <p className="text-gray-600 mb-6">Capture ideas on the go</p>
            
            <div className="space-y-3">
              <button className="w-full btn-primary text-white px-6 py-3.5 rounded-xl font-medium flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for iOS
              </button>
              <button className="w-full btn-secondary px-6 py-3.5 rounded-xl font-medium flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.523 2.306l-9.25 16.044a.5.5 0 00.433.75h4.628a.5.5 0 00.433-.25l9.25-16.044a.5.5 0 00-.433-.75h-4.628a.5.5 0 00-.433.25z"/>
                </svg>
                Download for Android
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">iOS 15+ or Android 10+</p>
          </div>

          {/* Desktop */}
          <div className="bg-white rounded-2xl p-8 shadow-premium border border-gray-100 text-center card-hover">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-7 h-7 text-black" />
            </div>
            <h2 className="text-xl font-semibold text-black mb-2">Desktop</h2>
            <p className="text-gray-600 mb-6">Full-featured experience</p>
            
            <div className="space-y-3">
              <button className="w-full btn-primary text-white px-6 py-3.5 rounded-xl font-medium flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for Mac
              </button>
              <button className="w-full btn-secondary px-6 py-3.5 rounded-xl font-medium flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                </svg>
                Download for Windows
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">macOS 12+ or Windows 10+</p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-black rounded-2xl p-8 text-white">
          <h3 className="text-lg font-semibold mb-6 text-center">Everything included</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
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
              <div key={index} className="flex items-center gap-2.5 p-3 bg-white/[0.05] rounded-xl">
                <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Sign In Page
const SignInPage = () => {
  return (
    <section className="min-h-screen pt-28 pb-24 px-6 bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 shadow-premium-lg max-w-md w-full border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
            <Mic className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-black mb-1">Welcome back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        
        <div className="space-y-4 mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-500 transition-colors text-black placeholder:text-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-500 transition-colors text-black placeholder:text-gray-400"
          />
        </div>
        
        <button className="w-full btn-primary text-white py-3 rounded-xl font-medium mb-4">
          Sign In
        </button>
        
        <p className="text-center text-gray-600 text-sm">
          Don't have an account?{' '}
          <a href="#" className="text-violet-600 font-medium hover:underline">
            Get started free
          </a>
        </p>
      </div>
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
