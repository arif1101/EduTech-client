/* eslint-disable @typescript-eslint/no-explicit-any */

import CardRating from '@/components/ui/cardRating';
import { Link } from 'react-router';

export interface BookType {
  _id: string;
  title: string;
  author: string;
  image: string;
  category: string;
  copyType: "Softcopy" | "Hardcopy"; // can be stricter if only these two exist
  softPrice: number;
  hardPrice: number;
  stock: number;
  rating: number;
  language: string;
  details: string;
  publishedDate: string; // can use Date if you parse it
  createdAt: string;
  updatedAt: string;
  reviews: any[]; // replace with ReviewType[] if you define reviews later
}

interface BookProps {
  book: BookType;
}
export default function Book({book} : BookProps) {
    const {_id, title,image, hardPrice } = book;
    console.log(_id)
  return (
        <Link to={`/books/${_id}`}>
        <div className="">
            <div className="border max-w-[272px] text-white p-2 text-center rounded-lg">
                <div className='w-[254.4px] h-[192px] bg-slate-200 py-3'>
                <img src={image} alt="" className='h-full w-[106.66px] mx-auto shadow-lg shadow-slate-700' />
                </div>
                <h1 className='text-left text-base text-black font-semibold mb-5 mt-2 dark:text-white'>{title}</h1>
                <div className='flex flex-col gap-2'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-bold text-sky-500'>TK {hardPrice}</h1>
                        <p className='font-bold text-sky-500'>Read Demo</p>
                    </div>
                    <div className='flex justify-between'>
                        {/* <div className="rating rating-xs gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <input
                                    key={star}
                                    type="radio"
                                    name={`rating-${title}`} // Unique name for each book
                                    className="mask mask-star-2 bg-amber-300"
                                    aria-label={`${star} star`}
                                    checked={newRating === star} // Ensure the rating is checked properly
                                    onChange={() => setNewRating(star)} // Update the rating when changed
                                />
                            ))}
                        </div> */}
                        <CardRating/>
                        <p className='text-green-500'>✓ {hardPrice}</p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
  )
}
