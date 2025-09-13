import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { Upload, Camera, FileText, MapPin, Home, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingChatbot from '@/components/FloatingChatbot';

const ListProperty = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    images: [] as File[],
    kycDoc: null as File | null
  });

  const totalSteps = 4;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ 
        ...prev, 
        images: [...prev.images, ...Array.from(e.target.files || [])]
      }));
    }
  };

  const handleKYCUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, kycDoc: e.target.files![0] }));
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Submit logic here
    console.log('Property submitted:', formData);
    alert('Property submitted successfully!');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Camera className="w-16 h-16 text-coral mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-text-primary">Upload Photos</h2>
              <p className="text-text-secondary">Add high-quality photos to attract more renters</p>
            </div>
            
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-coral transition-colors">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 text-text-muted mx-auto mb-4" />
                <p className="text-text-primary font-medium">Click to upload images</p>
                <p className="text-text-secondary text-sm">PNG, JPG up to 10MB each</p>
              </label>
            </div>

            {formData.images.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {formData.images.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Home className="w-16 h-16 text-coral mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-text-primary">Property Details</h2>
              <p className="text-text-secondary">Tell us about your property</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Property Title</Label>
                <Input
                  id="title"
                  placeholder="Spacious 2BHK near Metro Station"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="mt-1"
                />
                <p className="text-xs text-text-muted mt-1">AI Suggestion: "Spacious 2BHK near Metro Station"</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Input
                    id="bedrooms"
                    type="number"
                    placeholder="2"
                    value={formData.bedrooms}
                    onChange={(e) => handleInputChange('bedrooms', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Input
                    id="bathrooms"
                    type="number"
                    placeholder="1"
                    value={formData.bathrooms}
                    onChange={(e) => handleInputChange('bathrooms', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="price">Monthly Rent (₹)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="25000"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your property..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="mt-1 min-h-[100px]"
                />
                <p className="text-xs text-text-muted mt-1">AI will help optimize this description</p>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-coral mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-text-primary">Location Details</h2>
              <p className="text-text-secondary">Where is your property located?</p>
            </div>

            <div>
              <Label htmlFor="location">Full Address</Label>
              <Input
                id="location"
                placeholder="Enter complete address with pincode"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="mt-1"
              />
            </div>

            <Card className="p-4 bg-surface-soft">
              <h3 className="font-semibold text-text-primary mb-2">AI Location Analysis</h3>
              <div className="space-y-2 text-sm">
                <p className="text-text-secondary">• Near Metro Station (800m)</p>
                <p className="text-text-secondary">• Shopping Mall within 1km</p>
                <p className="text-text-secondary">• Good connectivity to IT hubs</p>
                <p className="text-success">• High demand area</p>
              </div>
            </Card>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <FileText className="w-16 h-16 text-coral mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-text-primary">Verification Documents</h2>
              <p className="text-text-secondary">Upload documents for property verification</p>
            </div>

            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-coral transition-colors">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleKYCUpload}
                className="hidden"
                id="kyc-upload"
              />
              <label htmlFor="kyc-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 text-text-muted mx-auto mb-4" />
                <p className="text-text-primary font-medium">Upload Property Documents</p>
                <p className="text-text-secondary text-sm">Property papers, Aadhar, PAN (PDF, JPG, PNG)</p>
              </label>
            </div>

            {formData.kycDoc && (
              <Card className="p-4">
                <p className="text-text-primary font-medium">Document uploaded: {formData.kycDoc.name}</p>
              </Card>
            )}

            <Card className="p-4 bg-success-light">
              <h3 className="font-semibold text-success mb-2">✓ AI Verification Benefits</h3>
              <ul className="space-y-1 text-sm text-text-secondary">
                <li>• Faster property approval</li>
                <li>• Higher trust score with renters</li>
                <li>• Better visibility in search results</li>
              </ul>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center text-text-secondary hover:text-text-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-text-primary">List Your Property</h1>
          <div></div>
        </div>

        {/* Progress Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-text-primary">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-text-secondary">{Math.round(progressPercentage)}% Complete</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </CardContent>
        </Card>

        {/* Main Content */}
        <Card className="mb-8">
          <CardContent className="p-8">
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button onClick={nextStep} className="px-6 bg-coral hover:bg-coral-hover">
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="px-6 bg-coral hover:bg-coral-hover">
              Submit Property
            </Button>
          )}
        </div>
      </div>

      <FloatingChatbot />
    </div>
  );
};

export default ListProperty;