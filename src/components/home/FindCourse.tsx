
export default function FindCourse() {
  return (
    <div>
        {/* start find course  */}
        <div className='w-full bg-sky-500 px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 rounded-lg'>
            <div className='dark:text-white p-8 max-w-[551px] flex flex-col gap-3 md:gap-8'>
                <h1 className='text-2xl font-bold'>Find Your Course</h1>
                <p className='text-base'>Suspendisse id ullamcorper leo. Nam consequat arcu a lorem conllis, ultricies tristique elit bibendum. Maesenas fermentum.</p>
            </div>
            <form className="max-w-[551.2px] w-full grid grid-cols-1 md:grid-cols-2 md:gap-3 items-center dark:text-white">
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="rounded-full w-[269.6px] h-[44px] p-2 pl-5 border dark:border-white dark:text-white"
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="rounded-full dark:border-white w-[269.6px] h-[44px] p-2 border pl-5 "
                />
                <input 
                    type="text" 
                    placeholder="Course Name" 
                    className="rounded-full w-[269.6px] h-[44px] dark:border-white p-2 border pl-5"
                />
                <button
                    className="rounded-full w-[269.6px] h-[44px] bg-blue-900 text-white pl-5"
                >
                    Submit
                </button>
            </form>
        </div>
        {/* end find course  */}
    </div>
  )
}
