import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", { description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="bg-gradient-warm py-16">
        <div className="container text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Contact <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about our ghee? Want to place a bulk order? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      maxLength={15}
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-full font-semibold shadow-gold hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+918160263867" },
                  { icon: Mail, label: "Email", value: "girratnadesighee@gmail.com", href: "mailto:girratnadesighee@gmail.com" },
                  { icon: MapPin, label: "Address", value: "Gir Ratna farm, Una Gir gadhada Road, Gir somnath" },
                  { icon: MessageCircle, label: "WhatsApp", value: "+91 8160263867", href: "https://wa.me/918160263867" },
                ].map(item => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              {/* <div>
                <h3 className="font-display text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {["Instagram", "Facebook", "YouTube", "Twitter"].map(social => (
                    <a
                      key={social}
                      href="#"
                      className="bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div> */}

              {/* Business hours */}
              <div className="mt-10 bg-card rounded-2xl p-6 border border-gold/10">
                <h3 className="font-display text-lg font-semibold mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between"><span>Monday – Saturday</span><span className="font-medium text-foreground">9:00 AM – 7:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="font-medium text-foreground">10:00 AM – 4:00 PM</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
