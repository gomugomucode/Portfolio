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
    name: "BKC",
    avatar: "https://ui-avatars.com/api/?name=BKC&background=b86a2c&color=f5efe7&bold=true",
    rating: 5,
    review: "I had a really good experience working with Anupam Baral. He's easy to communicate with, keeps everything well coordinated, and always follows up to make sure the work stays on track. I appreciated how responsive and organized he was throughout the process. His knowledge of AI/ML and full-stack development is impressive, and he delivers quality work with attention to detail. I'd definitely recommend him to anyone looking for a skilled, reliable, and professional developer.",
    date: "January 2026",
    profileUrl: googleBusinessProfileUrl,
    projectContext: "AI/ML & Full-Stack Development"
  },
  {
    id: "gr-2",
    name: "Sanish Bhandari",
    avatar: "https://ui-avatars.com/api/?name=Sanish+Bhandari&background=1e1a18&color=f5efe7&bold=true",
    rating: 5,
    review: "I had a great experience working with Anupam. He is not only talented in AI/ML and full-stack development but also a hardworking and creative problem solver. His ability to understand complex ideas and turn them into practical solutions is amazing. Wishing him continued success!",
    date: "January 2026",
    profileUrl: googleBusinessProfileUrl,
    projectContext: "AI Solutions & Engineering"
  },
  {
    id: "gr-3",
    name: "Nisha Kafle",
    avatar: "https://ui-avatars.com/api/?name=Nisha+Kafle&background=c8a381&color=1e1a18&bold=true",
    rating: 5,
    review: "Anupam Baral is a skilled AI/ML and Full-Stack Developer with strong technical knowledge and a passion for learning. He delivers quality work, communicates well, and is always eager to improve. Highly recommended!",
    date: "January 2026",
    profileUrl: googleBusinessProfileUrl,
    projectContext: "Technical Collaboration"
  },
  {
    id: "gr-4",
    name: "KESAV Rayamajhi",
    avatar: "https://ui-avatars.com/api/?name=KESAV+Rayamajhi&background=34a853&color=ffffff&bold=true",
    rating: 5,
    review: "Having a good experience. times spending upon good things.",
    date: "February 2026",
    profileUrl: googleBusinessProfileUrl,
    projectContext: "Client Consultation"
  }
];
