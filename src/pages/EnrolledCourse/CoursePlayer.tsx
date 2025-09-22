import { useState } from "react";

export default function CoursePlayer() {
  const lessons = [
    { title: "Introduction", duration: "2 min", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "What is Figma?", duration: "5 min", src: "https://www.w3schools.com/html/movie.mp4" },
    { title: "Understanding Figma", duration: "12 min", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "UI Tour", duration: "3 min", src: "https://www.w3schools.com/html/movie.mp4" },
  ];

  const [currentLesson, setCurrentLesson] = useState(lessons[0]);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
      {/* Left: Video Player */}
      <div className="w-full lg:w-3/4 bg-black flex items-center justify-center">
        <video
          key={currentLesson.src} // force re-render when lesson changes
          controls
          className="w-full h-full object-cover"
          src={currentLesson.src}
        />
      </div>

      {/* Right: Lesson List */}
      <div className="w-full lg:w-1/4 bg-white shadow-lg overflow-y-auto p-4">
        <h2 className="text-lg font-semibold mb-4">Course Content</h2>
        <ul className="space-y-3">
          {lessons.map((lesson, i) => (
            <li
              key={i}
              onClick={() => setCurrentLesson(lesson)}
              className={`flex justify-between items-center p-2 rounded cursor-pointer 
                ${currentLesson.title === lesson.title ? "bg-blue-100 text-blue-700 font-semibold" : "hover:bg-gray-100"}`}
            >
              <span>{lesson.title}</span>
              <span className="text-sm text-gray-500">{lesson.duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
