import React, { useState, useId, useMemo } from 'react';
import { ShoppingBag, Truck, Calendar, CreditCard, CheckCircle, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Bot, Loader2, Clock, Plus, Check, Shirt, Cloud } from 'lucide-react';

// Pricing Data mapped directly from your provided table
const pricingData = {
  1: {
    1: { total: 30, perBag: 30 }
  },
  2: {
    1: { total: 46, perBag: 23 },
    2: { total: 52, perBag: 26 }
  },
  4: {
    1: { total: 80, perBag: 20 },
    2: { total: 88, perBag: 22 },
    3: { total: 92, perBag: 23 },
    4: { total: 96, perBag: 24 }
  }
};

// --- COMPONENT 1: THE HERO SECTION ---
function SubscriptionHero() {
  const toteClipId = useId();

  // Smooth scroll function to glide down to the widget
  const scrollToPlans = (e) => {
    e.preventDefault();
    document.getElementById('subscription-plans')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const steps = useMemo(() => [
    {
      id: 'volume',
      title: "Select Volume",
      desc: "Choose 1, 2, or 4 of our Signature 10kg Totes per month.",
      artwork: (
        <svg viewBox="0 0 64 64" className="w-20 h-20 md:w-24 md:h-24 text-[#082219] group-hover:text-[#C5A059] transition-colors duration-500 relative z-10" aria-hidden="true">
          <path d="M16 20 L48 20 L52 56 L12 56 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M24 20 C24 10, 40 10, 40 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <clipPath id={toteClipId}>
            <path d="M16 20 L48 20 L52 56 L12 56 Z" />
          </clipPath>
          <g clipPath={`url(#${toteClipId})`}>
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
          <rect x="16" y="44" width="32" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          <rect x="18" y="37" width="28" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
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
    <section aria-labelledby="subscription-hero-heading" className="relative w-full bg-white text-[#082219] pt-16 pb-10 md:pt-20 md:pb-12 overflow-hidden font-sans selection:bg-[#C5A059] selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: `
        .bg-subtle-grid {
          background-image: radial-gradient(rgba(8, 34, 25, 0.04) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        @keyframes wave-slide { 0% { transform: translateX(0); } 100% { transform: translateX(-64px); } }
        .anim-wave { animation: wave-slide 4s linear infinite; }
        
        @keyframes route-trace { 0%, 100% { stroke-dashoffset: 60; opacity: 0; } 20%, 80% { stroke-dashoffset: 0; opacity: 1; } }
        .anim-route { stroke-dasharray: 60; animation: route-trace 4s ease-in-out infinite; }
        
        @keyframes drop-fold { 0%, 100% { transform: translateY(-12px); opacity: 0; } 20%, 80% { transform: translateY(0); opacity: 1; } }
        .anim-drop { animation: drop-fold 4s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        
        @keyframes sparkle-fade { 0%, 100% { opacity: 0; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1); } }
        .anim-sparkle { animation: sparkle-fade 2s ease-in-out infinite; transform-origin: center; }

        @keyframes soft-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
        .anim-soft-pulse { animation: soft-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

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

        .exec-card {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          background: #ffffff;
        }
        .exec-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 48px -12px rgba(8, 34, 25, 0.08), 0 0 20px rgba(197, 160, 89, 0.04);
          border-color: rgba(197, 160, 89, 0.25);
        }
        
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
      `}} />

      <div className="absolute inset-0 bg-subtle-grid pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
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

          <button 
            onClick={scrollToPlans}
            className="group inline-flex items-center justify-center w-max gap-3 bg-[#082219] text-[#C5A059] px-8 py-4 rounded-xl text-xs md:text-[13px] font-black uppercase tracking-widest hover:bg-[#C5A059] hover:text-[#082219] transition-all shadow-[0_8px_20px_rgba(8,34,25,0.2)] hover:shadow-[0_12px_24px_rgba(197,160,89,0.3)]"
          >
            Choose your plan
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
          </button>
        </div>

        <div className="w-full lg:w-[60%] relative mt-4 lg:mt-0">
          <div className="absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-gray-100 hidden md:block z-0">
            <div className="anim-travel w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent shadow-[0_0_15px_rgba(197,160,89,0.8)] rounded-full -ml-8"></div>
          </div>

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
              <div 
                key={step.id}
                onClick={scrollToPlans}
                role="button"
                tabIndex={0}
                className="exec-card group flex flex-row md:flex-col items-center md:items-start p-6 md:p-8 rounded-[1.5rem] border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.02)] cursor-pointer overflow-hidden relative"
              >
                <div className="flex-shrink-0 md:w-full flex md:justify-center mb-0 md:mb-6 mr-6 md:mr-0">
                  {step.artwork}
                </div>
                <div className="flex-1 md:text-center w-full">
                  <h3 className="text-[17px] md:text-[19px] font-black uppercase italic tracking-tight text-[#082219] mb-1.5 md:mb-2 group-hover:text-[#C5A059] transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-[12px] md:text-[13px] text-gray-500 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// --- COMPONENT 2: THE SUBSCRIPTION WIDGET (Your Custom Code) ---
function SubscriptionWidget() {
  const [step, setStep] = useState(1);
  const [selectedBags, setSelectedBags] = useState(null);
  const [selectedPickups, setSelectedPickups] = useState(null);
  const [billingCycle, setBillingCycle] = useState(1); // 1, 3, 6, 12
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessingUpsell, setIsProcessingUpsell] = useState(false); 
  const [pickupDates, setPickupDates] = useState([]); 
  const [pickupTimes, setPickupTimes] = useState([]); 
  const [selectedUpsells, setSelectedUpsells] = useState([]); 

  // AI Assistant States (RESTORED)
  const [showAiHelper, setShowAiHelper] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiRecommendation, setAiRecommendation] = useState(null);
  const [aiError, setAiError] = useState("");

  // Upsell Options Data
  const upsellOptions = [
    { id: 'shoes', title: 'Premium Shoe Clean', original: 20, discounted: 15, icon: Sparkles },
    { id: 'duvet', title: 'Winter Duvet Wash', original: 25, discounted: 18, icon: Cloud },
    { id: 'suit', title: '2-Piece Suit Dry Clean', original: 18, discounted: 14, icon: Shirt }
  ];

  const toggleUpsell = (id) => {
    setSelectedUpsells(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // --- EMBEDDED SMART LOGIC ENGINE (Replaces external API) ---
  const getAiRecommendation = () => {
    if (!aiInput.trim()) return;
    
    setIsAiLoading(true);
    setAiError("");
    setAiRecommendation(null);

    // Simulate "AI Thinking" delay (between 1.2 to 2.5 seconds)
    const thinkingTime = Math.random() * 1300 + 1200;

    setTimeout(() => {
      const text = aiInput.toLowerCase();
      
      let bags = 1;
      let pickups = 1;
      let reasoning = "Based on your needs, our most popular 2-bag plan provides a great balance of flexibility and value.";

      // Keyword Analysis
      const isFamily = /family|kids|children|baby|toddler|four|five|4 people|5 people|household/i.test(text);
      const isCouple = /couple|partner|husband|wife|two|2 people|we /i.test(text);
      const isSingle = /single|alone|just me|one person|1 person|myself/i.test(text);
      
      const isActive = /gym|workout|sport|run|train|active|sweat|daily/i.test(text);
      const isHeavy = /bedding|towels|sheets|duvet|huge|lots|mountain|heavy|bulky/i.test(text);
      const wantsWeekly = /weekly|every week|4 times/i.test(text);

      // Decision Tree Logic
      if (isFamily) {
        bags = 4;
        pickups = wantsWeekly || isActive ? 4 : 2;
        reasoning = `For a household with kids or multiple people, our 4-bag plan ensures you never fall behind. I've scheduled ${pickups} monthly pickups to keep the laundry basket completely empty!`;
      } else if (isCouple) {
        if (isActive || isHeavy) {
          bags = 4;
          pickups = 2;
          reasoning = "Since it's for the two of you and includes bulky items or activewear, 4 bags split across 2 pickups a month will comfortably cover your entire lifestyle.";
        } else {
          bags = 2;
          pickups = wantsWeekly ? 4 : 2;
          if (pickups === 4) bags = 4; // 4 pickups requires the 4 bag plan
          reasoning = "For a couple's standard wardrobe, 2 bags is the absolute sweet spot. Bi-weekly pickups will ensure a steady flow of fresh clothes without overpaying.";
        }
      } else if (isSingle) {
        if (isActive || isHeavy) {
          bags = 2;
          pickups = 2;
          reasoning = "Normally 1 bag works for one person, but since you have activewear or bulky items, 2 bags with bi-weekly pickups will keep your wardrobe perfectly fresh.";
        } else {
          bags = 1;
          pickups = 1;
          reasoning = "For a single person's standard routine, 1 signature bag per month (which holds ~10kg) is incredibly cost-effective and perfectly sized.";
        }
      } else {
        // Fallback if no specific demographic is mentioned, judge purely by volume/frequency keywords
        if (wantsWeekly || isHeavy) {
           bags = 4;
           pickups = wantsWeekly ? 4 : 2;
           reasoning = "Given the high volume and frequency you described, the 4-bag plan offers the best value per kg, keeping your routine totally automated.";
        } else if (isActive) {
           bags = 2;
           pickups = 2;
           reasoning = "To keep up with an active routine, 2 bags with bi-weekly collections is a great setup to ensure you always have fresh gear ready.";
        } else {
           bags = 2;
           pickups = 1;
           reasoning = "This is our most popular middle-ground plan. 2 bags (20kg total) provides fantastic flexibility for mixed wardrobes and the occasional bedding.";
        }
      }

      setAiRecommendation({ bags, pickups, reasoning });
      setIsAiLoading(false);
    }, thinkingTime);
  };

  const applyAiRecommendation = () => {
    if (aiRecommendation) {
      setSelectedBags(aiRecommendation.bags);
      setSelectedPickups(aiRecommendation.pickups);
      setStep(3);
    }
  };

  // Brand Colors perfectly matched to the Hero Section
  const brand = {
    copper: '#C5A059',       
    copperHover: '#a3803e',  
    copperLight: 'rgba(197, 160, 89, 0.08)',  
    green: '#082219',        
    greenLight: 'rgba(8, 34, 25, 0.05)',   
  };

  const handleBagSelect = (bags) => {
    setSelectedBags(bags);
    setSelectedPickups(null);
    setStep(2);
  };

  const handlePickupSelect = (pickups) => {
    setSelectedPickups(pickups);
  };

  const handleNextToInfo = () => {
    if (selectedPickups) setStep(3);
  };

  const handleSubscribe = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(5); 
    }, 1500);
  };

  const handleConfirmSchedule = () => {
    if (selectedUpsells.length > 0) {
      setIsProcessingUpsell(true);
      setTimeout(() => {
        setIsProcessingUpsell(false);
        setIsSuccess(true);
      }, 1500);
    } else {
      setIsSuccess(true);
    }
  };

  const currentPlan = selectedBags && selectedPickups ? pricingData[selectedBags][selectedPickups] : null;

  const standardPricePerKg = 3.5;
  const standardDeliveryFee = 2; 
  const normalCost = selectedBags && selectedPickups ? (selectedBags * 10 * standardPricePerKg) + (selectedPickups * standardDeliveryFee) : 0;
  
  const discountRates = { 1: 0, 3: 0.05, 6: 0.10, 12: 0.20 };
  const currentDiscount = discountRates[billingCycle];
  
  const discountedMonthly = currentPlan ? currentPlan.total * (1 - currentDiscount) : 0;
  const discountedPerBag = currentPlan ? currentPlan.perBag * (1 - currentDiscount) : 0;
  const upfrontTotal = discountedMonthly * billingCycle;
  
  const totalSavings = currentPlan ? (normalCost * billingCycle) - upfrontTotal : 0;
  const savingsPerMonth = totalSavings / billingCycle;

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    return new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }).format(date);
  };

  const getIntervalText = () => {
    if (selectedPickups === 1) return "Subsequent months will renew on this same exact date.";
    if (selectedPickups === 2) return "Your 2 pickups are automatically spaced ~15 days apart. You can adjust the 2nd date below.";
    if (selectedPickups === 3) return "Your 3 pickups are automatically spaced ~10 days apart. You can adjust them below.";
    if (selectedPickups === 4) return "Your 4 pickups are automatically spaced weekly (7 days apart). You can adjust them below.";
    return "";
  };

  const timeSlotOptions = [
    "Morning (8am - 12pm)",
    "Afternoon (12pm - 4pm)",
    "Evening (6pm - 10pm)"
  ];

  const handleFirstDateChange = (e) => {
    const val = e.target.value;
    if (!val) {
      setPickupDates([]);
      setPickupTimes([]);
      return;
    }

    const dates = [val];
    const baseDate = new Date(val);
    
    let intervalDays = 0;
    if (selectedPickups === 2) intervalDays = 15;
    if (selectedPickups === 3) intervalDays = 10;
    if (selectedPickups === 4) intervalDays = 7;
    
    for (let i = 1; i < selectedPickups; i++) {
      const nextDate = new Date(baseDate);
      nextDate.setDate(baseDate.getDate() + (intervalDays * i));
      dates.push(nextDate.toISOString().split('T')[0]);
    }
    setPickupDates(dates);
    
    if (pickupTimes.length !== selectedPickups) {
      setPickupTimes(new Array(selectedPickups).fill(timeSlotOptions[0]));
    }
  };

  const handleOtherDateChange = (idx, val) => {
    const newDates = [...pickupDates];
    newDates[idx] = val;
    setPickupDates(newDates);
  };

  const handleTimeChange = (idx, val) => {
    const newTimes = [...pickupTimes];
    newTimes[idx] = val;
    setPickupTimes(newTimes);
  };

  const isScheduleValid = pickupDates.length === selectedPickups && pickupDates.every(d => d !== "") && pickupTimes.every(t => t !== "");

  const renderStep1 = () => (
    <div className="relative space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* --- 3D Coin Flip Physics & Styles --- */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; -webkit-perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; -webkit-transform-style: preserve-3d; }
        
        /* iOS Safari Fixes for 3D Flipping bleed-through */
        .coin-front {
          backface-visibility: hidden; 
          -webkit-backface-visibility: hidden;
          transform: rotateY(0deg) translateZ(2px);
          -webkit-transform: rotateY(0deg) translateZ(2px);
        }
        .coin-back {
          backface-visibility: hidden; 
          -webkit-backface-visibility: hidden;
          transform: rotateY(180deg) translateZ(2px);
          -webkit-transform: rotateY(180deg) translateZ(2px);
        }

        @keyframes coin-flip-loop {
          0%, 42% { transform: rotateY(0deg); -webkit-transform: rotateY(0deg); }
          50%, 92% { transform: rotateY(180deg); -webkit-transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); -webkit-transform: rotateY(360deg); }
        }
        .animate-coin-flip {
          animation: coin-flip-loop 10s cubic-bezier(0.6, -0.2, 0.4, 1.2) infinite;
        }

        @keyframes float-premium {
          0%, 100% { transform: translateY(0px); filter: drop-shadow(0 15px 25px rgba(0,0,0,0.15)); }
          50% { transform: translateY(-12px); filter: drop-shadow(0 30px 25px rgba(0,0,0,0.08)); }
        }
        .animate-float-premium {
          animation: float-premium 5s ease-in-out infinite;
        }

        @keyframes glow-pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .animate-glow-pulse {
          animation: glow-pulse-slow 4s ease-in-out infinite;
        }

        @keyframes pedestal-reveal {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-pedestal-reveal {
          animation: pedestal-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      {/* --- Premium Product Feature Header --- */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-50/50 p-6 md:p-8 rounded-[2rem] border border-gray-100">
        
        {/* Left: Text & AI Assistant */}
        <div className="flex-1 text-center md:text-left w-full">
          <h2 className="text-3xl md:text-4xl font-black text-[#082219] uppercase italic tracking-tight">Choose your plan</h2>
          <p className="text-gray-500 mt-3 font-medium">Select how many of our Signature Totes you need serviced per month.</p>
          
          {/* Gemini AI Integration */}
          <div className="mt-8 w-full max-w-md mx-auto md:mx-0">
            {!showAiHelper ? (
              <button 
                onClick={() => setShowAiHelper(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest shadow-sm transition-all hover:scale-105 border border-[#C5A059]/30 bg-[#C5A059]/10 text-[#a3803e]"
              >
                <Sparkles size={16} /> Not sure? Ask our AI
              </button>
            ) : (
              <div className="bg-white p-5 rounded-[1.5rem] border border-gray-200 text-left animate-in fade-in zoom-in duration-300 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Bot size={20} className="text-[#082219]" />
                  <span className="font-black text-[#082219] uppercase tracking-widest text-xs">Flydry AI Helper</span>
                </div>
                <textarea 
                  value={aiInput}
                  onChange={(e) => {
                    setAiInput(e.target.value);
                    setAiRecommendation(null);
                    setAiError("");
                  }}
                  placeholder="E.g., I live with my partner, we work out a lot and do laundry every 2 weeks..."
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] resize-none text-sm font-medium transition-all"
                  rows={2}
                />
                {aiError && <p className="text-orange-500 font-bold text-xs mt-2">{aiError}</p>}
                
                {aiRecommendation ? (
                  <div className="mt-4 p-5 rounded-xl shadow-sm border border-[#082219]/10 bg-[#082219]/5">
                    <p className="text-sm font-bold mb-4 text-[#082219]">
                      <Sparkles size={14} className="inline mr-1.5 text-[#C5A059]" />
                      {aiRecommendation.reasoning}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="font-black text-[#082219] text-sm uppercase tracking-wide">
                        Recommendation: {aiRecommendation.bags} Bags, {aiRecommendation.pickups} Pickups
                      </span>
                      <button 
                        onClick={applyAiRecommendation}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#082219] text-[#C5A059] text-xs font-black uppercase tracking-widest transition-all hover:bg-[#C5A059] hover:text-[#082219] shadow-[0_4px_10px_rgba(8,34,25,0.15)]"
                      >
                        Apply Plan
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-end mt-4">
                    <button 
                      onClick={getAiRecommendation}
                      disabled={isAiLoading || !aiInput.trim()}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#082219] text-[#C5A059] text-xs font-black uppercase tracking-widest disabled:opacity-50 transition-all hover:bg-[#C5A059] hover:text-[#082219] shadow-[0_4px_10px_rgba(8,34,25,0.15)]"
                    >
                      {isAiLoading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                      {isAiLoading ? "Thinking..." : "Get Recommendation"}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right: The 3D Rotating Coin */}
        <div className="w-full md:w-auto flex justify-center shrink-0">
           {/* Added mt-12 mb-4 for mobile spacing to prevent overlap with the text above */}
           <div className="relative w-48 h-48 md:w-56 md:h-56 perspective-1000 animate-pedestal-reveal mt-12 mb-4 md:mt-0 md:mb-0">
              
              {/* FIXED: Float wrapper (separated from coin flip to prevent CSS animation override) */}
              <div className="w-full h-full animate-float-premium">
                
                {/* 3D Coin Container */}
                <div className="w-full h-full relative preserve-3d animate-coin-flip group">
                   
                   {/* FRONT FACE: The Bag */}
                   <div className="absolute inset-0 coin-front bg-white rounded-full border border-gray-100 shadow-inner flex items-center justify-center p-6">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.15)_0%,transparent_70%)] rounded-full animate-glow-pulse pointer-events-none"></div>
                      <img 
                        src="https://raw.githubusercontent.com/asho221/Flydry-website/main/FDbag.png" 
                        alt="Flydry Signature Bag" 
                        className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700"
                      />
                   </div>

                   {/* BACK FACE: The Specs Card */}
                   <div className="absolute inset-0 coin-back bg-[#082219] rounded-full border-4 border-[#0a2b20] shadow-[inset_0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-6 overflow-hidden">
                      {/* Inner glowing accent for the backface */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.2)_0%,transparent_70%)] rounded-full pointer-events-none"></div>
                      
                      <ShoppingBag size={24} className="text-[#C5A059] mb-2 relative z-10" />
                      <span className="text-[#C5A059] text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-1 relative z-10">Capacity</span>
                      <span className="text-4xl md:text-5xl font-black text-white leading-none relative z-10 tracking-tighter">10KG</span>
                      
                      <div className="w-10 h-px bg-white/20 my-3 relative z-10"></div>
                      
                      <span className="text-[10px] md:text-xs text-gray-300 font-bold uppercase tracking-widest leading-tight text-center relative z-10">Holds ~40 Items</span>
                      <span className="text-[8px] md:text-[9px] text-[#C5A059] font-black uppercase tracking-widest mt-2 relative z-10">Water-Resistant</span>
                   </div>

                </div>
              </div>
           </div>
        </div>
        
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
        {[1, 2, 4].map((bagCount) => {
          const minPrice = Math.min(...Object.values(pricingData[bagCount]).map(p => p.total));
          
          return (
          <button
            key={bagCount}
            onClick={() => handleBagSelect(bagCount)}
            className={`group flex flex-col items-center justify-center p-6 border transition-all duration-300 rounded-[1.5rem]
              ${selectedBags === bagCount 
                ? 'shadow-[0_12px_24px_rgba(197,160,89,0.15)] transform scale-[1.02] border-[#C5A059]' 
                : 'border-gray-100 bg-white hover:border-[#C5A059] hover:bg-[#C5A059]/5 hover:scale-[1.02] hover:shadow-lg'}`}
            style={selectedBags === bagCount ? { backgroundColor: brand.copperLight } : {}}
          >
            {/* Dynamic Bag Stacking based on plan size */}
            <div className="flex items-center justify-center h-16 mb-4">
              {Array.from({ length: bagCount }).map((_, i) => (
                <div 
                  key={i}
                  className={`rounded-full border-[3px] border-white flex items-center justify-center transition-all duration-300 shadow-sm
                    ${selectedBags !== bagCount ? 'bg-gray-100 text-gray-400 group-hover:bg-[#082219] group-hover:text-[#C5A059] group-hover:border-white' : ''} 
                    ${i > 0 ? (bagCount === 4 ? '-ml-5' : '-ml-3') : ''}`}
                  style={{
                    width: bagCount === 4 ? '40px' : '56px',
                    height: bagCount === 4 ? '40px' : '56px',
                    ...(selectedBags === bagCount ? { backgroundColor: '#082219', color: '#C5A059' } : {}),
                    zIndex: 10 - i
                  }}
                >
                  <ShoppingBag size={bagCount === 4 ? 18 : 26} strokeWidth={1.5} />
                </div>
              ))}
            </div>

            <div className="text-center">
              <span className="text-xl font-black text-[#082219] uppercase tracking-tight">{bagCount} {bagCount === 1 ? 'Bag' : 'Bags'}</span>
              <div className="text-xs text-gray-500 font-bold tracking-widest uppercase mt-1">({bagCount * 10} KG)</div>
            </div>
            
            <div className="mt-5 flex flex-col items-center w-full">
              <div 
                className={`text-sm font-black px-4 py-1.5 rounded-full border transition-colors duration-300 ${selectedBags === bagCount ? 'bg-white border-[#C5A059]/30 text-[#082219]' : 'bg-gray-50 border-gray-100 text-gray-600 group-hover:bg-white group-hover:border-[#C5A059]/30 group-hover:text-[#082219]'}`}
              >
                From £{minPrice}<span className="text-xs font-semibold opacity-80">/mo</span>
              </div>
              <span className="text-[11px] text-gray-500 mt-3 text-center font-bold uppercase tracking-wider">
                {bagCount === 1 ? 'Max 1 pickup' : bagCount === 2 ? '1 or 2 pickups' : '1 to 4 pickups'}
              </span>
            </div>
          </button>
        )})}
      </div>
    </div>
  );

  const renderStep2 = () => {
    const pickupOptions = Object.keys(pricingData[selectedBags]).map(Number);
    
    return (
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-[#082219] uppercase italic tracking-tight">Select pick up frequency</h2>
          <p className="text-gray-500 mt-3 font-medium">How many times should we pick up your {selectedBags} {selectedBags === 1 ? 'bag' : 'bags'}?</p>
        </div>

        <div className="space-y-4 max-w-xl mx-auto">
          {pickupOptions.map((pickupCount) => {
            const planDetails = pricingData[selectedBags][pickupCount];
            const isSelected = selectedPickups === pickupCount;
            
            return (
              <div
                key={pickupCount}
                onClick={() => handlePickupSelect(pickupCount)}
                className={`group flex items-center justify-between p-5 border cursor-pointer transition-all duration-300 rounded-[1.5rem]
                  ${isSelected ? 'shadow-[0_12px_24px_rgba(197,160,89,0.15)] transform scale-[1.02] border-[#C5A059]' : 'border-gray-100 bg-white hover:border-[#C5A059] hover:bg-[#C5A059]/5 hover:scale-[1.02] hover:shadow-lg'}`}
                style={isSelected ? { backgroundColor: brand.copperLight } : {}}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className={`p-3 rounded-xl transition-all duration-300 ${!isSelected ? 'bg-gray-100 text-gray-400 group-hover:bg-[#082219] group-hover:text-[#C5A059] group-hover:shadow-md' : 'bg-[#082219] text-[#C5A059] shadow-md'}`}
                  >
                    <Truck size={20} />
                  </div>
                  <div>
                    <p className="font-black text-[#082219] uppercase tracking-wide">{pickupCount} {pickupCount === 1 ? 'Pick up' : 'Pick ups'}</p>
                    <p className="text-sm text-gray-500 font-bold mt-0.5">£{planDetails.total} / month</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  <span className="text-[10px] uppercase font-black tracking-widest text-gray-400">Per Bag</span>
                  <span className={`text-2xl font-black leading-none mt-1 transition-colors duration-300 ${isSelected ? 'text-[#082219]' : 'text-gray-800 group-hover:text-[#082219]'}`}>£{planDetails.perBag}</span>
                  <span className="text-xs font-bold text-gray-400 mt-1">£{(planDetails.perBag / 10).toFixed(2)} / kg</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center max-w-xl mx-auto pt-8">
          <button 
            onClick={() => setStep(1)}
            className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-[#082219] transition-colors font-bold uppercase tracking-widest text-sm"
          >
            <ArrowLeft size={16} /> Back
          </button>
          
          <button
            disabled={!selectedPickups}
            onClick={handleNextToInfo}
            className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black uppercase tracking-widest transition-all
              ${selectedPickups 
                ? 'bg-[#082219] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#082219] shadow-[0_8px_20px_rgba(8,34,25,0.2)] hover:shadow-[0_12px_24px_rgba(197,160,89,0.3)]' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
          >
            Continue <ArrowRight size={18} className={selectedPickups ? "translate-x-0 group-hover:translate-x-1.5 transition-transform" : ""} />
          </button>
        </div>
      </div>
    );
  };

  const renderStep3 = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-[#082219] uppercase italic tracking-tight">Your Flydry Bag</h2>
        <p className="text-gray-500 mt-3 font-medium">How your monthly quota works</p>
      </div>

      <div className="bg-white border rounded-[1.5rem] overflow-hidden shadow-sm border-gray-100">
        <div className="h-64 bg-gray-50 w-full relative overflow-hidden flex items-center justify-center p-8">
            {/* Radial glow behind the bag for a premium studio feel */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.1)_0%,transparent_70%)]"></div>
            <img 
              src="https://raw.githubusercontent.com/asho221/Flydry-website/main/FDbag.png" 
              alt="Flydry Wash & Fold Bag" 
              className="w-full h-full object-contain relative z-10 hover:scale-105 transition-transform duration-700 drop-shadow-xl"
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?auto=format&fit=crop&q=80&w=800"; 
                e.target.className = "w-full h-full object-cover opacity-80 mix-blend-luminosity";
              }}
            />
            <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none z-20">
              <span className="text-[#C5A059] px-6 py-2 rounded-xl font-black bg-[#082219]/90 backdrop-blur-md shadow-2xl border border-[#C5A059]/20 uppercase tracking-[0.2em] text-[10px]">
                Holds ~10kg
              </span>
            </div>
        </div>
        
        <div className="p-6 space-y-6 bg-white">
          <div className="flex gap-5 items-start">
            <div className="mt-1 bg-gray-50 p-3 rounded-xl shadow-inner border border-gray-100 shrink-0 text-[#082219]">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h4 className="font-black text-[#082219] uppercase tracking-wide">Flexible Monthly Quota</h4>
              <p className="text-sm text-gray-500 leading-relaxed mt-2 font-medium">
                Each bag holds about 10kg. We weigh everything at our facility. If you pack a bit more (e.g., 12kg), no problem! We just deduct the extra from your overall monthly quota.
              </p>
            </div>
          </div>
          
          <div className="flex gap-5 items-start">
            <div className="mt-1 bg-gray-50 p-3 rounded-xl shadow-inner border border-gray-100 shrink-0 text-[#082219]">
              <Calendar size={20} />
            </div>
            <div>
              <h4 className="font-black text-[#082219] uppercase tracking-wide">Unused Quota Rolls Over</h4>
              <p className="text-sm text-gray-500 leading-relaxed mt-2 font-medium">
                Didn't use all your laundry allowance? If you leave more than 1/3rd of your monthly quota unused, it automatically rolls over to your next month!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8">
        <button 
          onClick={() => setStep(2)}
          className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-[#082219] transition-colors font-bold uppercase tracking-widest text-sm"
        >
          <ArrowLeft size={16} /> Back
        </button>
        
        <button
          onClick={() => setStep(4)}
          className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black uppercase tracking-widest transition-all bg-[#082219] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#082219] shadow-[0_8px_20px_rgba(8,34,25,0.2)] hover:shadow-[0_12px_24px_rgba(197,160,89,0.3)]"
        >
          Review Plan <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="max-w-xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-[#082219] uppercase italic tracking-tight">Order Summary</h2>
        <p className="text-gray-500 mt-3 font-medium">Review your subscription details</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {[
          { months: 1, label: 'Monthly', save: null },
          { months: 3, label: '3 Months', save: 'Save 5%' },
          { months: 6, label: '6 Months', save: 'Save 10%' },
          { months: 12, label: 'Annual', save: 'Save 20%' }
        ].map(opt => (
          <button
            key={opt.months}
            onClick={() => setBillingCycle(opt.months)}
            className={`group flex flex-col items-center p-5 rounded-[1.5rem] border transition-all duration-300 ${billingCycle === opt.months ? 'shadow-[0_12px_24px_rgba(197,160,89,0.15)] border-[#C5A059]' : 'border-gray-100 bg-white hover:border-[#C5A059] hover:bg-[#C5A059]/5'}`}
            style={billingCycle === opt.months ? { backgroundColor: brand.copperLight } : {}}
          >
            <span className={`font-black uppercase tracking-wide transition-colors duration-300 ${billingCycle === opt.months ? 'text-[#082219]' : 'text-gray-500 group-hover:text-[#082219]'}`}>{opt.label}</span>
            {opt.save && (
              <span className={`text-[10px] font-black uppercase tracking-widest mt-2 px-3 py-1 rounded-full transition-colors duration-300 ${billingCycle === opt.months ? 'bg-[#082219] text-[#C5A059]' : 'bg-[#082219]/5 text-[#082219] group-hover:bg-[#082219] group-hover:text-[#C5A059]'}`}>{opt.save}</span>
            )}
          </button>
        ))}
      </div>

      <div className="bg-white border border-gray-100 rounded-[1.5rem] shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 border-b border-gray-100 space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 text-gray-500">
              <ShoppingBag size={20} className="text-[#082219]" />
              <span className="font-bold uppercase tracking-wide text-sm">Bags selected</span>
            </div>
            <span className="font-black text-[#082219] text-lg">{selectedBags} {selectedBags === 1 ? 'Bag' : 'Bags'}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 text-gray-500">
              <Truck size={20} className="text-[#082219]" />
              <span className="font-bold uppercase tracking-wide text-sm">Pick up frequency</span>
            </div>
            <span className="font-black text-[#082219] text-lg">{selectedPickups} {selectedPickups === 1 ? 'time' : 'times'} / mo</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 text-gray-500">
              <Calendar size={20} className="text-[#082219]" />
              <span className="font-bold uppercase tracking-wide text-sm">Price breakdown</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs font-black px-3 py-1.5 rounded-lg uppercase tracking-widest bg-[#082219]/5 text-[#082219]">
                £{discountedPerBag.toFixed(2)} / bag
              </span>
              <span className="text-xs text-gray-400 mt-2 font-bold tracking-widest">
                (£{(discountedPerBag / 10).toFixed(2)} / kg)
              </span>
            </div>
          </div>
        </div>
        
        <div className="p-6 md:p-8 bg-gray-50 flex flex-col gap-5">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black mb-2">Equivalent to</p>
              {savingsPerMonth > 0 && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black shadow-sm bg-[#082219] text-[#C5A059] uppercase tracking-wide">
                  <Sparkles size={12} /> Save £{savingsPerMonth.toFixed(2)} / mo
                </div>
              )}
            </div>
            <div className="text-right flex items-end gap-3 justify-end">
              {savingsPerMonth > 0 && (
                <span className="text-xl text-gray-400 line-through mb-1 font-bold">£{normalCost.toFixed(2)}</span>
              )}
              <span className="text-4xl md:text-5xl font-black text-[#082219] tracking-tighter leading-none">£{discountedMonthly.toFixed(2)}</span>
              <span className="text-gray-500 font-bold mb-1 uppercase tracking-widest text-xs">/mo</span>
            </div>
          </div>
          
          {billingCycle > 1 && (
            <div className="border-t border-gray-200 pt-5 mt-2 flex justify-between items-center">
              <span className="text-xs font-black uppercase tracking-widest text-gray-500">Billed upfront ({billingCycle} mo)</span>
              <span className="text-2xl font-black text-[#082219]">£{upfrontTotal.toFixed(2)}</span>
            </div>
          )}
        </div>
      </div>

      <div className="pt-6 space-y-4">
        <button
          onClick={handleSubscribe}
          disabled={isProcessing}
          className="w-full flex justify-center items-center gap-3 px-8 py-5 rounded-xl font-black uppercase tracking-widest transition-all bg-[#082219] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#082219] shadow-[0_8px_20px_rgba(8,34,25,0.2)] hover:shadow-[0_12px_24px_rgba(197,160,89,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isProcessing ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-current"></div>
          ) : (
            <>
              <CreditCard size={20} />
              Pay £{upfrontTotal.toFixed(2)} Today
            </>
          )}
        </button>
        <button 
          onClick={() => setStep(2)}
          className="w-full text-center text-gray-400 hover:text-[#082219] py-3 font-bold uppercase tracking-widest text-sm transition-colors"
        >
          Modify Selection
        </button>
      </div>
    </div>
  );

  const renderStep5 = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1); 
    const minDateString = today.toISOString().split('T')[0];

    const upsellTotal = selectedUpsells.reduce((total, id) => {
      const item = upsellOptions.find(u => u.id === id);
      return total + (item ? item.discounted : 0);
    }, 0);

    return (
      <div className="max-w-xl mx-auto space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
        <div className="text-center mb-10">
          <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg bg-[#082219] text-[#C5A059]">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#082219] uppercase italic tracking-tight">Payment Successful!</h2>
          <p className="text-gray-500 mt-3 font-medium">Let's schedule your {selectedPickups} monthly {selectedPickups === 1 ? 'pickup' : 'pickups'}.</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-[1.5rem] shadow-sm overflow-hidden p-6 md:p-8 space-y-6">
           <div>
             <label className="block text-xs font-black uppercase tracking-widest text-[#082219] mb-3">Select your first pickup</label>
             <div className="flex flex-col sm:flex-row gap-3">
               <input 
                 type="date" 
                 min={minDateString}
                 value={pickupDates[0] || ""}
                 onChange={handleFirstDateChange}
                 className="w-full sm:w-1/2 p-4 border-2 rounded-xl focus:outline-none focus:ring-0 font-bold text-gray-800 transition-colors uppercase tracking-wide text-sm"
                 style={{ 
                   borderColor: pickupDates[0] ? brand.copper : '#f3f4f6',
                   backgroundColor: pickupDates[0] ? brand.copperLight : '#f9fafb'
                 }}
               />
               {pickupDates.length > 0 && (
                 <select
                   value={pickupTimes[0] || ""}
                   onChange={(e) => handleTimeChange(0, e.target.value)}
                   className="w-full sm:w-1/2 p-4 border-2 rounded-xl focus:outline-none focus:ring-0 font-bold text-gray-800 transition-colors bg-white cursor-pointer uppercase tracking-wide text-sm"
                   style={{ borderColor: brand.copper }}
                 >
                   {timeSlotOptions.map(slot => (
                     <option key={slot} value={slot}>{slot}</option>
                   ))}
                 </select>
               )}
             </div>
           </div>
           
           {pickupDates.length > 0 && selectedPickups > 1 && (
             <div className="mt-8 pt-8 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#082219] mb-2">Your schedule this month:</h4>
                <p className="text-sm text-gray-500 mb-5 font-medium">{getIntervalText()}</p>
                <div className="space-y-3">
                  {pickupDates.map((dateStr, idx) => {
                    if (idx === 0) return null;
                    return (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center text-sm font-black shadow-sm shrink-0 bg-[#082219] text-[#C5A059]">
                          {idx + 1}
                        </div>
                        <div className="flex-1 flex flex-col sm:flex-row gap-3">
                           <input 
                             type="date"
                             min={pickupDates[idx-1] || minDateString}
                             value={dateStr}
                             onChange={(e) => handleOtherDateChange(idx, e.target.value)}
                             className="w-full sm:w-1/2 p-3 border-2 border-transparent rounded-xl focus:outline-none font-bold text-gray-800 bg-white uppercase tracking-wide text-sm"
                             style={{ outlineColor: brand.copper }}
                           />
                           <select
                             value={pickupTimes[idx] || ""}
                             onChange={(e) => handleTimeChange(idx, e.target.value)}
                             className="w-full sm:w-1/2 p-3 border-2 border-transparent rounded-xl focus:outline-none font-bold text-gray-800 bg-white cursor-pointer uppercase tracking-wide text-sm"
                             style={{ outlineColor: brand.copper }}
                           >
                             {timeSlotOptions.map(slot => (
                               <option key={slot} value={slot}>{slot}</option>
                             ))}
                           </select>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 flex gap-3 items-start p-4 rounded-xl shadow-inner bg-[#082219]/5 border border-[#082219]/10">
                   <Clock size={18} className="shrink-0 mt-0.5 text-[#082219]" />
                   <p className="text-xs font-bold leading-relaxed text-[#082219]">
                     Don't worry! You can easily change these dates later from your dashboard, up to 48 hours before your scheduled pickup time.
                   </p>
                </div>
             </div>
           )}

           {pickupDates.length > 0 && selectedPickups === 1 && (
             <div className="mt-6 flex gap-3 items-start p-4 rounded-xl shadow-inner bg-[#082219]/5 border border-[#082219]/10">
               <Clock size={18} className="shrink-0 mt-0.5 text-[#082219]" />
               <p className="text-xs font-bold leading-relaxed text-[#082219]">
                 {getIntervalText()} Don't worry, you can easily reschedule later from your dashboard up to 48 hours before.
               </p>
             </div>
           )}

           {pickupDates.length > 0 && (
             <div className="mt-8 pt-8 border-t border-gray-100 animate-in fade-in duration-500">
               <div className="flex justify-between items-end mb-5">
                 <div>
                   <h4 className="text-sm font-black uppercase tracking-tight text-[#082219]">Need anything else collected?</h4>
                   <p className="text-xs text-gray-500 mt-1.5 font-bold">Add one-off items now with your exclusive subscriber discount.</p>
                 </div>
               </div>
               
               <div className="space-y-3">
                 {upsellOptions.map((upsell) => {
                   const isSelected = selectedUpsells.includes(upsell.id);
                   const Icon = upsell.icon;
                   return (
                     <div 
                       key={upsell.id}
                       onClick={() => toggleUpsell(upsell.id)}
                       className={`flex items-center justify-between p-4 rounded-[1.2rem] border-2 cursor-pointer transition-all duration-300 ${isSelected ? 'shadow-[0_4px_15px_rgba(197,160,89,0.15)] border-[#C5A059]' : 'border-gray-100 hover:border-[#C5A059]/40 bg-white'}`}
                       style={isSelected ? { backgroundColor: brand.copperLight } : {}}
                     >
                       <div className="flex items-center gap-4">
                         <div className={`p-3 rounded-xl transition-colors ${isSelected ? 'bg-[#082219] text-[#C5A059] shadow-md' : 'bg-gray-50 text-gray-400'}`}>
                           <Icon size={20} />
                         </div>
                         <div>
                           <p className={`font-black uppercase tracking-wide text-sm ${isSelected ? 'text-[#082219]' : 'text-gray-600'}`}>{upsell.title}</p>
                           <div className="flex items-center gap-2 mt-1">
                             <span className="text-[11px] text-gray-400 line-through font-bold">£{upsell.original}</span>
                             <span className={`text-sm font-black ${isSelected ? 'text-[#C5A059]' : 'text-[#082219]'}`}>£{upsell.discounted}</span>
                           </div>
                         </div>
                       </div>
                       
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isSelected ? 'bg-[#082219] text-[#C5A059]' : 'border-2 border-gray-200 text-gray-300'}`}>
                         {isSelected ? <Check size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                       </div>
                     </div>
                   );
                 })}
               </div>
             </div>
           )}
        </div>

        <div className="pt-6">
          <button
            onClick={handleConfirmSchedule}
            disabled={!isScheduleValid || isProcessingUpsell}
            className="w-full flex justify-center items-center gap-3 px-8 py-5 rounded-xl font-black uppercase tracking-widest transition-all bg-[#082219] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#082219] shadow-[0_8px_20px_rgba(8,34,25,0.2)] hover:shadow-[0_12px_24px_rgba(197,160,89,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessingUpsell ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-current"></div>
            ) : (
              <>
                {selectedUpsells.length > 0 ? `Pay £${upsellTotal.toFixed(2)} & Confirm` : 'Confirm Schedule'} <ArrowRight size={20} />
              </>
            )}
          </button>
        </div>
      </div>
    );
  };

  const renderSuccess = () => {
    const upsellTotal = selectedUpsells.reduce((total, id) => {
      const item = upsellOptions.find(u => u.id === id);
      return total + (item ? item.discounted : 0);
    }, 0);

    return (
      <div className="text-center py-12 animate-in zoom-in duration-500 space-y-6">
        <div className="mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-xl bg-[#082219] text-[#C5A059]">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#082219] uppercase italic tracking-tight">You're All Set!</h2>
        <div className="text-gray-600 font-medium max-w-md mx-auto leading-relaxed space-y-4">
          <p>
            Your subscription is active and your first pickup is locked in for <strong>{formatDate(pickupDates[0])}</strong> between <strong>{pickupTimes[0]?.split(' ')[0]}</strong>. We'll send you a reminder beforehand.
          </p>
          {selectedUpsells.length > 0 && (
            <div className="p-5 mt-6 rounded-[1.5rem] shadow-sm border border-[#C5A059]/20 text-left bg-[#C5A059]/5">
              <div className="flex justify-between items-start mb-4 border-b border-[#C5A059]/20 pb-3">
                <span className="font-black uppercase tracking-widest text-xs text-[#082219]">Separate Order Confirmed</span>
                <span className="font-black text-[#C5A059]">£{upsellTotal.toFixed(2)} Paid</span>
              </div>
              <ul className="space-y-2.5">
                {selectedUpsells.map(id => {
                  const item = upsellOptions.find(u => u.id === id);
                  return <li key={id} className="flex items-center gap-3 font-bold text-sm text-[#082219]"><Check size={16} className="text-[#C5A059]" /> {item.title}</li>;
                })}
              </ul>
              <p className="mt-4 text-[11px] font-bold text-gray-500 uppercase tracking-widest">Collected alongside your first scheduled pickup.</p>
            </div>
          )}
        </div>
        <button
          onClick={() => {
            setStep(1);
            setSelectedBags(null);
            setSelectedPickups(null);
            setBillingCycle(1);
            setPickupDates([]);
            setPickupTimes([]);
            setSelectedUpsells([]);
            setIsSuccess(false);
          }}
          className="mt-10 px-8 py-4 bg-gray-100 text-[#082219] font-black uppercase tracking-widest text-sm rounded-xl hover:bg-gray-200 transition-colors shadow-sm inline-flex items-center justify-center"
        >
          Go to Dashboard
        </button>
      </div>
    );
  };

  return (
    <div id="subscription-plans" className="w-full bg-white flex flex-col items-center pb-12 sm:pb-16 px-4 sm:px-8 font-sans">
      <div className="w-full max-w-[1300px] bg-white rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(8,34,25,0.06)] border border-gray-100 overflow-hidden p-6 sm:p-10 lg:p-12 relative z-20">
        
        {(!isSuccess && step < 5) && (
          <div className="flex justify-center items-center mb-12">
            <div className="flex items-center w-full max-w-lg">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shadow-sm transition-colors duration-300 ${step >= 1 ? 'bg-[#082219] text-[#C5A059]' : 'bg-gray-100 text-gray-400'}`}
              >1</div>
              <div className={`flex-1 h-1.5 mx-2 rounded-full transition-colors duration-300 ${step >= 2 ? 'bg-[#082219]' : 'bg-gray-100'}`}></div>
              
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shadow-sm transition-colors duration-300 ${step >= 2 ? 'bg-[#082219] text-[#C5A059]' : 'bg-gray-100 text-gray-400'}`}
              >2</div>
              <div className={`flex-1 h-1.5 mx-2 rounded-full transition-colors duration-300 ${step >= 3 ? 'bg-[#082219]' : 'bg-gray-100'}`}></div>
              
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shadow-sm transition-colors duration-300 ${step >= 3 ? 'bg-[#082219] text-[#C5A059]' : 'bg-gray-100 text-gray-400'}`}
              >3</div>
              <div className={`flex-1 h-1.5 mx-2 rounded-full transition-colors duration-300 ${step >= 4 ? 'bg-[#082219]' : 'bg-gray-100'}`}></div>
              
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shadow-sm transition-colors duration-300 ${step >= 4 ? 'bg-[#082219] text-[#C5A059]' : 'bg-gray-100 text-gray-400'}`}
              >4</div>
            </div>
          </div>
        )}

        <div className="min-h-[400px] flex flex-col justify-center">
          {isSuccess ? renderSuccess() : step === 1 ? renderStep1() : step === 2 ? renderStep2() : step === 3 ? renderStep3() : step === 4 ? renderStep4() : renderStep5()}
        </div>

      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="w-full flex flex-col bg-[#fdfdfd] overflow-x-hidden">
      <SubscriptionHero />
      <SubscriptionWidget />
    </div>
  );
}
