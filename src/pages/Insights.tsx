import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, BarChart3, PieChart, MapPin, Shield, DollarSign, ArrowLeft, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingChatbot from '@/components/FloatingChatbot';

const Insights = () => {
  const rentTrends = [
    { area: "Koramangala", current: "₹48,000", change: "+12%", trend: "up", safety: 8.5 },
    { area: "Electronic City", current: "₹32,000", change: "+8%", trend: "up", safety: 7.2 },
    { area: "Whitefield", current: "₹42,000", change: "+15%", trend: "up", safety: 8.8 },
    { area: "Indiranagar", current: "₹55,000", change: "+5%", trend: "up", safety: 9.1 },
    { area: "HSR Layout", current: "₹45,000", change: "-2%", trend: "down", safety: 8.7 },
    { area: "Marathahalli", current: "₹38,000", change: "+18%", trend: "up", safety: 7.8 }
  ];

  const affordabilityData = [
    { income: "₹50,000", affordable: "₹15,000", percentage: 30, status: "good" },
    { income: "₹75,000", affordable: "₹22,500", percentage: 30, status: "good" },
    { income: "₹1,00,000", affordable: "₹30,000", percentage: 30, status: "good" },
    { income: "₹1,25,000", affordable: "₹37,500", percentage: 30, status: "good" }
  ];

  const keyInsights = [
    {
      title: "Market Activity",
      value: "Very High",
      description: "Property demand increased by 25% this month",
      icon: Activity,
      color: "success",
      change: "+25%"
    },
    {
      title: "Average Safety Score",
      value: "8.2/10",
      description: "AI-analyzed safety ratings across Bangalore",
      icon: Shield,
      color: "success",
      change: "+0.3"
    },
    {
      title: "Best Value Areas",
      value: "Electronic City",
      description: "Highest growth potential with reasonable prices",
      icon: TrendingUp,
      color: "coral",
      change: "+18%"
    },
    {
      title: "Price Prediction",
      value: "₹42,500",
      description: "Expected average rent next month",
      icon: DollarSign,
      color: "indigo",
      change: "+8%"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/dashboard" className="flex items-center text-text-secondary hover:text-text-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-text-primary">AI Insights Dashboard</h1>
          <div></div>
        </div>

        {/* Key Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {keyInsights.map((insight, index) => {
            const IconComponent = insight.icon;
            return (
              <Card key={index} className="hover:shadow-large transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${
                      insight.color === 'success' ? 'bg-success-light' :
                      insight.color === 'coral' ? 'bg-coral-light' : 'bg-indigo-light'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        insight.color === 'success' ? 'text-success' :
                        insight.color === 'coral' ? 'text-coral' : 'text-indigo-start'
                      }`} />
                    </div>
                    <Badge variant="secondary" className={`${
                      insight.change.startsWith('+') ? 'bg-success-light text-success' : 'bg-warning-light text-warning'
                    }`}>
                      {insight.change}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-text-primary">{insight.title}</h3>
                    <p className="text-2xl font-bold text-text-primary">{insight.value}</p>
                    <p className="text-sm text-text-secondary">{insight.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Rent Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-coral" />
                <span>Rent Trends by Area</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {rentTrends.map((area, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-surface-soft hover:bg-surface-hover transition-colors">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-text-muted" />
                      <div>
                        <h4 className="font-semibold text-text-primary">{area.area}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-coral">{area.current}</span>
                          <Badge 
                            variant={area.trend === 'up' ? 'default' : 'secondary'}
                            className={area.trend === 'up' ? 'bg-success text-text-white' : 'bg-error text-text-white'}
                          >
                            {area.trend === 'up' ? (
                              <TrendingUp className="w-3 h-3 mr-1" />
                            ) : (
                              <TrendingDown className="w-3 h-3 mr-1" />
                            )}
                            {area.change}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-text-secondary">Safety Score</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-surface-soft rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${area.safety >= 8.5 ? 'bg-success' : area.safety >= 7.5 ? 'bg-warning' : 'bg-error'}`}
                            style={{ width: `${(area.safety / 10) * 100}%` }}
                          ></div>
                        </div>
                        <span className={`font-medium ${area.safety >= 8.5 ? 'text-success' : area.safety >= 7.5 ? 'text-warning' : 'text-error'}`}>
                          {area.safety}/10
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Affordability Index */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-indigo-start" />
                <span>Affordability vs Income</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-sm text-text-secondary mb-4">
                  Recommended: Spend no more than 30% of income on rent
                </div>
                
                {affordabilityData.map((data, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-text-primary font-medium">Monthly Income: {data.income}</span>
                      <Badge className="bg-success text-text-white">
                        {data.percentage}% Rule
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Affordable Rent:</span>
                      <span className="text-lg font-bold text-indigo-start">{data.affordable}</span>
                    </div>
                    <div className="w-full h-2 bg-surface-soft rounded-full overflow-hidden">
                      <div className="w-full h-full bg-indigo-gradient"></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chart Placeholders */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-success" />
                <span>Market Activity Chart</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-surface-soft rounded-lg">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-text-muted mx-auto mb-4" />
                  <p className="text-text-primary font-medium">Interactive Line Chart</p>
                  <p className="text-text-secondary text-sm">Showing property demand over time</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PieChart className="w-5 h-5 text-coral" />
                <span>Property Types Distribution</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-surface-soft rounded-lg">
                <div className="text-center">
                  <PieChart className="w-16 h-16 text-text-muted mx-auto mb-4" />
                  <p className="text-text-primary font-medium">Interactive Pie Chart</p>
                  <p className="text-text-secondary text-sm">1BHK, 2BHK, 3BHK+ breakdown</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Recommendations */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-coral" />
              <span>AI Recommendations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-success-light">
                <h4 className="font-semibold text-success mb-2">Best Investment Areas</h4>
                <p className="text-text-secondary text-sm">Marathahalli and Electronic City show highest growth potential</p>
              </div>
              <div className="p-4 rounded-lg bg-warning-light">
                <h4 className="font-semibold text-warning mb-2">Market Alert</h4>
                <p className="text-text-secondary text-sm">Rent prices increasing faster than average in premium areas</p>
              </div>
              <div className="p-4 rounded-lg bg-indigo-light">
                <h4 className="font-semibold text-indigo-start mb-2">Safety Update</h4>
                <p className="text-text-secondary text-sm">Indiranagar maintains the highest safety score this month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <FloatingChatbot />
    </div>
  );
};

export default Insights;