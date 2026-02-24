import { Link } from '@tanstack/react-router';
import { SiFacebook, SiInstagram } from 'react-icons/si';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'the-glass-box'
  );

  return (
    <footer className="bg-charcoal border-t border-gold/20 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-serif text-2xl font-bold text-gold">The Glass Box</h3>
            <p className="mb-4 text-sm text-white/70">
              To provide our guests with a comfortable, quality, and satisfying dining experience.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/70 transition-colors hover:text-gold"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 transition-colors hover:text-gold"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span>B/77 P.C. Colony Road, Kankarbagh, Patna, Bihar 800020</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:09065596966" className="hover:text-gold">
                  090655 96966
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                <span>Open Daily • Closes at 11 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/menu" className="hover:text-gold">
                  Menu
                </Link>
              </li>
              <li>
                <a href="/#reservation" className="hover:text-gold">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">
                  Private Dining
                </a>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>✓ All You Can Eat</li>
              <li>✓ Happy Hour Food</li>
              <li>✓ Private Dining Room</li>
              <li>✓ Family Friendly</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gold/20 pt-8 text-center text-sm text-white/60">
          <p>
            © {currentYear} The Glass Box. All rights reserved.
          </p>
          <p className="mt-2">
            Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
