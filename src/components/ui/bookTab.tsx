import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Box, Plane } from "lucide-react";
import Rating from "./Rating";

export default function BookTab() {
  
  return (
    <Tabs defaultValue="tab-1" className="">
      <TabsList className="h-auto w-full flex justify-start rounded-none  p-0 bg-slate-100 dark:bg-black mb-4">
        <TabsTrigger
          value="tab-1"
          className="data-[state=active]:after:bg-sky-500 relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Details
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="data-[state=active]:after:bg-sky-500 relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Author
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="data-[state=active]:after:bg-sky-500 relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Review&Rating
        </TabsTrigger>
      </TabsList>
{/* main content here */}
    <div className="p-10 border bg-white dark:bg-black">
      <TabsContent value="tab-1">
        {/* overview  */}
        <div className="flex flex-col gap-6">
            <h1 className="text-[20px] font-semibold">Book Title</h1>
            <p className="text-[16px]">book details sfksd f sdjfsdalfs fskjfasldf s f sdf sd fsf sd fsf sdf sf sdf sd fsa fas fsadf as fasf asdf s</p>

        </div>
      </TabsContent>
      {/* Author  */}
      <TabsContent value="tab-2">
          <div className="flex items-center gap-4 mb-4">
            <img src="/#" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="font-semibold">Arif Rahman</p>
              <p className="text-sm text-muted-foreground">sfdka dskfsdkf </p>
            </div>
          </div>
      </TabsContent>
      {/* rating raeview  */}
      <TabsContent value="tab-3">
          <div className="tab-content border-base-300 bg-base-100">
          <div>
              <div>
                  <h1 className='text-[20px] font-bold'>Reviews</h1>
                  <p className='text-sm text-slate-400'>Total reviews: 0 | Rating: 5.0</p>
              </div>
              <div className='border mt-6 mb-6'></div>
              {/* comment form  */}
              <div className=" mx-auto p-6 bg-gray-100 dark:bg-black rounded-md shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Add Your Review</h3>
                  <Rating/>
                  <form>
                      <textarea
                      className="w-full border rounded-md p-3 mb-4 resize-none"
                      placeholder="Write your review..."
                      rows={4}
                      required
                      />

                      <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition"
                      >
                      <Plane />
                      Submit Review
                      </button>
                  </form>
              </div>
              {/* end comment form  */}
              <div className='mt-6'>
              <h1 className='text-[20px] font-semibold'>All Reviews</h1>
              <div className="flex flex-col items-center justify-center h-64 text-center p-4">
              <Box className="w-12 h-12 text-gray-500 mb-4" />
              <h2 className="text-lg font-semibold text-gray-800">No Reviews Yet</h2>
              <p className="text-sm text-gray-500">Be the first to share your experience!</p>
              </div>
              </div>
          </div>
          </div>
      </TabsContent>
    </div>

    </Tabs>
  )
}
