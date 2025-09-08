import type { ComponentType } from "react";

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

export type TRole = "ADMIN"

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}



// courseCartItem.type.ts

export interface IInstructor {
  _id: string
  name: string
  photo: string
  status: string
}

export interface ICourseOverview {
  description: string
  whatYouWillLearn: string[]
  requirements: string[]
  thisCourseIncludes: string[]
  _id: string
}

export interface ICourse {
  _id: string
  title: string
  price: number
  thumbnail: string
  category: string
  subject: string
  level: string
  classLevel: string
  language: string
  duration: number
  studentsEnrolled: number
  averageRating: number
  instructor: IInstructor
  tags: string[]
  overview: ICourseOverview
  createdAt: string
  updatedAt: string
}

export interface ICourseCartItem {
  _id: string
  course: ICourse   // ✅ full course object
}



// courseCartItem.type.ts
// export interface ICourseCartItem {
//   _id: string
//   title: string
//   price: number
//   thumbnail: string
//   category: string
//   subject: string
//   level: string
//   classLevel: string
//   language: string
//   duration: number
//   studentsEnrolled: number
//   averageRating: number
//   instructor: {
//     _id: string
//     name: string
//     photo: string
//     status: string
//   }
//   tags: string[]
//   overview: {
//     description: string
//     whatYouWillLearn: string[]
//     requirements: string[]
//     thisCourseIncludes: string[]
//     _id: string
//   }
//   createdAt: string
//   updatedAt: string
// }

// export interface ICourseCartItem {
//   _id: string
//   course: string
//   title: string
//   price: number
//   thumbnail: string
// }

