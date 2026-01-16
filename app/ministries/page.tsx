import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Music, Heart, Baby, Globe, GraduationCap, Home } from "lucide-react";
import Link from "next/link";

const ministries = [
  {
    icon: Users,
    title: "Men's Ministry",
    description: "Building men of faith through fellowship, accountability, and biblical teaching. We meet monthly for breakfast, Bible study, and service projects.",
    schedule: "1st Saturday of each month, 8:00 AM",
  },
  {
    icon: Heart,
    title: "Women's Ministry",
    description: "Empowering women to grow spiritually and support one another in community through Bible studies, retreats, and fellowship events.",
    schedule: "Tuesdays, 10:00 AM & 7:00 PM",
  },
  {
    icon: Baby,
    title: "Children's Ministry",
    description: "Nurturing young hearts with age-appropriate Bible lessons, worship, and fun activities. Safe and loving environment for ages 0-12.",
    schedule: "Sundays during all services",
  },
  {
    icon: GraduationCap,
    title: "Youth Ministry",
    description: "Engaging teens with relevant teaching, worship, and building lifelong friendships. Weekly gatherings plus retreats and mission trips.",
    schedule: "Wednesdays, 6:30 PM",
  },
  {
    icon: Music,
    title: "Worship Team",
    description: "Leading the congregation in Spirit-filled praise and worship each week. Open to vocalists and instrumentalists who serve with excellence.",
    schedule: "Rehearsals: Thursdays, 7:00 PM",
  },
  {
    icon: Globe,
    title: "Missions & Outreach",
    description: "Serving our local community and supporting global missions work. Monthly outreach events and annual mission trips.",
    schedule: "Various throughout the month",
  },
  {
    icon: BookOpen,
    title: "Adult Bible Study",
    description: "Deep dive into Scripture with verse-by-verse teaching. Multiple groups available for different schedules and life stages.",
    schedule: "Wednesdays, 7:00 PM",
  },
  {
    icon: Home,
    title: "Small Groups",
    description: "Life is better together. Join a small group for authentic community, prayer support, and spiritual growth in homes across the city.",
    schedule: "Various days and times",
  },
];

const MinistriesPage = () => {
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

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-accent mb-4">
                <div className="w-12 h-px bg-accent" />
                <span className="text-sm font-semibold uppercase tracking-wider">Get Involved</span>
                <div className="w-12 h-px bg-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Our Ministries
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                There's a place for everyone at Marfo Ministry. Discover where you can grow, 
                serve, and connect with our church family.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ministries.map((ministry) => (
                <Card key={ministry.title} variant="ministry" className="group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                        <ministry.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                          {ministry.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          {ministry.description}
                        </p>
                        <p className="text-xs font-semibold text-accent">
                          {ministry.schedule}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-accent font-medium text-sm mt-4 group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
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

export default MinistriesPage;
