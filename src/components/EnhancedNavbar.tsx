import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MapPin, Home, User, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const EnhancedNavbar = () => {
  const navigationItems = [
    { label: 'For Buyers', href: '/search', description: 'Find your dream home' },
    { label: 'For Tenants', href: '/search?type=rent', description: 'Rental properties' },
    { label: 'For Owners', href: '/list-property', description: 'List your property' },
    { label: 'For Dealers / Builders', href: '/dashboard', description: 'Business solutions' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-2xl border-b border-border/20 shadow-large">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section - Balanced */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-coral to-rose-600 rounded-xl flex items-center justify-center shadow-coral group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                <Home className="w-5 h-5 text-text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-coral via-rose-600 to-purple-600 bg-clip-text text-transparent">
                Urban Nest
              </span>
            </div>

            {/* Location Selector - Balanced */}
            <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-surface-soft/50 to-surface-soft/30 rounded-xl hover:bg-gradient-to-r hover:from-coral/10 hover:to-indigo/10 transition-all duration-300 cursor-pointer group border border-border/20">
              <MapPin className="w-4 h-4 text-coral group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-semibold text-text-primary">Rent in Bengaluru</span>
              <ChevronDown className="w-4 h-4 text-text-secondary group-hover:rotate-180 transition-transform duration-300" />
            </div>
          </div>

          {/* Navigation Links - Balanced */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="group relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-coral/10 hover:to-indigo/10 hover:scale-105"
              >
                {item.label}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="bg-gradient-to-r from-coral to-indigo text-text-white px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shadow-coral">
                    {item.description}
                  </div>
                  <div className="w-2 h-2 bg-gradient-to-r from-coral to-indigo transform rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                </div>
              </Link>
            ))}
            
            {/* Insights with NEW badge - Balanced */}
            <Link
              to="/insights"
              className="group relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-purple/10 hover:to-rose/10 hover:scale-105 flex items-center space-x-1"
            >
              <span>Insights</span>
              <Badge className="bg-gradient-to-r from-purple-600 to-rose-600 text-text-white text-xs px-1.5 py-0.5 shadow-purple animate-pulse">
                NEW
              </Badge>
            </Link>
          </div>

          {/* Right Section - Balanced */}
          <div className="flex items-center space-x-3">
            {/* Post Property Button - Balanced */}
            <Link to="/list-property">
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex items-center space-x-2 border-2 border-coral text-coral hover:bg-gradient-to-r hover:from-coral hover:to-rose-600 hover:text-text-white transition-all duration-300 shadow-soft hover:shadow-coral px-3 py-1.5 font-medium rounded-lg"
              >
                <span className="text-sm">Post property</span>
                <Badge className="bg-gradient-to-r from-emerald to-success text-text-white text-xs px-1.5 py-0.5 shadow-success animate-pulse">
                  FREE
                </Badge>
              </Button>
            </Link>

            {/* Language Toggle - Balanced */}
            <Button variant="ghost" size="sm" className="w-9 h-9 rounded-full p-0 hover:bg-gradient-to-r hover:from-indigo/10 hover:to-purple/10 transition-all duration-300">
              <Globe className="w-4 h-4 text-text-secondary" />
            </Button>

            {/* Profile Menu - Balanced */}
            <div className="flex items-center space-x-2 border-2 border-border/30 rounded-full p-1 hover:shadow-medium transition-all duration-300 cursor-pointer bg-gradient-to-r from-surface-soft/50 to-surface-soft/30 backdrop-blur-xl hover:scale-105">
              <Button variant="ghost" size="sm" className="w-8 h-8 rounded-full p-0 hover:bg-gradient-to-r hover:from-coral/10 hover:to-indigo/10 transition-all duration-300">
                <span className="text-text-secondary text-sm">☰</span>
              </Button>
              <Link to="/profile">
                <div className="w-8 h-8 bg-gradient-to-r from-coral to-rose-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-coral group">
                  <User className="w-4 h-4 text-text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden border-t border-border mt-2 pt-2 pb-2">
          <div className="flex flex-wrap gap-2">
            {navigationItems.slice(0, 2).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="px-3 py-1 text-sm text-text-secondary hover:text-text-primary bg-surface-soft rounded-full transition-all"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/insights"
              className="flex items-center space-x-1 px-3 py-1 text-sm text-text-secondary hover:text-text-primary bg-surface-soft rounded-full transition-all"
            >
              <span>Insights</span>
              <Badge className="bg-success text-text-white text-xs px-1 py-0">NEW</Badge>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavbar;