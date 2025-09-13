import React, { useState } from 'react';
import { MessageCircle, X, Send, Mic, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hi! I'm your AI rental assistant. I can help you find properties, answer questions, or flag potential fraud. What can I help you with today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: Date.now() + 1,
        text: getAIResponse(text),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (userText: string): string => {
    const lowerText = userText.toLowerCase();
    
    if (lowerText.includes('find') || lowerText.includes('search')) {
      return "I can help you find the perfect rental! Tell me your preferences like location, budget, number of bedrooms, or any specific amenities you need. I'll search through our verified listings to find matches.";
    } else if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('rent')) {
      return "I can provide rent estimates and market analysis for any area. What location are you interested in? I can also help you understand if a listed price is fair based on current market data.";
    } else if (lowerText.includes('fraud') || lowerText.includes('scam') || lowerText.includes('fake')) {
      return "Great question! I can help identify potential fraud. Red flags include: unusually low prices, requests for payment before viewing, poor quality photos, or pressure to act quickly. Would you like me to analyze a specific listing?";
    } else if (lowerText.includes('translate') || lowerText.includes('language')) {
      return "I can translate property descriptions and help you communicate with landlords in different languages. What language do you need help with?";
    } else {
      return "I'm here to help with all your rental needs! I can assist with property search, market insights, fraud detection, translations, and answering any questions about listings. What specific help do you need?";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-coral hover:bg-coral-hover shadow-coral z-50 p-0"
        >
          <MessageCircle className="w-6 h-6 text-text-white" />
        </Button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-large z-50 flex flex-col">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-text-primary flex items-center">
                <div className="w-8 h-8 bg-indigo-gradient rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="w-4 h-4 text-text-white" />
                </div>
                AI Assistant
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-sm text-text-secondary">
              Ask me anything about rentals
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[280px] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-coral text-text-white rounded-br-sm'
                        : 'bg-surface-soft text-text-primary rounded-bl-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-surface-soft p-3 rounded-2xl rounded-bl-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center space-x-2">
                <div className="flex-1">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about properties, prices, or get help..."
                    className="border-border"
                  />
                </div>
                <Button
                  onClick={() => sendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  size="sm"
                  className="px-3"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2 mt-3">
                {['Find 2BR apartment', 'Check market prices', 'Flag suspicious listing'].map((action) => (
                  <Button
                    key={action}
                    variant="secondary"
                    size="sm"
                    onClick={() => sendMessage(action)}
                    className="text-xs px-3 py-1 h-auto"
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default FloatingChatbot;