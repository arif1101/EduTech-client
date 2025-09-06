export type Category = "Academic" | "Technology" | "Business"|"Arts"|"Language";
// types/course.ts
export interface Course {
  _id: string;
  title: string;
  studentsEnrolled: number;
  lastUpdate: string; // Date as string from API
  level: string;
  category: string;
  subject: string;
  language: "English" | "Bangla";
  classLevel: "Class 11-12" | "Versity";
  thumbnail?: string;
  averageRating?: number;
}
