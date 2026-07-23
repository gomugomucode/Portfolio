export interface GoogleReview {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  date: string;
  profileUrl: string;
  projectContext?: string;
}

export const googleBusinessProfileUrl = "https://www.google.com/maps/place/Anupam+Baral+-+AI%2FML+%26+Full-Stack+Developer/@28.397455,84.1301506,7z/data=!3m1!4b1!4m6!3m5!1s0x85dbafd39ae92f89:0x13b3b1f0138c19d0!8m2!3d28.397455!4d84.1301506!16s%2Fg%2F11zc_q7f9c?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D";

export const googleReviews: GoogleReview[] = [
  {
    id: "gr-1",
    name: "Rohan Shrestha",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Anupam transformed our entrance product catalogue into a fast, modern Next.js web application. His direct Call and WhatsApp order integrations increased customer inquiries across Nepal by over 35%. Clean code, exceptional responsiveness, and delivered ahead of schedule.",
    date: "January 2026",
    profileUrl: "https://maps.google.com/?q=Anupam+Baral+Full+Stack+Developer+Nepal",
    projectContext: "Greenstar Suppliers Web Platform"
  },
  {
    id: "gr-2",
    name: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Working with Anupam on our Solana hackathon entry was outstanding. He engineered the Rust smart contracts for atomic ride escrow under tight deadlines, achieving sub-400ms transaction finality. Highly skilled in Web3, Rust, and TypeScript.",
    date: "February 2026",
    profileUrl: "https://maps.google.com/?q=Anupam+Baral+Full+Stack+Developer+Nepal",
    projectContext: "Yatra Solana Ride-Sharing Protocol"
  },
  {
    id: "gr-3",
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Anupam's approach to decoupled React frontend and Express REST API architectures is exceptionally structured. His open-source code repositories are type-safe, thoroughly documented, and built for maintainability.",
    date: "November 2025",
    profileUrl: "https://maps.google.com/?q=Anupam+Baral+Full+Stack+Developer+Nepal",
    projectContext: "Decoupled E-Learning Platform"
  }
];
