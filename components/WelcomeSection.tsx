import { Quote } from 'lucide-react'
import pastorImage from '../public/pastor-portrait.jpg';
import Image from 'next/image'
//import pastorImage from '../assets/pastor-portrait.jpg';
const WelcomeSection = () => {
  const currentYear = new Date().getFullYear()
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <Image
                  src={pastorImage}
                  alt="Pastor David Marfo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-gold">
                <p className="text-3xl font-serif font-bold">
                  {currentYear - 2013}+
                </p>
                <p className="text-sm font-medium">Years of Ministry</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-accent">
              <div className="w-12 h-px bg-accent" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                A Word From Our Pastor
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
              Welcome to Our
              <span className="text-accent"> Church Family</span>
            </h2>

            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-accent/20" />
              <p className="text-lg text-muted-foreground leading-relaxed pl-6">
                At Marfo Ministry, we believe that everyone has a place at God's
                table. Whether you're taking your first steps in faith or you've
                been walking with Christ for years, you'll find a warm community
                ready to welcome you, support you, and grow alongside you.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Our doors are always open, and our hearts are ready to receive
              you. We invite you to join us this Sunday and experience the love
              of Christ through worship, fellowship, and the Word of God.
            </p>

            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-accent" />
                <div>
                  <p className="font-serif text-xl font-semibold text-foreground">
                    Prophet K Marfo
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Senior Prophet, Marfo Ministry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
