import { useState } from "react";
import { Send, Mail, Phone, Linkedin, MapPin, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);

    const userEmail = form.email;

    const formData = new FormData();
    formData.append("access_key", "fbe72730-5191-4c44-bf5c-ac45ed87b137");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", `[Portfolio] ${form.subject}`);
    formData.append("message", form.message);
    formData.append("from_name", "Anupam's Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setForm({ name: "", email: "", subject: "", message: "" });
        setErrors({});

        toast({
          title: "Message Dispatched",
          description: `Transmission successful. I will respond to ${userEmail} shortly.`,
          duration: 6000,
        });
      } else {
        throw new Error("Transmission Failed");
      }
    } catch (err) {
      toast({
        title: "Transmission Error",
        description: "Failed to dispatch message. Please connect via LinkedIn.",
        variant: "destructive"
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatedSection>
      <section className="w-full max-w-6xl mx-auto px-4 pb-20">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Initiate <span className="text-emerald-500">Connection</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed mb-6">
            Open for freelance opportunities, technical collaborations, and full-time roles. Let's discuss how my expertise can deliver value to your next project.
          </p>
          <div className="w-12 h-1 bg-emerald-500/20 rounded-full mx-auto" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* --- LEFT SIDE: CONTACT DETAILS --- */}
          <address className="lg:col-span-1 space-y-4 not-italic">
            <div className="p-6 rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800 space-y-6 shadow-lg shadow-black/10">
              <h3 className="text-xl font-bold text-slate-100 mb-4">Communication Channels</h3>

              <div className="space-y-4">
                <a href="mailto:contact@anupambaral.com.np" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-mono tracking-widest">Email Protocol</p>
                    <p className="text-sm font-medium text-slate-200 group-hover:text-emerald-400 transition-colors">contact@anupambaral.com.np</p>
                  </div>
                </a>

                <a href="tel:+977-9767606302" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-black transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-mono tracking-widest">Voice Link</p>
                    <p className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors">+977-9767606302</p>
                  </div>
                </a>

                <a href="https://linkedin.com/in/gomugomucode" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-sky-500/10 text-sky-500 border border-sky-500/20 group-hover:bg-sky-500 group-hover:text-black transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-mono tracking-widest">Professional Network</p>
                    <p className="text-sm font-medium text-slate-200 group-hover:text-sky-400 transition-colors">gomugomucode</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-mono tracking-widest">Current Coordinates</p>
                    <p className="text-sm font-medium text-slate-200">Butwal, Nepal</p>
                  </div>
                </div>
              </div>
            </div>
          </address>

          {/* --- RIGHT SIDE: THE FORM --- */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5 shadow-lg shadow-black/10">
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-widest">Client / Contact Name</label>
                  <input id="name" type="text" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full bg-slate-950/50 border ${errors.name ? 'border-red-500/50' : 'border-slate-800'} rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none transition-all`}
                    placeholder="John Doe" />
                  {errors.name && <p className="text-[10px] text-red-500 mt-1.5 font-mono uppercase">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-widest">Return Address (Email)</label>
                  <input id="email" type="email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full bg-slate-950/50 border ${errors.email ? 'border-red-500/50' : 'border-slate-800'} rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none transition-all`}
                    placeholder="john@example.com" />
                  {errors.email && <p className="text-[10px] text-red-500 mt-1.5 font-mono uppercase">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-widest">Subject Protocol</label>
                <input id="subject" type="text" value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={`w-full bg-slate-950/50 border ${errors.subject ? 'border-red-500/50' : 'border-slate-800'} rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none transition-all`}
                  placeholder="Project Collaboration / Technical Inquiry" />
                {errors.subject && <p className="text-[10px] text-red-500 mt-1.5 font-mono uppercase">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-widest">Payload Data (Message)</label>
                <textarea id="message" rows={5} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full bg-slate-950/50 border ${errors.message ? 'border-red-500/50' : 'border-slate-800'} rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none resize-none transition-all`}
                  placeholder="Outline the parameters of our potential collaboration..." />
                {errors.message && <p className="text-[10px] text-red-500 mt-1.5 font-mono uppercase">{errors.message}</p>}
              </div>

              <button type="submit" disabled={sending}
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-black px-6 py-3.5 rounded-xl font-bold hover:bg-emerald-400 transition-all active:scale-95 disabled:opacity-50 relative overflow-hidden group">
                {sending ? (
                  <span className="flex items-center gap-2 font-mono uppercase text-[11px] tracking-widest">
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Transmitting...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span className="font-mono uppercase text-[11px] tracking-widest font-bold">Dispatch Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
};

export default ContactSection;
