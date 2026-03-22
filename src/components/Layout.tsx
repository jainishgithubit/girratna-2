import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const navItems = [
{ label: "Home", path: "/" },
{ label: "Shop", path: "/shop" },
{ label: "About Us", path: "/about" },
{ label: "Health Benefits", path: "/health-benefits" },
{ label: "Blog", path: "/blog" },
{ label: "Contact", path: "/contact" }];


export default function Layout({ children }: {children: React.ReactNode;}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-gradient-earth text-cream text-sm py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" />+91 8160263867</span>
            <span className="flex items-center gap-1"><Mail className="w-3 h-3" />girratnadesighee@gmail.com</span>
          </div>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />Gir, Gujarat, India</span>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-gold/20 shadow-sm">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-display text-2xl md:text-3xl font-bold text-gradient-gold">GirRatna Deshi Ghee

          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
              location.pathname === item.path ? "text-primary" : "text-foreground/70"}`
              }>

                {item.label}
              </Link>
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/shop"
              className="bg-gradient-gold text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-gold hover:opacity-90 transition-opacity">

              Shop Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen &&
        <div className="lg:hidden border-t bg-background animate-fade-in">
            <nav className="container py-4 flex flex-col gap-3">
              {navItems.map((item) =>
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`py-2 text-sm font-medium uppercase tracking-wide ${
              location.pathname === item.path ? "text-primary" : "text-foreground/70"}`
              }>

                  {item.label}
                </Link>
            )}
              <Link
              to="/shop"
              onClick={() => setMobileOpen(false)}
              className="bg-gradient-gold text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold text-center mt-2 shadow-gold">

                Shop Now
              </Link>
            </nav>
          </div>
        }
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-earth text-cream">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4 text-gold-light">GirRatna</h3>
              <p className="text-cream/70 text-sm leading-relaxed">
                Pure A2 Gir Cow Ghee made with the traditional Bilona method. Bringing the goodness of Indian tradition to your kitchen.
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {navItems.map((item) =>
                <Link key={item.path} to={item.path} className="text-cream/70 text-sm hover:text-gold-light transition-colors">
                    {item.label}
                  </Link>
                )}
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
              <div className="flex flex-col gap-3 text-sm text-cream/70">
                <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold-light" />+91 9825642597</span>
                <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold-light" />girratnadesighee@gmail.com</span>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold-light" /> Gir, Gujarat, India</span>
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-cream/70 text-sm mb-3">Get health tips & exclusive offers</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Your email" className="flex-1 bg-cream/10 border border-cream/20 rounded-full px-4 py-2 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold-light" />

                <button className="bg-gradient-gold text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-cream/10 mt-12 pt-8 text-center text-cream/50 text-sm">
            © 2026 GirRatna Desi Ghee. All rights reserved. Made with ❤️ in India.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/918160263867?text=Hi%20GirRatna!%20I%20want%20to%20know%20more%20about%20your%20ghee."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp">

        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>);

}
