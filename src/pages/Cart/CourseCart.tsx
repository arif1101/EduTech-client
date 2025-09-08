import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useDeleteCourseCartMutation, useGetCourseCartQuery } from "@/redux/features/cart/cart.api";
import { useState } from "react";
import CoursePayment from "./CoursePayment";
import { CircleX } from "lucide-react";
import type { ICourseCartItem } from "@/type/type";

export default function CourseCart() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [paymentMethod, setPaymentMethod] = useState(null);
    const [deleteCourseCart, { isLoading }] = useDeleteCourseCartMutation();
    const {data} = useGetCourseCartQuery(undefined)
    const items: ICourseCartItem[] | undefined = data?.data?.items

    const totalItemsPrice = data?.data?.totalPrice
    console.log(items) 

    const handleDelete = async (courseId: string) => {
        console.log(courseId)// [object object]
    try {
        const result = await deleteCourseCart(courseId).unwrap();
        console.log(result);
    } catch (error) {
        console.error("Failed to remove course:", error);
    }
    };

    // const handlePayment = (method) => {
    //     setPaymentMethod(method);
    // };

    return (
        <div className='py-8 space-y-6'>
        {/* Cart Item + Coupon */}
        <div className="grid md:grid-cols-3 gap-4">
        {/* Loop through courses */}
        <div className="col-span-2 space-y-4">
            {items?.map((item) => (
            <Card key={item._id} className="flex p-4">
            <div className="flex gap-4 ">
                <img
                src={item.course.thumbnail} // ✅ from course
                alt={item.course.title}
                className="w-20 h-20 rounded-md object-cover"
                />
                <div className="flex justify-between w-full">
                <div>
                    <p className="text-sm text-gray-500 uppercase font-medium">
                    Course
                    </p>
                    <h2 className="font-semibold">{item.course.title}</h2>
                    <p className="text-gray-700 font-medium">৳{item.course.price}</p>
                </div>
                <CircleX
                    onClick={() => !isLoading && handleDelete(item.course._id)}
                    className={`text-red-500 cursor-pointer ${
                    isLoading ? "opacity-50 pointer-events-none" : ""
                    }`}
                    size={20}
                />
                </div>
            </div>
            <div className="text-right ">
                <p className="text-gray-600 text-sm">
                Subtotal:{" "}
                <span className="font-medium">৳{item.course.price}</span>
                </p>
            </div>
            </Card>

            ))}
        </div>

        {/* Coupon Section */}
        <Card className="p-4 max-h-[220px]">
            <h3 className="font-semibold">Coupon Code</h3>
            <p className="text-sm text-gray-600 mb-3">
            Unlock amazing savings with our exclusive coupons! Enjoy instant
            discounts, whether it's a percentage off, flat reduction, or even
            free shipping.
            </p>
            <div className="flex gap-2">
            <Input placeholder="Enter Coupon Code" />
            <Button className="bg-sky-500 hover:bg-sky-600">Apply</Button>
            </div>
        </Card>
        </div>

        {/* Order Summary + Proceed */}
        <div className="grid md:grid-cols-2 gap-4">
            {/* Order Summary */}
            <Card className="p-4">
                <h3 className="font-semibold text-lg mb-2">Order Summary</h3>
                <div className="flex justify-between text-gray-700 mb-2">
                    <span>Items ({items?.length})</span>
                    <span>{totalItemsPrice}</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-blue-600">
                    <span>Total Amount</span>
                    <span>{totalItemsPrice}</span>
                </div>
            </Card>

            {/* Proceed */}
            <Card className="p-4 flex flex-col justify-between">
            <div>
                <p className="text-sm text-gray-600">Estimated Delivery Time</p>
                <p className="font-semibold">2-4 Business Days</p>
            </div>
            <div className="mt-4">
                <Button 
                onClick={() => {
                        if ((items?.length ?? 0) > 0) {
                            setIsModalOpen(true)
                        }
                    }}
                    className="bg-sky-500 hover:bg-sky-600 w-full">Proceed to Checkout</Button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                By proceeding, you agree to our Terms of Service
                </p>
            </div>
            </Card>

            {isModalOpen && (
                <CoursePayment setIsModalOpen={setIsModalOpen}/>
            )}
            
        </div>
        </div>
    )
}
