"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Heart, 
  Shield, 
  Lock, 
  CreditCard, 
  Smartphone,
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

import { PayMOMO } from "@/components/PayMOMO";

const givingAmounts = [25, 50, 100, 250, 500, 1000];

const givingTypes = [
  { id: "tithe", label: "Tithe", description: "Regular giving (10% of income)" },
  { id: "offering", label: "Offering", description: "Additional gifts of gratitude" },
  { id: "missions", label: "Missions", description: "Support global outreach" },
  { id: "building", label: "Building Fund", description: "Facility improvements" },
];

const GivePage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedType, setSelectedType] = useState("tithe");
  const [isRecurring, setIsRecurring] = useState(false);

  const displayAmount = customAmount || selectedAmount?.toString() || "0";


   




  return (
    <div className="min-h-screen bg-background">
    
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left Side - Form */}
              <div className="lg:col-span-3 space-y-8">
                {/* Header */}
                <div>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                    Give Online
                  </h1>
                  <p className="text-muted-foreground">
                    Thank you for your generosity. Your giving supports our ministry and helps us 
                    reach more people with the love of Christ.
                  </p>
                </div>

                {/* Amount Selection */}
                <Card variant="default">
                  <CardHeader>
                    <CardTitle className="text-xl">Select Amount</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      {givingAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount("");
                          }}
                          className={`py-4 px-4 rounded-lg font-semibold transition-all ${
                            selectedAmount === amount && !customAmount
                              ? "bg-accent text-accent-foreground shadow-gold"
                              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          }`}
                        >
                          Ghc{amount}
                        </button>
                      ))}
                    </div>
                    
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">
                        ₵ 
                      </span>
                      <Input
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        className="pl-8 h-14 text-lg"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Giving Type */}
                <Card variant="default">
                  <CardHeader>
                    <CardTitle className="text-xl">Giving Type</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {givingTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setSelectedType(type.id)}
                          className={`p-4 rounded-lg text-left transition-all border-2 ${
                            selectedType === type.id
                              ? "border-accent bg-accent/5"
                              : "border-border hover:border-muted-foreground/30"
                          }`}
                        >
                          <p className="font-semibold text-foreground">{type.label}</p>
                          <p className="text-sm text-muted-foreground">{type.description}</p>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recurring Option */}
                <Card variant="default">
                  <CardContent className="pt-6">
                    <button
                      onClick={() => setIsRecurring(!isRecurring)}
                      className="flex items-center gap-4 w-full"
                    >
                      <div className={`w-12 h-7 rounded-full transition-colors relative ${
                        isRecurring ? "bg-accent" : "bg-muted"
                      }`}>
                        <div className={`absolute top-1 w-5 h-5 bg-background rounded-full shadow transition-all ${
                          isRecurring ? "left-6" : "left-1"
                        }`} />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-foreground">Make this a recurring gift</p>
                        <p className="text-sm text-muted-foreground">
                          Set up automatic monthly giving
                        </p>
                      </div>
                    </button>
                  </CardContent>
                </Card>

                {/* Personal Information */}
                <Card variant="default">
                  <CardHeader>
                    <CardTitle className="text-xl">Your Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </CardContent>
                </Card>

         
                <PayMOMO displayAmount={displayAmount} />

             

              </div>

              {/* Right Side - Summary & Trust */}
              <div className="lg:col-span-2 space-y-6">
                {/* Summary Card */}
                <Card className="sticky top-28 bg-primary text-primary-foreground border-0">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary-foreground">Your Gift</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center py-6 border-b border-primary-foreground/20">
                      <p className="text-5xl font-serif font-bold">₵ {displayAmount}</p>
                      <p className="text-primary-foreground/70 mt-2">
                        {isRecurring ? "Monthly" : "One-time"} • {givingTypes.find(t => t.id === selectedType)?.label}
                      </p>
                    </div>

                    {/* Trust Indicators */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3 text-primary-foreground/80">
                        <Shield className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">256-bit SSL encryption</span>
                      </div>
                      <div className="flex items-center gap-3 text-primary-foreground/80">
                        <Lock className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">Your data is never shared</span>
                      </div>
                      <div className="flex items-center gap-3 text-primary-foreground/80">
                        <CreditCard className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">All major cards accepted</span>
                      </div>
                      <div className="flex items-center gap-3 text-primary-foreground/80">
                        <Smartphone className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">Apple Pay & Google Pay</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Tax Deductible Notice */}
                <div className="flex items-start gap-3 p-4 bg-accent/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Tax Deductible</p>
                    <p className="text-xs text-muted-foreground">
                      Marfo Ministry is a registered 501(c)(3) nonprofit. 
                      You will receive a tax receipt via email.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

  
    </div>
  );
};

export default GivePage;
