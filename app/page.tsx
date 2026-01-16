import EventsSection from "@/components/EventsSection";
import GivingCTA from "@/components/GivingCTA";
import HeroSection from "@/components/HeroSection";
import MinistriesSection from "@/components/MinistriesSection";
import WelcomeSection from "@/components/WelcomeSection";
import Image from "next/image";

export default function Home() {
  return (
        <div className="min-h-screen bg-background">
        <HeroSection />
        <WelcomeSection />
        <MinistriesSection />
        <EventsSection />
        <GivingCTA />
     </div>
 
  );
}
