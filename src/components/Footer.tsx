import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { STUDIO_INFO, WHATSAPP_URL } from "@/constants";

export default function Footer() {
  const hasSocialLinks = Boolean(STUDIO_INFO.socials.instagram || STUDIO_INFO.socials.facebook);

  return (
    <footer className="bg-black text-white py-16 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.jpg"
                alt={`${STUDIO_INFO.name} logo`}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover border border-white/20"
              />
              <h3 className="text-xl font-bold tracking-widest uppercase">{STUDIO_INFO.name}</h3>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Capturing your most important moments with clarity, creativity, and lasting quality.
              Based in Yaounde, serving the world.
            </p>
            {hasSocialLinks && (
              <div className="flex gap-4">
                {STUDIO_INFO.socials.instagram && (
                  <a
                    href={STUDIO_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                )}
                {STUDIO_INFO.socials.facebook && (
                  <a
                    href={STUDIO_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                )}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-sm font-bold mb-6 tracking-widest uppercase text-gray-500">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <span>{STUDIO_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <span>{STUDIO_INFO.email}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>{STUDIO_INFO.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-6 tracking-widest uppercase text-gray-500">Quick Links</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/work" className="hover:text-white transition-colors">Services</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-600 tracking-wider">
            {`© ${new Date().getFullYear()} ${STUDIO_INFO.name.toUpperCase()}. ALL RIGHTS RESERVED.`}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 border border-zinc-800 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
