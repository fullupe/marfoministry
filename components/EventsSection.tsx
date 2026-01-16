// import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "9:00 AM & 11:00 AM",
    location: "Main Sanctuary",
    type: "Weekly",
  },
  {
    title: "New Year Prayer & Fasting",
    date: "January 5-12, 2025",
    time: "6:00 AM - 6:00 PM",
    location: "Main Sanctuary",
    type: "Special",
  },
  {
    title: "Youth Winter Retreat",
    date: "January 17-19, 2025",
    time: "All Day",
    location: "Camp Grace, GA",
    type: "Youth",
  },
  {
    title: "Women's Bible Study",
    date: "Every Tuesday",
    time: "10:00 AM",
    location: "Fellowship Hall",
    type: "Weekly",
  },
];

const EventsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Header & CTA */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-accent">
              <div className="w-12 h-px bg-accent" />
              <span className="text-sm font-semibold uppercase tracking-wider">Join Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
              Upcoming Events &
              <span className="text-accent"> Gatherings</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Life is better together. Join us for worship, fellowship, and special events 
              designed to help you grow in faith and connect with our community.
            </p>

            <Link href="/events">
              <Button variant="default" size="lg" className="mt-4">
                View Full Calendar
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Right Side - Event Cards */}
          <div className="space-y-4">
            {events.map((event, index) => (
              <Card 
                key={event.title} 
                variant="event"
                className="group cursor-pointer"
              >
                <CardContent className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {/* Date Badge */}
                    <div className="flex-shrink-0">
                      <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent rounded-full">
                        {event.type}
                      </span>
                    </div>

                    {/* Event Info */}
                    <div className="flex-grow">
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-accent" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-accent" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-accent" />
                          {event.location}
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 hidden sm:block" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
