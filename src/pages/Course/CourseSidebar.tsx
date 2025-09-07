import { ChevronDown } from "lucide-react";

interface SidebarProps {
  openCategory: boolean;
  setOpenCategory: (value: boolean) => void;
  openLevel: boolean;
  setOpenLevel: (value: boolean) => void;
  openSubject: boolean;
  setOpenSubject: (value: boolean) => void;
  openLanguage: boolean;
  setOpenLanguage: (value: boolean) => void;
  openClass: boolean;
  setOpenClass: (value: boolean) => void;
  selectedCategories: string[];
  handleCategoryChange: (category: string) => void;
}

export default function CourseSidebar({
  openCategory,
  setOpenCategory,
  // openLevel,
  // setOpenLevel,
  // openSubject,
  // setOpenSubject,
  // openLanguage,
  // setOpenLanguage,
  // openClass,
  // setOpenClass,
  selectedCategories,
  handleCategoryChange,
}: SidebarProps) {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Filter</h2>
        <button className="text-sm text-blue-600 hover:underline">
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between mb-2 cursor-pointer"
          onClick={() => setOpenCategory(!openCategory)}
        >
          <h3 className="font-semibold">Category</h3>
          <ChevronDown
            size={26}
            className={`transition-transform duration-300 ${
              openCategory ? "rotate-0" : "-rotate-90"
            }`}
          />
        </div>
        {openCategory && (
          <div className="flex flex-col gap-2 pl-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-sm"
                onChange={() => handleCategoryChange("Academic")}
                checked={selectedCategories.includes("Academic")}
              />
              Academic
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-sm"
                onChange={() => handleCategoryChange("Technology")}
                checked={selectedCategories.includes("Technology")}
              />
              Technology
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-sm"
                onChange={() => handleCategoryChange("Business")}
                checked={selectedCategories.includes("Business")}
              />
              Business
            </label>
          </div>
        )}
      </div>

      {/* You can keep your other filters (Level, Subject, Language, Class) here */}
    </div>
  );
}
