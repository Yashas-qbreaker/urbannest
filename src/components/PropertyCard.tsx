import React from 'react';
import { Heart, Star, MapPin, Bed, Bath, Verified } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  verified: boolean;
  image: string;
  rating: number;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isFavorited, setIsFavorited] = React.useState(false);

  return (
    <a href={`/property/${property.id}`} className="block group">
      <Card className="cursor-pointer bg-background/80 backdrop-blur-xl border-0 shadow-soft hover:shadow-glow transition-all duration-500 overflow-hidden rounded-2xl group-hover:scale-105 group-hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Verified Badge - Enhanced */}
          {property.verified && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald to-success text-text-white px-4 py-2 rounded-full text-sm font-bold shadow-success flex items-center space-x-2 animate-pulse-glow">
              <Verified className="w-4 h-4" />
              <span>Verified</span>
            </div>
          )}
          
          {/* Rating Badge - Enhanced */}
          <div className="absolute top-4 right-16 bg-background/95 backdrop-blur-xl text-text-primary px-3 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 shadow-medium">
            <Star className="w-4 h-4 fill-warning stroke-warning" />
            <span>{property.rating}</span>
          </div>
          
          {/* Favorite Button - Enhanced */}
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorited(!isFavorited);
            }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full p-0 bg-background/30 backdrop-blur-xl hover:bg-background/50 transition-all duration-300 group-hover:scale-110"
          >
            <Heart 
              className={`w-5 h-5 ${
                isFavorited 
                  ? 'fill-coral stroke-coral animate-pulse' 
                  : 'fill-none stroke-white hover:scale-125'
              } transition-all duration-300`} 
            />
          </Button>

          {/* Price Tag - Enhanced */}
          <div className="absolute bottom-4 left-4 bg-gradient-to-r from-coral to-rose-600 text-text-white px-4 py-2 rounded-xl shadow-coral group-hover:shadow-glow transition-all duration-300">
            <span className="font-black text-lg">{property.price}</span>
            <span className="text-sm opacity-90 font-medium"> /night</span>
          </div>
        </div>
        
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="font-bold text-text-primary text-xl leading-tight group-hover:text-coral transition-colors duration-300">
              {property.title}
            </h3>
            <div className="flex items-center text-text-secondary text-base">
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0 text-coral" />
              <span className="truncate font-medium">{property.location}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-text-secondary text-base">
            <div className="flex items-center space-x-2 group/bed">
              <Bed className="w-5 h-5 group-hover/bed:text-indigo transition-colors" />
              <span className="font-semibold">{property.bedrooms} bed{property.bedrooms !== 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center space-x-2 group/bath">
              <Bath className="w-5 h-5 group-hover/bath:text-indigo transition-colors" />
              <span className="font-semibold">{property.bathrooms} bath{property.bathrooms !== 1 ? 's' : ''}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border/30">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald/20 to-success/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Verified className="w-4 h-4 text-success" />
              </div>
              <span className="text-sm text-text-muted font-medium">AI Verified</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-sm px-4 py-2 h-9 font-semibold border-2 border-border hover:border-coral hover:bg-coral/5 transition-all duration-300 group-hover:scale-105"
            >
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export default PropertyCard;