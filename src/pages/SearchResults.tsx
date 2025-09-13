import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Map, List, ChevronDown, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import PropertyCard from '@/components/PropertyCard';
import FloatingChatbot from '@/components/FloatingChatbot';

const SearchResults = () => {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [showFilters, setShowFilters] = useState(false); // Start with false for mobile
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [searchParams, setSearchParams] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: ''
  });

  useEffect(() => {
    // Parse URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    setSearchParams({
      location: urlParams.get('location') || '',
      checkIn: urlParams.get('checkIn') || '',
      checkOut: urlParams.get('checkOut') || '',
      guests: urlParams.get('guests') || ''
    });
  }, []);

  // Mock search results
  const properties = [
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
      title: "Spacious Family Home",
      location: "Denver, CO",
      price: "$350",
      bedrooms: 3,
      bathrooms: 2,
      verified: false,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      rating: 4.6
    },
    {
      id: 4,
      title: "Luxury Beachfront Condo",
      location: "Miami Beach, FL",
      price: "$650",
      bedrooms: 3,
      bathrooms: 3,
      verified: true,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      rating: 4.7
    },
    {
      id: 5,
      title: "Urban Studio Apartment",
      location: "New York, NY",
      price: "$320",
      bedrooms: 0,
      bathrooms: 1,
      verified: true,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      rating: 4.5
    },
    {
      id: 6,
      title: "Suburban Townhouse",
      location: "Seattle, WA",
      price: "$290",
      bedrooms: 2,
      bathrooms: 2,
      verified: true,
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=400&h=300&fit=crop",
      rating: 4.8
    }
  ];

  // Filter properties based on search criteria
  const filteredProperties = properties.filter(property => {
    if (verifiedOnly && !property.verified) return false;
    if (searchParams.location && !property.location.toLowerCase().includes(searchParams.location.toLowerCase())) return false;
    const price = parseInt(property.price.replace('$', '').replace(',', ''));
    if (price < priceRange[0] || price > priceRange[1]) return false;
    return true;
  });

  const amenities = [
    'Pet Friendly',
    'Parking',
    'Laundry',
    'Air Conditioning',
    'Balcony',
    'Gym',
    'Pool',
    'Dishwasher'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-text-secondary hover:text-text-primary transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-text-primary">Search Results</h1>
                <p className="text-text-secondary">
                  {searchParams.location ? `Found ${filteredProperties.length} properties in ${searchParams.location}` : `Found ${filteredProperties.length} properties`}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
              
              <div className="flex items-center bg-surface-soft rounded-lg p-1">
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-coral text-text-white hover:bg-coral-hover px-3' : 'px-3'}
                >
                  <List className="w-4 h-4 mr-1" />
                  List
                </Button>
                <Button
                  variant={viewMode === 'map' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('map')}
                  className={viewMode === 'map' ? 'bg-indigo-gradient text-text-white px-3' : 'px-3'}
                >
                  <Map className="w-4 h-4 mr-1" />
                  Map
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-6">
          {/* Mobile Filters Overlay */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setShowFilters(false)}>
              <div onClick={(e) => e.stopPropagation()}>
                <Card className="absolute right-0 top-0 h-full w-80 max-w-[80vw] overflow-y-auto">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-semibold text-text-primary">Filters</h3>
                      <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                        ✕
                      </Button>
                    </div>
                    
                    {/* Mobile Filter Content */}
                    <div className="mb-6">
                      <label className="text-sm font-medium text-text-primary mb-3 block">
                        Price Range
                      </label>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={10000}
                        step={100}
                        className="mb-3 accent-coral"
                      />
                      <div className="flex items-center justify-between text-sm text-text-secondary">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}+</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="verified-mobile"
                          checked={verifiedOnly}
                          onCheckedChange={(checked) => setVerifiedOnly(checked === true)}
                          className="data-[state=checked]:bg-success border-success"
                        />
                        <label
                          htmlFor="verified-mobile"
                          className="text-sm font-medium text-text-primary cursor-pointer"
                        >
                          Verified listings only
                        </label>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline" onClick={() => setShowFilters(false)}>
                      Apply Filters
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Desktop Filters Sidebar */}
          <Card className="w-80 h-fit sticky top-6 hidden lg:block">
            <CardContent className="p-6">
              <h3 className="font-semibold text-text-primary mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <label className="text-sm font-medium text-text-primary mb-3 block">
                  Price Range
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={10000}
                  step={100}
                  className="mb-3 accent-coral"
                />
                <div className="flex items-center justify-between text-sm text-text-secondary">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}+</span>
                </div>
              </div>

              {/* Verified Only */}
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="verified"
                    checked={verifiedOnly}
                    onCheckedChange={(checked) => setVerifiedOnly(checked === true)}
                    className="data-[state=checked]:bg-success border-success"
                  />
                  <label
                    htmlFor="verified"
                    className="text-sm font-medium text-text-primary cursor-pointer"
                  >
                    Verified listings only
                  </label>
                </div>
              </div>

              {/* Property Type */}
              <div className="mb-6">
                <label className="text-sm font-medium text-text-primary mb-3 block">
                  Property Type
                </label>
                <div className="space-y-3">
                  {['Apartment', 'House', 'Condo', 'Townhouse', 'Studio'].map((type) => (
                    <div key={type} className="flex items-center space-x-3">
                      <Checkbox id={type.toLowerCase()} />
                      <label
                        htmlFor={type.toLowerCase()}
                        className="text-sm text-text-secondary cursor-pointer"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <label className="text-sm font-medium text-text-primary mb-3 block">
                  Amenities
                </label>
                <div className="space-y-3">
                  {amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-3">
                      <Checkbox id={amenity.toLowerCase().replace(' ', '-')} />
                      <label
                        htmlFor={amenity.toLowerCase().replace(' ', '-')}
                        className="text-sm text-text-secondary cursor-pointer"
                      >
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full" variant="outline">
                Clear All Filters
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="flex-1 min-w-0">
            {viewMode === 'list' ? (
              <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
                {filteredProperties.length === 0 && (
                  <div className="col-span-full text-center py-12">
                    <p className="text-text-secondary text-lg">No properties found matching your criteria.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setPriceRange([0, 5000]);
                        setVerifiedOnly(false);
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <Card className="h-[600px] flex items-center justify-center">
                <CardContent className="text-center">
                  <Map className="w-12 h-12 text-text-muted mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Map View Coming Soon
                  </h3>
                  <p className="text-text-secondary">
                    We're working on an interactive map to help you visualize properties.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Load More */}
            {viewMode === 'list' && filteredProperties.length > 0 && (
              <div className="flex justify-center mt-8">
                <Button variant="outline" size="lg">
                  Load More Properties
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <FloatingChatbot />
    </div>
  );
};

export default SearchResults;