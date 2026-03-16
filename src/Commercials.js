import React from 'react';
import { ArrowRight, PhoneCall, Building2, Clock, Truck, ShieldCheck, Sparkles, Briefcase, UtensilsCrossed, BedSingle, Shirt } from 'lucide-react';

export default function CommercialPartner() {
  const industries = [
    "Restaurants", "Airbnbs", "Serviced Apartments", "Salons", "Events", "Clinics", "Hotels", "Offices"
  ];

  // Duplicate for seamless infinite scrolling marquee
  const marqueeItems = [...industries, ...industries, ...industries];

  // ⚠️ CRITICAL FIX: The absolute URL of your live commercial page + the contact form ID
  const SCROLL_TARGET_URL = "https://flydry.co.uk/commercials#contact-us";

  return (
    <section className="relative w-full bg-[#fdfdfd] text-[#082219] py-16 md:py-32 overflow-hidden font-sans selection:bg-[#C5A059] selection:text-[#082219]">
      
      {/* GLOBAL STYLES & EPIC ANIMATIONS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .bg-subtle-grid {
          background-image: radial-gradient(rgba(8, 34, 25, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        /* Ticker Animation */
        @keyframes scroll-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll-fast {
          animation: scroll-fast 20s linear infinite;
          display: flex;
          width: max-content;
        }

        /* Card Hover */
        .exec-card-commercial {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .exec-card-commercial:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(8, 34, 25, 0.1), 0 0 30px rgba(197, 160, 89, 0.08);
          border-color: rgba(197, 160, 89, 0.4);
          background: rgba(255, 255, 255, 0.95);
        }

        /* --- EPIC BACKGROUND KEYFRAMES --- */
        @keyframes blob-breathe-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(15%, 10%) scale(1.1); }
          66% { transform: translate(-10%, 20%) scale(0.9); }
        }
        @keyframes blob-breathe-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-15%, -20%) scale(1.2); }
          66% { transform: translate(10%, -10%) scale(0.8); }
        }

        /* Majestic Slow-Motion Drift for Massive SVGs */
        @keyframes majestic-drift-1 {
          0%, 100% { transform: translate(-5%, -5%) rotate(-5deg); }
          50% { transform: translate(5%, 5%) rotate(5deg); }
        }
        @keyframes majestic-drift-2 {
          0%, 100% { transform: translate(5%, 10%) rotate(5deg); }
          50% { transform: translate(-10%, -5%) rotate(-5deg); }
        }
        @keyframes majestic-drift-3 {
          0%, 100% { transform: translate(10%, -10%) rotate(10deg); }
          50% { transform: translate(-5%, 5%) rotate(-10deg); }
        }
        @keyframes majestic-drift-4 {
          0%, 100% { transform: translate(-10%, 5%) rotate(-15deg); }
          50% { transform: translate(5%, -5%) rotate(15deg); }
        }

        .animate-blob-1 { animation: blob-breathe-1 25s ease-in-out infinite; }
        .animate-blob-2 { animation: blob-breathe-2 30s ease-in-out infinite; }
        .animate-drift-1 { animation: majestic-drift-1 45s ease-in-out infinite; }
        .animate-drift-2 { animation: majestic-drift-2 55s ease-in-out infinite; }
        .animate-drift-3 { animation: majestic-drift-3 50s ease-in-out infinite; }
        .animate-drift-4 { animation: majestic-drift-4 60s ease-in-out infinite; }
      `}} />

      {/* ================================================== */}
      {/* EPIC CINEMATIC BACKGROUND LAYER                      */}
      {/* ================================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* 1. Subtle Architectural Grid */}
        <div className="absolute inset-0 bg-subtle-grid opacity-70" />

        {/* 2. Atmospheric Breathing Light Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#C5A059]/10 rounded-full blur-[140px] animate-blob-1 mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#082219]/10 rounded-full blur-[140px] animate-blob-2 mix-blend-multiply" />
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-white/40 rounded-full blur-[100px]" />

        {/* 3. Massive Floating Commercial Elements (Ultra-thin stroke art) */}
        {/* Hotels & Apartments */}
        <div className="absolute top-[5%] left-[2%] opacity-[0.025] text-[#082219] animate-drift-1 drop-shadow-2xl">
          <Building2 size={700} strokeWidth={0.5} />
        </div>
        
        {/* Restaurants & Events */}
        <div className="absolute bottom-[-5%] right-[5%] opacity-[0.025] text-[#082219] animate-drift-2 drop-shadow-2xl">
          <UtensilsCrossed size={600} strokeWidth={0.5} />
        </div>
        
        {/* Spas, Salons, Clinics (Linens/Towels) */}
        <div className="absolute top-[35%] right-[-5%] opacity-[0.03] text-[#C5A059] animate-drift-3 drop-shadow-2xl">
          <BedSingle size={550} strokeWidth={0.5} />
        </div>
        
        {/* Offices & Corporate (Uniforms/Suits) */}
        <div className="absolute bottom-[15%] left-[5%] opacity-[0.02] text-[#082219] animate-drift-4 drop-shadow-2xl">
          <Shirt size={500} strokeWidth={0.5} />
        </div>

        {/* 4. Frosted Glass Wash (Keeps the background pushed back so text is 100% readable) */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
      </div>
      {/* ================================================== */}


      {/* MAIN FOREGROUND CONTENT */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT PANE: THE EXECUTIVE PITCH --- */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C5A059]/30 bg-white/80 backdrop-blur-sm text-[#a3803e] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 w-max shadow-sm">
              <Briefcase size={12} /> Enterprise & B2B
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black tracking-tighter uppercase italic leading-[0.9] text-[#082219] mb-6 drop-shadow-sm">
              Your Commercial <br/>
              <span className="text-[#C5A059]">Laundry Partner.</span>
            </h2>
            
            <p className="text-gray-600 text-sm md:text-lg font-medium leading-relaxed mb-8 bg-white/40 p-4 rounded-xl backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              At FLYDRY, we know running a business is demanding—laundry shouldn't add to the stress. We take the load off so you can focus on what matters most: <strong className="text-[#082219]">your business.</strong>
            </p>

            {/* Premium CTA Buttons - Reduced bulkiness & wired up links */}
            <div className="flex flex-wrap gap-3 mb-8 md:mb-0">
              <a 
                href="https://flydry.co.uk/book#/" 
                target="_top"
                className="group inline-flex items-center justify-center gap-2 bg-[#082219] text-[#C5A059] px-6 py-3 rounded-xl text-[10px] md:text-[11px] font-black uppercase tracking-widest hover:bg-[#C5A059] hover:text-[#082219] transition-all shadow-[0_8px_20px_rgba(8,34,25,0.2)] hover:shadow-[0_12px_24px_rgba(197,160,89,0.3)] w-full sm:w-auto"
              >
                Book a Pick Up
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
              
              {/* Updated with your actual phone number! */}
              <a 
                href="tel:02074767357" 
                className="group inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-md border-2 border-[#082219] text-[#082219] px-6 py-3 rounded-xl text-[10px] md:text-[11px] font-black uppercase tracking-widest hover:bg-[#082219] hover:text-[#C5A059] transition-all shadow-sm w-full sm:w-auto"
              >
                <PhoneCall size={16} className="group-hover:scale-110 transition-transform" />
                Call for Quote
              </a>

              <a 
                href={SCROLL_TARGET_URL} 
                target="_top"
                className="group inline-flex items-center justify-center gap-2 bg-[#fdfdfd] border-2 border-gray-200 text-[#082219] px-6 py-3 rounded-xl text-[10px] md:text-[11px] font-black uppercase tracking-widest hover:border-[#082219] transition-all shadow-sm w-full sm:w-auto"
              >
                Contact Form
              </a>
            </div>
          </div>

          {/* --- RIGHT PANE: THE BRUTALIST VALUE PROPS --- */}
          <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative">
            
            <div className="exec-card-commercial flex flex-col p-6 md:p-8 rounded-[1.5rem] border border-white/60">
              <div className="w-12 h-12 rounded-full bg-[#082219] text-[#C5A059] flex items-center justify-center mb-5 shadow-[0_8px_16px_rgba(8,34,25,0.2)]">
                <Truck size={22} />
              </div>
              <h3 className="font-black text-lg uppercase tracking-tight text-[#082219] mb-2">Reliable Pickups</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Consistent, dependable logistics ensuring your dirty linens never pile up and disrupt your workflow.
              </p>
            </div>

            <div className="exec-card-commercial flex flex-col p-6 md:p-8 rounded-[1.5rem] border border-white/60 sm:translate-y-8">
              <div className="w-12 h-12 rounded-full bg-[#082219] text-[#C5A059] flex items-center justify-center mb-5 shadow-[0_8px_16px_rgba(8,34,25,0.2)]">
                <Clock size={22} />
              </div>
              <h3 className="font-black text-lg uppercase tracking-tight text-[#082219] mb-2">Flexible Slots</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Delivery and collection times built entirely around your business's operating hours and strict demands.
              </p>
            </div>

            <div className="exec-card-commercial flex flex-col p-6 md:p-8 rounded-[1.5rem] border border-white/60 sm:-translate-y-2">
              <div className="w-12 h-12 rounded-full bg-[#082219] text-[#C5A059] flex items-center justify-center mb-5 shadow-[0_8px_16px_rgba(8,34,25,0.2)]">
                <Sparkles size={22} />
              </div>
              <h3 className="font-black text-lg uppercase tracking-tight text-[#082219] mb-2">Quick Turnarounds</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Lightning-fast processing ensuring you always have fresh stock ready for your clients and guests.
              </p>
            </div>

            <div className="exec-card-commercial flex flex-col justify-center p-6 md:p-8 rounded-[1.5rem] border border-[#C5A059]/20 bg-[#C5A059]/5 sm:translate-y-6">
              <div className="flex items-center gap-3 mb-4">
                 <ShieldCheck size={24} className="text-[#C5A059]" />
                 <span className="font-black text-[10px] uppercase tracking-[0.2em] text-[#082219]/60">Quality Assured</span>
              </div>
              <p className="text-[15px] font-bold text-[#082219] italic leading-snug">
                "Whether it's heavy linens or delicate staff uniforms, we manage the logistics so your operations remain flawless."
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* --- BOTTOM: THE INDUSTRIES MARQUEE --- */}
      <div className="w-full mt-20 md:mt-36 border-y border-[#082219]/10 bg-white/60 backdrop-blur-md py-5 overflow-hidden relative z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        
        {/* Gradients to fade the edges smoothly */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-[#fdfdfd] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-[#fdfdfd] to-transparent z-20 pointer-events-none"></div>

        <div className="animate-scroll-fast flex items-center">
          {marqueeItems.map((industry, index) => (
            <div key={index} className="flex items-center">
              <span className="text-sm md:text-lg font-black uppercase tracking-widest text-[#082219] whitespace-nowrap drop-shadow-sm">
                {industry}
              </span>
              <div className="mx-8 text-[#C5A059]">
                <Building2 size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
