import BookTab from "@/components/ui/bookTab"
import { Button } from "@/components/ui/button"
import CardRating from "@/components/ui/cardRating"
import { useSingleBookQuery } from "@/redux/features/book/book.api"
import { useParams } from "react-router"

export default function BookDetails() {
    const {id} = useParams()
    console.log(id)

    const {data,isLoading,error} = useSingleBookQuery(id)
    const book = data?.data
    console.log(book)
    const {title, bookImage, hardPrice, softPrice, author, copy} = book || {};
  return (
        <div className='py-12'>
            {isLoading ? (<p>Loading....</p>) : error? (<p>Something went wrong!</p>) : (
                <div className='grid grid-cols-4 gap-8'>

                    {/* left content  */}
                    <div className='max-w-[300px] w-full max-h-[450px] h-full hover:scale-105 duration-300 shadow-xl shadow-black sticky top-24'>
                        <img className='h-full' src={bookImage} alt="" />
                    </div>

                    {/* middle content  */}
                    <div className='col-span-2'>
                        <div>
                            <h1 className='text-2xl font-bold'>{title}</h1>
                            <p className='text-base mt-2'>by {author}</p>
                        </div>
                        <div className='mt-6'>
                            <p className='text-xl font-bold'>TK {softPrice}</p>
                            <p className='text-sm mt-1'>Hard copy price : {hardPrice}</p>
                        </div>
                        <div className='flex items-start gap-6 py-12'>
                            <div className='w-full h-full'>
                                <BookTab/>
                            </div>
                            {/* end left content */}
                        </div>
                    </div>

                    {/* right content  */}
                    <div className="md:block">
                        <div className="sticky top-24 border max-w-[272px] text-white p-2 text-center rounded-lg">
                            <div className='w-[254.4px] h-[192px] bg-slate-200 py-3 relative'>
                            <p className='text-green-500 absolute bottom-2 left-2'>✓ {copy}</p>
                            <img src={book.bookImage} alt="" className='h-full w-[106.66px] mx-auto shadow-lg shadow-slate-700' />
                            </div>
                            <h1 className='text-left text-base text-black font-semibold mb-6 mt-2'>{title}</h1>
                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between'>
                                    <h1 className='text-xl font-bold text-sky-500 dark:text-white'>TK 400   </h1>
                                    <p className='font-bold text-sky-500'>Read Demo</p>
                                </div>
                                <div className='flex justify-between'>
                                    <CardRating/>
                                </div>
                                <div className='flex flex-col gap-2 mt-6'>
                                    <Button className='btn w-full flex border-slate-300 justify-between rounded-xl'>Buy Soft Copy Only <span>TK {softPrice}</span></Button>
                                    <Button className='btn bg-sky-500 w-full flex justify-between rounded-xl hover:bg-sky-600'>Buy hard Copy <span>TK {hardPrice}</span></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
  )
}
