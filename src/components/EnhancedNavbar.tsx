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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                Urban Nest
              </span>
            </div>

            {/* Location Selector */}
            <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer group">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Rent in Bengaluru</span>
              <ChevronDown className="w-4 h-4 text-gray-500 group-hover:rotate-180 transition-transform duration-200" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group"
              >
                {item.label}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                  <div className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs whitespace-nowrap">
                    {item.description}
                  </div>
                  <div className="w-2 h-2 bg-gray-800 transform rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                </div>
              </Link>
            ))}
            
            {/* Insights with NEW badge */}
            <Link
              to="/insights"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2 relative group"
            >
              <span>Insights</span>
              <Badge className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                NEW
              </Badge>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Post Property Button */}
            <Link to="/list-property">
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex items-center space-x-2 border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all duration-200 px-4 py-2 font-medium rounded-lg"
              >
                <span className="text-sm">Post property</span>
                <Badge className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                  FREE
                </Badge>
              </Button>
            </Link>

            {/* Language Toggle */}
            <Button variant="ghost" size="sm" className="w-9 h-9 rounded-full p-0 hover:bg-gray-100 transition-colors duration-200">
              <Globe className="w-4 h-4 text-gray-600" />
            </Button>

            {/* Profile Menu */}
            <div className="flex items-center space-x-2 border border-gray-200 rounded-full p-1 hover:shadow-md transition-all duration-200 cursor-pointer bg-white">
              <Button variant="ghost" size="sm" className="w-8 h-8 rounded-full p-0 hover:bg-gray-100 transition-colors duration-200">
                <span className="text-gray-600 text-sm">☰</span>
              </Button>
              <Link to="/profile">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 group">
                  <User className="w-4 h-4 text-white" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden border-t border-gray-200 mt-2 pt-2 pb-2">
          <div className="flex flex-wrap gap-2">
            {navigationItems.slice(0, 2).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="px-3 py-1 text-sm text-gray-600 hover:text-blue-600 bg-gray-50 rounded-full transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/insights"
              className="flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 hover:text-blue-600 bg-gray-50 rounded-full transition-colors duration-200"
            >
              <span>Insights</span>
              <Badge className="bg-pink-500 text-white text-xs px-1.5 py-0.5 rounded-full">NEW</Badge>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavbar;