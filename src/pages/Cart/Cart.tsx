
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import CourseCart from "./CourseCart";
import BookCart from "./BookCart";

export default function Cart() {
  return (
    <div className="mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">You want to buy</h1>
        <p className="text-gray-600 text-sm">
          Review and manage your selected items. Whenever sure, click on Checkout to proceed.
        </p>
        <p className="text-sm mt-2">
          1 item in your cart.{" "}
          <button className="text-blue-500 hover:underline">Clear Cart</button>
        </p>
      </div>
    <Tabs defaultValue="tab-1" className="">
      <TabsList className="h-auto rounded-none border-b bg-transparent p-0">
        <TabsTrigger
          value="tab-1"
          className="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Course Cart
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Book Cart
        </TabsTrigger>
      </TabsList>

      <TabsContent value="tab-1">
        <CourseCart/>
      </TabsContent>
      <TabsContent value="tab-2">
        <BookCart/>
      </TabsContent>
    </Tabs>
    </div>
  );
}
