import { Github, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16 md:py-24">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-primary font-mono text-sm mb-6 border border-border">
        <Terminal className="w-4 h-4" />
        <span>~/anupam-baral</span>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
        Anupam <span className="text-primary">Baral</span>
      </h1>

      <p className="text-lg md:text-xl font-medium text-primary mb-6 font-mono">
        Full-Stack Developer & BCA Student
      </p>

      <p className="max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
        I build scalable web applications using React and Node.js. Currently expanding my skill set into Python, NumPy, and Pandas to explore Data Science and AI. Proud Arch Linux user and anime/manga enthusiast.
      </p>

      <a
        href="https://github.com/gomugomucode"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        <Github className="w-5 h-5" />
        gomugomucode
      </a>
    </section>
  );
};

export default HeroSection;
