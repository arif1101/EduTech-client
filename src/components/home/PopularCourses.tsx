import { popularCourses } from "@/data/Course";
import { Link } from "react-router";
import CourseCard from "../course/CourseCard";

export default function PopularCourses() {


    
  return (
      <div className="p-6 mt-24 flex flex-col gap-4 sm:gap-6 lg:gap-10">
        {/* Categories Section */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 mb-6">
          {/* Title */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
            Popular <span className="text-sky-500">Courses</span> Categories
          </h2>
          <div className="flex flex-wrap justify-between items-center gap-4">
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-3 group">
              {["All", "Web Design", "Business", "Development", "Mobile App", "Accounting"].map(
                (category, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 rounded-full border border-gray-400 
                     bg-gradient-to-r from-white to-sky-100 
                     hover:from-sky-100 hover:to-sky-300
                     transition duration-[1s,60s] ease-in-out 
                     text-gray-800 font-semibold
                     "
                  >
                    {category}
                  </button>
                )
              )}
            </div>
  
            {/* More Courses Button */}
            <Link to='/courses'>
            <button className="px-4 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all duration-300">
              More Courses →
            </button>
            </Link>
          </div>
        </div>
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCourses?.length > 0 ? (
            popularCourses.map((course) => <CourseCard key={course?.id } {...course} />)
          ) : (
            <p className="col-span-3 text-center text-gray-500">No courses found.</p>
          )}
        </div>
      </div>
  )
}
