/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAllBooksQuery } from "@/redux/features/book/book.api";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Book from "./Book";
import BookSidebar from "./BookSidebar";

export default function Books() {
  const { data } = useAllBooksQuery(undefined);
  const books = data?.data || [];

  // Drawer state (mobile)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Accordion states
  const [openCategory, setOpenCategory] = useState(true);
  const [openRating, setOpenRating] = useState(true);
  const [openLanguage, setOpenLanguage] = useState(true);

  // Filters
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Handlers
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRatings(prev =>
      prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
    );
    setCurrentPage(1);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguages(prev =>
      prev.includes(language) ? prev.filter(l => l !== language) : [...prev, language]
    );
    setCurrentPage(1);
  };

  const filteredBooks = books.filter((book: any) => {
    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(book.category);
    const ratingMatch =
      selectedRatings.length === 0 ||
      selectedRatings.some(rating => Number(book.rating) >= rating);
    const languageMatch =
      selectedLanguages.length === 0 || selectedLanguages.includes(book.language);
    return categoryMatch && ratingMatch && languageMatch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Lock body scroll when drawer is open, close on Esc
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSidebarOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isSidebarOpen]);

  return (
    <div className="">
      {/* Title */}
      <div className="bg-sky-500 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
        <h1 className="max-w-[1256px] mx-auto text-[28px] sm:text-[32px] md:text-[36px] text-white font-bold py-8">
          Discover Books
        </h1>
      </div>

      {/* Layout: sidebar + content */}
      <div className="flex">
        {/* Desktop sidebar */}
        <aside className="hidden md:block w-[290px]">
          <BookSidebar
            openCategory={openCategory}
            setOpenCategory={setOpenCategory}
            openRating={openRating}
            setOpenRating={setOpenRating}
            openLanguage={openLanguage}
            setOpenLanguage={setOpenLanguage}
            selectedCategories={selectedCategories}
            handleCategoryChange={handleCategoryChange}
            selectedRatings={selectedRatings}
            handleRatingChange={handleRatingChange}
            selectedLanguages={selectedLanguages}
            handleLanguageChange={handleLanguageChange}
          />
        </aside>

        {/* Main content */}
        <section className="flex-1 px-6">
          {/* Top bar */}
          <div className="flex items-center justify-between py-4">
            <p className="font-semibold text-base">
              Showing {currentBooks.length} of {filteredBooks.length}
            </p>

            {/* Filter button (mobile only) */}
            <button
              className="md:hidden bg-sky-500 text-white px-4 py-2 rounded"
              onClick={() => setIsSidebarOpen(true)}
            >
              Filter
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentBooks.map((book: any, index: number) => (
              <Book key={index} book={book} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center my-6 gap-2">
            {Array.from({ length: Math.ceil(filteredBooks.length / itemsPerPage) }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white text-black"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Mobile Drawer */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsSidebarOpen(false)}
          />

          {/* Drawer */}
          <div className="relative h-full w-[85vw] max-w-[320px] bg-white shadow-lg p-4 z-50 overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-600"
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close filters"
            >
              <X size={24} />
            </button>

            <BookSidebar
              openCategory={openCategory}
              setOpenCategory={setOpenCategory}
              openRating={openRating}
              setOpenRating={setOpenRating}
              openLanguage={openLanguage}
              setOpenLanguage={setOpenLanguage}
              selectedCategories={selectedCategories}
              handleCategoryChange={handleCategoryChange}
              selectedRatings={selectedRatings}
              handleRatingChange={handleRatingChange}
              selectedLanguages={selectedLanguages}
              handleLanguageChange={handleLanguageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}
