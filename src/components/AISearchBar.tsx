import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, Home, Building2, Briefcase, TreePine, ChevronDown, Filter, Clock, Bed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';

const AISearchBar = () => {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('rent');
  const [showFilters, setShowFilters] = useState(false);
  const [searchMode, setSearchMode] = useState<'home' | 'tourist'>('home');
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchData, setSearchData] = useState({
    where: '',
    propertyType: 'all',
    duration: '12',
    bhk: '1',
    checkIn: null as Date | null,
    checkOut: null as Date | null,
    guests: 1,
    priceRange: { min: 0, max: 10000 },
    amenities: [] as string[]
  });

  const propertyTabs = [
    { id: 'rent', label: 'Rent', icon: Home },
    { id: 'buy', label: 'Buy', icon: Building2 },
    { id: 'commercial', label: 'Commercial', icon: Briefcase },
    { id: 'plots', label: 'Plots/Land', icon: TreePine }
  ];

  const popularLocations = [
    'San Francisco, CA',
    'New York, NY',
    'Los Angeles, CA',
    'Austin, TX',
    'Miami, FL',
    'Seattle, WA',
    'Boston, MA',
    'Denver, CO'
  ];

  const propertyTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'house', label: 'House' },
    { value: 'villa', label: 'Villa' },
    { value: 'studio', label: 'Studio' },
    { value: 'penthouse', label: 'Penthouse' },
    { value: 'townhouse', label: 'Townhouse' }
  ];

  const durations = [
    { value: '1', label: '1 Month' },
    { value: '3', label: '3 Months' },
    { value: '6', label: '6 Months' },
    { value: '12', label: '1 Year' },
    { value: '24', label: '2 Years' },
    { value: '36', label: '3+ Years' }
  ];

  const bhkOptions = [
    { value: '1', label: '1 BHK' },
    { value: '2', label: '2 BHK' },
    { value: '3', label: '3 BHK' },
    { value: '4', label: '4 BHK' },
    { value: '5', label: '5+ BHK' }
  ];

  const amenities = [
    'Parking', 'Gym', 'Pool', 'Balcony', 'Pet Friendly',
    'Furnished', 'Air Conditioning', 'Dishwasher', 'Washer/Dryer'
  ];

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    
    // Common parameters
    if (searchData.where) queryParams.set('location', searchData.where);
    if (searchData.priceRange.min > 0) queryParams.set('minPrice', searchData.priceRange.min.toString());
    if (searchData.priceRange.max < 10000) queryParams.set('maxPrice', searchData.priceRange.max.toString());
    if (searchData.amenities.length > 0) queryParams.set('amenities', searchData.amenities.join(','));
    
    // Mode-specific parameters
    if (searchMode === 'home') {
      queryParams.set('mode', 'home');
      if (searchData.propertyType !== 'all') queryParams.set('propertyType', searchData.propertyType);
      if (searchData.duration) queryParams.set('duration', searchData.duration);
      if (searchData.bhk) queryParams.set('bhk', searchData.bhk);
    } else {
      queryParams.set('mode', 'tourist');
      if (searchData.checkIn) queryParams.set('checkIn', searchData.checkIn.toISOString());
      if (searchData.checkOut) queryParams.set('checkOut', searchData.checkOut.toISOString());
      if (searchData.guests) queryParams.set('guests', searchData.guests.toString());
    }
    
    window.location.href = `/search?${queryParams.toString()}`;
  };

  const handleLocationSelect = (location: string) => {
    setSearchData(prev => ({ ...prev, where: location }));
    setActiveField(null);
  };

  const handleSearchModeChange = (mode: 'home' | 'tourist') => {
    setSearchMode(mode);
    if (mode === 'tourist') {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto animate-scale-in">
      {/* Search Mode Toggle */}
      <div className="flex items-center justify-center mb-8">
        <Card className="p-1 bg-background/90 backdrop-blur-2xl shadow-large border border-border/30 rounded-2xl">
          <div className="flex items-center space-x-1">
            <button
              onClick={() => handleSearchModeChange('home')}
              className={`flex flex-col items-center px-4 py-2 rounded-xl font-semibold transition-all duration-500 ${
                searchMode === 'home'
                  ? 'bg-gradient-to-r from-coral to-rose-600 text-text-white shadow-coral transform scale-105'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-soft hover:scale-105'
              }`}
            >
              <span className="text-xs font-bold">Home Rental</span>
              <span className="text-xs opacity-80 mt-1">Find long-term stays</span>
            </button>
            <button
              onClick={() => handleSearchModeChange('tourist')}
              className={`flex flex-col items-center px-4 py-2 rounded-xl font-semibold transition-all duration-500 ${
                searchMode === 'tourist'
                  ? 'bg-gradient-to-r from-coral to-rose-600 text-text-white shadow-coral transform scale-105'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-soft hover:scale-105'
              }`}
            >
              <span className="text-xs font-bold">Tourist Stay</span>
              <span className="text-xs opacity-80 mt-1">Book nightly stays</span>
            </button>
          </div>
        </Card>
      </div>

      {/* Property Type Tabs - Enhanced */}
      <div className="flex items-center justify-center mb-6">
        <Card className="p-2 bg-background/90 backdrop-blur-2xl shadow-large border border-border/30 rounded-xl">
          <div className="flex items-center space-x-1">
            {propertyTabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-500 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-coral to-rose-600 text-text-white shadow-coral transform scale-105 animate-pulse-glow'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-soft hover:scale-105'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-xs">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Enhanced Search Bar - Animated */}
      <div className="relative group animate-fade-in">
        {/* Magical sparkle effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-coral/10 via-indigo/10 to-purple/10 opacity-0 animate-pulse-glow blur-xl rounded-2xl"></div>
        
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-coral/20 via-indigo/20 to-purple/20 opacity-0 group-hover:opacity-100 blur-2xl rounded-2xl transition-all duration-500"></div>
        <div className="absolute inset-0 bg-coral-gradient opacity-5 blur-xl rounded-2xl group-hover:opacity-15 transition-opacity duration-500"></div>
        
        <Card className="relative bg-background/95 backdrop-blur-2xl border border-border/20 rounded-2xl p-3 shadow-large hover:shadow-glow transition-all duration-500 group-hover:scale-[1.02] transform animate-slide-up">
          <div className="flex items-center">
            {/* Location Search - Enhanced */}
            <div
              className={`flex-1 px-4 py-3 cursor-pointer rounded-xl transition-all duration-300 hover:bg-surface-soft/50 ${
                activeField === 'where' ? 'bg-gradient-to-r from-coral/10 to-indigo/10 shadow-medium' : ''
              }`}
              onClick={() => setActiveField(activeField === 'where' ? null : 'where')}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-coral/20 to-indigo/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-coral" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-text-primary mb-1">Where</div>
                  <div className="text-xs text-text-secondary font-medium">
                    {searchData.where || 'Search destinations'}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent"></div>

            {/* Conditional rendering based on search mode */}
            {searchMode === 'home' ? (
              <>
                {/* Property Type - Enhanced */}
                <div
                  className={`flex-1 px-4 py-3 cursor-pointer rounded-xl transition-all duration-300 hover:bg-surface-soft/50 ${
                    activeField === 'propertyType' ? 'bg-gradient-to-r from-indigo/10 to-purple/10 shadow-medium' : ''
                  }`}
                  onClick={() => setActiveField(activeField === 'propertyType' ? null : 'propertyType')}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo/20 to-purple/20 rounded-lg flex items-center justify-center">
                      <Home className="w-4 h-4 text-indigo" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-text-primary mb-1">Property Type</div>
                      <div className="text-xs text-text-secondary font-medium">
                        {propertyTypes.find(pt => pt.value === searchData.propertyType)?.label || 'All Types'}
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-text-secondary" />
                  </div>
                </div>

                <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent"></div>

                {/* Duration - Enhanced */}
                <div
                  className={`flex-1 px-4 py-3 cursor-pointer rounded-xl transition-all duration-300 hover:bg-surface-soft/50 ${
                    activeField === 'duration' ? 'bg-gradient-to-r from-purple/10 to-rose/10 shadow-medium' : ''
                  }`}
                  onClick={() => setActiveField(activeField === 'duration' ? null : 'duration')}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple/20 to-rose/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-purple" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-text-primary mb-1">Duration</div>
                      <div className="text-xs text-text-secondary font-medium">
                        {durations.find(d => d.value === searchData.duration)?.label || '1 Year'}
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-text-secondary" />
                  </div>
                </div>

                <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent"></div>

                {/* BHK - Enhanced */}
                <div
                  className={`flex-1 px-4 py-3 cursor-pointer rounded-xl transition-all duration-300 hover:bg-surface-soft/50 ${
                    activeField === 'bhk' ? 'bg-gradient-to-r from-rose/10 to-coral/10 shadow-medium' : ''
                  }`}
                  onClick={() => setActiveField(activeField === 'bhk' ? null : 'bhk')}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-rose/20 to-coral/20 rounded-lg flex items-center justify-center">
                      <Bed className="w-4 h-4 text-rose-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-text-primary mb-1">BHK</div>
                      <div className="text-xs text-text-secondary font-medium">
                        {bhkOptions.find(b => b.value === searchData.bhk)?.label || '1 BHK'}
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-text-secondary" />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Check-in Date */}
                <Popover open={activeField === 'checkIn'} onOpenChange={(open) => setActiveField(open ? 'checkIn' : null)}>
                  <PopoverTrigger asChild>
                    <div
                      className={`flex-1 px-4 py-3 cursor-pointer rounded-xl transition-all duration-300 hover:bg-surface-soft/50 ${
                        activeField === 'checkIn' ? 'bg-gradient-to-r from-indigo/10 to-purple/10 shadow-medium' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-indigo/20 to-purple/20 rounded-lg flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-indigo" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-bold text-text-primary mb-1">Check in</div>
                          <div className="text-xs text-text-secondary font-medium">
                            {searchData.checkIn ? format(searchData.checkIn, 'MMM dd') : 'Add dates'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={searchData.checkIn || undefined}
                      onSelect={(date) => {
                        setSearchData(prev => ({ ...prev, checkIn: date || null }));
                        setActiveField(null);
                      }}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent"></div>

                {/* Check-out Date */}
                <Popover open={activeField === 'checkOut'} onOpenChange={(open) => setActiveField(open ? 'checkOut' : null)}>
                  <PopoverTrigger asChild>
                    <div
                      className={`flex-1 px-4 py-3 cursor-pointer rounded-xl transition-all duration-300 hover:bg-surface-soft/50 ${
                        activeField === 'checkOut' ? 'bg-gradient-to-r from-purple/10 to-rose/10 shadow-medium' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple/20 to-rose/20 rounded-lg flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-purple" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-bold text-text-primary mb-1">Check out</div>
                          <div className="text-xs text-text-secondary font-medium">
                            {searchData.checkOut ? format(searchData.checkOut, 'MMM dd') : 'Add dates'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={searchData.checkOut || undefined}
                      onSelect={(date) => {
                        setSearchData(prev => ({ ...prev, checkOut: date || null }));
                        setActiveField(null);
                      }}
                      disabled={(date) => date < (searchData.checkIn || new Date())}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent"></div>

                {/* Guests */}
                <div
                  className={`flex-1 px-4 py-3 cursor-pointer rounded-xl transition-all duration-300 hover:bg-surface-soft/50 ${
                    activeField === 'guests' ? 'bg-gradient-to-r from-rose/10 to-coral/10 shadow-medium' : ''
                  }`}
                  onClick={() => setActiveField(activeField === 'guests' ? null : 'guests')}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-rose/20 to-coral/20 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-rose-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-text-primary mb-1">Guests</div>
                      <div className="text-xs text-text-secondary font-medium">
                        {searchData.guests} {searchData.guests === 1 ? 'guest' : 'guests'}
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-text-secondary" />
                  </div>
                </div>
              </>
            )}

            <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent"></div>

            {/* Filters Button */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="mr-4 px-4 py-4 rounded-xl border-2 border-border hover:border-coral hover:bg-coral/5 transition-all duration-300"
            >
              <Filter className="w-4 h-4 text-text-secondary" />
            </Button>

            {/* Search Button - Enhanced */}
            <Button
              onClick={handleSearch}
              className="w-12 h-12 rounded-xl bg-gradient-to-r from-coral to-rose-600 hover:shadow-glow p-0 shadow-coral transform hover:scale-110 transition-all duration-500 group/btn"
            >
              <Search className="w-5 h-5 text-text-white group-hover/btn:rotate-12 transition-transform duration-300" />
            </Button>
          </div>
        </Card>
      </div>
      
      {/* Location Autocomplete */}
      {activeField === 'where' && (
        <Card className="mt-4 p-4 shadow-large animate-fade-in">
          <div className="space-y-3">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Where do you want to go?</h3>
            </div>
            
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="Enter city, neighborhood, or property type"
                value={searchData.where}
                onChange={(e) => setSearchData(prev => ({ ...prev, where: e.target.value }))}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-coral focus:border-coral outline-none"
                autoFocus
              />
            </div>

            {/* Popular Locations */}
            <div className="mt-4">
              <h4 className="text-xs font-medium text-text-secondary mb-2">Popular destinations</h4>
              <div className="flex flex-wrap gap-2">
                {popularLocations.map((location) => (
                  <button
                    key={location}
                    onClick={() => handleLocationSelect(location)}
                    className="px-3 py-2 text-xs bg-surface-soft hover:bg-coral/10 rounded-lg transition-colors duration-200"
                  >
                    {location}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button variant="outline" onClick={() => setActiveField(null)}>
                Cancel
              </Button>
              <Button
                onClick={() => setActiveField(null)}
                className="bg-coral-gradient text-text-white"
              >
                Apply
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Guests Selection */}
      {activeField === 'guests' && (
        <Card className="mt-4 p-4 shadow-large animate-fade-in">
          <div className="space-y-3">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">How many guests?</h3>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setSearchData(prev => ({ ...prev, guests: Math.max(1, prev.guests - 1) }))}
                  className="w-8 h-8 rounded-full"
                >
                  -
                </Button>
                <span className="text-2xl font-bold text-text-primary min-w-[3rem] text-center">
                  {searchData.guests}
                </span>
                <Button
                  variant="outline"
                  onClick={() => setSearchData(prev => ({ ...prev, guests: prev.guests + 1 }))}
                  className="w-8 h-8 rounded-full"
                >
                  +
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button variant="outline" onClick={() => setActiveField(null)}>
                Cancel
              </Button>
              <Button
                onClick={() => setActiveField(null)}
                className="bg-coral-gradient text-text-white"
              >
                Apply
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Property Type Selection */}
      {activeField === 'propertyType' && (
        <Card className="mt-4 p-4 shadow-large animate-fade-in">
          <div className="space-y-3">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Select Property Type</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {propertyTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => {
                    setSearchData(prev => ({ ...prev, propertyType: type.value }));
                    setActiveField(null);
                  }}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    searchData.propertyType === type.value
                      ? 'border-coral bg-coral/10 text-coral'
                      : 'border-border hover:border-coral/50 hover:bg-coral/5'
                  }`}
                >
                  <div className="text-xs font-medium">{type.label}</div>
                </button>
              ))}
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button variant="outline" onClick={() => setActiveField(null)}>
                Cancel
              </Button>
              <Button
                onClick={() => setActiveField(null)}
                className="bg-coral-gradient text-text-white"
              >
                Apply
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Duration Selection */}
      {activeField === 'duration' && (
        <Card className="mt-4 p-4 shadow-large animate-fade-in">
          <div className="space-y-3">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Select Duration</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {durations.map((duration) => (
                <button
                  key={duration.value}
                  onClick={() => {
                    setSearchData(prev => ({ ...prev, duration: duration.value }));
                    setActiveField(null);
                  }}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    searchData.duration === duration.value
                      ? 'border-coral bg-coral/10 text-coral'
                      : 'border-border hover:border-coral/50 hover:bg-coral/5'
                  }`}
                >
                  <div className="text-xs font-medium">{duration.label}</div>
                </button>
              ))}
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button variant="outline" onClick={() => setActiveField(null)}>
                Cancel
              </Button>
              <Button
                onClick={() => setActiveField(null)}
                className="bg-coral-gradient text-text-white"
              >
                Apply
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* BHK Selection */}
      {activeField === 'bhk' && (
        <Card className="mt-4 p-4 shadow-large animate-fade-in">
          <div className="space-y-3">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Select BHK</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {bhkOptions.map((bhk) => (
                <button
                  key={bhk.value}
                  onClick={() => {
                    setSearchData(prev => ({ ...prev, bhk: bhk.value }));
                    setActiveField(null);
                  }}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    searchData.bhk === bhk.value
                      ? 'border-coral bg-coral/10 text-coral'
                      : 'border-border hover:border-coral/50 hover:bg-coral/5'
                  }`}
                >
                  <div className="text-xs font-medium">{bhk.label}</div>
                </button>
              ))}
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button variant="outline" onClick={() => setActiveField(null)}>
                Cancel
              </Button>
              <Button
                onClick={() => setActiveField(null)}
                className="bg-coral-gradient text-text-white"
              >
                Apply
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Advanced Filters */}
      {showFilters && (
        <Card className="mt-4 p-6 shadow-large animate-fade-in">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Advanced Filters</h3>
            </div>
            
            {/* Price Range */}
            <div>
              <h4 className="text-xs font-medium text-text-secondary mb-3">Price Range (per month)</h4>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  placeholder="Min"
                  value={searchData.priceRange.min || ''}
                  onChange={(e) => setSearchData(prev => ({ 
                    ...prev, 
                    priceRange: { ...prev.priceRange, min: parseInt(e.target.value) || 0 }
                  }))}
                  className="w-24 px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-coral focus:border-coral outline-none"
                />
                <span className="text-text-secondary">to</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={searchData.priceRange.max || ''}
                  onChange={(e) => setSearchData(prev => ({ 
                    ...prev, 
                    priceRange: { ...prev.priceRange, max: parseInt(e.target.value) || 10000 }
                  }))}
                  className="w-24 px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-coral focus:border-coral outline-none"
                />
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h4 className="text-xs font-medium text-text-secondary mb-3">Amenities</h4>
              <div className="grid grid-cols-3 gap-2">
                {amenities.map((amenity) => (
                  <label key={amenity} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={searchData.amenities.includes(amenity)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSearchData(prev => ({ 
                            ...prev, 
                            amenities: [...prev.amenities, amenity]
                          }));
                        } else {
                          setSearchData(prev => ({ 
                            ...prev, 
                            amenities: prev.amenities.filter(a => a !== amenity)
                          }));
                        }
                      }}
                      className="rounded border-border"
                    />
                    <span className="text-xs text-text-secondary">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button variant="outline" onClick={() => setShowFilters(false)}>
                Close Filters
              </Button>
              <Button
                onClick={() => {
                  setShowFilters(false);
                  handleSearch();
                }}
                className="bg-coral-gradient text-text-white"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default AISearchBar;