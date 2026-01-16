// import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Music, Heart, Baby, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const ministries = [
  {
    icon: Users,
    title: "Men's Ministry",
    description: "Building men of faith through fellowship, accountability, and biblical teaching.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Women's Ministry",
    description: "Empowering women to grow spiritually and support one another in community.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Baby,
    title: "Children's Ministry",
    description: "Nurturing young hearts with age-appropriate Bible lessons and fun activities.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: BookOpen,
    title: "Youth Ministry",
    description: "Engaging teens with relevant teaching and building lifelong friendships.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Music,
    title: "Worship Team",
    description: "Leading the congregation in Spirit-filled praise and worship each week.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Globe,
    title: "Missions & Outreach",
    description: "Serving our local community and supporting global missions work.",
    color: "bg-orange-500/10 text-orange-600",
  },
];

const MinistriesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <div className="w-12 h-px bg-accent" />
            <span className="text-sm font-semibold uppercase tracking-wider">Get Involved</span>
            <div className="w-12 h-px bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Our Ministries
          </h2>
          <p className="text-lg text-muted-foreground">
            There's a place for everyone at Marfo Ministry. Discover where you can grow, 
            serve, and connect with our church family.
          </p>
        </div>

        {/* Ministry Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((ministry, index) => (
            <Card 
              key={ministry.title} 
              variant="ministry"
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-xl ${ministry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <ministry.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {ministry.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {ministry.description}
                </p>
                <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/ministries">
            <Button variant="outline" size="lg">
              View All Ministries
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;
