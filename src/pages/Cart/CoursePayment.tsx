/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import bkashImg from "@/assets/BKash.png"
import nagadImg from "@/assets/Nagad.png"
import { Button } from "@/components/ui/button";


export default function CoursePayment({setIsModalOpen} : any) {

    const [paymentMethod, setPaymentMethod] = useState(null);
    const handlePayment = (method : any) => {
        setPaymentMethod(method);
    };
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 bg-opacity-30">
        <div className="bg-white max-w-md w-full rounded-lg shadow-xl p-6 relative">
            <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
            ✕
            </button>

            <h2 className="text-xl font-semibold text-center mb-4">Checkout</h2>
            <div className="border p-4 rounded-lg mb-4">
                {/* two payment mehtod  */}
                <div className="flex gap-5 justify-center mb-4">
                    <div
                        onClick={() => handlePayment("Nagad")}
                        className={`border shadow py-1 px-3 flex cursor-pointer rounded ${
                        paymentMethod === "Nagad" ? "ring-2 ring-red-400" : ""
                        }`}
                    >
                        <img src={nagadImg} alt="Nagad" className="h-12" />
                    </div>
                    <div
                        onClick={() => handlePayment("Bkash")}
                        className={`border shadow py-1 px-3 flex cursor-pointer rounded ${
                        paymentMethod === "Bkash" ? "ring-2 ring-pink-400" : ""
                        }`}
                    >
                        <img src={bkashImg} alt="Bkash" className="h-10" />
                    </div>
                </div>
                {/* this will show when i select payment method  */}
                {paymentMethod && (
                <p className="text-red-600 text-sm text-center">
                    <strong>Send 200 Taka</strong> with{" "}
                    <strong>{paymentMethod}</strong> to{" "}
                    <strong className="text-red-500">+8801534115844</strong> and add the transaction ID.
                </p>
                )}
            </div>
            {/* this form will show when i select payment method  */}
            {paymentMethod && (
                <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                    * Your Contact Number
                    </label>
                    <div className="flex items-center gap-2 border rounded px-3 py-2 mt-1">
                    <span className="text-sm">🇧🇩 +880</span>
                    <input
                        type="text"
                        placeholder="1XXXXXXXXX"
                        className="flex-1 outline-none text-sm"
                    />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                    * Transaction ID
                    </label>
                    <input
                    type="text"
                    placeholder="Transaction id"
                    className="w-full border rounded px-3 py-2 mt-1 outline-none text-sm"
                    />
                </div>

                <div className="flex justify-end gap-2">
                    <Button
                    onClick={() => {
                        setIsModalOpen(false);
                        setPaymentMethod(null);
                    }}
                    className="px-4 py-2 text-sm border rounded hover:bg-gray-100"
                    >
                    Cancel
                    </Button>
                    <Button
                    className="px-5 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600"
                    >
                    Confirm
                    </Button>
                </div>
                </form>
            )}
        </div>
        </div>
    )
}
