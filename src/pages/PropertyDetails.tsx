import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, MapPin, Bed, Bath, Square, Wifi, Car, Waves, Dumbbell, Verified, Star, Calendar, MessageCircle, Phone, Flag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import FloatingChatbot from '@/components/FloatingChatbot';

const PropertyDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  // Mock property data
  const property = {
    id: 1,
    title: "Modern Downtown Loft with City Views",
    location: "123 Main Street, San Francisco, CA 94102",
    price: "$4,200",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    verified: true,
    rating: 4.8,
    reviews: 24,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"
    ],
    amenities: [
      { icon: Wifi, name: "High-Speed WiFi" },
      { icon: Car, name: "Parking Included" },
      { icon: Waves, name: "Swimming Pool" },
      { icon: Dumbbell, name: "Fitness Center" }
    ],
    landlord: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      properties: 12,
      responseTime: "Usually responds within 2 hours"
    },
    description: "Discover modern living in this stunning downtown loft featuring floor-to-ceiling windows, hardwood floors, and breathtaking city views. The open-concept design creates a perfect blend of comfort and sophistication, making it ideal for professionals seeking luxury in the heart of the city."
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link to="/search" className="flex items-center text-text-secondary hover:text-text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Search
            </Link>
            
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                onClick={() => setIsFavorited(!isFavorited)}
                className={isFavorited ? 'text-coral' : ''}
              >
                <Heart className={`w-4 h-4 mr-2 ${isFavorited ? 'fill-current' : ''}`} />
                Save
              </Button>
              <Button variant="ghost">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost">
                <Flag className="w-4 h-4 mr-2" />
                Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative mb-8">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow-medium"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow-medium"
              >
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
              
              {/* Image Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-coral' : 'bg-text-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Property Info */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-text-primary mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-text-secondary mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                  <div className="flex items-center space-x-4">
                    {property.verified && (
                      <Badge className="bg-success text-text-white">
                        <Verified className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                    {/* Add fraud alert badge when needed */}
                    {/* <Badge className="bg-error text-text-white">
                      <Flag className="w-3 h-3 mr-1" />
                      Fraud Alert
                    </Badge> */}
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-warning fill-current mr-1" />
                      <span className="font-medium">{property.rating}</span>
                      <span className="text-text-secondary ml-1">
                        ({property.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-bold text-text-primary">
                    {property.price}
                    <span className="text-lg font-normal text-text-secondary">/month</span>
                  </div>
                </div>
              </div>

              {/* Property Stats */}
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <Bed className="w-5 h-5 mr-2 text-text-secondary" />
                  <span>{property.bedrooms} Bedroom{property.bedrooms !== 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-5 h-5 mr-2 text-text-secondary" />
                  <span>{property.bathrooms} Bathroom{property.bathrooms !== 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center">
                  <Square className="w-5 h-5 mr-2 text-text-secondary" />
                  <span>{property.sqft} sq ft</span>
                </div>
              </div>

              <Separator className="my-6" />

              {/* AI-Generated Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  About this property
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {property.description}
                </p>
                <Badge variant="secondary" className="text-xs bg-indigo-light text-indigo-start">
                  ✨ AI-Enhanced Description
                </Badge>
              </div>

              <Separator className="my-6" />

              {/* Amenities */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-surface-soft rounded-lg flex items-center justify-center">
                        <amenity.icon className="w-4 h-4 text-text-secondary" />
                      </div>
                      <span className="text-text-secondary">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <Card className="sticky top-6 mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Contact Landlord</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={property.landlord.avatar}
                    alt={property.landlord.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-text-primary">
                      {property.landlord.name}
                    </h4>
                    <div className="flex items-center text-sm text-text-secondary">
                      <Star className="w-3 h-3 text-warning fill-current mr-1" />
                      {property.landlord.rating} • {property.landlord.properties} properties
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-text-secondary">
                  {property.landlord.responseTime}
                </p>
                
                <div className="space-y-3">
                  <Button className="w-full bg-coral hover:bg-coral-hover text-text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Owner
                  </Button>
                  <Link to="/dashboard">
                    <Button variant="outline" className="w-full border-indigo-start text-indigo-start hover:bg-indigo-light">
                      <Calendar className="w-4 h-4 mr-2" />
                      Save to Dashboard
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Similar Properties */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Similar Properties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex space-x-3 p-3 rounded-lg hover:bg-surface-soft cursor-pointer">
                    <img
                      src={`https://images.unsplash.com/photo-${1560448204 + i}-e02f11c3d0e2?w=80&h=60&fit=crop`}
                      alt="Property"
                      className="w-16 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="font-medium text-text-primary text-sm truncate">
                        Modern Apartment {i}
                      </h5>
                      <p className="text-xs text-text-secondary">2 bed • 1 bath</p>
                      <p className="text-sm font-semibold text-text-primary">
                        ${3000 + i * 200}/month
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <FloatingChatbot />
    </div>
  );
};

export default PropertyDetails;