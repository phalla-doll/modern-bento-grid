'use client';

import { motion } from 'motion/react';
import { 
  ArrowRight, 
  BarChart3, 
  Heart, 
  MoreHorizontal, 
  Play, 
  ShoppingBag, 
  Star, 
  TrendingUp, 
  Users,
  Zap
} from 'lucide-react';
import Image from 'next/image';

export default function BentoGrid() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 max-w-[1600px] mx-auto space-y-6">
      
      {/* Header Section */}
      <header className="mb-12 text-center md:text-left">
        <h1 className="font-serif text-4xl md:text-6xl font-medium mb-4 text-stone-900">
          Design System
        </h1>
        <p className="text-stone-500 max-w-xl text-lg">
          A collection of responsive, high-fidelity components designed for conversion and clarity.
        </p>
      </header>

      {/* Grid Row 1: The "Hero" Mix */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
        
        {/* Card 1: Lifestyle / Sales (Large Image) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-6 lg:col-span-5 relative group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-md transition-all"
        >
          <div className="absolute inset-0">
            <Image 
              src="https://picsum.photos/seed/fashion/800/600" 
              alt="Fashion" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <div className="absolute top-6 left-6">
            <div className="bg-[#EDF259] text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
              <span>Total Sales</span>
              <span className="text-lg">$4.7K</span>
            </div>
          </div>
          <div className="absolute bottom-6 left-6">
             <button className="bg-white text-black px-5 py-2.5 rounded-full font-medium text-sm shadow-lg flex items-center gap-2 hover:bg-stone-50 transition-colors">
               <Heart className="w-4 h-4 text-red-500 fill-red-500" />
               Love it! Going to try it out
             </button>
          </div>
        </motion.div>

        {/* Card 2: Dark Stats Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="col-span-1 md:col-span-6 lg:col-span-3 bg-[#2A1B1B] rounded-3xl p-6 text-white flex flex-col shadow-sm hover:shadow-md transition-all relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="font-serif text-2xl mb-6 leading-tight">Don't take our<br/>word for it.</h3>
            
            {/* Funnel Card */}
            <div className="bg-white rounded-xl p-4 text-black shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex justify-between items-center mb-4">
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Funnel conversion</div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-200" />
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-200" />
                </div>
              </div>
              
              <div className="flex gap-4 items-end h-24">
                {/* Bar 1 */}
                <div className="flex-1 flex flex-col justify-end gap-1 group/bar">
                  <div className="text-[10px] font-bold text-center opacity-0 group-hover/bar:opacity-100 transition-opacity">82%</div>
                  <div className="w-full bg-pink-200 rounded-t-lg relative overflow-hidden h-[82%]">
                    <div className="absolute inset-0 bg-pink-300/50" />
                  </div>
                  <div className="text-[9px] text-center font-medium text-stone-500 leading-tight">Conversion</div>
                </div>
                
                {/* Bar 2 */}
                <div className="flex-1 flex flex-col justify-end gap-1 group/bar">
                  <div className="text-[10px] font-bold text-center opacity-0 group-hover/bar:opacity-100 transition-opacity">76.6%</div>
                  <div className="w-full bg-emerald-200 rounded-t-lg relative overflow-hidden h-[76%]">
                    <div className="absolute inset-0 bg-emerald-300/50" />
                  </div>
                  <div className="text-[9px] text-center font-medium text-stone-500 leading-tight">Added to cart</div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 bg-stone-50 p-2 rounded-lg">
                 <div className="w-6 h-6 rounded bg-stone-200 relative overflow-hidden">
                    <Image src="https://picsum.photos/seed/shoe/100/100" alt="Product" fill className="object-cover" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <div className="text-[10px] font-bold truncate">Nike Runner</div>
                   <div className="text-[9px] text-stone-400">Shoppable Video</div>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
        </motion.div>

        {/* Card 3: Testimonial & Revenue Stack */}
        <div className="col-span-1 md:col-span-12 lg:col-span-4 flex flex-col gap-6">
          {/* Testimonial */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 bg-stone-200 rounded-3xl p-6 relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-blue-400/30" />
             <div className="relative z-10 h-full flex flex-col justify-between">
               <div className="flex gap-4">
                 <div className="w-16 h-16 rounded-2xl overflow-hidden relative flex-shrink-0">
                   <Image src="https://picsum.photos/seed/girl/200/200" alt="User" fill className="object-cover" />
                 </div>
                 <p className="text-sm font-medium leading-relaxed text-stone-800">
                   "Great App! Great customer service! Prompt replies and help to customize the fonts and other things in the App Widgets. Thank you!"
                 </p>
               </div>
               <div className="flex items-center gap-3 mt-4">
                 <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
                   <Zap className="w-4 h-4" />
                 </div>
                 <div>
                   <div className="font-bold text-sm">Jamie</div>
                   <div className="text-xs text-stone-500">Roverlund founder</div>
                 </div>
               </div>
             </div>
          </motion.div>

          {/* Revenue */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-32 bg-white rounded-3xl p-6 flex flex-col justify-center shadow-sm relative overflow-hidden"
          >
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-5">
              <TrendingUp className="w-24 h-24" />
            </div>
            <div className="text-4xl font-serif font-medium text-stone-900">$140.1K</div>
            <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mt-1">Reelup Revenue</div>
          </motion.div>
        </div>
      </div>

      {/* Grid Row 2: Hero Feature Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left: Product Card Vertical */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-1 md:col-span-4 lg:col-span-3 bg-white rounded-3xl p-4 shadow-sm flex flex-col gap-4"
        >
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100">
             <Image src="https://picsum.photos/seed/model2/600/800" alt="Product" fill className="object-cover" />
             
             {/* Floating UI Elements on Image */}
             <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
               <div className="bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold shadow-sm">
                 2:01
               </div>
               <div className="bg-white/90 backdrop-blur p-1.5 rounded-full shadow-sm">
                 <MoreHorizontal className="w-4 h-4" />
               </div>
             </div>

             <div className="absolute bottom-4 left-4 right-4 space-y-2">
               <div className="bg-white/90 backdrop-blur p-2 rounded-xl shadow-lg flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white -rotate-45" />
                  </div>
                  <span className="text-[10px] font-medium">Increase Sales</span>
               </div>
               <div className="bg-white/90 backdrop-blur p-2 rounded-xl shadow-lg flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center">
                    <ShoppingBag className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-[10px] font-medium">Add to cart from video</span>
               </div>
             </div>
          </div>

          <div className="p-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full overflow-hidden relative">
                <Image src="https://picsum.photos/seed/avatar2/100/100" alt="User" fill className="object-cover" />
              </div>
              <div className="text-xs text-stone-500">
                <span className="font-bold text-black block">SABINE Backless Maxi Dress</span>
                <span>in Black • $159.00 USD</span>
              </div>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-stone-800 transition-colors">
              Shop Now
            </button>
          </div>
        </motion.div>

        {/* Right: Hero Main */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="col-span-1 md:col-span-8 lg:col-span-9 bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm flex flex-col items-center text-center"
        >
          <div className="relative z-10 max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6 leading-tight">
              Boost conversions instantly <br/>
              <span className="italic">AI Driven 4x</span>
            </h2>
            <p className="text-stone-500 text-sm md:text-base">
              From concept to conversion — manage thousands of successful influencers ads seamlessly.
            </p>
          </div>

          {/* Phone Mockup Area */}
          <div className="relative w-full max-w-md mx-auto h-[400px]">
            {/* Center Phone */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-48 h-80 bg-black rounded-[2.5rem] border-4 border-stone-800 overflow-hidden shadow-2xl z-20">
              <Image src="https://picsum.photos/seed/smile/400/800" alt="App" fill className="object-cover" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-30" />
            </div>

            {/* Floating Elements Left */}
            <div className="absolute left-0 top-10 z-10 animate-float-slow">
              <div className="bg-white p-3 rounded-2xl shadow-xl border border-stone-100 w-40">
                <div className="h-24 bg-blue-100 rounded-lg mb-2 relative overflow-hidden">
                   <Image src="https://picsum.photos/seed/product1/200/200" alt="Product" fill className="object-cover" />
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-black text-black" />)}
                </div>
              </div>
            </div>

            <div className="absolute left-4 bottom-10 z-30 animate-float-delayed">
              <div className="bg-[#F2F0E9] p-4 rounded-xl shadow-lg border border-stone-200 flex items-center gap-4">
                <BarChart3 className="w-8 h-8 text-black" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-500">Engagement</div>
                  <div className="text-xl font-bold flex items-center gap-1">
                    40% <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center"><ArrowRight className="w-2 h-2 -rotate-45 text-black" /></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements Right */}
            <div className="absolute right-0 top-20 z-10 animate-float">
               <div className="bg-[#FF9B7D] p-4 rounded-2xl shadow-xl w-48 flex items-center justify-between text-white">
                 <div>
                   <div className="text-3xl font-serif font-bold text-black">8<span className="text-sm font-sans font-normal ml-1">items</span></div>
                   <div className="text-[10px] text-black/60 font-bold uppercase">Sold this week</div>
                   <div className="mt-2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded-full inline-block">$12</div>
                 </div>
                 <div className="w-12 h-20 bg-black/10 rounded-lg rotate-12 relative overflow-hidden">
                    <Image src="https://picsum.photos/seed/bottle/100/200" alt="Item" fill className="object-cover" />
                 </div>
               </div>
            </div>

            <div className="absolute right-8 bottom-20 z-10 animate-float-slow">
              <div className="bg-white p-2 rounded-xl shadow-lg border border-stone-100 flex items-center gap-2">
                 <div className="w-8 h-8 rounded-lg overflow-hidden relative">
                   <Image src="https://picsum.photos/seed/eye/100/100" alt="Product" fill className="object-cover" />
                 </div>
                 <div className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">1.5k</div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Grid Row 3: Dark Section & Blog */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Dark About Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="col-span-1 md:col-span-12 lg:col-span-6 bg-[#2A1B1B] rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between min-h-[400px] relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="bg-white/10 text-white/80 text-[10px] font-bold px-3 py-1 rounded-full inline-block mb-6 uppercase tracking-wider">
              // About Us? //
            </div>
            <h3 className="text-2xl md:text-3xl font-medium leading-relaxed max-w-xl">
              Video AI is a shoppable video platform built for modern D2C brands. We turn TikToks, Reels, and UGC into interactive storefronts.
            </h3>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-end justify-between gap-8 mt-12">
             <div className="w-32 h-32 bg-[#3D2A2A] rounded-2xl p-4 rotate-3 shadow-2xl border border-white/5">
                <div className="w-full h-full relative rounded-lg overflow-hidden">
                  <Image src="https://picsum.photos/seed/hat/200/200" alt="Product" fill className="object-cover" />
                </div>
             </div>
             <div className="text-right">
               <h4 className="font-serif text-4xl mb-2">8000+ Brands</h4>
               <p className="text-white/60 text-xs max-w-xs ml-auto mb-6">
                 With fast setup, deep Shopify integration, and AI-powered optimization, ReelUp helps brands boost conversions.
               </p>
               <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-stone-200 transition-colors">
                 Get Started — For Free!
               </button>
             </div>
          </div>
          
          {/* Background Gradient */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
        </motion.div>

        {/* Blog / Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="col-span-1 md:col-span-12 lg:col-span-6 bg-white rounded-3xl p-8 md:p-12 flex flex-col"
        >
          <div className="flex justify-between items-start mb-8">
             <div>
               <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Business Reporting</div>
               <h3 className="font-serif text-4xl text-stone-900">Brands that backed us</h3>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto">
            {[
              { name: "Will Jones", role: "CTO of Gendo", img: "man1" },
              { name: "Sarah Smith", role: "VP Design", img: "woman1" },
              { name: "Mike Ross", role: "Lead Engineer", img: "man2" }
            ].map((person, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square relative rounded-2xl overflow-hidden mb-4 bg-stone-100">
                  <Image 
                    src={`https://picsum.photos/seed/${person.img}/400/400`} 
                    alt={person.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <h4 className="font-bold text-stone-900">{person.name}</h4>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">{person.role}, an engineering leader, software engineer.</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-stone-100 flex justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="font-serif text-xl font-bold">Backed By</div>
             <div className="font-bold text-xl tracking-tighter">TOZO</div>
             <div className="font-serif italic text-xl">HELLBABES</div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
