import { useState } from "react";
import { ShoppingCart, Repeat, Star, Check } from "lucide-react";
import ghee500 from "@/assets/ghee-jar-500ml.jpg";
import ghee1l from "@/assets/ghee-jar-1l.jpg";
import ghee5l from "@/assets/ghee-jar-5l.jpg";
import { toast } from "sonner";

const products = [
  {
    id: 1,
    name: "A2 Gir Cow Ghee – 500ml",
    price: 799,
    originalPrice: 999,
    image: ghee500,
    desc: "Perfect for daily cooking. Ideal for a small family.",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 1250,
  },
  {
    id: 2,
    name: "A2 Gir Cow Ghee – 1 Litre",
    price: 1499,
    originalPrice: 1799,
    image: ghee1l,
    desc: "Our most popular size. Great value for regular use.",
    badge: "Best Value",
    rating: 4.9,
    reviews: 890,
  },
  {
    id: 3,
    name: "A2 Gir Cow Ghee – 5 Litre",
    price: 6499,
    originalPrice: 7999,
    image: ghee5l,
    desc: "Family pack. Perfect for bulk buyers and festivals.",
    badge: "Save ₹1500",
    rating: 4.8,
    reviews: 420,
  },
];

export default function Shop() {
  const [subscription, setSubscription] = useState<Record<number, boolean>>({});

  const handleAddToCart = (name: string) => {
    toast.success(`${name} added to cart!`, { description: "Continue shopping or proceed to checkout." });
  };

  const sendToWhatsApp = (product, isSubscribe = false) => {
  const phone = "919825642597"; // without + sign

  const price = isSubscribe ? Math.round(product.price * 0.9) : product.price;

  const message = `
🛒 *New Order Request*

📦 Product: ${product.name}
💰 Price: ₹${price}
${isSubscribe ? "🔁 Subscription: Yes (10% OFF)" : ""}

📝 I want to order this product. Please assist me.
  `;

  const encodedMessage = encodeURIComponent(message);

  const url = `https://wa.me/${phone}?text=${encodedMessage}`;

  window.open(url, "_blank");
};

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-warm py-16">
        <div className="container text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Products</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Shop <span className="text-gradient-gold">Pure Ghee</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our range of pure A2 Gir Cow Ghee. Every jar is a promise of purity, tradition, and health.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(p => (
              <div key={p.id} className="bg-card rounded-3xl border border-gold/15 overflow-hidden hover:shadow-gold transition-all duration-300 group flex flex-col">
                <div className="relative">
                  <img src={p.image} alt={p.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-gradient-gold text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                    {p.badge}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{p.rating} ({p.reviews})</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{p.desc}</p>

                  <div className="flex items-end gap-3 mb-4">
                    <span className="text-3xl font-bold text-foreground">₹{p.price}</span>
                    <span className="text-lg text-muted-foreground line-through">₹{p.originalPrice}</span>
                    <span className="text-sm font-semibold text-accent ml-auto">
                      {Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)}% OFF
                    </span>
                  </div>

                  {/* Subscription toggle */}
                  <button
                    onClick={() => setSubscription(s => ({ ...s, [p.id]: !s[p.id] }))}
                    className={`flex items-center gap-2 w-full p-3 rounded-xl border mb-4 text-sm font-medium transition-colors ${
                      subscription[p.id]
                        ? "bg-primary/10 border-primary text-foreground"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {subscription[p.id] ? <Check className="w-4 h-4 text-primary" /> : <Repeat className="w-4 h-4" />}
                    Subscribe & Save 10% – Monthly Delivery
                  </button>

                  <div className="flex gap-3">
                    <button
                      onClick={() => sendToWhatsApp(p, subscription[p.id])}
                      className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-foreground px-4 py-3 rounded-full font-semibold hover:bg-primary/10 transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" /> Add to Cart
                    </button>
                    <button
  onClick={() => sendToWhatsApp(p, subscription[p.id])}
  className="flex-1 bg-gradient-gold text-primary-foreground px-4 py-3 rounded-full font-semibold shadow-gold hover:opacity-90 transition-opacity"
>
  Buy Now
</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "🛡️ 100% Genuine Product",
              "🚚 Free Delivery Above ₹999",
              "💰 Cash on Delivery Available",
              "🔒 Secure Payment Gateway",
            ].map(badge => (
              <div key={badge} className="bg-secondary rounded-2xl p-4 text-sm font-medium text-secondary-foreground">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
