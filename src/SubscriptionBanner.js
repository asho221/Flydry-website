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
    <section aria-labelledby="subscription-hero-heading" className="relative w-full bg-white text-[#082219] pt-16 pb-10 md:pt-20 md:pb-12 border-b border-gray-100 overflow-hidden font-sans selection:bg-[#C5A059] selection:text-white">
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

  // Gemini API States
  const [showAiHelper, setShowAiHelper] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiRecommendation, setAiRecommendation] = useState(null);
  const [aiError, setAiError] = useState("");

  const fetchWithRetry = async (url, options, maxRetries = 5) => {
    const delays = [1000, 2000, 4000, 8000, 16000];
    for (let i = 0; i < maxRetries; i++) {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          const error = new Error(`HTTP error! status: ${response.status}`);
          error.status = response.status;
          throw error;
        }
        return await response.json();
      } catch (e) {
        if (e.status === 400 || e.status === 401 || e.status === 403 || e.status === 404 || i === maxRetries - 1) {
          throw e;
        }
        await new Promise(resolve => setTimeout(resolve, delays[i]));
      }
    }
  };

  const getAiRecommendation = async () => {
    if (!aiInput.trim()) return;
    setIsAiLoading(true);
    setAiError("");
    setAiRecommendation(null);

    const apiKey = ""; 
    const systemPrompt = `You are an expert laundry assistant for Flydry. 
Recommend a subscription plan based on the user's needs.
Available bags per month: 1, 2, or 4. (1 bag = 10kg).
Available pickups per month:
- 1 bag: exactly 1 pickup
- 2 bags: 1 or 2 pickups
- 4 bags: 1, 2, 3, or 4 pickups

You MUST output ONLY a valid JSON object matching this exact structure:
{
  "bags": (either 1, 2, or 4),
  "pickups": (number based on bags rule),
  "reasoning": "A short, friendly sentence explaining why this plan fits."
}`;

    const payload = {
      contents: [{ parts: [{ text: aiInput }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
      generationConfig: { 
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            bags: { type: "INTEGER" },
            pickups: { type: "INTEGER" },
            reasoning: { type: "STRING" }
          }
        }
      }
    };

    try {
      const data = await fetchWithRetry(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }
      );
      
      let resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (resultText) {
        resultText = resultText.replace(/```json/gi, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(resultText);
        setAiRecommendation(parsed);
      } else {
        throw new Error("Invalid or empty response format from AI");
      }
    } catch (err) {
      console.error("AI Assistant Error:", err);
      
      const lowerInput = aiInput.toLowerCase();
      let fallbackRec = { bags: 1, pickups: 1, reasoning: "Our 1-bag plan with 1 pickup is a great starting point." };
      
      if (lowerInput.includes("family") || lowerInput.includes("kids") || lowerInput.includes("four") || lowerInput.includes("4")) {
        fallbackRec = { bags: 4, pickups: 4, reasoning: "For families, our 4-bag plan with weekly pickups is the most convenient to keep up with laundry." };
      } else if (lowerInput.includes("couple") || lowerInput.includes("partner") || lowerInput.includes("two") || lowerInput.includes("2") || lowerInput.includes("wife") || lowerInput.includes("husband")) {
        fallbackRec = { bags: 2, pickups: 2, reasoning: "For couples or active individuals, 2 bags and bi-weekly pickups usually works perfectly." };
      }

      setAiRecommendation(fallbackRec);
      setAiError(err.status === 401 
        ? "Note: Live connection expired. Displaying offline smart recommendation instead." 
        : "Note: Live AI unavailable. Displaying offline smart recommendation instead.");
    } finally {
      setIsAiLoading(false);
    }
  };

  const applyAiRecommendation = () => {
    if (aiRecommendation) {
      setSelectedBags(aiRecommendation.bags);
      setSelectedPickups(aiRecommendation.pickups);
      setStep(3);
    }
  };

  // Brand Colors mapped from your logo/bag
  const brand = {
    copper: '#C8905B',       
    copperHover: '#A66E3D',  
    copperLight: '#FAF4EE',  
    green: '#155c32',        
    greenLight: '#E8F3ED',   
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
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Choose your plan</h2>
        <p className="text-gray-500 mt-2">Select how many bags you need to be serviced per month.</p>
        
        {/* Gemini AI Integration */}
        <div className="mt-6 max-w-xl mx-auto">
          {!showAiHelper ? (
            <button 
              onClick={() => setShowAiHelper(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold shadow-sm transition-all hover:scale-105"
              style={{ backgroundColor: brand.copperLight, color: brand.copperHover }}
            >
              <Sparkles size={16} /> ✨ Not sure? Ask our AI Assistant
            </button>
          ) : (
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-left animate-in fade-in zoom-in duration-300">
              <div className="flex items-center gap-2 mb-3">
                <Bot size={20} style={{ color: brand.copper }} />
                <span className="font-bold text-gray-800">Flydry AI Helper</span>
              </div>
              <textarea 
                value={aiInput}
                onChange={(e) => {
                  setAiInput(e.target.value);
                  setAiRecommendation(null);
                  setAiError("");
                }}
                placeholder="E.g., I live with my partner, we work out a lot and do laundry every 2 weeks..."
                className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 resize-none text-sm"
                rows={2}
              />
              {aiError && <p className="text-orange-500 font-medium text-xs mt-2">{aiError}</p>}
              
              {aiRecommendation ? (
                <div className="mt-4 p-4 rounded-xl shadow-sm border" style={{ backgroundColor: brand.greenLight, borderColor: brand.green }}>
                  <p className="text-sm font-medium mb-3" style={{ color: brand.green }}>
                    <Sparkles size={14} className="inline mr-1" />
                    {aiRecommendation.reasoning}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="font-bold text-gray-900 text-sm">
                      Recommendation: {aiRecommendation.bags} Bags, {aiRecommendation.pickups} Pickups
                    </span>
                    <button 
                      onClick={applyAiRecommendation}
                      className="w-full sm:w-auto px-4 py-2 rounded-full text-white text-sm font-bold transition-all hover:scale-105"
                      style={{ backgroundColor: brand.copper }}
                    >
                      Apply Plan
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-end mt-3">
                  <button 
                    onClick={getAiRecommendation}
                    disabled={isAiLoading || !aiInput.trim()}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-bold disabled:opacity-50 transition-all"
                    style={{ backgroundColor: brand.copper }}
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 4].map((bagCount) => {
          const minPrice = Math.min(...Object.values(pricingData[bagCount]).map(p => p.total));
          
          return (
          <button
            key={bagCount}
            onClick={() => handleBagSelect(bagCount)}
            className={`flex flex-col items-center justify-center p-6 border-2 rounded-2xl transition-all duration-200 
              ${selectedBags === bagCount 
                ? 'shadow-md transform scale-105' 
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'}`}
            style={selectedBags === bagCount ? { borderColor: brand.copper, backgroundColor: brand.copperLight } : {}}
          >
            <div 
              className={`p-4 rounded-full mb-3 ${selectedBags !== bagCount ? 'bg-gray-100 text-gray-400' : ''}`}
              style={selectedBags === bagCount ? { backgroundColor: brand.copper, color: 'white' } : {}}
            >
              <ShoppingBag size={32} strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <span className="text-xl font-bold text-gray-900">{bagCount} {bagCount === 1 ? 'Bag' : 'Bags'}</span>
              <div className="text-xs text-gray-500 font-medium tracking-wide">({bagCount * 10} KG)</div>
            </div>
            
            <div className="mt-4 flex flex-col items-center w-full">
              <div 
                className={`text-sm font-black px-3 py-1 rounded-full border ${selectedBags === bagCount ? 'bg-white' : 'bg-gray-50 border-gray-100 text-gray-900'}`}
                style={selectedBags === bagCount ? { color: brand.copperHover, borderColor: 'rgba(200, 144, 91, 0.3)' } : {}}
              >
                From £{minPrice}<span className="text-xs font-semibold opacity-80">/mo</span>
              </div>
              <span className="text-xs text-gray-500 mt-2 text-center font-medium">
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
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Select pick up frequency</h2>
          <p className="text-gray-500 mt-2">How many times should we pick up your {selectedBags} {selectedBags === 1 ? 'bag' : 'bags'}?</p>
        </div>

        <div className="space-y-3 max-w-xl mx-auto">
          {pickupOptions.map((pickupCount) => {
            const planDetails = pricingData[selectedBags][pickupCount];
            const isSelected = selectedPickups === pickupCount;
            
            return (
              <div
                key={pickupCount}
                onClick={() => handlePickupSelect(pickupCount)}
                className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all duration-200
                  ${isSelected ? 'shadow-md' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                style={isSelected ? { borderColor: brand.copper, backgroundColor: brand.copperLight } : {}}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className={`p-2 rounded-full ${!isSelected ? 'bg-gray-100 text-gray-400' : ''}`}
                    style={isSelected ? { backgroundColor: brand.copper, color: 'white' } : {}}
                  >
                    <Truck size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{pickupCount} {pickupCount === 1 ? 'Pick up' : 'Pick ups'}</p>
                    <p className="text-sm text-gray-500 font-medium">£{planDetails.total} / month</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end" style={{ color: isSelected ? brand.copperHover : '#6b7280' }}>
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Per Bag</span>
                  <span className="text-xl font-black leading-none mt-1">£{planDetails.perBag}</span>
                  <span className="text-xs font-semibold opacity-80 mt-1">£{(planDetails.perBag / 10).toFixed(2)} / kg</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center max-w-xl mx-auto pt-6">
          <button 
            onClick={() => setStep(1)}
            className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-gray-900 transition-colors font-medium"
          >
            <ArrowLeft size={16} /> Back
          </button>
          
          <button
            disabled={!selectedPickups}
            onClick={handleNextToInfo}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all
              ${selectedPickups 
                ? 'text-white shadow-md transform hover:scale-105' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
            style={selectedPickups ? { backgroundColor: brand.copper } : {}}
          >
            Continue <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  };

  const renderStep3 = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Your Flydry Bag</h2>
        <p className="text-gray-500 mt-2">How your monthly quota works</p>
      </div>

      <div className="bg-white border-2 rounded-2xl overflow-hidden shadow-sm" style={{ borderColor: brand.copperLight }}>
        <div className="h-48 bg-gray-100 w-full relative overflow-hidden">
            <img 
              src="/flydry-bag.jpg" 
              alt="Flydry Wash & Fold Bag" 
              className="w-full h-full object-cover"
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?auto=format&fit=crop&q=80&w=800"; 
                e.target.className = "w-full h-full object-cover opacity-80 mix-blend-luminosity";
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white px-5 py-2.5 rounded-lg font-bold backdrop-blur-md shadow-2xl border border-white/20 uppercase tracking-widest text-sm" style={{ backgroundColor: 'rgba(200, 144, 91, 0.85)' }}>
                Holds ~10kg
              </span>
            </div>
        </div>
        
        <div className="p-5 space-y-5" style={{ backgroundColor: brand.copperLight }}>
          <div className="flex gap-4 items-start">
            <div className="mt-1 bg-white p-2.5 rounded-full shadow-sm shrink-0" style={{ color: brand.copper }}>
              <ShoppingBag size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Flexible Monthly Quota</h4>
              <p className="text-sm text-gray-600 leading-relaxed mt-1 font-medium">
                Each bag holds about 10kg. We weigh everything at our facility. If you pack a bit more (e.g., 12kg), no problem! We just deduct the extra from your overall monthly quota.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="mt-1 bg-white p-2.5 rounded-full shadow-sm shrink-0" style={{ color: brand.green }}>
              <Calendar size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Unused Quota Rolls Over</h4>
              <p className="text-sm text-gray-600 leading-relaxed mt-1 font-medium">
                Didn't use all your laundry allowance? If you leave more than 1/3rd of your monthly quota unused, it automatically rolls over to your next month!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-4">
        <button 
          onClick={() => setStep(2)}
          className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-gray-900 transition-colors font-medium"
        >
          <ArrowLeft size={16} /> Back
        </button>
        
        <button
          onClick={() => setStep(4)}
          className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white shadow-md transform hover:scale-105 transition-all"
          style={{ backgroundColor: brand.copper }}
        >
          Review Plan <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="max-w-xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Order Summary</h2>
        <p className="text-gray-500 mt-2">Review your subscription details</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {[
          { months: 1, label: 'Monthly', save: null },
          { months: 3, label: '3 Months', save: 'Save 5%' },
          { months: 6, label: '6 Months', save: 'Save 10%' },
          { months: 12, label: 'Annual', save: 'Save 20%' }
        ].map(opt => (
          <button
            key={opt.months}
            onClick={() => setBillingCycle(opt.months)}
            className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all ${billingCycle === opt.months ? 'shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200'}`}
            style={billingCycle === opt.months ? { borderColor: brand.copper, backgroundColor: brand.copperLight } : {}}
          >
            <span className={`font-bold ${billingCycle === opt.months ? 'text-gray-900' : 'text-gray-600'}`}>{opt.label}</span>
            {opt.save && (
              <span className="text-[10px] font-bold uppercase tracking-wider mt-1 px-2 py-0.5 rounded-full" style={billingCycle === opt.months ? { backgroundColor: brand.copper, color: 'white' } : { backgroundColor: brand.greenLight, color: brand.green }}>{opt.save}</span>
            )}
          </button>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 space-y-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 text-gray-600">
              <ShoppingBag size={18} style={{ color: brand.copper }} />
              <span className="font-medium">Bags selected</span>
            </div>
            <span className="font-bold text-gray-900">{selectedBags} {selectedBags === 1 ? 'Bag' : 'Bags'}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 text-gray-600">
              <Truck size={18} style={{ color: brand.copper }} />
              <span className="font-medium">Pick up frequency</span>
            </div>
            <span className="font-bold text-gray-900">{selectedPickups} {selectedPickups === 1 ? 'time' : 'times'} / mo</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 text-gray-600">
              <Calendar size={18} style={{ color: brand.copper }} />
              <span className="font-medium">Price breakdown</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-bold px-3 py-1 rounded-md" style={{ backgroundColor: brand.copperLight, color: brand.copperHover }}>
                £{discountedPerBag.toFixed(2)} / bag
              </span>
              <span className="text-xs text-gray-500 mt-1.5 font-semibold">
                (£{(discountedPerBag / 10).toFixed(2)} / kg)
              </span>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Equivalent to</p>
              {savingsPerMonth > 0 && (
                <div className="inline-block mt-2 px-3 py-1 rounded-full text-sm font-bold shadow-sm" style={{ backgroundColor: brand.greenLight, color: brand.green }}>
                  Save £{savingsPerMonth.toFixed(2)} / month
                </div>
              )}
            </div>
            <div className="text-right flex items-end gap-3 justify-end">
              {savingsPerMonth > 0 && (
                <span className="text-xl text-gray-400 line-through mb-1 font-medium">£{normalCost.toFixed(2)}</span>
              )}
              <span className="text-4xl font-black text-gray-900 tracking-tight leading-none">£{discountedMonthly.toFixed(2)}</span>
              <span className="text-gray-500 font-bold mb-1">/mo</span>
            </div>
          </div>
          
          {billingCycle > 1 && (
            <div className="border-t border-gray-200 pt-4 mt-2 flex justify-between items-center">
              <span className="text-sm font-bold text-gray-600">Billed upfront ({billingCycle} months)</span>
              <span className="text-xl font-black text-gray-900">£{upfrontTotal.toFixed(2)}</span>
            </div>
          )}
        </div>
      </div>

      <div className="pt-4 space-y-3">
        <button
          onClick={handleSubscribe}
          disabled={isProcessing}
          className="w-full flex justify-center items-center gap-2 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          style={{ backgroundColor: brand.copper }}
        >
          {isProcessing ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          ) : (
            <>
              <CreditCard size={20} />
              Pay £{upfrontTotal.toFixed(2)} Today
            </>
          )}
        </button>
        <button 
          onClick={() => setStep(2)}
          className="w-full text-center text-gray-500 hover:text-gray-900 py-2 font-semibold transition-colors"
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
        <div className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-sm" style={{ backgroundColor: brand.greenLight, color: brand.green }}>
            <CheckCircle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Payment Successful!</h2>
          <p className="text-gray-500 mt-2">Let's schedule your {selectedPickups} monthly {selectedPickups === 1 ? 'pickup' : 'pickups'}.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden p-6 space-y-5">
           <div>
             <label className="block text-sm font-bold text-gray-900 mb-2">Select your first pickup date & time</label>
             <div className="flex flex-col sm:flex-row gap-3">
               <input 
                 type="date" 
                 min={minDateString}
                 value={pickupDates[0] || ""}
                 onChange={handleFirstDateChange}
                 className="w-full sm:w-1/2 p-4 border-2 rounded-xl border-gray-200 focus:outline-none focus:ring-0 text-gray-800 font-medium transition-colors"
                 style={{ 
                   borderColor: pickupDates[0] ? brand.copper : '#e5e7eb',
                   backgroundColor: pickupDates[0] ? brand.copperLight : 'white'
                 }}
               />
               {pickupDates.length > 0 && (
                 <select
                   value={pickupTimes[0] || ""}
                   onChange={(e) => handleTimeChange(0, e.target.value)}
                   className="w-full sm:w-1/2 p-4 border-2 rounded-xl border-gray-200 focus:outline-none focus:ring-0 text-gray-800 font-medium transition-colors bg-white cursor-pointer"
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
             <div className="mt-6 pt-6 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Your schedule this month:</h4>
                <p className="text-xs text-gray-500 mb-4">{getIntervalText()}</p>
                <div className="space-y-3">
                  {pickupDates.map((dateStr, idx) => {
                    if (idx === 0) return null;
                    return (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 sm:p-3 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="hidden sm:flex w-8 h-8 rounded-full items-center justify-center text-sm font-bold shadow-sm shrink-0" style={{ backgroundColor: brand.copper, color: 'white' }}>
                          {idx + 1}
                        </div>
                        <div className="flex-1 flex flex-col sm:flex-row gap-2">
                           <input 
                             type="date"
                             min={pickupDates[idx-1] || minDateString}
                             value={dateStr}
                             onChange={(e) => handleOtherDateChange(idx, e.target.value)}
                             className="w-full sm:w-1/2 p-3 sm:p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 text-gray-800 font-medium bg-white"
                             style={{ outlineColor: brand.copper }}
                           />
                           <select
                             value={pickupTimes[idx] || ""}
                             onChange={(e) => handleTimeChange(idx, e.target.value)}
                             className="w-full sm:w-1/2 p-3 sm:p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 text-gray-800 font-medium bg-white cursor-pointer"
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
                <div className="mt-5 flex gap-3 items-start p-4 rounded-xl shadow-sm" style={{ backgroundColor: brand.greenLight }}>
                   <Clock size={18} className="shrink-0 mt-0.5" style={{ color: brand.green }} />
                   <p className="text-xs font-semibold leading-relaxed" style={{ color: brand.green }}>
                     Don't worry! You can easily change these dates later from your dashboard, up to 48 hours before your scheduled pickup time.
                   </p>
                </div>
             </div>
           )}

           {pickupDates.length > 0 && selectedPickups === 1 && (
             <div className="mt-4 flex gap-3 items-start p-4 rounded-xl shadow-sm" style={{ backgroundColor: brand.greenLight }}>
               <Clock size={18} className="shrink-0 mt-0.5" style={{ color: brand.green }} />
               <p className="text-xs font-semibold leading-relaxed" style={{ color: brand.green }}>
                 {getIntervalText()} Don't worry, you can easily reschedule later from your dashboard up to 48 hours before.
               </p>
             </div>
           )}

           {pickupDates.length > 0 && (
             <div className="mt-6 pt-6 border-t border-gray-100 animate-in fade-in duration-500">
               <div className="flex justify-between items-end mb-4">
                 <div>
                   <h4 className="text-sm font-bold text-gray-900">Need anything else on your first pickup?</h4>
                   <p className="text-xs text-gray-500 mt-1">Add one-off items now with your exclusive subscriber discount.</p>
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
                       className={`flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${isSelected ? 'shadow-sm' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
                       style={isSelected ? { borderColor: brand.copper, backgroundColor: brand.copperLight } : {}}
                     >
                       <div className="flex items-center gap-3">
                         <div className={`p-2 rounded-full ${isSelected ? 'bg-white shadow-sm' : 'bg-gray-50 text-gray-400'}`} style={isSelected ? { color: brand.copper } : {}}>
                           <Icon size={18} />
                         </div>
                         <div>
                           <p className={`font-bold text-sm ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>{upsell.title}</p>
                           <div className="flex items-center gap-2 mt-0.5">
                             <span className="text-xs text-gray-400 line-through">£{upsell.original}</span>
                             <span className="text-sm font-black" style={{ color: isSelected ? brand.copperHover : brand.green }}>£{upsell.discounted}</span>
                           </div>
                         </div>
                       </div>
                       
                       <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${isSelected ? 'border-transparent text-white' : 'border-gray-300 text-transparent'}`} style={isSelected ? { backgroundColor: brand.copper } : {}}>
                         {isSelected ? <Check size={14} strokeWidth={3} /> : <Plus size={14} className="text-gray-400" />}
                       </div>
                     </div>
                   );
                 })}
               </div>
             </div>
           )}
        </div>

        <div className="pt-2">
          <button
            onClick={handleConfirmSchedule}
            disabled={!isScheduleValid || isProcessingUpsell}
            className="w-full flex justify-center items-center gap-2 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: brand.copper }}
          >
            {isProcessingUpsell ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
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
      <div className="text-center py-10 animate-in zoom-in duration-500 space-y-6">
        <div className="mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-sm" style={{ backgroundColor: brand.greenLight, color: brand.green }}>
          <CheckCircle size={48} />
        </div>
        <h2 className="text-3xl font-black text-gray-900 tracking-tight">You're All Set!</h2>
        <div className="text-gray-600 font-medium max-w-sm mx-auto leading-relaxed space-y-3">
          <p>
            Your subscription is active and your first pickup is locked in for <strong>{formatDate(pickupDates[0])}</strong> between <strong>{pickupTimes[0]?.split(' ')[0]}</strong>. We'll send you a reminder beforehand.
          </p>
          {selectedUpsells.length > 0 && (
            <div className="p-4 mt-4 rounded-xl text-sm shadow-sm border text-left" style={{ backgroundColor: brand.copperLight, borderColor: brand.copper, color: brand.copperHover }}>
              <div className="flex justify-between items-start mb-3 border-b pb-2" style={{ borderColor: 'rgba(200, 144, 91, 0.2)' }}>
                <span className="font-black tracking-tight">Separate Order Confirmed</span>
                <span className="font-bold">£{upsellTotal.toFixed(2)} Paid</span>
              </div>
              <ul className="space-y-1.5">
                {selectedUpsells.map(id => {
                  const item = upsellOptions.find(u => u.id === id);
                  return <li key={id} className="flex items-center gap-2"><Check size={14} /> {item.title}</li>;
                })}
              </ul>
              <p className="mt-3 text-xs opacity-90 font-medium">These items will be collected alongside your first scheduled pickup.</p>
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
          className="mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-bold rounded-full hover:bg-gray-200 transition-colors shadow-sm"
        >
          Go to Dashboard (Start Over)
        </button>
      </div>
    );
  };

  return (
    <div id="subscription-plans" className="w-full bg-[#FDFDFD] flex flex-col items-center py-12 sm:py-16 px-4 sm:px-8 font-sans border-t border-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden p-6 sm:p-10">
        
        {(!isSuccess && step < 5) && (
          <div className="flex justify-center items-center mb-10">
            <div className="flex items-center w-full max-w-lg">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${step >= 1 ? 'text-white' : 'bg-gray-100 text-gray-400'}`}
                style={step >= 1 ? { backgroundColor: brand.copper } : {}}
              >1</div>
              <div className={`flex-1 h-1 mx-1 sm:mx-2 rounded-full ${step >= 2 ? '' : 'bg-gray-100'}`} style={step >= 2 ? { backgroundColor: brand.copper } : {}}></div>
              
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${step >= 2 ? 'text-white' : 'bg-gray-100 text-gray-400'}`}
                style={step >= 2 ? { backgroundColor: brand.copper } : {}}
              >2</div>
              <div className={`flex-1 h-1 mx-1 sm:mx-2 rounded-full ${step >= 3 ? '' : 'bg-gray-100'}`} style={step >= 3 ? { backgroundColor: brand.copper } : {}}></div>
              
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${step >= 3 ? 'text-white' : 'bg-gray-100 text-gray-400'}`}
                style={step >= 3 ? { backgroundColor: brand.copper } : {}}
              >3</div>
              <div className={`flex-1 h-1 mx-1 sm:mx-2 rounded-full ${step >= 4 ? '' : 'bg-gray-100'}`} style={step >= 4 ? { backgroundColor: brand.copper } : {}}></div>
              
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${step >= 4 ? 'text-white' : 'bg-gray-100 text-gray-400'}`}
                style={step >= 4 ? { backgroundColor: brand.copper } : {}}
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

// --- MASTER APP COMPONENT ---
// This safely loads BOTH components into one seamless page.
export default function App() {
  return (
    <div className="w-full flex flex-col bg-[#fdfdfd] overflow-x-hidden">
      <SubscriptionHero />
      <SubscriptionWidget />
    </div>
  );
}
