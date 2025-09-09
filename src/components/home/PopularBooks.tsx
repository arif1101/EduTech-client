
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Book from "../book/Book";
import { books } from "@/data/books";



export default function PopularBooks() {



  return (
    <div className="relative mt-[150px] mb-[150px]">
        <div className='flex justify-between mb-6'>
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Discover <span className='text-sky-500'>Popular</span> Books
            </h2>
            <div className='flex items-center justify-center gap-3 w-[120px] bg-sky-500 text-white text-[16px] font-medium h-11 rounded-xl hover:bg-sky-600'>
                <button>View All</button>
                <ArrowRight className='text-[26px] mt-1' />
            </div>
        </div>
        <Carousel className="w-full">
        <CarouselContent className="-ml-5">
        {books.slice(0, 5).map((book) => (
          <CarouselItem key={book._id} className="pl-5 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Book book={book} />
            </div>
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden md:block" />
        </Carousel>

        
    </div>
  )
}
