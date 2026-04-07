/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { 
  Award, 
  Briefcase, 
  ChevronRight, 
  Globe, 
  Mail, 
  Menu, 
  X, 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  BookOpen,
  Linkedin,
  ArrowUpRight
} from 'lucide-react';

// Tells TypeScript that Razorpay is attached to the window object
declare global {
  interface Window {
    Razorpay: any;
  }
}

// Shared Content for Modals
const policyContent = {
  privacy: {
    title: "Privacy Policy",
    text: "Your privacy is of utmost importance. As an executive mentorship service, I handle all personal information with strict confidentiality. Any data collected through this website—including your name, contact details, and professional goals—is used solely for the purpose of scheduling and conducting our mentoring sessions. We do not sell, trade, or otherwise transfer your information to third parties. Your data is protected using industry-standard security measures and is retained only as long as necessary to fulfill the service requested."
  },
  terms: {
    title: "Terms of Service",
    text: "By booking a session, you agree to engage in a professional mentorship relationship based on mutual respect and confidentiality. Mentorship advice is based on professional experience and is intended for guidance purposes only; the implementation of any strategies discussed is at the mentee's discretion. Cancellations or rescheduling requests should be made at least 24 hours in advance. We reserve the right to decline mentorship requests that fall outside our areas of expertise or professional standards."
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Mentoring', href: '#mentoring' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-navy">RN</span>
          <div className="h-12 w-[1px] bg-brand-navy/20 hidden sm:block"></div>
          <span className="text-xl md:text-2xl font-bold uppercase tracking-widest hidden sm:block text-brand-navy">Renu Narvekar</span>
        </div>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg md:text-xl font-bold text-brand-navy/80 hover:text-brand-gold transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-gold transition-all shadow-lg shadow-brand-navy/10">
            Book a Session
          </a>
        </div>

        <button className="md:hidden text-brand-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold py-2 border-b border-zinc-50 text-brand-navy">
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-brand-navy text-white px-6 py-4 rounded-xl text-center font-bold mt-2">
              Book a Session
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-sand">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/5 -z-10 hidden lg:block"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6 border border-brand-gold/20">
            <TrendingUp size={14} />
            Executive Career Mentorship
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-6 text-brand-navy">
            Mastering the <br />
            <span className="italic text-brand-gold">Art of Leadership</span> <br />
            and Career Growth.
          </h1>
          <p className="text-lg text-brand-navy/70 mb-8 max-w-lg leading-relaxed font-medium">
            Strategic career mentoring for high-potential professionals. 
            Leveraging 30+ years of global leadership at Standard Chartered, HSBC, TCS, and P&G.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pb-12">
            <a href="#contact" className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-gold transition-all group shadow-xl shadow-brand-navy/20">
              Start Your Journey
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="px-8 py-4 rounded-full font-bold border-2 border-brand-navy/10 text-brand-navy flex items-center justify-center gap-2 hover:bg-white transition-all">
              The Mentor Profile
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative py-12">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white">
            <img src="https://picsum.photos/seed/executive-woman/800/1000" alt="Ms. Renu Narvekar" className="w-full h-full object-cover transition-all duration-700" referrerPolicy="no-referrer" />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-brand-navy to-transparent text-white">
              <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">Ms. Renu Narvekar</p>
              <p className="text-xl font-serif italic">Ex - Managing Director | Global & Regional Tax Leader</p>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold rounded-full -z-10 blur-3xl opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-navy rounded-full -z-10 blur-[100px] opacity-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    { company: "Standard Chartered Bank", role: "MD & Regional Tax Lead – India & South Asia", period: "Most Recent", description: "Leading multi-functional teams across diverse markets and geographies." },
    { company: "Tata Consultancy Services (TCS)", role: "Vice President & Global Head – Taxation", period: "Prior to SCB", description: "Global leadership for an Indian multinational operating in 46 countries." },
    { company: "HSBC UK & Europe", role: "Regional Head of Tax", period: "London Based", description: "Led a team of 60 tax professionals and served as Global Lead for Transfer Pricing." },
    { company: "Procter & Gamble", role: "Group Manager & Head Taxation (India)", period: "1990 - 2006", description: "Built a foundational career in tax leadership over 16 transformative years." }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-4xl mb-6 text-brand-navy">Decades of <br /><span className="italic text-brand-gold">Global Leadership</span></h2>
            <p className="text-brand-navy/60 mb-8 font-medium">A career spanning three decades across marquee global organizations, advising on M&A, structuring, and policy.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-bold text-brand-navy"><CheckCircle2 className="text-brand-gold" size={18} />Qualified Chartered Accountant</div>
              <div className="flex items-center gap-3 text-sm font-bold text-brand-navy"><CheckCircle2 className="text-brand-gold" size={18} />University of Bombay Alumna</div>
              <div className="flex items-center gap-3 text-sm font-bold text-brand-navy"><CheckCircle2 className="text-brand-gold" size={18} />ITR Asia Tax Award Winner</div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="bg-brand-sand p-8 rounded-3xl border border-brand-navy/5 shadow-sm flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-1 text-brand-navy">{exp.company}</h3>
                  <p className="text-brand-gold font-bold mb-3 uppercase text-xs tracking-widest">{exp.role}</p>
                  <p className="text-brand-navy/70 text-sm leading-relaxed font-medium">{exp.description}</p>
                </div>
                <div className="text-xs font-black text-brand-navy/30 whitespace-nowrap uppercase tracking-tighter">{exp.period}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Mentoring = () => {
  const areas = [
    { title: "Career Growth and Strategy", icon: <Users className="text-brand-gold" />, description: "Developing the leadership mindset and communication skills required for boardroom success." },
    { title: "Executive Presence", icon: <Award className="text-brand-gold" />, description: "Navigating transitions from technical roles to global leadership and managing international relocations." },
    { title: "Leadership", icon: <Globe className="text-brand-gold" />, description: "Learning to lead multi-disciplinary teams and represent organizational interests in global forums." },
    { title: "Strategic Advisory", icon: <BookOpen className="text-brand-gold" />, description: "Comprehensive career counselling and strategic advice tailored to your professional trajectory." }
  ];

  return (
    <section id="mentoring" className="section-padding bg-brand-sand">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 text-brand-navy">Mentorship <span className="italic text-brand-gold">Focus</span></h2>
        <p className="text-brand-navy/60 max-w-2xl mx-auto font-medium">Personalized guidance for professionals aiming to transition from technical expertise to strategic global leadership.</p>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {areas.map((area, idx) => (
          <div key={idx} className="p-8 rounded-[2rem] bg-white border border-brand-navy/5 hover:border-brand-gold/30 hover:shadow-2xl transition-all group">
            <div className="w-14 h-14 bg-brand-sand rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-white transition-all">
              {React.cloneElement(area.icon as React.ReactElement, { size: 28 })}
            </div>
            <h3 className="text-xl font-bold mb-4 text-brand-navy">{area.title}</h3>
            <p className="text-brand-navy/60 text-sm leading-relaxed font-medium">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-brand-navy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[150px]"></div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl">
            <img src="https://picsum.photos/seed/mentor-session/800/800" alt="Professional Mentorship" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-brand-gold p-10 rounded-3xl shadow-2xl hidden md:block">
            <p className="text-5xl font-serif italic mb-1 text-brand-navy">30+</p>
            <p className="text-xs uppercase tracking-widest font-black text-brand-navy">Years of Impact</p>
          </div>
        </div>
        <div>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">The Mentor: <br /><span className="italic text-brand-gold">Renu Narvekar</span></h2>
          <div className="space-y-6 text-white/70 leading-relaxed font-medium text-justify">
            <p>Renu is a qualified Chartered Accountant and a Global and Regional Tax Leader, with a career defined by leading multi-disciplinary teams across 46 countries.</p>
            <p>Renu brings over three decades of global tax leadership experience across leading organizations including Procter & Gamble, Standard Chartered, HSBC (India and UK), and Tata Consultancy Services. Her last tenure was at Standard Chartered Bank, where she served as MD & Regional Tax Lead – India & South Asia, driving complex tax strategies, regulatory engagement, and large cross-border teams across diverse industries and geographies.</p>
            <p>As the co-chair of the Bombay Chamber of Commerce and Industry Tax Committee and an active OECD participant, she brings a unique blend of technical mastery and strategic policy insight to her mentees.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10"><Award size={24} className="text-brand-gold" /></div>
              <span className="text-sm font-bold uppercase tracking-wider">ITR Asia Tax Award</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10"><Briefcase size={24} className="text-brand-gold" /></div>
              <span className="text-sm font-bold uppercase tracking-wider">Bombay Chamber Co-Chair</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BookSession = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [sessionType, setSessionType] = useState("First Session (₹1000)");
  const [goalText, setGoalText] = useState("");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setShowTermsModal(true);
  };

  const confirmAndPay = () => {
    const amount = sessionType === "First Session (₹1000)" ? 1000 : 2500;
    
    const options = {
      key: "rzp_live_Saab60q2UURRe5", 
      amount: amount * 100, 
      currency: "INR",
      name: "Renu Narvekar Mentorship",
      description: `Payment for ${sessionType}`,
      handler: function (response: any) {
        sendConfirmationEmail(response.razorpay_payment_id);
      },
      prefill: {
        name: `${form.current?.first_name.value} ${form.current?.last_name.value}`,
        email: form.current?.user_email.value,
        contact: form.current?.phone.value,
      },
      theme: { color: "#121E2A" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const sendConfirmationEmail = (paymentId: string) => {
    setIsProcessing(true);
    const templateParams = {
      ...Object.fromEntries(new FormData(form.current!)),
      payment_id: paymentId,
      session_type: sessionType,
      goal: goalText // This maps to {{goal}} in your EmailJS template
    };

    emailjs.send('service_2nbys7j', 'template_if845bn', templateParams, 'abXR9VVmw4qIl9CL_')
      .then(() => {
          form.current?.reset();
          setGoalText("");
          setShowTermsModal(false);
          setIsProcessing(false);
          setShowSuccessModal(true);
      }, (error) => {
          alert("Payment received, but booking alert failed. Please contact narvekarr7@hotmail.com with your payment ID.");
          setIsProcessing(false);
      });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#121E2A] rounded-[4rem] p-8 md:p-20 text-white grid lg:grid-cols-2 gap-16 items-center border border-white/5 shadow-2xl">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Book Your <br /><span className="italic text-brand-gold">Mentoring Session.</span></h2>
            <p className="text-white/70 mb-10 text-lg font-medium leading-relaxed">Mentorship is the shortcut to wisdom. Secure your session to discuss how we can accelerate your leadership journey.</p>
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-brand-gold text-brand-navy flex items-center justify-center shadow-lg"><Mail size={24} /></div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-black text-brand-gold/80">Direct Inquiry</p>
                  <p className="font-bold text-xl">narvekarr7@hotmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-brand-gold text-brand-navy flex items-center justify-center shadow-lg"><Linkedin size={24} /></div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-black text-brand-gold/80">Professional Network</p>
                  <a href="https://www.linkedin.com/in/renunarvekar" target="_blank" rel="noopener noreferrer" className="font-bold text-xl hover:text-brand-gold transition-all">renu-narvekar-leadership</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 text-brand-navy shadow-2xl border border-brand-navy/5">
            <form ref={form} className="space-y-6" onSubmit={handleBooking}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-brand-navy/40">First Name</label>
                  <input name="first_name" required type="text" className="w-full px-5 py-4 rounded-2xl bg-brand-sand/50 border border-brand-navy/5 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all font-bold" placeholder="Pankaj" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-brand-navy/40">Last Name</label>
                  <input name="last_name" required type="text" className="w-full px-5 py-4 rounded-2xl bg-brand-sand/50 border border-brand-navy/5 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all font-bold" placeholder="Samant" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-brand-navy/40">Email Address</label>
                  <input name="user_email" required type="email" className="w-full px-5 py-4 rounded-2xl bg-brand-sand/50 border border-brand-navy/5 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all font-bold" placeholder="pankaj.samant@executive.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-brand-navy/40">Phone Number</label>
                  <input name="phone" required type="tel" className="w-full px-5 py-4 rounded-2xl bg-brand-sand/50 border border-brand-navy/5 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all font-bold" placeholder="+91 98765 xxxxx" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-brand-navy/40">Session Type & Fee</label>
                <select value={sessionType} onChange={(e) => setSessionType(e.target.value)} className="w-full px-5 py-4 rounded-2xl bg-brand-sand/50 border border-brand-navy/5 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all font-bold appearance-none">
                  <option>First Session (₹1000)</option>
                  <option>Subsequent Session (₹2500)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-brand-navy/40">Suitable Slots (Date & Time)</label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="slot_1" required type="datetime-local" className="w-full px-5 py-4 rounded-2xl bg-brand-sand/50 border border-brand-navy/5 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all font-bold text-sm" />
                  <input name="slot_2" required type="datetime-local" className="w-full px-5 py-4 rounded-2xl bg-brand-sand/50 border border-brand-navy/5 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all font-bold text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-black uppercase tracking-widest text-brand-navy/40">Mentorship Goal</label>
                  <span className={`text-[10px] font-bold ${goalText.length > 90 ? 'text-red-500' : 'text-brand-navy/40'}`}>
                    {goalText.length}/100
                  </span>
                </div>
                <textarea 
                  name="goal" 
                  required 
                  maxLength={100}
                  value={goalText}
                  onChange={(e) => setGoalText(e.target.value)}
                  placeholder="Tell me what specific aspect of leadership or career strategy you want to focus on..."
                  className="w-full px-5 py-4 rounded-2xl bg-brand-sand/50 border border-brand-navy/5 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all font-bold resize-none h-24"
                />
              </div>
              <button type="submit" className="w-full bg-brand-navy text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-gold transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-navy/20">
                Confirm Booking
                <ArrowUpRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showTermsModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-brand-navy/60 backdrop-blur-md">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white rounded-[2rem] p-8 md:p-12 max-w-2xl w-full shadow-2xl relative">
              <button onClick={() => setShowTermsModal(false)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-sand transition-colors text-brand-navy"><X size={24} /></button>
              <h3 className="font-serif text-3xl mb-6 text-brand-navy">Accept Terms & Pay</h3>
              <div className="text-brand-navy/70 leading-relaxed font-medium text-justify mb-8">
                {policyContent.terms.text}
                <p className="mt-4 font-bold text-brand-navy">Amount to be paid: {sessionType.split('(')[1].replace(')', '')}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={confirmAndPay} disabled={isProcessing} className="flex-1 bg-brand-navy text-white py-4 rounded-xl font-bold hover:bg-brand-gold transition-all disabled:opacity-50">
                  {isProcessing ? "Processing..." : "Accept & Pay Now"}
                </button>
                <button onClick={() => setShowTermsModal(false)} className="flex-1 border-2 border-brand-navy/10 text-brand-navy py-4 rounded-xl font-bold hover:bg-brand-sand transition-all">Cancel</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSuccessModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[120] flex items-center justify-center p-6 bg-brand-navy/60 backdrop-blur-md">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white rounded-[2rem] p-10 md:p-16 max-w-md w-full shadow-2xl text-center relative">
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="font-serif text-3xl mb-4 text-brand-navy">Payment Successful!</h3>
              <p className="text-brand-navy/70 font-medium leading-relaxed mb-10">Your session has been booked successfully. We will contact you soon!</p>
              <button onClick={() => setShowSuccessModal(false)} className="w-full bg-brand-navy text-white py-4 rounded-xl font-bold hover:bg-brand-gold transition-all shadow-lg">Return to Site</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Footer = () => {
  const [modalContent, setModalContent] = useState<any>(null);

  return (
    <footer className="py-16 px-6 bg-white border-t border-brand-navy/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center text-white font-serif text-2xl font-bold">RN</div>
          <div className="flex flex-col">
            <span className="text-sm font-black uppercase tracking-widest text-brand-navy">Renu Narvekar</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter text-brand-gold">Executive Mentor</span>
          </div>
        </div>
        <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-brand-navy/40">
          <button onClick={() => setModalContent(policyContent.privacy)} className="hover:text-brand-gold transition-colors">Privacy</button>
          <button onClick={() => setModalContent(policyContent.terms)} className="hover:text-brand-gold transition-colors">Terms</button>
          <a href="https://www.linkedin.com/in/renunarvekar" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">LinkedIn</a>
        </div>
        <p className="text-xs font-bold text-brand-navy/30">© {new Date().getFullYear()} Renu Narvekar. Professional Mentorship.</p>
      </div>

      <AnimatePresence>
        {modalContent && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-navy/40 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white rounded-[2rem] p-8 md:p-12 max-w-2xl w-full shadow-2xl relative">
              <button onClick={() => setModalContent(null)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-sand transition-colors text-brand-navy"><X size={24} /></button>
              <h3 className="font-serif text-3xl mb-6 text-brand-navy">{modalContent.title}</h3>
              <div className="text-brand-navy/70 leading-relaxed font-medium text-justify">{modalContent.text}</div>
              <button onClick={() => setModalContent(null)} className="mt-10 w-full bg-brand-navy text-white py-4 rounded-xl font-bold hover:bg-brand-gold transition-all">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Mentoring />
      <BookSession />
      <Footer />
    </div>
  );
}