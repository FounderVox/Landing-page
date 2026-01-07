import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  Twitter,
  MessageSquare,
  Zap,
  ListTodo,
  Sparkles,
  Play,
  ArrowRight,
  Check,
  Star,
  Apple,
  Download
} from 'lucide-react';

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        data-testid="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" data-testid="logo-link">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-black">Founder Vox</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/pricing"
                data-testid="nav-pricing"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/pricing' ? 'text-black' : 'text-gray-600 hover:text-black'
                }`}
              >
                Pricing
              </Link>
              <Link
                to="/download"
                data-testid="nav-download"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/download' ? 'text-black' : 'text-gray-600 hover:text-black'
                }`}
              >
                Download App
              </Link>
              <a
                href="#features"
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                Features
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/signin"
                data-testid="nav-signin"
                className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all"
              >
                Sign In
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              data-testid="mobile-menu-toggle"
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-6 pt-8">
              <Link
                to="/pricing"
                className="text-2xl font-medium text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/download"
                className="text-2xl font-medium text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download App
              </Link>
              <a
                href="#features"
                className="text-2xl font-medium text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <Link
                to="/signin"
                className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-black" />
            <span className="text-sm font-medium text-black">#1 AI Voice Tool for Founders</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6">
            Turn your voice into
            <span className="block mt-2">organized action</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
            Founder Vox transforms your spoken ideas into categorized notes, tasks, emails, and content—powered by AI, built for founders who move fast.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            to="/download"
            data-testid="hero-download-btn"
            className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            <Apple className="w-5 h-5" />
            Download for Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            data-testid="hero-demo-btn"
            className="flex items-center gap-2 text-black px-8 py-4 rounded-full text-lg font-medium border-2 border-black hover:bg-black hover:text-white transition-all"
          >
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl">
            {/* Mock App Interface */}
            <div className="bg-gray-800 rounded-2xl p-6">
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-sm">Founder Vox</div>
              </div>

              {/* Content Area */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Voice Input */}
                <div className="bg-gray-700/50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center animate-pulse">
                      <Mic className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Recording...</p>
                      <p className="text-gray-400 text-sm">Speak your thoughts</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-white to-gray-300 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-gray-300 text-sm italic">
                      "Need to follow up with investors about the Series A timeline and prepare the pitch deck for next week's meeting..."
                    </p>
                  </div>
                </div>

                {/* AI Output */}
                <div className="bg-gray-700/50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-white rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-white font-medium">AI Organized</p>
                      <p className="text-gray-400 text-sm">Categorized & formatted</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded">Task</span>
                      <span className="text-gray-300">Follow up with investors</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded">Task</span>
                      <span className="text-gray-300">Prepare pitch deck</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded">Note</span>
                      <span className="text-gray-300">Series A timeline discussion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -left-10 top-1/4 bg-white rounded-xl p-4 shadow-xl hidden lg:block float-animation">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Email drafted</span>
            </div>
          </div>

          <div className="absolute -right-10 top-1/3 bg-white rounded-xl p-4 shadow-xl hidden lg:block float-animation" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <ListTodo className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">3 tasks created</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice-First Input",
      description: "Simply speak your thoughts. Our AI captures every word and understands context, intent, and priorities.",
      image: "voice"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Smart Categorization",
      description: "Notes are automatically organized into categories—meetings, ideas, tasks, and more. Never lose a thought again.",
      image: "categorize"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Assign tasks to collaborators directly from voice notes. Keep your team aligned without extra meetings.",
      image: "team"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Formatting",
      description: "Transform voice into emails, social posts, prompts, and action plans. One recording, multiple outputs.",
      image: "format"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Four ways we help you
            <span className="block">capture ideas faster</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for founders who think faster than they can type.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="feature-card bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all"
              data-testid={`feature-card-${index}`}
            >
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
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
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Voice to action in 3 steps
          </h2>
          <p className="text-xl text-gray-600">
            The fastest way to capture and organize your thoughts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
              data-testid={`step-${index}`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center text-3xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronRight className="w-8 h-8 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    { number: "12+", label: "Languages", description: "Multi-language transcription support" },
    { number: "500ms", label: "Response Time", description: "Near-instant AI processing" },
    { number: "99%", label: "Accuracy", description: "Industry-leading transcription" }
  ];

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real-time transcription
          </h2>
          <p className="text-xl text-gray-400">
            Powered by the latest AI models for accuracy and speed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 bg-white/5 rounded-3xl backdrop-blur-sm"
              data-testid={`stat-${index}`}
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-gray-300 mb-2">{stat.label}</div>
              <p className="text-gray-500">{stat.description}</p>
            </motion.div>
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
      question: "How does Founder Vox work?",
      answer: "Simply tap to record and speak your thoughts. Our AI transcribes your voice in real-time, then categorizes and formats your content into notes, tasks, emails, or any format you need. It's like having an AI assistant that understands context and intent."
    },
    {
      question: "Who is Founder Vox for?",
      answer: "Founder Vox is designed for busy founders, executives, and professionals who think faster than they can type. If you're constantly capturing ideas, managing tasks, and communicating with teams, Founder Vox helps you do it all through voice."
    },
    {
      question: "Is there a free plan?",
      answer: "Yes! Our Starter plan is completely free and includes 5 voice notes per day, basic AI categorization, and email formatting. It's perfect for trying out Founder Vox and experiencing how voice-first productivity works."
    },
    {
      question: "What languages are supported?",
      answer: "We support 12+ languages including English, Spanish, French, German, Chinese, Japanese, Portuguese, and more. Our AI is trained to handle accents and mixed-language conversations."
    },
    {
      question: "Can I collaborate with my team?",
      answer: "Absolutely! With our Pro and Team plans, you can assign tasks directly from voice notes, share notes with collaborators, and work in shared workspaces. Keep everyone aligned without scheduling extra meetings."
    },
    {
      question: "How do I get support?",
      answer: "We offer multiple support channels. Free users have access to our help center and community. Pro users get priority email support, and Team users get dedicated support with faster response times."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-gray-200 rounded-2xl overflow-hidden"
              data-testid={`faq-${index}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-black">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Voice-first productivity for founders who move fast
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Try Founder Vox free today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/download"
              data-testid="cta-download-btn"
              className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all shadow-lg"
            >
              <Apple className="w-5 h-5" />
              Get the App
            </Link>
            <Link
              to="/pricing"
              className="flex items-center gap-2 text-black px-8 py-4 rounded-full text-lg font-medium border-2 border-black hover:bg-black hover:text-white transition-all"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <Mic className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold">Founder Vox</span>
            </div>
            <p className="text-gray-400 text-sm">
              Voice-first productivity for founders who think faster than they type.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/download" className="text-gray-400 hover:text-white transition-colors">Download</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Founder Vox. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <MessageSquare className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
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

// Pricing Page
const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "All essential features to get started.",
      features: [
        "5 voice notes per day",
        "Basic AI categorization",
        "Email formatting",
        "Single language support",
        "7-day note history"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "/ month",
      description: "Unlimited access for power users.",
      features: [
        "Unlimited voice notes",
        "Advanced AI categorization",
        "All format types (email, social, prompts)",
        "Multi-language support (12+ languages)",
        "Unlimited note history",
        "Task assignment & collaboration",
        "Priority support"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Team",
      price: "$49",
      period: "/ month",
      description: "For teams that move fast together.",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Shared workspaces",
        "Team analytics & insights",
        "Admin controls",
        "API access",
        "Dedicated support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Pricing plans</h1>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your workflow. Upgrade anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-black text-white shadow-2xl scale-105'
                  : 'bg-white shadow-lg'
              }`}
              data-testid={`pricing-card-${index}`}
            >
              {plan.popular && (
                <div className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                  <Star className="w-4 h-4" />
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`mb-6 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className={plan.popular ? 'text-gray-300' : 'text-gray-500'}>
                    {plan.period}
                  </span>
                )}
              </div>
              <button
                className={`w-full py-3 rounded-full font-medium mb-8 transition-all ${
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
                      plan.popular ? 'text-green-400' : 'text-green-600'
                    }`} />
                    <span className={plan.popular ? 'text-gray-200' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg overflow-hidden"
        >
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-black">Feature Comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-6 font-semibold">Features</th>
                  <th className="p-6 font-semibold">Starter</th>
                  <th className="p-6 font-semibold bg-gray-50">Pro</th>
                  <th className="p-6 font-semibold">Team</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-6 text-gray-700">Voice notes per day</td>
                  <td className="p-6 text-center">5</td>
                  <td className="p-6 text-center bg-gray-50">Unlimited</td>
                  <td className="p-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 text-gray-700">AI categorization</td>
                  <td className="p-6 text-center">Basic</td>
                  <td className="p-6 text-center bg-gray-50">Advanced</td>
                  <td className="p-6 text-center">Advanced</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 text-gray-700">Output formats</td>
                  <td className="p-6 text-center">Email only</td>
                  <td className="p-6 text-center bg-gray-50">All formats</td>
                  <td className="p-6 text-center">All formats</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 text-gray-700">Language support</td>
                  <td className="p-6 text-center">1 language</td>
                  <td className="p-6 text-center bg-gray-50">12+ languages</td>
                  <td className="p-6 text-center">12+ languages</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 text-gray-700">Team collaboration</td>
                  <td className="p-6 text-center">—</td>
                  <td className="p-6 text-center bg-gray-50"><Check className="w-5 h-5 mx-auto text-green-600" /></td>
                  <td className="p-6 text-center"><Check className="w-5 h-5 mx-auto text-green-600" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 text-gray-700">API access</td>
                  <td className="p-6 text-center">—</td>
                  <td className="p-6 text-center bg-gray-50">—</td>
                  <td className="p-6 text-center"><Check className="w-5 h-5 mx-auto text-green-600" /></td>
                </tr>
                <tr>
                  <td className="p-6 text-gray-700">Support</td>
                  <td className="p-6 text-center">Community</td>
                  <td className="p-6 text-center bg-gray-50">Priority</td>
                  <td className="p-6 text-center">Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Download Page
const DownloadPage = () => {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Get Founder Vox
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download our app and start turning your voice into organized action today.
          </p>
        </motion.div>

        {/* App Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mobile App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-lg text-center"
            data-testid="download-mobile"
          >
            <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-black mb-3">Mobile App</h2>
            <p className="text-gray-600 mb-6">
              Capture ideas on the go. Available for iOS and Android.
            </p>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                <Apple className="w-5 h-5" />
                Download for iOS
              </button>
              <button className="w-full flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                <Download className="w-5 h-5" />
                Download for Android
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">Requires iOS 15+ or Android 10+</p>
          </motion.div>

          {/* Desktop App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-lg text-center"
            data-testid="download-desktop"
          >
            <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v12h16V6H4zm2 2h12v8H6V8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-black mb-3">Desktop App</h2>
            <p className="text-gray-600 mb-6">
              Full-featured experience for Mac and Windows.
            </p>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                <Apple className="w-5 h-5" />
                Download for Mac
              </button>
              <button className="w-full flex items-center justify-center gap-3 border-2 border-black text-black px-6 py-4 rounded-full font-medium hover:bg-black hover:text-white transition-all">
                <Download className="w-5 h-5" />
                Download for Windows
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">Requires macOS 12+ or Windows 10+</p>
          </motion.div>
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black rounded-3xl p-10 text-white"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">What's included</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Real-time voice transcription",
              "AI-powered categorization",
              "Multi-format output (email, social, etc.)",
              "Task creation & assignment",
              "12+ language support",
              "Cloud sync across devices",
              "Offline mode",
              "Dark mode",
              "Keyboard shortcuts"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Sign In Page (Placeholder - You mentioned you already have auth)
const SignInPage = () => {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 bg-gray-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-10 shadow-lg max-w-md w-full text-center"
        data-testid="signin-page"
      >
        <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Mic className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-black mb-2">Welcome back</h1>
        <p className="text-gray-600 mb-8">Sign in to your Founder Vox account</p>
        
        <div className="space-y-4 mb-6">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-black transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-black transition-colors"
          />
        </div>
        
        <button className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-all mb-4">
          Sign In
        </button>
        
        <p className="text-gray-500 text-sm">
          Don't have an account?{' '}
          <a href="#" className="text-black font-medium hover:underline">
            Sign up free
          </a>
        </p>
      </motion.div>
    </section>
  );
};

// Main App Component
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
