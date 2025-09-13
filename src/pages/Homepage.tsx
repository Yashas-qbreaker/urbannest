import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Home, MessageCircle, User, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-home.jpg';
import AISearchBar from '@/components/AISearchBar';
import PropertyCard from '@/components/PropertyCard';
import FloatingChatbot from '@/components/FloatingChatbot';
import EnhancedNavbar from '@/components/EnhancedNavbar';

const Homepage = () => {
  const navigate = useNavigate();
  // Mock featured properties
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Downtown Loft",
      location: "San Francisco, CA",
      price: "$420",
      bedrooms: 2,
      bathrooms: 2,
      verified: true,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      rating: 4.8
    },
    {
      id: 2,
      title: "Cozy Garden Apartment",
      location: "Austin, TX",
      price: "$280",
      bedrooms: 1,
      bathrooms: 1,
      verified: true,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      rating: 4.9
    },
    {
      id: 3,
      title: "Luxury Beachfront Condo",
      location: "Miami Beach, FL",
      price: "$650",
      bedrooms: 3,
      bathrooms: 3,
      verified: true,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <EnhancedNavbar />

      {/* Hero Section - Enhanced */}
      <div className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background with multiple layers */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-coral/10 via-transparent to-indigo/10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-coral/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple/15 rounded-full blur-2xl animate-pulse-glow"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <div className="animate-fade-in">
            {/* Main heading with balanced typography */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-white mb-4 leading-tight tracking-tight">
              <span className="block">Find Your</span>
              <span className="block bg-gradient-to-r from-coral via-rose-500 to-purple-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
                Perfect Home
              </span>
            </h1>
            
            {/* Balanced subtitle */}
            <p className="text-sm md:text-base text-text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
              Discover <span className="font-semibold text-coral">AI-powered</span> rental listings with 
              <span className="font-semibold text-indigo"> verified properties</span>, 
              smart matching, and advanced fraud protection technology.
            </p>
          </div>
          
          {/* Enhanced AI Search Bar */}
          <div className="animate-scale-in mb-10">
            <AISearchBar />
          </div>
          
          {/* Trust Indicators - Balanced */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-text-white/90 text-sm animate-slide-up">
            <div className="flex items-center space-x-2 group">
              <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse group-hover:scale-125 transition-transform"></div>
              <span className="font-medium">10K+ Verified Properties</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <div className="w-1.5 h-1.5 bg-indigo rounded-full animate-pulse group-hover:scale-125 transition-transform" style={{ animationDelay: '0.5s' }}></div>
              <span className="font-medium">AI-Powered Matching</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <div className="w-1.5 h-1.5 bg-coral rounded-full animate-pulse group-hover:scale-125 transition-transform" style={{ animationDelay: '1s' }}></div>
              <span className="font-medium">Zero Fraud Guarantee</span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-text-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-text-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Features Section - Enhanced */}
      <div className="py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-soft via-background to-surface-soft/50"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coral/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo/50 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1.5 bg-coral/10 rounded-full text-coral font-semibold text-sm mb-3 animate-fade-in">
              ✨ Why Choose RentAI?
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 leading-tight">
              The Future of
              <span className="block bg-gradient-to-r from-coral via-indigo to-purple-600 bg-clip-text text-transparent">
                Rental Search
              </span>
            </h2>
            <p className="text-text-secondary text-base max-w-2xl mx-auto leading-relaxed font-light">
              Experience the next generation of rental search with AI-powered insights, 
              verified listings, and intelligent matching technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="group relative">
              <Card className="text-center p-4 hover:shadow-glow transition-all duration-700 border-0 bg-background/60 backdrop-blur-xl hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo/5 to-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="pt-2 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-indigo">
                    <Search className="w-6 h-6 text-text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-indigo transition-colors">AI-Powered Search</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Natural language search that understands your preferences and finds perfect matches using advanced AI algorithms and machine learning.
                  </p>
                  <div className="mt-3 w-12 h-1 bg-gradient-to-r from-indigo to-purple-600 mx-auto rounded-full group-hover:w-20 transition-all duration-500"></div>
                </CardContent>
              </Card>
            </div>
            
            {/* Feature 2 */}
            <div className="group relative">
              <Card className="text-center p-4 hover:shadow-glow transition-all duration-700 border-0 bg-background/60 backdrop-blur-xl hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 to-success/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="pt-2 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald to-success rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-success">
                    <Badge className="w-6 h-6 text-text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-emerald transition-colors">Verified Listings</h3>
                  <p className="text-text-secondary leading-relaxed">
                    All properties are verified through our advanced AI-powered fraud detection and real-time verification system for your peace of mind.
                  </p>
                  <div className="mt-3 w-12 h-1 bg-gradient-to-r from-emerald to-success mx-auto rounded-full group-hover:w-20 transition-all duration-500"></div>
                </CardContent>
              </Card>
            </div>
            
            {/* Feature 3 */}
            <div className="group relative">
              <Card className="text-center p-4 hover:shadow-glow transition-all duration-700 border-0 bg-background/60 backdrop-blur-xl hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-rose/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="pt-2 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-coral">
                    <MessageCircle className="w-6 h-6 text-text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-coral transition-colors">Smart Assistant</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Get instant help with property questions, translations, and personalized recommendations powered by our advanced AI assistant.
                  </p>
                  <div className="mt-3 w-12 h-1 bg-gradient-to-r from-coral to-rose-600 mx-auto rounded-full group-hover:w-20 transition-all duration-500"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties - Enhanced */}
      <div className="py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background with gradient and patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-soft via-background to-surface-soft/80"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
            <div className="animate-fade-in mb-6 lg:mb-0">
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-coral/10 to-indigo/10 rounded-full text-coral font-semibold text-sm mb-3">
                🏠 Featured Properties
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 leading-tight">
                Handpicked
                <span className="block bg-gradient-to-r from-coral via-indigo to-purple-600 bg-clip-text text-transparent">
                  Dream Homes
                </span>
              </h2>
              <p className="text-text-secondary text-base flex items-center space-x-2">
                <span>Curated especially for you</span>
                <div className="flex space-x-1">
                  <span className="w-1.5 h-1.5 bg-coral rounded-full animate-pulse"></span>
                  <span className="w-1.5 h-1.5 bg-indigo rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                </div>
                <span>AI-verified listings</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-scale-in">
              <Button variant="outline" className="w-full sm:w-auto text-text-primary border-2 border-border hover:border-coral hover:bg-coral/5 shadow-soft hover:shadow-medium transition-all duration-300 px-6 py-2">
                <Link to="/search" className="block w-full font-semibold">View All Properties</Link>
              </Button>
              <Link to="/list-property" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-coral to-rose-600 text-text-white shadow-coral hover:shadow-glow transform hover:scale-105 transition-all duration-300 px-6 py-2 font-semibold">
                  Post Property
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 animate-fade-in">
            {featuredProperties.map((property, index) => (
              <div 
                key={property.id} 
                className="animate-slide-up group" 
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="transform group-hover:-translate-y-2 transition-all duration-500">
                  <PropertyCard property={property} />
                </div>
              </div>
            ))}
          </div>

          {/* Recent Searches */}
          <div className="mt-12 pt-12 border-t border-border animate-fade-in">
            <div className="mb-8">
              <h3 className="text-lg font-bold text-text-primary mb-4">Trending Searches</h3>
              <div className="flex flex-wrap gap-3">
                {['Rent in San Francisco', 'Apartments in Austin', 'Beachfront Miami', 'Downtown Loft NYC', 'Suburban Phoenix'].map((search) => (
                  <button
                    key={search}
                    onClick={() => {
                      navigate(`/search?location=${encodeURIComponent(search)}`);
                    }}
                    className="group px-4 py-2 bg-background border border-border rounded-full text-text-secondary hover:text-text-primary hover:border-coral transition-all text-sm cursor-pointer shadow-soft hover:shadow-medium transform hover:scale-105"
                  >
                    <span className="group-hover:font-medium transition-all">{search}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced */}
      <div className="py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-coral/10 via-background to-indigo/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-coral/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-coral/10 to-indigo/10 rounded-full text-coral font-semibold text-sm mb-4">
              🚀 Ready to Get Started?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 leading-tight">
              List Your
              <span className="block bg-gradient-to-r from-coral via-rose-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
                Dream Property
              </span>
            </h2>
            <p className="text-text-secondary text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Join thousands of property owners who trust RentAI for hassle-free rentals 
              with <span className="font-semibold text-coral">AI-powered tenant matching</span>, 
              <span className="font-semibold text-indigo"> advanced fraud protection</span>, and 
              <span className="font-semibold text-purple-600"> instant insights</span>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in mb-12">
            <Link to="/list-property">
              <Button 
                size="lg" 
                className="min-w-[200px] bg-gradient-to-r from-coral to-rose-600 text-text-white shadow-coral hover:shadow-glow transform hover:scale-105 transition-all duration-500 px-6 py-3 text-base font-semibold rounded-xl"
              >
                List Your Property
              </Button>
              </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[200px] border-2 border-text-primary/30 hover:border-coral hover:bg-coral/5 shadow-soft hover:shadow-medium transition-all duration-500 px-6 py-3 text-base font-semibold rounded-xl"
            >
              <Link to="/insights" className="block w-full">Learn More</Link>
            </Button>
          </div>
          
          {/* Enhanced Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            <div className="text-center group">
              <div className="text-2xl font-bold bg-gradient-to-r from-coral to-rose-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
              <div className="text-text-secondary font-medium text-sm">Active Listings</div>
              <div className="w-12 h-1 bg-gradient-to-r from-coral to-rose-600 mx-auto mt-3 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
            <div className="text-center group">
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-text-secondary font-medium text-sm">Success Rate</div>
              <div className="w-12 h-1 bg-gradient-to-r from-indigo to-purple-600 mx-auto mt-3 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
            <div className="text-center group">
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald to-success bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-text-secondary font-medium text-sm">AI Support</div>
              <div className="w-12 h-1 bg-gradient-to-r from-emerald to-success mx-auto mt-3 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chatbot */}
      <FloatingChatbot />
    </div>
  );
};

export default Homepage;