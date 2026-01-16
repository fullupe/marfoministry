import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { Link } from "react-router-dom";
import { ArrowLeft, Play, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const sermons = [
  {
    title: "Walking in Faith",
    speaker: "Prophet K Marfo",
    date: "December 29, 2024",
    duration: "45 min",
    series: "New Year, New You",
  },
  {
    title: "The Gift of Grace",
    speaker: "Prophet K Marfo",
    date: "December 22, 2024",
    duration: "42 min",
    series: "Christmas Series",
  },
  {
    title: "Preparing Your Heart",
    speaker: "Prophet K Marfo",
    date: "December 15, 2025",
    duration: "38 min",
    series: "Christmas Series",
  },
  {
    title: "Living with Purpose",
    speaker: "Prophet K Marfo",
    date: "December 8, 2025",
    duration: "50 min",
    series: "Purpose Driven Life",
  },
];

const SermonsPage = () => {
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
                <span className="text-sm font-semibold uppercase tracking-wider">Watch & Listen</span>
                <div className="w-12 h-px bg-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Sermons
              </h1>
              <p className="text-lg text-muted-foreground">
                Catch up on past messages or revisit your favorites.
              </p>
            </div>

            <div className="space-y-4">
              {sermons.map((sermon) => (
                <Card key={sermon.title} variant="event" className="group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Play className="w-8 h-8 text-accent group-hover:text-accent-foreground" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">
                          {sermon.series}
                        </p>
                        <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                          {sermon.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{sermon.speaker}</p>
                        <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {sermon.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {sermon.duration}
                          </span>
                        </div>
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

export default SermonsPage;
