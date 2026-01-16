import Header from "@/components/Header";
import Footer from "@/components/Footer";
//import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const events = [
  {
    title: "New Year Prayer & Fasting",
    date: "January 5-12, 2025",
    time: "6:00 AM - 6:00 PM Daily",
    location: "Main Sanctuary",
    description: "Start the new year seeking God's face together as a church family.",
  },
  {
    title: "Youth Winter Retreat",
    date: "January 17-19, 2025",
    time: "All Day",
    location: "Camp Grace, GA",
    description: "An exciting weekend of fellowship, worship, and adventure for our youth.",
  },
  {
    title: "Marriage Conference",
    date: "February 14-15, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Fellowship Hall",
    description: "Strengthen your marriage with biblical teaching and practical tools.",
  },
  {
    title: "Community Outreach Day",
    date: "February 22, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "Various Locations",
    description: "Serve our neighbors through various outreach initiatives.",
  },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
   
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-accent mb-4">
                <div className="w-12 h-px bg-accent" />
                <span className="text-sm font-semibold uppercase tracking-wider">What's Happening</span>
                <div className="w-12 h-px bg-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Upcoming Events
              </h1>
              <p className="text-lg text-muted-foreground">
                Join us for worship, fellowship, and community gatherings.
              </p>
            </div>

            <div className="space-y-6">
              {events.map((event) => (
                <Card key={event.title} variant="elevated" className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-48 bg-primary p-6 flex flex-col justify-center text-center text-primary-foreground">
                        <Calendar className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-semibold text-sm">{event.date}</p>
                      </div>
                      <div className="p-6 flex-grow">
                        <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-accent" />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-accent" />
                            {event.location}
                          </span>
                        </div>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

  
    </div>
  );
};

export default EventsPage;
