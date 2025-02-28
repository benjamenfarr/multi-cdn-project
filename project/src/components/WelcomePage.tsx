import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Info, Globe, Zap, Server } from 'lucide-react';

const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0e0b14] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-[#1a1d29] to-[#252a3a] rounded-lg p-8 shadow-xl mb-10">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Welcome to BenFarr.com
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Showcasing cutting-edge CDN technology and professional expertise in content delivery networks
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
              <Link 
                to="/about" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center"
              >
                <Info className="w-5 h-5 mr-2" />
                About Me
              </Link>
              <Link 
                to="/" 
                className="bg-[#252a3a] hover:bg-[#2d3343] text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                View CDN Project
              </Link>
            </div>
          </div>
          
          {/* Site Sections */}
          <h2 className="text-2xl font-bold mb-6 text-blue-400">Explore the Site</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#1a1d29] rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">CDN Project</h3>
                  <p className="text-gray-300">
                    Experience a professional HLS video streaming implementation with adaptive bitrate technology and real-time performance metrics.
                  </p>
                </div>
              </div>
              <Link 
                to="/" 
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center mt-4"
              >
                View Demo
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-[#1a1d29] rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-purple-600 p-3 rounded-lg mr-4">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">About</h3>
                  <p className="text-gray-300">
                    Learn about Ben Farr's professional background, skills, and experience in product management and technology leadership.
                  </p>
                </div>
              </div>
              <Link 
                to="/about" 
                className="text-purple-400 hover:text-purple-300 font-medium flex items-center mt-4"
              >
                View Profile
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="bg-[#1a1d29] rounded-lg p-6 shadow-xl mb-10">
            <div className="flex items-start mb-4">
              <div className="bg-green-600 p-3 rounded-lg mr-4">
                <Server className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
                <p className="text-gray-300">
                  Explore comprehensive data analysis of Disney+ content with interactive visualizations and insights.
                </p>
              </div>
            </div>
            <Link 
              to="/analysis" 
              className="text-green-400 hover:text-green-300 font-medium flex items-center mt-4"
            >
              View Analysis
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          {/* Technology Showcase */}
          <h2 className="text-2xl font-bold mb-6 text-blue-400">Featured Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#1a1d29] rounded-lg p-5 shadow-xl">
              <div className="flex items-center mb-3">
                <Globe className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="font-bold">Content Delivery Networks</h3>
              </div>
              <p className="text-sm text-gray-300">
                Leveraging global CDN infrastructure to deliver content with low latency and high availability.
              </p>
            </div>
            
            <div className="bg-[#1a1d29] rounded-lg p-5 shadow-xl">
              <div className="flex items-center mb-3">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 className="font-bold">Adaptive Bitrate Streaming</h3>
              </div>
              <p className="text-sm text-gray-300">
                Dynamic quality adjustment based on network conditions for optimal viewing experience.
              </p>
            </div>
            
            <div className="bg-[#1a1d29] rounded-lg p-5 shadow-xl">
              <div className="flex items-center mb-3">
                <Server className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="font-bold">Performance Analytics</h3>
              </div>
              <p className="text-sm text-gray-300">
                Real-time metrics and insights to monitor and optimize content delivery performance.
              </p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to explore?</h2>
            <p className="text-lg mb-6">Discover how modern CDN technology powers seamless content delivery</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
              >
                View CDN Demo
              </Link>
              <Link 
                to="/about" 
                className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Learn About Ben
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;