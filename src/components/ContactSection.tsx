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

    // Save email for the success message before clearing form
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
        setErrors({}); // Clear any existing errors

        toast({
          title: "Successfully Dispatched!",
          description: `Thanks for reaching out! I've received your message and will get back to you at ${userEmail} very soon!`,
          duration: 6000,
        });
      } else {
        throw new Error("Failed");
      }
    } catch (err) {
      toast({
        title: "Transmission Failure",
        description: "Message couldn't be sent. Please try reaching out via LinkedIn.",
        variant: "destructive"
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatedSection>
      <section className="w-full max-w-6xl mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get in <span className="text-emerald-500">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500/20 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* --- LEFT SIDE: CONTACT DETAILS --- */}
          <div className="lg:col-span-1 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800 space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>

              <div className="space-y-4">
                {/* Updated with your actual email */}
                <a href="mailto:contact@anupambaral.com.np" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-mono tracking-tighter">Email</p>
                    <p className="text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">contact@anupambaral.com.np</p>
                  </div>
                </a>

                {/* Replace 98XXXXXXXX with your real number when ready */}
                <a href="tel:+977-9767606302" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-black transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-mono tracking-tighter">Phone</p>
                    <p className="text-sm text-slate-200 group-hover:text-blue-400 transition-colors">+977-9767606302</p>
                  </div>
                </a>

                <a href="https://linkedin.com/in/unish06" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-sky-500/10 text-sky-500 border border-sky-500/20 group-hover:bg-sky-500 group-hover:text-black transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-mono tracking-tighter">LinkedIn</p>
                    <p className="text-sm text-slate-200 group-hover:text-sky-400 transition-colors">Anupam Baral</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500 border border-purple-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-mono tracking-tighter">Location</p>
                    <p className="text-sm text-slate-200">Butwal, Nepal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: THE FORM --- */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5">
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Full Name</label>
                  <input type="text" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full bg-slate-950 border ${errors.name ? 'border-red-500/50' : 'border-slate-800'} rounded-lg px-4 py-2.5 text-sm text-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all`}
                    placeholder="Anupam Baral" />
                  {errors.name && <p className="text-[10px] text-red-500 mt-1 font-mono uppercase">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Email Address</label>
                  <input type="email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full bg-slate-950 border ${errors.email ? 'border-red-500/50' : 'border-slate-800'} rounded-lg px-4 py-2.5 text-sm text-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all`}
                    placeholder="you@example.com" />
                  {errors.email && <p className="text-[10px] text-red-500 mt-1 font-mono uppercase">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Subject</label>
                <input type="text" value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={`w-full bg-slate-950 border ${errors.subject ? 'border-red-500/50' : 'border-slate-800'} rounded-lg px-4 py-2.5 text-sm text-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all`}
                  placeholder="Collaboration / Job Opportunity" />
                {errors.subject && <p className="text-[10px] text-red-500 mt-1 font-mono uppercase">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Message</label>
                <textarea rows={4} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full bg-slate-950 border ${errors.message ? 'border-red-500/50' : 'border-slate-800'} rounded-lg px-4 py-2.5 text-sm text-white focus:ring-2 focus:ring-emerald-500/50 outline-none resize-none transition-all`}
                  placeholder="Write your message here..." />
                {errors.message && <p className="text-[10px] text-red-500 mt-1 font-mono uppercase">{errors.message}</p>}
              </div>

              <button type="submit" disabled={sending}
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-emerald-400 transition-all active:scale-95 disabled:opacity-50 relative overflow-hidden group">
                {sending ? (
                  <span className="flex items-center gap-2 font-mono uppercase text-xs tracking-widest">
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Transmitting...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span className="font-mono uppercase text-xs tracking-widest">Send Message</span>
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
