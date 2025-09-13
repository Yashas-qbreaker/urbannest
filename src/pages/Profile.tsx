import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, Edit2, Mail, Phone, MapPin, Calendar, Settings, Heart, Key, Star, User, Shield, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FloatingChatbot from '@/components/FloatingChatbot';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1 (555) 123-4567',
    location: 'Bengaluru, Karnataka',
    joinDate: 'March 2024',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: true,
    marketingEmails: false
  });

  const savedProperties = [
    {
      id: 1,
      title: "Modern Downtown Loft",
      location: "Bengaluru, Karnataka",
      price: "₹35,000",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      savedDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Cozy Garden Apartment",
      location: "Mysore, Karnataka",
      price: "₹22,000",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      savedDate: "2024-01-12"
    }
  ];

  const recentSearches = [
    "2 bedroom apartments in SF",
    "Pet-friendly rentals Mysore",
    "Luxury condos Mumbai",
    "Student housing near campus"
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center text-text-secondary hover:text-text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
            
            <div className="flex items-center space-x-3">
              <Button
                variant={isEditing ? "default" : "outline"}
                onClick={isEditing ? handleSave : () => setIsEditing(true)}
                className={isEditing ? "bg-coral hover:bg-coral-hover text-text-white" : ""}
              >
                {isEditing ? (
                  <>
                    <Settings className="w-4 h-4 mr-2" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>Saved</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Security</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="relative">
                    <img
                      src={profileData.avatar}
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    {isEditing && (
                      <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-coral hover:bg-coral-hover text-text-white rounded-full flex items-center justify-center shadow-medium">
                        <Camera className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    {isEditing ? (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={profileData.name}
                            onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                            className="mt-1"
                          />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={profileData.email}
                              onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              value={profileData.phone}
                              onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                              className="mt-1"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={profileData.location}
                            onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <h1 className="text-3xl font-bold text-text-primary mb-2">{profileData.name}</h1>
                        <div className="space-y-2 text-text-secondary">
                          <div className="flex items-center justify-center md:justify-start">
                            <Mail className="w-4 h-4 mr-2" />
                            {profileData.email}
                          </div>
                          <div className="flex items-center justify-center md:justify-start">
                            <Phone className="w-4 h-4 mr-2" />
                            {profileData.phone}
                          </div>
                          <div className="flex items-center justify-center md:justify-start">
                            <MapPin className="w-4 h-4 mr-2" />
                            {profileData.location}
                          </div>
                          <div className="flex items-center justify-center md:justify-start">
                            <Calendar className="w-4 h-4 mr-2" />
                            Member since {profileData.joinDate}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
                          <Badge className="bg-success text-text-white">
                            <Shield className="w-3 h-3 mr-1" />
                            Verified Profile
                          </Badge>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-warning fill-current mr-1" />
                            <span className="font-medium">4.9</span>
                            <span className="text-text-secondary ml-1">(12 reviews)</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Search History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentSearches.map((search, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-surface-soft rounded-lg">
                      <span className="text-text-primary">{search}</span>
                      <Button variant="ghost" size="sm" className="text-coral hover:bg-coral-light">
                        Search Again
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="saved" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Saved Properties ({savedProperties.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {savedProperties.map((property) => (
                    <div key={property.id} className="border border-border rounded-lg overflow-hidden hover:shadow-medium transition-shadow">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-text-primary mb-1">{property.title}</h3>
                        <p className="text-text-secondary text-sm mb-2">{property.location}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-text-primary">{property.price}/month</span>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline">
                              <Heart className="w-4 h-4 fill-current text-coral" />
                            </Button>
                            <Link to={`/property/${property.id}`}>
                              <Button size="sm" className="bg-coral hover:bg-coral-hover text-text-white">
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Bell className="w-4 h-4 text-text-secondary" />
                    <div>
                      <p className="font-medium text-text-primary">Email Notifications</p>
                      <p className="text-sm text-text-secondary">Receive email updates about your searches</p>
                    </div>
                  </div>
                  <Switch
                    checked={notifications.emailNotifications}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, emailNotifications: checked }))
                    }
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Bell className="w-4 h-4 text-text-secondary" />
                    <div>
                      <p className="font-medium text-text-primary">Push Notifications</p>
                      <p className="text-sm text-text-secondary">Get notified about new properties</p>
                    </div>
                  </div>
                  <Switch
                    checked={notifications.pushNotifications}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, pushNotifications: checked }))
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-text-secondary" />
                    <div>
                      <p className="font-medium text-text-primary">SMS Notifications</p>
                      <p className="text-sm text-text-secondary">Important updates via text message</p>
                    </div>
                  </div>
                  <Switch
                    checked={notifications.smsNotifications}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, smsNotifications: checked }))
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-text-secondary" />
                    <div>
                      <p className="font-medium text-text-primary">Marketing Emails</p>
                      <p className="text-sm text-text-secondary">Promotional offers and news</p>
                    </div>
                  </div>
                  <Switch
                    checked={notifications.marketingEmails}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, marketingEmails: checked }))
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Password & Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-coral hover:bg-coral-hover text-text-white">
                  <Key className="w-4 h-4 mr-2" />
                  Change Password
                </Button>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-text-primary">Two-Factor Authentication</p>
                    <p className="text-sm text-text-secondary">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline">
                    Enable 2FA
                  </Button>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-text-primary">Login Sessions</p>
                    <p className="text-sm text-text-secondary">Manage active sessions</p>
                  </div>
                  <Button variant="outline">
                    View Sessions
                  </Button>
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

export default Profile;