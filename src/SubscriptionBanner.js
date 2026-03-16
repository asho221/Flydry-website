import React, { useId, useMemo } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const toteClipId = useId();

  // Since the widget is now in the same file, we just need the simple # anchor!
  const SCROLL_TARGET_URL = "#subscription-plans";

  const steps = useMemo(() => [
    {
      id: 'volume',
      title: "Select Volume",
      desc: "Choose 1, 2, or 4 of our Signature 10kg Totes per month.",
      artwork: (
        // Scaled up to w-24 h-24 for prominence, but keeping its crisp line-art style
        <svg viewBox="0 0 64 64" className="w-20 h-20 md:w-24 md:h-24 text-[#082219] group-hover:text-[#C5A059] transition-colors duration-500 relative z-10" aria-hidden="true">
          <path d="M16 20 L48 20 L52 56 L12 56 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M24 20 C24 10, 40 10, 40 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          
          <clipPath id={toteClipId}>
            <path d="M16 20 L48 20 L52 56 L12 56 Z" />
          </clipPath>
          <g clipPath={`url(#${toteClipId})`}>
            {/* Liquid wave animation */}
            <path d="M 0 40 Q 16 36 32 40 T 64 40 T 96 40 T 128 40 V 64 H 0 Z" fill="currentColor" fillOpacity="0.15" className="anim-wave group-hover:fill-opacity-25 transition-all duration-500" />
          </g>
          
          <rect x="22" y="34" width="20" height="10" rx="2" fill="currentColor" className="opacity-10 group-hover:opacity-100 transition-opacity duration-500" />
          <text x="32" y="41" fill="white" fontSize="5" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">10KG</text>
        </svg>
      )
    },
    {
      id: 'routine',
      title: "Set Routine",
      desc: "Set a flexible schedule for your automated collections. No booking required.",
      artwork: (
        <svg viewBox="0 0 64 64" className="w-20 h-20 md:w-24 md:h-24 text-[#082219] group-hover:text-[#C5A059] transition-colors duration-500 relative z-10" aria-hidden="true">
          <rect x="14" y="18" width="36" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <line x1="14" y1="26" x2="50" y2="26" stroke="currentColor" strokeWidth="1.5" />
          
          <circle cx="22" cy="34" r="1" fill="currentColor" opacity="0.15" />
          <circle cx="32" cy="34" r="1" fill="currentColor" opacity="0.15" />
          <circle cx="42" cy="34" r="1" fill="currentColor" opacity="0.15" />
          <circle cx="22" cy="42" r="1" fill="currentColor" opacity="0.15" />
          <circle cx="32" cy="42" r="1" fill="currentColor" opacity="0.15" />
          <circle cx="42" cy="42" r="1" fill="currentColor" opacity="0.15" />

          {/* Routing animation */}
          <circle cx="22" cy="34" r="2.5" fill="currentColor" className="anim-sparkle" />
          <circle cx="42" cy="42" r="2.5" fill="currentColor" className="anim-sparkle" style={{ animationDelay: '1s' }} />
          <path d="M 22 34 L 42 34 L 42 42" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="anim-route" />
        </svg>
      )
    },
    {
      id: 'result',
      title: "Fresh Delivery",
      desc: "Returned to your door impeccably clean and perfectly stacked.",
      artwork: (
        <svg viewBox="0 0 64 64" className="w-20 h-20 md:w-24 md:h-24 text-[#082219] group-hover:text-[#C5A059] transition-colors duration-500 relative z-10" aria-hidden="true">
          {/* Stack of folded items */}
          <rect x="16" y="44" width="32" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          <rect x="18" y="37" width="28" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          
          {/* Dropping top item */}
          <g className="anim-drop">
             <rect x="20" y="30" width="24" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
             <rect x="20" y="30" width="24" height="5" rx="1.5" fill="currentColor" fillOpacity="0.15" />
             <path d="M 32 26 L 34 23 L 37 22 L 34 21 L 32 18 L 30 21 L 27 22 L 30 23 Z" fill="currentColor" className="anim-sparkle" style={{ animationDelay: '0.8s' }} />
          </g>
        </svg>
      )
    }
  ], [toteClipId]);

  return (
    <div className="w-full bg-white">
      {/* 1. THE SUBSCRIPTION HERO SECTION */}
      <section aria-labelledby="subscription-hero-heading" className="relative w-full bg-white text-[#082219] pt-16 pb-10 md:pt-20 md:pb-12 border-y border-gray-100 overflow-hidden font-sans selection:bg-[#C5A059] selection:text-white">
        
        <style dangerouslySetInnerHTML={{ __html: `
          /* Faint, elegant architectural grid */
          .bg-subtle-grid {
            background-image: radial-gradient(rgba(8, 34, 25, 0.04) 1px, transparent 1px);
            background-size: 32px 32px;
          }

          /* SVG Internal Physics */
          @keyframes wave-slide { 0% { transform: translateX(0); } 100% { transform: translateX(-64px); } }
          .anim-wave { animation: wave-slide 4s linear infinite; }
          
          @keyframes route-trace { 0%, 100% { stroke-dashoffset: 60; opacity: 0; } 20%, 80% { stroke-dashoffset: 0; opacity: 1; } }
          .anim-route { stroke-dasharray: 60; animation: route-trace 4s ease-in-out infinite; }
          
          @keyframes drop-fold { 0%, 100% { transform: translateY(-12px); opacity: 0; } 20%, 80% { transform: translateY(0); opacity: 1; } }
          .anim-drop { animation: drop-fold 4s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
          
          @keyframes sparkle-fade { 0%, 100% { opacity: 0; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1); } }
          .anim-sparkle { animation: sparkle-fade 2s ease-in-out infinite; transform-origin: center; }

          /* Custom soft pulse for premium feel */
          @keyframes soft-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
          .anim-soft-pulse { animation: soft-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

          /* Smooth, elegant progress orb traveling the pipeline */
          @keyframes travel {
            0% { left: 0%; opacity: 0; transform: scaleX(0.5); }
            10%, 90% { opacity: 1; transform: scaleX(1); }
            100% { left: 100%; opacity: 0; transform: scaleX(0.5); }
          }
          .anim-travel {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            animation: travel 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          /* Subtle text shimmer for the headline */
          @keyframes shimmer-text {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          .text-shimmer {
            background: linear-gradient(to right, #C5A059 20%, #e8d5b5 40%, #e8d5b5 60%, #C5A059 80%);
            background-size: 200% auto;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            animation: shimmer-text 10s linear infinite;
          }

          /* Seamless Card Hover State */
          .exec-card {
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            background: #ffffff;
            text-decoration: none;
          }
          .exec-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 24px 48px -12px rgba(8, 34, 25, 0.08), 0 0 20px rgba(197, 160, 89, 0.04);
            border-color: rgba(197, 160, 89, 0.25);
          }
          
          /* Very subtle inner glow on hover to make it feel premium */
          .exec-card::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: radial-gradient(circle at top left, rgba(197,160,89,0.05), transparent 70%);
            opacity: 0;
            transition: opacity 0.5s ease;
            pointer-events: none;
          }
          .exec-card:hover::before {
            opacity: 1;
          }
          
          /* Smooth scrolling behavior for the whole page */
          html {
            scroll-behavior: smooth;
          }
        `}} />

        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-subtle-grid pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* --- LEFT: EXECUTIVE TYPOGRAPHY (40% Width) --- */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center text-left relative z-20">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-[#082219] text-[11px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 w-max shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] anim-soft-pulse"></span>
              Wash & Fold Subscriptions
            </div>
            
            <h2 id="subscription-hero-heading" className="text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tighter uppercase italic leading-[0.9] text-[#082219] mb-5">
              Laundry on <br/>
              <span className="text-shimmer">Autopilot.</span>
            </h2>
            
            <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-lg mb-8">
              The definitive zero-friction routine. Customise your monthly volume, fill our <strong className="text-[#082219]">10kg Signature Totes</strong>, and let us execute the rest.
            </p>

            <div className="flex flex-col gap-3 mb-8" role="list">
              <div className="flex items-center gap-3 text-[13px] md:text-sm font-bold text-[#082219]" role="listitem">
                <CheckCircle2 size={18} className="text-[#9E7C2E]" aria-hidden="true" />
                No weighing. No hidden fees.
              </div>
              <div className="flex items-center gap-3 text-[13px] md:text-sm font-bold text-[#082219]" role="listitem">
                <CheckCircle2 size={18} className="text-[#9E7C2E]" aria-hidden="true" />
                Flexible routine collections.
              </div>
              <div className="flex items-center gap-3 text-[13px] md:text-sm font-bold text-[#082219]" role="listitem">
                <CheckCircle2 size={18} className="text-[#9E7C2E]" aria-hidden="true" />
                Eco-friendly premium care.
              </div>
            </div>

            <a href={SCROLL_TARGET_URL} className="group inline-flex items-center w-max gap-3 bg-[#082219] text-[#C5A059] px-8 py-4 rounded-xl text-xs md:text-[13px] font-black uppercase tracking-widest hover:bg-[#C5A059] hover:text-[#082219] transition-all shadow-[0_8px_20px_rgba(8,34,25,0.2)] hover:shadow-[0_12px_24px_rgba(197,160,89,0.3)]">
              Choose your plan
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
            </a>
          </div>

          {/* --- RIGHT: THE SEAMLESS PIPELINE (60% Width) --- */}
          <div className="w-full lg:w-[60%] relative mt-4 lg:mt-0">
            
            {/* The Connecting Track Line (Desktop) */}
            <div className="absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-gray-100 hidden md:block z-0">
              <div className="anim-travel w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent shadow-[0_0_15px_rgba(197,160,89,0.8)] rounded-full -ml-8"></div>
            </div>

            {/* The Vertical Track Line (Mobile) */}
            <div className="absolute top-[10%] bottom-[10%] left-[39px] w-[2px] bg-gray-100 block md:hidden z-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-16 bg-gradient-to-b from-transparent via-[#C5A059] to-transparent shadow-[0_0_15px_rgba(197,160,89,0.8)] rounded-full animate-[travel_6s_linear_infinite]" style={{ animationName: 'vertical-travel' }}></div>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes vertical-travel {
                0% { top: 0%; opacity: 0; transform: scaleY(0.5); }
                10%, 90% { opacity: 1; transform: scaleY(1); }
                100% { top: 100%; opacity: 0; transform: scaleY(0.5); }
              }
            `}} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 relative z-10" role="list">
              
              {steps.map((step) => (
                <a 
                  href={SCROLL_TARGET_URL}
                  key={step.id}
                  role="listitem"
                  className="exec-card group flex flex-row md:flex-col items-center md:items-start p-6 md:p-8 rounded-[1.5rem] border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.02)] cursor-pointer overflow-hidden relative"
                >
                  {/* 1. Large, Prominent Artwork (No confining boxes) */}
                  <div className="flex-shrink-0 md:w-full flex md:justify-center mb-0 md:mb-6 mr-6 md:mr-0">
                    {step.artwork}
                  </div>

                  {/* 2. Seamlessly Integrated Text */}
                  <div className="flex-1 md:text-center w-full">
                    <h3 className="text-[17px] md:text-[19px] font-black uppercase italic tracking-tight text-[#082219] mb-1.5 md:mb-2 group-hover:text-[#C5A059] transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="text-[12px] md:text-[13px] text-gray-500 font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </a>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* 2. THE SUBSCRIPTION WIDGET EMBED (Your pasted code) */}
      <div 
        id="subscription-plans" 
        style={{ 
          position: 'relative', 
          left: '50%', 
          right: '50%', 
          marginLeft: '-50vw', 
          marginRight: '-50vw', 
          width: '100vw', 
          maxWidth: '100vw',
          backgroundColor: '#fdfdfd' // matches page background cleanly
        }}
      >
        <iframe 
          style={{ border: 'none', borderRadius: '8px', display: 'block' }} 
          src="https://flydry-subscription.vercel.app" 
          width="100%" 
          height="1050px" 
          frameBorder="0"
          title="FlyDry Subscription Plans"
        ></iframe>
      </div>

    </div>
  );
}
