import Header from "@/components/Header";
import Footer from "@/components/Footer";
//import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
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
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground">
                We'd love to hear from you. Reach out with any questions or prayer requests.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl shadow-card p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button variant="default" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Address</p>
                        <p className="text-muted-foreground">Eastern Region,<br />Akyem Sagyimase</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <p className="text-muted-foreground">(24) 554625651</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p className="text-muted-foreground">info@marfoministry.org</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Office Hours</p>
                        <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-2xl overflow-hidden h-64 bg-muted flex items-center justify-center">
                  <div className="rounded-2xl overflow-hidden h-64">
     
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11063.735758181798!2d-0.5312785209345202!3d6.233866944191155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf25f9064b15d9%3A0xf111332c1929dbb0!2sSagyimase%2C%20Ghana!5e0!3m2!1sen!2sus!4v1768566282035!5m2!1sen!2sus" 
                  width="600" 
                  height="450"   
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  >
                    
                  </iframe>
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

export default ContactPage;
