import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useGetCourseCartQuery } from "@/redux/features/cart/cart.api";
import type { ICourseCartItem } from "@/type/type";
import { useState } from "react";
import CoursePayment from "./CoursePayment";

export default function CourseCart() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [paymentMethod, setPaymentMethod] = useState(null);

    const {data} = useGetCourseCartQuery(undefined)
    const items: ICourseCartItem[] | undefined = data?.data?.items

    const totalItemsPrice = data?.data?.totalPrice
    console.log(items) 

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
            <Card
                key={item._id}
                className="flex p-4"
            >
                <div className="flex gap-4">
                <img
                    src="https://i.ibb.co.com/NgT1RCt4/35308524-8275127.jpg"
                    alt={item.title}
                    className="w-20 h-20 rounded-md object-cover"
                />
                <div>
                    <p className="text-sm text-gray-500 uppercase font-medium">
                    Course
                    </p>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-gray-700 font-medium">৳{item.price}</p>
                </div>
                </div>
                <div className="text-right">
                <p className="text-gray-600 text-sm">
                    Subtotal:{" "}
                    <span className="font-medium">৳{item.price}</span>
                </p>
                </div>
            </Card>
            ))}
        </div>

        {/* Coupon Section */}
        <Card className="p-4">
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
