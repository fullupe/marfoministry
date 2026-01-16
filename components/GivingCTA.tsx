// import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Shield, CreditCard } from "lucide-react";
import Link from "next/link";

const GivingCTA = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent shadow-gold">
            <Heart className="w-10 h-10 text-accent-foreground" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground">
            Partner With Us in
            <span className="block text-accent">Kingdom Work</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Your generous giving enables us to reach more people with the Gospel, 
            support our community, and expand our ministry. Every gift makes an eternal difference.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm">Secure & Encrypted</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <CreditCard className="w-5 h-5 text-accent" />
              <span className="text-sm">Multiple Payment Options</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Link href="/give">
              <Button variant="hero" size="xl">
                <Heart className="w-5 h-5" />
                Give Now
              </Button>
            </Link>
          </div>

          {/* Scripture */}
          <p className="text-primary-foreground/60 italic text-sm pt-4">
            "Each of you should give what you have decided in your heart to give, 
            not reluctantly or under compulsion, for God loves a cheerful giver."
            <span className="block mt-1 not-italic font-medium">— 2 Corinthians 9:7</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GivingCTA;
