import { Button } from "@/components/ui/button";
import CourseTab from "@/components/ui/courseTab";
import { useAddCourseCartMutation } from "@/redux/features/cart/cart.api";
import { useSingleCourseQuery } from "@/redux/features/course/course.api"
import {  CheckCircle, Clock, Network, Play, Timer, User, Video } from "lucide-react"
import { useState } from "react";
import {  useParams } from "react-router"
import { toast } from "sonner";


export default function CourseDetails() {
    const {id} = useParams()
    const [showModal, setShowModal] = useState(false)

    const [addCourseCart, {isLoading: isAddingToCart}] = useAddCourseCartMutation()
    
    // data fetch 
    const {data,isLoading,error} = useSingleCourseQuery(id)
    const course = data?.data
    const thumbnail = course?.thumbnail
    console.log(id)

    const handleEnroll = async () => {
        try {
        await addCourseCart({courseId :id}).unwrap()
        toast.success("successfully Enrolled, check your cart")
        } catch (err) {
            console.log(err)
            toast.error("something wrong! duplicate enroll")
        }
    }

    return (
        <div className='pt-6'>
        {isLoading ? (
            <p>Loading...</p>
        ) : error ? (
            <p>Something went wrong!</p>
        ) : (
            <div className=''>
                <div className="">
                    <h1 className='text-4xl font-bold mb-4'>{course.title}</h1>
                    <div className='flex gap-6 mb-6'>
                        <div className='flex items-center gap-2'>
                            <User/>
                            <h3>8 student enroll</h3>
                        </div>
                        <div className='flex items-center gap-2'>
                             <Clock/>
                             <h3>Last update 4/23/2025</h3>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Network/>
                            <h3 className="text-purple-500 font-bold">beginer</h3>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 rounded-full">
                            <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                        <div className=''>
                            <h1 className='text-[16px] font-bold'>Arif</h1>
                            <p className='cla
                            text-[14px] font-normal'>Instructor</p>
                        </div>
                    </div>

                </div>

                <div className='flex items-start gap-6 py-12'>
                    {/* left content  */}
                    <div className='w-2/3'>
                    {/* Tab menu  */}
                        <CourseTab
                            overview={course?.overview || "No overview available"}
                            curriculum={course?.curriculum || "No curriculum available"}
                            instructors={course?.instructors || "No instructors info"}
                        />
                    </div>
                    {/* end left content */}

                    {/* right enroll content content  */}
                    <div className='w-1/3 sticky top-6 shadow-md overflow-hidden bg-white dark:bg-black rounded-xl p-6 border border-blue-500'>
                        <div className={`relative h-48 flex items-center justify-center cursor-pointer bg-[url(${thumbnail})] border-2 dark:border-white/25 rounded-md`}
                        onClick={() => setShowModal(true)}>
                            {/* add here youtube video. when i click to play it open with a modal and play in modal */}
                            <Play className=' text-4xl z-10'></Play>
                            <div className='absolute inset-0 rounded-lg'></div>

                        </div>
                        <div className="mt-6">
                            <div className="text-2xl font-semibold mb-6">{course?.price}</div>
                            <div>
                                <Button
                                onClick={handleEnroll}
                                disabled={isAddingToCart}
                                className="btn bg-sky-500 w-full mb-4 hover:bg-sky-600"
                                >
                                {isLoading ? "Adding..." : "Enroll Now"}
                                </Button>
                            </div>
                            <div className="space-y-2 text-base font-semibold text-gray-700 dark:text-white/90">
                                <div className="flex items-center gap-2">
                                    <Timer className="w-4 h-4" />
                                    <span>29.58 hours on-demand video</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Video className="w-4 h-4" />
                                    <span>44 lectures</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Certificate of completion</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {showModal && (
                    <div className="fixed inset-0  flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
                        <button
                        onClick={() => setShowModal(false)}
                        className="absolute top-2 right-2 text-xl font-bold"
                        >
                        &times;
                        </button>
                        <div className="aspect-video w-full">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="YouTube video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                        </div>
                    </div>
                    </div>
            )}
                    {/* end right content */}
                </div>

            </div>
        )}
        </div>
    )
}
