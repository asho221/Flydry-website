import React, { useEffect, useState, useRef } from 'react';
import { Truck, Smartphone, MapPin, Star, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const textContainerRef = useRef(null);

  // Advanced 3D Parallax effect tracking the mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!textContainerRef.current) return;
      
      const { left, top, width, height } = textContainerRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate distance from center of the text container (-1 to 1)
      const x = (e.clientX - centerX) / (width / 2);
      const y = (e.clientY - centerY) / (height / 2);
      
      // Add subtle easing so it feels heavy and premium
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full bg-[#fdfdfd] text-[#082219] overflow-hidden font-sans selection:bg-[#C5A059] selection:text-[#082219] min-h-[90vh] flex flex-col justify-between">
      
      {/* --- ELITE AGENCY KEYFRAMES & STYLES --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Faint grid for technical depth */
        .bg-subtle-grid {
          background-image: radial-gradient(rgba(8, 34, 25, 0.05) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        /* Apple-style Blur-Up Reveal */
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

        /* Abstract slowly rotating wireframe behind text */
        @keyframes rotate-wireframe {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.05); }
          to { transform: rotate(360deg) scale(1); }
        }
        .animate-wireframe {
          animation: rotate-wireframe 60s linear infinite;
        }

        /* Premium Button Hover Physics */
        .btn-premium {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-premium:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(8,34,25,0.25), 0 0 20px rgba(197,160,89,0.15);
        }
        
        /* Image smooth entrance */
        .image-fade-in {
          opacity: 0;
          transform: scale(0.98);
          animation: imageFade 2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
        }
        @keyframes imageFade {
          to { opacity: 1; transform: scale(1); }
        }
      `}} />

      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none z-0" />
      
      {/* Abstract Animated Wireframe strictly behind the left text */}
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
        
        {/* LEFT: ADVANCED KINETIC TYPOGRAPHY */}
        <div 
          className="w-full lg:w-[50%] flex flex-col justify-center relative z-30 perspective-1000 mt-8 lg:mt-0"
        >
          {/* 3D Tilt Container */}
          <div 
            ref={textContainerRef}
            className="transition-transform duration-700 ease-out preserve-3d"
            style={{ 
              transform: `rotateY(${mousePos.x * 4}deg) rotateX(${mousePos.y * -4}deg)` 
            }}
          >
            {/* The Main Headline (Exact wording preserved, styling elevated) */}
            <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6rem] font-black tracking-tighter leading-[1] text-[#082219] mb-4">
              <span className="blur-reveal-wrapper uppercase">
                <span className="blur-reveal delay-100">LAUNDRY</span>
              </span>
              <span className="blur-reveal-wrapper -mt-2">
                <span className="blur-reveal delay-200 tracking-tight">that fits your life.</span>
              </span>
            </h1>

            {/* Tagline - Changed to bulletproof solid Copper so it never disappears! */}
            <div className="blur-reveal-wrapper mb-6">
              <h2 className="blur-reveal delay-300 text-xl md:text-2xl font-black tracking-tight text-[#C5A059]">
                East London's Premium Dry Cleaning Service.
              </h2>
            </div>

            {/* Paragraph 1 */}
            <div className="blur-reveal-wrapper mb-4 max-w-[90%]">
              <p className="blur-reveal delay-400 text-gray-600 text-base md:text-lg font-medium leading-relaxed">
                FLYDRY picks up, cleans, and delivers your clothes as fast as 24 hours.
              </p>
            </div>

            {/* Paragraph 2 */}
            <div className="blur-reveal-wrapper mb-10 max-w-[90%]">
              <p className="blur-reveal delay-500 text-gray-600 text-base md:text-lg font-medium leading-relaxed">
                Book online in just 60 seconds, and we'll take care of the rest.
              </p>
            </div>

            {/* The Buttons (Exact wording, advanced styling) */}
            <div className="blur-reveal-wrapper">
              <div className="blur-reveal delay-500 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <a 
                  href="https://flydry.co.uk/book#/"
                  target="_top"
                  className="btn-premium w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-[#082219] text-[#C5A059] px-8 py-4 rounded-[1rem] text-[13px] font-black uppercase tracking-widest"
                >
                  Schedule Pick Up
                  <Truck size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="https://flydry.co.uk/pricing"
                  target="_top"
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-transparent text-[#C5A059] px-8 py-4 rounded-[1rem] border-2 border-[#C5A059]/30 text-[13px] font-black uppercase tracking-widest hover:bg-[#C5A059]/10 transition-colors"
                >
                  See Prices
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: THE CLASSIC LAYOUT BUT MODERNIZED */}
        <div className="w-full lg:w-[50%] relative h-[500px] md:h-[650px] z-20 flex items-end justify-center lg:justify-end">
          
          {/* Soft Arch Container (Matches original layout but feels premium) */}
          <div className="image-fade-in relative w-[95%] md:w-[85%] h-[90%] bg-gray-100 rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden border border-gray-200 shadow-2xl">
            {/* Replace the URL below with your actual image link! */}
            <img 
              src="https://raw.githubusercontent.com/asho221/flydry-website/main/hero-lady.png" 
              alt="Woman booking FlyDry on phone"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle inner shadow to make it feel integrated */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] pointer-events-none"></div>
          </div>

          {/* Upgraded Glassmorphic Google Badge */}
          <div className="absolute top-12 right-0 md:-right-8 z-40 bg-white/90 backdrop-blur-xl border border-white/50 p-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] flex items-center gap-4 transform rotate-2 hover:rotate-0 transition-transform duration-500 cursor-default image-fade-in">
            {/* Recreated the visual Google 'G' to look cleaner than a pasted image */}
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
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p className="text-[11px] font-black uppercase tracking-widest text-[#082219]">4.6 Google Rating</p>
            </div>
          </div>

        </div>
      </div>

      {/* --- EXACT BOTTOM TRUST BAR (Elevated Styling) --- */}
      <div className="w-full bg-[#082219] relative z-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            
            {/* Column 1 */}
            <div className="flex items-center justify-center sm:justify-start gap-4 pt-2 sm:pt-0 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#082219] transition-colors">
                <Truck size={20} />
              </div>
              <p className="text-white font-bold text-[13px] md:text-[15px]">Free Collection & Delivery</p>
            </div>

            {/* Column 2 */}
            <div className="flex items-center justify-center sm:justify-center gap-4 pt-6 sm:pt-0 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#082219] transition-colors">
                <Smartphone size={20} />
              </div>
              <p className="text-white font-bold text-[13px] md:text-[15px]">24/7 Customer Support</p>
            </div>

            {/* Column 3 */}
            <div className="flex items-center justify-center sm:justify-end gap-4 pt-6 sm:pt-0 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#082219] transition-colors">
                <MapPin size={20} />
              </div>
              <p className="text-white font-bold text-[13px] md:text-[15px]">Live Order Updates</p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
