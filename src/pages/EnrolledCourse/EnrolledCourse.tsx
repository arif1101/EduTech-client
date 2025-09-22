import { Button } from "@/components/ui/button";
import { CourseProgressBar } from "./components/CourseProgressBar";
import { Link } from "react-router";


export default function EnrolledCourse() {
  return (
    <div className="my-12 px-4 md:p-0">

        <h1 className="text-2xl font-semibold">Welcome back <span className="font-bold text-sky-500">Arifur Rahman</span>, Ready for your next lesson?</h1>
        <div className=" h-[2px] bg-sky-500 mt-8"></div>

        <div className="border p-6 md:p-8 rounded-2xl shadow mt-8 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="max-w-[294px] max-h-[196px] md:max-w-[368px] md:max-h-[236px]">
                <img className="rounded-2xl" src="https://i.ibb.co.com/nM8qXWfD/17538409-5870491.jpg" alt=""/>
            </div>
            <div className="space-y-3 w-full">
                <h1 className="text-[25px] font-medium">Next Level Development</h1>
                <p className="text-[18px] font-medium">EduTech BD</p>
                <CourseProgressBar/>
                <div className="space-x-3">
                    <Link to="/courses/enrolled/123"><Button className="rounded-full text-[17px] py-[22px] bg-sky-600 hover:bg-sky-600">Continue Course</Button></Link>

                    <Button className="rounded-full text-black text-[17px] py-[22px] bg-slate-300
                    ">Course Outline</Button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
