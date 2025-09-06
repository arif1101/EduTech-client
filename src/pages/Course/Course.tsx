/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAllCoursesQuery } from "@/redux/features/course/course.api";
import { LayoutGrid, LayoutList, X } from "lucide-react";
import { useState } from "react";
import CourseCard from "./CourseCard";
import CourseSidebar from "./CourseSidebar";
import type { Course } from "@/type/type";

export default function Course() {
  const { data } = useAllCoursesQuery(undefined);
  const courses = data?.data;
  // console.log(courses[0])
  const [layout, setLayout] = useState("grid");

  const [openCategory, setOpenCategory] = useState(true);
  const [openLevel, setOpenLevel] = useState(true);
  const [openSubject, setOpenSubject] = useState(true);
  const [openLanguage, setOpenLanguage] = useState(true);
  const [openClass, setOpenClass] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // store by filter
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // <-- NEW

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredCourses =
    selectedCategories?.length === 0
      ? courses || []
      : (courses || []).filter((course : any) =>
          selectedCategories.includes(course.category)
        );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="">
      {/* title */}
      <div className="bg-sky-500 max-w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
        <h1 className="max-w-[1256px] mx-auto text-[28px] sm:text-[32px] md:text-[36px] text-white font-bold py-8">
          Discover Books
        </h1>
      </div>

      {/* main content */}
      <div className="flex relative">
        {/* Sidebar (desktop) */}
        <div className="hidden md:block w-[290px] bg-white">
          <CourseSidebar
            openCategory={openCategory}
            setOpenCategory={setOpenCategory}
            openLevel={openLevel}
            setOpenLevel={setOpenLevel}
            openSubject={openSubject}
            setOpenSubject={setOpenSubject}
            openLanguage={openLanguage}
            setOpenLanguage={setOpenLanguage}
            openClass={openClass}
            setOpenClass={setOpenClass}
            selectedCategories={selectedCategories}
            handleCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Sidebar (mobile drawer) */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setIsSidebarOpen(false)}
            />
            {/* Drawer */}
            <div className="relative w-[290px] bg-white h-full shadow-lg p-4 z-50 overflow-y-auto">
              <button
                className="absolute top-3 right-3 text-gray-600"
                onClick={() => setIsSidebarOpen(false)}
              >
                <X size={24} />
              </button>
              <CourseSidebar
                openCategory={openCategory}
                setOpenCategory={setOpenCategory}
                openLevel={openLevel}
                setOpenLevel={setOpenLevel}
                openSubject={openSubject}
                setOpenSubject={setOpenSubject}
                openLanguage={openLanguage}
                setOpenLanguage={setOpenLanguage}
                openClass={openClass}
                setOpenClass={setOpenClass}
                selectedCategories={selectedCategories}
                handleCategoryChange={handleCategoryChange}
              />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10 w-full max-w-[918px] ml-auto ">
          {/* Top bar */}
          <div className="flex flex-col justify-between">
            <div className="mb-4">
              <p className="font-semibold text-base">
                Showing {filteredCourses?.length} of {filteredCourses?.length}
              </p>
            </div>

            <div className="flex justify-between w-full">
              {/* Layout Switcher */}
              <div className="flex">
                <div
                  onClick={() => setLayout("grid")}
                  className={
                    layout === "grid"
                      ? "w-12 h-12 bg-sky-500 flex items-center text-white justify-center rounded-l-xl"
                      : "w-12 h-12 hover:bg-sky-200 flex justify-center items-center bg-white rounded-l-xl"
                  }
                >
                  <LayoutGrid className="text-2xl" />
                </div>
                <div
                  onClick={() => setLayout("list")}
                  className={
                    layout === "list"
                      ? "w-12 h-12 bg-sky-500 flex items-center justify-center rounded-r-xl"
                      : "w-12 h-12 hover:bg-sky-200 flex justify-center bg-white items-center rounded-r-xl"
                  }
                >
                  <LayoutList className="text-2xl" />
                </div>
              </div>
              <select defaultValue="Pick a Framework" className="select h-10 max-w-[300px] w-full select-info outline-none  focus:ring-0 focus:outline-none border border-sky-500 px-4 mr-4">
                <option disabled={true}>Release Date</option>
                <option>Release Date (newest first)</option>
                <option>Release Date (oldest first)</option>
              </select>

              {/* Filter Button (mobile only) */}
              <button
                className="md:hidden bg-sky-500 text-white px-4 py-2 rounded"
                onClick={() => setIsSidebarOpen(true)}
              >
                Filter
              </button>
            </div>
          </div>

          {/* Courses Grid/List */}
          <div
            className={
              layout === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-6"
            }
          >
            {filteredCourses.length > 0 ? (
              currentCourses.map((course: Course, index:number) => (
                <CourseCard key={index} {...course} layout={layout} />
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500">
                No courses found.
              </p>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center my-4 gap-2">
            {Array.from(
              { length: Math.ceil(filteredCourses.length / itemsPerPage) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
