import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Heart, TrendingUp, Settings, MapPin, Bed, Bath, X, BarChart3, PieChart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingChatbot from '@/components/FloatingChatbot';

const Dashboard = () => {
  const [savedProperties, setSavedProperties] = useState([
    {
      id: 1,
      title: "Luxury 2BHK Apartment",
      location: "Koramangala, Bangalore",
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400",
      bedrooms: 2,
      bathrooms: 2,
      verified: true,
    },
    {
      id: 2,
      title: "Cozy Studio Near Tech Park",
      location: "Electronic City, Bangalore",
      price: "₹25,000",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
      bedrooms: 1,
      bathrooms: 1,
      verified: false,
    },
    {
      id: 3,
      title: "Spacious 3BHK Villa",
      location: "Whitefield, Bangalore",
      price: "₹75,000",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
      bedrooms: 3,
      bathrooms: 3,
      verified: true,
    }
  ]);

  const removeProperty = (id: number) => {
    setSavedProperties(prev => prev.filter(prop => prop.id !== id));
  };

  const insightsData = [
    { metric: "Average Rent in Your Area", value: "₹42,000", change: "+5%", trend: "up" },
    { metric: "Properties Viewed", value: "24", change: "+12%", trend: "up" },
    { metric: "Saved Properties", value: savedProperties.length.toString(), change: "0%", trend: "neutral" },
    { metric: "Market Activity", value: "High", change: "+8%", trend: "up" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center text-text-secondary hover:text-text-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-text-primary">My Dashboard</h1>
          <div></div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="saved" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-surface-soft">
            <TabsTrigger value="saved" className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>Saved Listings</span>
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Insights</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Saved Listings Tab */}
          <TabsContent value="saved" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Your Saved Properties</span>
                  <Badge variant="secondary">{savedProperties.length} Properties</Badge>
                </CardTitle>
              </CardHeader>
            </Card>

            {savedProperties.length === 0 ? (
              <Card className="p-12 text-center">
                <Heart className="w-16 h-16 text-text-muted mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text-primary mb-2">No saved properties yet</h3>
                <p className="text-text-secondary mb-6">Start exploring and save properties you like</p>
                <Link to="/search">
                  <Button className="bg-coral hover:bg-coral-hover">Browse Properties</Button>
                </Link>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedProperties.map((property) => (
                  <Card key={property.id} className="group hover:shadow-large transition-shadow overflow-hidden">
                    <div className="relative">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-48 object-cover"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeProperty(property.id)}
                        className="absolute top-2 right-2 w-8 h-8 rounded-full p-0 bg-background/80 backdrop-blur-sm hover:bg-background"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                      {property.verified && (
                        <Badge className="absolute top-2 left-2 bg-success text-text-white">Verified</Badge>
                      )}
                    </div>
                    
                    <CardContent className="p-4 space-y-3">
                      <div>
                        <h3 className="font-semibold text-text-primary text-lg">{property.title}</h3>
                        <div className="flex items-center text-text-secondary text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span>{property.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-text-secondary text-sm">
                          <div className="flex items-center space-x-1">
                            <Bed className="w-4 h-4" />
                            <span>{property.bedrooms}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Bath className="w-4 h-4" />
                            <span>{property.bathrooms}</span>
                          </div>
                        </div>
                        <div className="text-lg font-bold text-coral">{property.price}/month</div>
                      </div>
                      
                      <Link to={`/property/${property.id}`}>
                        <Button variant="outline" className="w-full">View Details</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {insightsData.map((insight, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg ${insight.trend === 'up' ? 'bg-success-light' : 'bg-surface-soft'}`}>
                        {insight.trend === 'up' ? (
                          <TrendingUp className={`w-4 h-4 ${insight.trend === 'up' ? 'text-success' : 'text-text-muted'}`} />
                        ) : (
                          <BarChart3 className="w-4 h-4 text-text-muted" />
                        )}
                      </div>
                      <Badge variant={insight.trend === 'up' ? 'default' : 'secondary'} className={insight.trend === 'up' ? 'bg-success text-text-white' : ''}>
                        {insight.change}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-text-secondary">{insight.metric}</p>
                      <p className="text-2xl font-bold text-text-primary">{insight.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-coral" />
                    <span>Rent Trends</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-surface-soft rounded-lg">
                    <div className="text-center">
                      <PieChart className="w-12 h-12 text-text-muted mx-auto mb-2" />
                      <p className="text-text-secondary">Interactive charts coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-success" />
                    <span>Safety Index</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Koramangala</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-surface-soft rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-success"></div>
                        </div>
                        <span className="text-success font-medium">8.5/10</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Electronic City</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-surface-soft rounded-full overflow-hidden">
                          <div className="w-3/5 h-full bg-warning"></div>
                        </div>
                        <span className="text-warning font-medium">7.2/10</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Whitefield</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-surface-soft rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-success"></div>
                        </div>
                        <span className="text-success font-medium">8.8/10</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-text-primary">Full Name</label>
                      <input 
                        type="text" 
                        defaultValue="John Doe" 
                        className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-coral"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text-primary">Email</label>
                      <input 
                        type="email" 
                        defaultValue="john@example.com" 
                        className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-coral"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text-primary">Phone</label>
                      <input 
                        type="tel" 
                        defaultValue="+91 98765 43210" 
                        className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-coral"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-text-primary">Preferred Location</label>
                      <input 
                        type="text" 
                        defaultValue="Bangalore" 
                        className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-coral"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text-primary">Budget Range</label>
                      <input 
                        type="text" 
                        defaultValue="₹20,000 - ₹50,000" 
                        className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-coral"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text-primary">Language</label>
                      <select className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-coral">
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Kannada</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button className="bg-coral hover:bg-coral-hover">Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <FloatingChatbot />
    </div>
  );
};

export default Dashboard;