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
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-3xl border-b border-border/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section - Enhanced */}
          <div className="flex items-center space-x-10">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-coral to-rose-600 rounded-2xl flex items-center justify-center shadow-coral group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                <Home className="w-6 h-6 text-text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-coral via-rose-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Urban Nest
              </span>
            </div>

            {/* Location Selector - Enhanced */}
            <div className="hidden md:flex items-center space-x-3 px-5 py-3 bg-gradient-to-r from-surface-soft/60 to-surface-soft/40 rounded-2xl hover:bg-gradient-to-r hover:from-coral/15 hover:to-indigo/15 transition-all duration-300 cursor-pointer group border border-border/30 shadow-soft hover:shadow-medium">
              <MapPin className="w-5 h-5 text-coral group-hover:scale-110 transition-transform duration-300" />
              <span className="text-base font-semibold text-text-primary">Rent in Bengaluru</span>
              <ChevronDown className="w-4 h-4 text-text-secondary group-hover:rotate-180 transition-transform duration-300" />
            </div>
          </div>

          {/* Navigation Links - Enhanced */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="group relative px-5 py-3 text-sm font-semibold text-text-secondary hover:text-text-primary transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-coral/12 hover:to-indigo/12 hover:scale-105 hover:shadow-soft"
              >
                {item.label}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="bg-gradient-to-r from-coral to-indigo text-text-white px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap shadow-coral">
                    {item.description}
                  </div>
                  <div className="w-2 h-2 bg-gradient-to-r from-coral to-indigo transform rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                </div>
              </Link>
            ))}
            
            {/* Insights with NEW badge - Enhanced */}
            <Link
              to="/insights"
              className="group relative px-5 py-3 text-sm font-semibold text-text-secondary hover:text-text-primary transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-purple/12 hover:to-rose/12 hover:scale-105 hover:shadow-soft flex items-center space-x-2"
            >
              <span>Insights</span>
              <Badge className="bg-gradient-to-r from-purple-600 to-rose-600 text-text-white text-xs px-2 py-1 shadow-purple animate-pulse">
                NEW
              </Badge>
            </Link>
          </div>

          {/* Right Section - Enhanced */}
          <div className="flex items-center space-x-4">
            {/* Post Property Button - Enhanced */}
            <Link to="/list-property">
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex items-center space-x-3 border-2 border-coral text-coral hover:bg-gradient-to-r hover:from-coral hover:to-rose-600 hover:text-text-white transition-all duration-300 shadow-soft hover:shadow-coral px-4 py-2 font-semibold rounded-xl"
              >
                <span className="text-sm">Post property</span>
                <Badge className="bg-gradient-to-r from-emerald to-success text-text-white text-xs px-2 py-1 shadow-success animate-pulse">
                  FREE
                </Badge>
              </Button>
            </Link>

            {/* Language Toggle - Enhanced */}
            <Button variant="ghost" size="sm" className="w-10 h-10 rounded-full p-0 hover:bg-gradient-to-r hover:from-indigo/15 hover:to-purple/15 transition-all duration-300 hover:scale-110">
              <Globe className="w-5 h-5 text-text-secondary" />
            </Button>

            {/* Profile Menu - Enhanced */}
            <div className="flex items-center space-x-3 border-2 border-border/40 rounded-2xl p-1.5 hover:shadow-large transition-all duration-300 cursor-pointer bg-gradient-to-r from-surface-soft/60 to-surface-soft/40 backdrop-blur-xl hover:scale-105">
              <Button variant="ghost" size="sm" className="w-9 h-9 rounded-full p-0 hover:bg-gradient-to-r hover:from-coral/15 hover:to-indigo/15 transition-all duration-300">
                <span className="text-text-secondary text-base">☰</span>
              </Button>
              <Link to="/profile">
                <div className="w-9 h-9 bg-gradient-to-r from-coral to-rose-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-coral group">
                  <User className="w-5 h-5 text-text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Enhanced */}
        <div className="lg:hidden border-t border-border/30 mt-3 pt-3 pb-3">
          <div className="flex flex-wrap gap-3">
            {navigationItems.slice(0, 2).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary bg-surface-soft/60 rounded-xl transition-all hover:bg-coral/10 hover:scale-105"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/insights"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary bg-surface-soft/60 rounded-xl transition-all hover:bg-purple/10 hover:scale-105"
            >
              <span>Insights</span>
              <Badge className="bg-gradient-to-r from-purple-600 to-rose-600 text-text-white text-xs px-2 py-1">NEW</Badge>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavbar;