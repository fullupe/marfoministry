// import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Play } from "lucide-react";
//import heroImage from "@/assets/hero-worship.jpg";
import Link from "next/link";


import heroImage from '../public/hero-worship.jpg';

import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Worship service at Marfo Ministry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
            <span className="text-primary-foreground/90 text-sm font-medium">Welcome to Marfo Ministry</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight">
            Where Faith Meets
            <span className="block text-gradient-gold">Family</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Join us as we grow together in faith, love, and community. 
            Everyone is welcome at Marfo Ministry.
          </p>

          {/* Service Info Cards */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-primary-foreground/20">
              <Clock className="w-5 h-5 text-accent" />
              <div className="text-left">
                <p className="text-primary-foreground/70 text-xs uppercase tracking-wider">Next Service</p>
                <p className="text-primary-foreground font-semibold">Sunday, 9:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-primary-foreground/20">
              <MapPin className="w-5 h-5 text-accent" />
              <div className="text-left">
                <p className="text-primary-foreground/70 text-xs uppercase tracking-wider">Location</p>
                <p className="text-primary-foreground font-semibold">Eastern Region , Akyem Sagyimase </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/give">
              <Button variant="hero" size="xl">
                Give Online
               </Button>
            </Link>
            <Link href="/sermons">
             <Button variant="hero-outline" size="xl"> 
                <Play className="w-5 h-5" />
                Watch Latest Sermon
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
