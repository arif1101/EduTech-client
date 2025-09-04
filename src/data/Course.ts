export interface Course {
  id?: string;
  title: string;
  thumbnail: string;
  description: string;
  rating: number;
  videos: number;
  hours: number;
  lessons: number;
  fees: number;
  layout?: string
}


export const popularCourses : Course[] = [
  {
    title: "Full-Stack Web Development",
    thumbnail: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    description: "Learn to build scalable web applications using React, Node.js, and MongoDB with real-world projects.",
    rating: 5,
    videos: 120,
    hours: 40,
    lessons: 85,
    fees: 15000
  },
  {
    title: "UI/UX Design Fundamentals",
    thumbnail: "https://images.unsplash.com/photo-1581090700227-4c4d4e1e6b1a",
    description: "Master design thinking, wireframing, and prototyping using Figma and Adobe XD.",
    rating: 4,
    videos: 60,
    hours: 25,
    lessons: 40,
    fees: 12000
  },
  {
    title: "Data Science & Machine Learning",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    description: "Become a data scientist by learning Python, Pandas, NumPy, and advanced ML algorithms.",
    rating: 5,
    videos: 90,
    hours: 50,
    lessons: 70,
    fees: 18000
  },
  {
    title: "Digital Marketing Mastery",
    thumbnail: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
    description: "Grow any business with SEO, SEM, content marketing, and social media strategies.",
    rating: 4,
    videos: 75,
    hours: 30,
    lessons: 55,
    fees: 10000
  },
  {
    title: "Mobile App Development with Flutter",
    thumbnail: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
    description: "Build cross-platform mobile apps for iOS and Android using Flutter and Dart.",
    rating: 5,
    videos: 85,
    hours: 35,
    lessons: 60,
    fees: 14000
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    thumbnail: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f",
    description: "Learn penetration testing, network security, and ethical hacking tools to protect systems.",
    rating: 4,
    videos: 100,
    hours: 45,
    lessons: 75,
    fees: 17000
  }
];
