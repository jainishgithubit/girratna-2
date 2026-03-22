import { Link } from "react-router-dom";
import { Brain, Heart, Shield, Flame, Eye, Bone, Baby, Sparkles, ChevronRight } from "lucide-react";

const benefits = [
  { icon: Shield, title: "Boosts Immunity", desc: "Rich in antioxidants, vitamins A, D, E, and K. Strengthens the body's natural defense system against infections and diseases." },
  { icon: Flame, title: "Improves Digestion", desc: "Stimulates the secretion of stomach acids, aiding in better digestion. Contains butyric acid that nourishes intestinal cells." },
  { icon: Brain, title: "Brain Health", desc: "DHA and omega-3 fatty acids in A2 ghee support cognitive function, memory, and overall brain development in children and adults." },
  { icon: Heart, title: "Heart Health", desc: "Conjugated linoleic acid (CLA) in A2 ghee helps reduce bad cholesterol and supports cardiovascular health when consumed in moderation." },
  { icon: Eye, title: "Eye Health", desc: "Vitamin A in ghee is essential for maintaining good vision and preventing age-related macular degeneration." },
  { icon: Bone, title: "Strong Bones", desc: "Vitamin K2 in A2 ghee aids calcium absorption, strengthening bones and teeth. Especially beneficial for growing children and elderly." },
  { icon: Baby, title: "Safe for Children", desc: "A2 protein is easier to digest than A1, making it gentle on children's developing digestive systems. A natural energy booster." },
  { icon: Sparkles, title: "Glowing Skin & Hair", desc: "Essential fatty acids and vitamins moisturize skin from within. Used in Ayurvedic beauty treatments for centuries." },
];

const ayurvedicBenefits = [
  "Balances all three doshas – Vata, Pitta, and Kapha",
  "Enhances Ojas (vital energy) in the body",
  "Used as a carrier for Ayurvedic medicines (Anupana)",
  "Improves Agni (digestive fire) without aggravating Pitta",
  "Supports detoxification and Panchakarma therapies",
  "Nourishes Dhatus (body tissues) at a deep level",
];

export default function HealthBenefits() {
  return (
    <>
      <section className="bg-gradient-warm py-16">
        <div className="container text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Wellness</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Health <span className="text-gradient-gold">Benefits</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover why A2 Gir Cow Ghee has been revered in Ayurveda for over 5,000 years.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="bg-card rounded-2xl p-6 border border-gold/10 hover:shadow-gold hover:border-gold/30 transition-all duration-300 group">
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                  <b.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ayurvedic Section */}
      <section className="py-20 bg-gradient-earth text-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold-light font-semibold text-sm uppercase tracking-widest">Ancient Wisdom</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6">
              Ayurvedic <span className="text-gold-light">Significance</span>
            </h2>
            <p className="text-cream/70 leading-relaxed mb-10">
              In Ayurveda, ghee is considered one of the most sattvic (pure) foods. 
              It is known as "Ghrita" and is described as the best among all fats.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {ayurvedicBenefits.map(b => (
                <div key={b} className="flex items-start gap-3 bg-cream/5 rounded-xl p-4 border border-cream/10">
                  <span className="text-gold-light mt-0.5">✦</span>
                  <span className="text-cream/80 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Experience the Benefits?</h2>
          <p className="text-muted-foreground mb-8">Switch to pure A2 Gir Cow Ghee and feel the difference in your health.</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-gold hover:opacity-90 transition-opacity"
          >
            Experience Purity Today <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
