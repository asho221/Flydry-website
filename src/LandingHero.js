import React, { useEffect, useState, useRef } from 'react';
import { Truck, Smartphone, MapPin, Star, Home, Building2, ArrowRight } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// LINKS — change these two if your public page URLs differ
// ─────────────────────────────────────────────────────────────
const HOME_BOOK_URL = 'https://flydry.co.uk/book#/';
const HOME_PRICES_URL = 'https://flydry.co.uk/pricing';
const BUSINESS_PAGE_URL = 'https://flydry.co.uk/commercials';

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const textContainerRef = useRef(null);

  // 3D parallax tracking the mouse (unchanged)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!textContainerRef.current) return;
      const { left, top, width, height } = textContainerRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      setMousePos({ x: (e.clientX - centerX) / (width / 2), y: (e.clientY - centerY) / (height / 2) });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full bg-[#fdfdfd] text-[#082219] overflow-hidden font-sans selection:bg-[#C5A059] selection:text-[#082219] min-h-[90vh] flex flex-col justify-between">

      {/* --- KEYFRAMES & STYLES (unchanged + audience card styles) --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        .bg-subtle-grid {
          background-image: radial-gradient(rgba(8, 34, 25, 0.05) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .blur-reveal-wrapper { overflow: hidden; display: block; padding-bottom: 5px; }
        .blur-reveal {
          display: block;
          transform: translateY(120%);
          filter: blur(10px);
          opacity: 0;
          animation: blurReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes blurReveal {
          0% { transform: translateY(120%); filter: blur(10px); opacity: 0; }
          100% { transform: translateY(0); filter: blur(0); opacity: 1; }
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        @keyframes rotate-wireframe {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.05); }
          to { transform: rotate(360deg) scale(1); }
        }
        .animate-wireframe { animation: rotate-wireframe 60s linear infinite; }

        .btn-premium { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .btn-premium:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(8,34,25,0.25), 0 0 20px rgba(197,160,89,0.15);
        }

        .image-fade-in {
          opacity: 0;
          transform: scale(0.98);
          animation: imageFade 2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
        }
        @keyframes imageFade { to { opacity: 1; transform: scale(1); } }

        /* Audience cards — equal weight, one lifts on hover */
        .audience-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
        }
        .audience-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px -16px rgba(8,34,25,0.28);
        }
      `}} />

      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none z-0" />
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] pointer-events-none z-0 opacity-[0.03] animate-wireframe mix-blend-multiply flex items-center justify-center">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#082219]">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4"/>
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M10 100 L190 100" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M100 10 L100 190" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M36 36 L164 164" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M36 164 L164 36" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* --- MAIN HERO CONTENT --- */}
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 pt-24 md:pt-32 pb-16 relative z-10 flex-1 flex flex-col lg:flex-row items-center gap-12 lg:gap-10">

        {/* LEFT: HEADLINE + TWO AUDIENCE PATHS */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center relative z-30 perspective-1000 mt-8 lg:mt-0">
          <div
            ref={textContainerRef}
            className="transition-transform duration-700 ease-out preserve-3d"
            style={{ transform: `rotateY(${mousePos.x * 4}deg) rotateX(${mousePos.y * -4}deg)` }}
          >
            {/* Headline */}
            <h1 className="text-[3.2rem] sm:text-[4.2rem] md:text-[5rem] lg:text-[5.4rem] font-black tracking-tighter leading-[1] text-[#082219] mb-4">
              <span className="blur-reveal-wrapper uppercase">
                <span className="blur-reveal delay-100">LAUNDRY &amp; LINEN,</span>
              </span>
              <span className="blur-reveal-wrapper -mt-2">
                <span className="blur-reveal delay-200 tracking-tight">handled.</span>
              </span>
            </h1>

            {/* Tagline */}
            <div className="blur-reveal-wrapper mb-5">
              <h2 className="blur-reveal delay-300 text-xl md:text-2xl font-black tracking-tight text-[#C5A059]">
                For East London homes and businesses.
              </h2>
            </div>

            {/* Supporting line */}
            <div className="blur-reveal-wrapper mb-8 max-w-[92%]">
              <p className="blur-reveal delay-400 text-gray-600 text-base md:text-lg font-medium leading-relaxed">
                Free collection and delivery, professional cleaning, and turnaround as fast as 24 hours —
                whether it's your wardrobe or your entire linen supply.
              </p>
            </div>

            {/* TWO EQUAL AUDIENCE CARDS */}
            <div className="blur-reveal-wrapper">
              <div className="blur-reveal delay-500">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">

                {/* Card 1 — Home */}
                <div className="audience-card relative bg-white border border-[#082219]/10 rounded-[1.25rem] p-6 flex flex-col gap-4 shadow-[0_10px_30px_-15px_rgba(8,34,25,0.15)]">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#082219]/[0.06] flex items-center justify-center text-[#082219]">
                      <Home size={20} strokeWidth={2.2} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A059]">For your home</p>
                      <p className="text-[#082219] font-black text-lg leading-tight">Personal laundry &amp; dry cleaning</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed">
                    Book in 60 seconds. We collect, clean, and deliver back to your door.
                  </p>
                  <div className="flex flex-col gap-2 mt-auto">
                    <a
                      href={HOME_BOOK_URL}
                      target="_top"
                      className="btn-premium group inline-flex items-center justify-center gap-3 bg-[#082219] text-[#C5A059] px-6 py-3.5 rounded-[0.85rem] text-[12px] font-black uppercase tracking-widest"
                    >
                      Schedule Pick Up
                      <Truck size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={HOME_PRICES_URL}
                      target="_top"
                      className="inline-flex items-center justify-center gap-2 text-[#082219]/70 hover:text-[#082219] text-[12px] font-bold uppercase tracking-widest py-1 transition-colors"
                    >
                      See prices <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Card 2 — Business */}
                <div className="audience-card relative bg-[#082219] border border-[#C5A059]/30 rounded-[1.25rem] p-6 flex flex-col gap-4 shadow-[0_10px_30px_-15px_rgba(8,34,25,0.4)]">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059]">
                      <Building2 size={20} strokeWidth={2.2} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A059]">For your business</p>
                      <p className="text-white font-black text-lg leading-tight">Commercial laundry &amp; linen</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm font-medium leading-relaxed">
                    Hotels, Airbnbs, salons, restaurants, clinics. Scheduled pickups built around your hours.
                  </p>
                  <div className="flex flex-col gap-2 mt-auto">
                    <a
                      href={BUSINESS_PAGE_URL}
                      target="_top"
                      className="btn-premium group inline-flex items-center justify-center gap-3 bg-[#C5A059] text-[#082219] px-6 py-3.5 rounded-[0.85rem] text-[12px] font-black uppercase tracking-widest"
                    >
                      Get a Quote
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={BUSINESS_PAGE_URL}
                      target="_top"
                      className="inline-flex items-center justify-center gap-2 text-white/60 hover:text-white text-[12px] font-bold uppercase tracking-widest py-1 transition-colors"
                    >
                      Business services <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

              </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: IMAGE + GOOGLE BADGE (unchanged) */}
        <div className="w-full lg:w-[45%] relative h-[460px] md:h-[620px] z-20 flex items-end justify-center lg:justify-end">
          <div className="image-fade-in relative w-[95%] md:w-[88%] h-[90%] bg-gray-100 rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden border border-gray-200 shadow-2xl">
            <img
              src="https://raw.githubusercontent.com/asho221/flydry-website/main/hero-lady.png"
              alt="FlyDry laundry collection"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] pointer-events-none"></div>
          </div>

          <div className="absolute top-12 right-0 md:-right-8 z-40 bg-white/90 backdrop-blur-xl border border-white/50 p-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] flex items-center gap-4 transform rotate-2 hover:rotate-0 transition-transform duration-500 cursor-default image-fade-in">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <div className="flex text-[#FBBC05] mb-1">
                <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
              </div>
              <p className="text-[11px] font-black uppercase tracking-widest text-[#082219]">4.6 Google Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM TRUST BAR (one item now speaks to business) --- */}
      <div className="w-full bg-[#082219] relative z-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="flex items-center justify-center sm:justify-start gap-4 pt-2 sm:pt-0 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#082219] transition-colors">
                <Truck size={20} />
              </div>
              <p className="text-white font-bold text-[13px] md:text-[15px]">Free Collection &amp; Delivery</p>
            </div>
            <div className="flex items-center justify-center sm:justify-center gap-4 pt-6 sm:pt-0 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#082219] transition-colors">
                <Building2 size={20} />
              </div>
              <p className="text-white font-bold text-[13px] md:text-[15px]">Scheduled Business Contracts</p>
            </div>
            <div className="flex items-center justify-center sm:justify-end gap-4 pt-6 sm:pt-0 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#082219] transition-colors">
                <Smartphone size={20} />
              </div>
              <p className="text-white font-bold text-[13px] md:text-[15px]">Live Order Updates</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
