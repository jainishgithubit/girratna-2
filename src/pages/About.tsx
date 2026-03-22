import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import bilonaImage from "@/assets/bilona-process.jpg";
import girCow from "@/assets/gir-cow.jpg";

const steps = [
  { step: "01", title: "Fresh A2 Milk", desc: "Collected daily from our free-grazing Gir cows in Gujarat." },
  { step: "02", title: "Curd Setting", desc: "Milk is boiled and set into curd using natural culture overnight." },
  { step: "03", title: "Bilona Churning", desc: "Curd is hand-churned using traditional wooden churner (Bilona)." },
  { step: "04", title: "Makkhan Extraction", desc: "Pure white butter (makkhan) is carefully separated." },
  { step: "05", title: "Slow Heating", desc: "Makkhan is slow-cooked on a low flame until golden ghee forms." },
  { step: "06", title: "Pure Ghee Ready", desc: "Filtered and packed fresh, preserving all nutrients and aroma." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-warm py-16">
        <div className="container text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Story</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            About <span className="text-gradient-gold">GirRatna</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Rooted in tradition, committed to purity. Our journey of bringing authentic A2 Gir Cow Ghee to your kitchen.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">
                A Legacy of <span className="text-gradient-gold">Purity</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  GirRatna was born out of a simple belief — every Indian family deserves access to pure, 
                  unadulterated ghee, just like our grandmothers used to make. In an era of mass production 
                  and chemical additives, we chose to go back to our roots.
                </p>
                <p>
                  Our founder, raised in a farming family in Gujarat's Gir region, witnessed the declining 
                  quality of dairy products. With a mission to preserve India's dairy heritage, GirRatna 
                  was established to produce ghee the way it was always meant to be — pure, traditional, 
                  and full of goodness.
                </p>
                <p>
                  Today, we work with over 50 local farming families, ensuring fair trade practices while 
                  maintaining the highest standards of quality. Every spoonful of GirRatna ghee carries the 
                  love and dedication of our farming community.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-gold border-2 border-gold/20">
              <img src={girCow} alt="Gir Cow" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Bilona Process */}
      <section className="py-20 bg-gradient-earth text-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-3xl overflow-hidden border-2 border-gold/30">
              <img src={bilonaImage} alt="Traditional Bilona Process" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-gold-light font-semibold text-sm uppercase tracking-widest">The Process</span>
              <h2 className="font-display text-3xl font-bold mt-3 mb-6">
                The Ancient <span className="text-gold-light">Bilona Method</span>
              </h2>
              <p className="text-cream/70 leading-relaxed mb-8">
                The Bilona method is a centuries-old Vedic process of making ghee. Unlike industrial methods 
                that use cream separators, this method extracts butter from curd through hand-churning, 
                preserving all the natural nutrients, flavour, and aroma of the ghee.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {steps.map(s => (
                  <div key={s.step} className="flex gap-3">
                    <span className="text-gold-light font-display font-bold text-lg">{s.step}</span>
                    <div>
                      <h4 className="font-semibold text-sm">{s.title}</h4>
                      <p className="text-cream/50 text-xs">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gir Cows */}
      <section className="py-20">
        <div className="container text-center max-w-3xl">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">The Breed</span>
          <h2 className="font-display text-3xl font-bold mt-3 mb-6">
            The Sacred <span className="text-gradient-gold">Gir Cow</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Gir cow is one of India's principal indigenous dairy breeds, originating from the 
            Gir forest region of Gujarat. Known for their distinctive appearance with a large hump 
            and long, pendulous ears, these cows produce A2 milk — considered the purest and most 
            nutritious form of cow's milk.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Unlike A1 milk from hybrid breeds, A2 milk is easier to digest, supports gut health, 
            and has been revered in Ayurveda for thousands of years. Our Gir cows are never treated 
            with hormones or antibiotics, and they graze freely on organic pastures.
          </p>
          <Link
            to="/health-benefits"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-gold hover:opacity-90 transition-opacity"
          >
            Explore Health Benefits <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
