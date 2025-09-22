import { ChevronDown } from "lucide-react";

interface FilterProps {
  openCategory: boolean;
  setOpenCategory: (v: boolean) => void;
  openRating: boolean;
  setOpenRating: (v: boolean) => void;
  openLanguage: boolean;
  setOpenLanguage: (v: boolean) => void;

  selectedCategories: string[];
  handleCategoryChange: (category: string) => void;

  selectedRatings: number[];
  handleRatingChange: (rating: number) => void;

  selectedLanguages: string[];
  handleLanguageChange: (language: string) => void;
}

export default function Filter({
  openCategory,
  setOpenCategory,
  openRating,
  setOpenRating,
  openLanguage,
  setOpenLanguage,
  selectedCategories,
  handleCategoryChange,
  selectedRatings,
  handleRatingChange,
  selectedLanguages,
  handleLanguageChange,
}: FilterProps) {
  return (
    <div className="min-h-screen p-4 bg-white dark:bg-black dark:border-2 mt-[76px] md:mt-0 w-[290px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Filter</h2>
        <button
          className="text-sm text-blue-600 hover:underline"
          onClick={() => {
            // Optional: wire up "Clear All" here if you want
            // e.g., expose a onClearAll prop from Books and call it.
          }}
        >
          Clear All
        </button>
      </div>

      {/* Category */}
      <div className="mt-6">
        <button
          type="button"
          onClick={() => setOpenCategory(!openCategory)}
          className="w-full flex items-center justify-between mb-2"
        >
          <span className="font-medium">Category</span>
          <ChevronDown
            size={20}
            className={`transition-transform ${openCategory ? "rotate-0" : "-rotate-90"}`}
          />
        </button>
        {openCategory && (
          <div className="flex flex-col gap-2 pl-2">
            {["Academic", "Technology", "Business"].map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                />
                {cat}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="mt-6 border-t pt-4">
        <button
          type="button"
          onClick={() => setOpenRating(!openRating)}
          className="w-full flex items-center justify-between mb-2"
        >
          <span className="font-medium">Rating</span>
          <ChevronDown
            size={20}
            className={`transition-transform ${openRating ? "rotate-0" : "-rotate-90"}`}
          />
        </button>
        {openRating && (
          <div className="flex flex-col gap-2 pl-2">
            {[3.0, 3.5, 4.0].map((rating) => (
              <label key={rating} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                />
                {rating} & above
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Language */}
      <div className="mt-6 border-t pt-4">
        <button
          type="button"
          onClick={() => setOpenLanguage(!openLanguage)}
          className="w-full flex items-center justify-between mb-2"
        >
          <span className="font-medium">Language</span>
          <ChevronDown
            size={20}
            className={`transition-transform ${openLanguage ? "rotate-0" : "-rotate-90"}`}
          />
        </button>
        {openLanguage && (
          <div className="flex flex-col gap-2 pl-2">
            {["English", "Bangla"].map((lang) => (
              <label key={lang} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes(lang)}
                  onChange={() => handleLanguageChange(lang)}
                />
                {lang}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
