import { Link } from "react-router-dom";
import { Shield, Leaf, Heart, Award, Star, ChevronRight, Droplets, Wheat, FlaskConical } from "lucide-react";
import heroImage from "@/assets/hero-ghee.jpg";
import ghee500 from "@/assets/ghee-jar-500ml.jpg";
import girCow from "@/assets/gir-cow.jpg";

const benefits = [
{ icon: Droplets, title: "A2 Protein Rich", desc: "Contains A2 beta-casein protein, easier to digest and healthier than regular ghee." },
{ icon: FlaskConical, title: "Bilona Method", desc: "Hand-churned using the ancient Vedic Bilona process for maximum nutrition." },
{ icon: Leaf, title: "100% Chemical Free", desc: "No preservatives, no additives. Pure farm-fresh ghee from grass-fed Gir cows." },
{ icon: Wheat, title: "Farm Fresh", desc: "Sourced directly from our farms in Gujarat, ensuring complete traceability." }];


const whyUs = [
{ icon: Shield, title: "Lab Tested & Certified", desc: "Every batch is tested for purity and quality." },
{ icon: Heart, title: "Trusted by 10,000+ Families", desc: "Serving health-conscious homes across India." },
{ icon: Star, title: "Premium Gir Cows", desc: "Only A2 milk from indigenous Gir breed cows." }];


const testimonials = [
{ name: "Priya Sharma", location: "Mumbai", text: "The aroma and taste of GirRatna ghee is unmatched. My family switched completely from regular ghee. Truly pure!", rating: 5 },
{ name: "Dr. Rajesh Patel", location: "Ahmedabad", text: "As an Ayurvedic practitioner, I recommend GirRatna to all my patients. The Bilona method preserves all medicinal properties.", rating: 5 },
{ name: "Meena Iyer", location: "Bangalore", text: "My kids love the taste of this ghee on their rotis. Knowing it's chemical-free gives me peace of mind.", rating: 5 }];


export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Pure A2 Gir Cow Ghee in traditional brass bowl" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-earth/90 via-earth/70 to-transparent" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-gold/20 text-gold-light border border-gold/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              🌿 100% Pure & Traditional
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6 animate-fade-in-up">
              Pure A2 Gir Cow Ghee –{" "}
              <span className="text-gold-light italic">Tradition in Every Spoon</span>
            </h1>
            <p className="text-cream/80 text-lg md:text-xl leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Handcrafted using the ancient Bilona method from the finest Gir cow milk. 
              Experience the golden goodness that generations have trusted.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link
                to="/shop"
                className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-gold hover:opacity-90 transition-all hover:scale-105">

                Experience Purity Today
              </Link>
              <Link
                to="/about"
                className="border-2 border-cream/30 text-cream px-8 py-4 rounded-full text-lg font-semibold hover:bg-cream/10 transition-colors">

                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why A2 Ghee?</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
              The Goodness of <span className="text-gradient-gold">Pure Tradition</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) =>
            <div
              key={b.title}
              className="bg-card rounded-2xl p-8 text-center border border-gold/10 hover:shadow-gold hover:border-gold/30 transition-all duration-300 group"
              style={{ animationDelay: `${i * 0.1}s` }}>

                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                  <b.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-gold border-2 border-gold/20">
                <img alt="GirRatna A2 Ghee 500ml" className="w-full aspect-square object-cover" src="/home.png" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-2xl font-bold text-lg shadow-gold">
                ₹1199
              </div>
            </div>
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Bestseller</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6">
                A2 Gir Cow Ghee – <span className="text-gradient-gold">500ml</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our most popular pack. Perfect for daily cooking, drizzling over dal-rice, 
                or adding to your morning chai. Made from the milk of grass-fed Gir cows 
                using the traditional Bilona churning method.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["A2 Protein", "Bilona Method", "Chemical Free", "FSSAI Certified"].map((tag) =>
                <span key={tag} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                )}
              </div>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-gold hover:opacity-90 transition-all hover:scale-105">

                Switch to A2 Goodness <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-earth text-cream">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-gold-light font-semibold text-sm uppercase tracking-widest">Trust & Quality</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
              Why Families Choose <span className="text-gold-light">GirRatna</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) =>
            <div key={item.title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-gold/40 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-gold-light" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-cream/60 text-sm">{item.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gir Cow section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Heritage</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6">
                The Sacred <span className="text-gradient-gold">Gir Cow</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The Gir cow is one of India's most prized indigenous breeds, known for producing 
                A2 milk — the purest form of milk with immense health benefits. Our cows graze 
                freely on organic pastures in Gujarat, living a natural and stress-free life.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A2 milk from Gir cows contains the A2 beta-casein protein, which is easier to 
                digest and has been linked to better immunity, heart health, and overall well-being.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Learn More About Our Process <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-gold border-2 border-gold/20">
              <img src={"./gyo.png"} alt="Gir Cow in green pasture" className="w-full aspect-square object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
              Loved by <span className="text-gradient-gold">Thousands</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) =>
            <div key={t.name} className="bg-card rounded-2xl p-8 border border-gold/10 hover:shadow-gold transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) =>
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                )}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-display font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.location}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)" }} />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Bring Home Tradition
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Join 10,000+ families who have switched to pure A2 Gir Cow Ghee. 
            Experience the difference that centuries of tradition make.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-earth text-cream px-10 py-4 rounded-full text-lg font-semibold hover:bg-earth-light transition-colors shadow-lg">

            Shop Now <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>);

}
