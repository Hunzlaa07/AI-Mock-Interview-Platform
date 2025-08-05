import React from 'react'
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import Contect from './_components/Contect';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaRocket, FaBrain, FaChartLine, FaUsers, FaStar } from "react-icons/fa";
import { MdSecurity, MdSpeed, MdTrendingUp } from "react-icons/md";

const page = () => {
  return (
    <div>
      <Head>
        <title>InterviewAI Pro - AI-Powered Mock Interviews by Hunzla Abbasi</title>
        <meta name="description" content="Master your interview skills with AI-powered mock interviews. Created by Hunzla Abbasi - Your path to interview success starts here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        {/* Header Section */}
        <header className="w-full py-6 bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <FaRocket className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">InterviewAI Pro</h1>
                <p className="text-sm text-gray-600">by Hunzla Abbasi</p>
              </div>
            </div>
            
            <nav className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Success Stories</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <div className="flex items-center space-x-3">
                <a href="https://github.com/hunzlaabbasi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/hunzlaabbasi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-gradient min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                🚀 Created by Hunzla Abbasi
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Master Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Interview Skills
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the future of interview preparation with AI-powered mock interviews. 
              Get personalized feedback and boost your confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button className="btn-primary text-lg px-8 py-4">
                  Start Your Journey
                </Button>
              </Link>
              <a href="#features" className="px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                Explore Features
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80">Successful Interviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">AI Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-gradient">InterviewAI Pro</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built with cutting-edge AI technology to provide you with the most realistic and effective interview preparation experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaBrain className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced AI Technology</h3>
                <p className="text-gray-600 leading-relaxed">
                  Powered by state-of-the-art AI that adapts to your responses and provides intelligent, contextual feedback.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <FaChartLine className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Detailed Analytics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get comprehensive insights into your performance with detailed reports and improvement suggestions.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <MdSpeed className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Feedback</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive instant feedback on your responses, body language, and communication skills.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Experts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Questions curated by industry professionals across various sectors and roles.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <MdSecurity className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your data is secure and private. We use enterprise-grade security to protect your information.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <MdTrendingUp className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI continuously learns and improves to provide you with the best possible experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how InterviewAI Pro has helped professionals land their dream jobs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "InterviewAI Pro completely transformed my interview preparation. The AI feedback was incredibly detailed and helped me identify areas I never knew needed improvement."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    SM
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah Mitchell</h4>
                    <p className="text-gray-600">Software Engineer at Google</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "The realistic interview scenarios and instant feedback helped me build confidence. I landed my dream job within 2 weeks of using InterviewAI Pro!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    AJ
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Alex Johnson</h4>
                    <p className="text-gray-600">Product Manager at Microsoft</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Hunzla has created something truly revolutionary. The AI understands context and provides feedback that actually helps you improve. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    RW
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Rachel Williams</h4>
                    <p className="text-gray-600">Data Scientist at Amazon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Have questions about InterviewAI Pro? Want to collaborate? Let's connect!
              </p>
            </div>
            <Contect />
          </div>
        </section>
      </main>

      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <FaRocket className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">InterviewAI Pro</h3>
                  <p className="text-gray-400">by Hunzla Abbasi</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Revolutionizing interview preparation with cutting-edge AI technology. 
                Your success is our mission.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/hunzlaabbasi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/hunzlaabbasi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/hunzlaabbasi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 InterviewAI Pro by Hunzla Abbasi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default page