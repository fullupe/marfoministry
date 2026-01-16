import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, BookOpen, Heart } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {

    const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      
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
                <span className="text-sm font-semibold uppercase tracking-wider">Who We Are</span>
                <div className="w-12 h-px bg-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                About Marfo Ministry
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Founded in 2013, Marfo Ministry has been serving the Sagyimase community  and the entire Eastern part of Ghana
                with the love of Christ for over <span>{currentYear-2013}</span> years.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-secondary/50 rounded-2xl p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To lead people into a growing relationship with Jesus Christ by creating 
                  environments where people are encouraged and equipped to pursue intimacy 
                  with God, community with others, and influence with the world.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-2xl p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be a multicultural, multigenerational church that transforms lives, 
                  families, and communities through the power of the Gospel and the 
                  love of Jesus Christ.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-10">
                Our Core Values
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: BookOpen, title: "Biblical Teaching", desc: "Grounded in Scripture" },
                  { icon: Heart, title: "Authentic Worship", desc: "Spirit-filled praise" },
                  { icon: Users, title: "Community", desc: "Life together in Christ" },
                  { icon: Clock, title: "Service", desc: "Serving others in love" },
                ].map((value) => (
                  <div key={value.title} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button variant="default" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default AboutPage;
