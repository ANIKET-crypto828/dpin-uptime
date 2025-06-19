"use client";
import React from 'react';
import { 
  Monitor, 
  Shield, 
  Zap, 
  Bell, 
  BarChart3, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  Clock,
  Smartphone,
  Mail,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import UptimeGraph from './components/UptimeGraph';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">BetterUptime</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900/50 text-blue-300 border border-blue-700/50">
                <Zap className="h-4 w-4 mr-1" />
                99.9% Uptime Guaranteed
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Monitor Your Website
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                24/7 Reliability
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get instant alerts when your website goes down. Monitor uptime, performance, and SSL certificates 
              from multiple global locations. Keep your business running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Free 30-Day Trial
              </button>
              <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
                View Live Demo <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">No credit card required • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">99.99%</div>
              <div className="text-gray-400">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">30s</div>
              <div className="text-gray-400">Check Interval</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-400">Global Locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">50k+</div>
              <div className="text-gray-400">Websites Monitored</div>
            </div>
          </div>
        </div>
      </section>

      {/* Uptime Graph Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-Time Performance Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Track your website's uptime and performance with detailed analytics and beautiful visualizations
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <UptimeGraph />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Monitor Your Website
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive monitoring tools designed to keep your website running at peak performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="bg-blue-900/50 p-3 rounded-lg w-fit mb-4 border border-blue-700/50">
                <Monitor className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">HTTP/HTTPS Monitoring</h3>
              <p className="text-gray-300 leading-relaxed">
                Monitor your website's availability and response time from multiple global locations every 30 seconds.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="bg-green-900/50 p-3 rounded-lg w-fit mb-4 border border-green-700/50">
                <Shield className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">SSL Certificate Monitoring</h3>
              <p className="text-gray-300 leading-relaxed">
                Get alerts before your SSL certificates expire. Never lose customer trust due to security warnings.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="bg-purple-900/50 p-3 rounded-lg w-fit mb-4 border border-purple-700/50">
                <BarChart3 className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Analytics</h3>
              <p className="text-gray-300 leading-relaxed">
                Track response times, uptime statistics, and performance trends with detailed analytics dashboards.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="bg-orange-900/50 p-3 rounded-lg w-fit mb-4 border border-orange-700/50">
                <Bell className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Instant Notifications</h3>
              <p className="text-gray-300 leading-relaxed">
                Get immediate alerts via email, SMS, Slack, or webhook when your website goes down or recovers.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="bg-red-900/50 p-3 rounded-lg w-fit mb-4 border border-red-700/50">
                <Globe className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Monitoring Network</h3>
              <p className="text-gray-300 leading-relaxed">
                Monitor from 15+ global locations to ensure your website is accessible worldwide.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="bg-teal-900/50 p-3 rounded-lg w-fit mb-4 border border-teal-700/50">
                <Smartphone className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mobile-First Dashboard</h3>
              <p className="text-gray-300 leading-relaxed">
                Access your monitoring data anywhere with our responsive dashboard and mobile apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Website Monitoring Matters
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-900/50 p-2 rounded-lg border border-green-700/50">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Protect Your Revenue</h3>
                    <p className="text-gray-300">Even 1 minute of downtime can cost thousands in lost sales and damage your brand reputation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900/50 p-2 rounded-lg border border-blue-700/50">
                    <Clock className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Faster Problem Resolution</h3>
                    <p className="text-gray-300">Get alerted instantly when issues occur, allowing you to fix problems before customers notice.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-900/50 p-2 rounded-lg border border-purple-700/50">
                    <Users className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Maintain Customer Trust</h3>
                    <p className="text-gray-300">Reliable websites build customer confidence and improve user experience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-green-600 p-8 rounded-2xl text-white shadow-2xl">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">$5,600</div>
                <div className="text-xl mb-4">Average cost per minute of downtime</div>
                <p className="text-blue-100 mb-6">
                  Don't let website downtime hurt your bottom line. Start monitoring today.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Calculate Your Risk
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your needs. All plans include our core monitoring features.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
                <div className="text-3xl font-bold text-white mb-1">$9</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                  <span className="text-gray-300">Up to 10 monitors</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                  <span className="text-gray-300">30-second checks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                  <span className="text-gray-300">Email alerts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                  <span className="text-gray-300">Basic dashboard</span>
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
                <div className="text-3xl font-bold text-white mb-1">$29</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                  <span className="text-gray-300">Up to 50 monitors</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                  <span className="text-gray-300">30-second checks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                  <span className="text-gray-300">SMS & email alerts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                  <span className="text-gray-300">Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                  <span className="text-gray-300">SSL monitoring</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
                <div className="text-3xl font-bold text-white mb-1">$99</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                  <span className="text-gray-300">Unlimited monitors</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                  <span className="text-gray-300">10-second checks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                  <span className="text-gray-300">All alert channels</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                  <span className="text-gray-300">Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                  <span className="text-gray-300">Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Thousands of Businesses
            </h2>
            <p className="text-xl text-gray-300">See what our customers say about their experience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "BetterUptime saved us from a major outage that could have cost us thousands. The instant alerts allowed us to resolve the issue in minutes."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  SJ
                </div>
                <div>
                  <div className="font-semibold text-white">Sarah Johnson</div>
                  <div className="text-gray-400">CTO, TechStart</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The analytics and reporting features are fantastic. We can now track our website performance trends and optimize accordingly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  MR
                </div>
                <div>
                  <div className="font-semibold text-white">Mike Rodriguez</div>
                  <div className="text-gray-400">DevOps Lead, WebCorp</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Simple setup, reliable monitoring, and excellent support. Everything we needed in one platform."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  AL
                </div>
                <div>
                  <div className="font-semibold text-white">Anna Lee</div>
                  <div className="text-gray-400">Founder, E-commerce Plus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Monitor Your Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses who trust BetterUptime to keep their websites running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Demo
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-4">30-day free trial • No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Monitor className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">BetterUptime</span>
              </div>
              <p className="text-gray-400 mb-4">
                Reliable website monitoring for businesses of all sizes.
              </p>
              <div className="flex space-x-4">
                <Mail className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <MessageSquare className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BetterUptime. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;