import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useGetBookCartQuery, useRemoveBookFromCartMutation } from '@/redux/features/cart/cart.api'
import { CircleX } from 'lucide-react';
import { toast } from 'sonner';

interface CartItem {
  _id: string;
  title: string;
  category?: string;
  copyType?: string;
  image: string;
  price: number;
  quantity: number;
    book: {
    _id: string;
    title: string;
    image: string;
    price: number;
  };
}


// interface CartProps {
//   items: CartItem[];
// }


export default function BookCart() {

  const {data} = useGetBookCartQuery(undefined)
  const books = data?.data
  const items = data?.data?.items
  // console.log(items)

  const [removeBookFromCart, { isLoading }] = useRemoveBookFromCartMutation();

  const handleDelete = async (bookId: string) => {
    // const bookId = book?._id;
    // console.log("----",bookId)
    try {
      await removeBookFromCart(bookId).unwrap();
      toast.success("Book deleted from cart")
      console.log("Book removed successfully");
    } catch (error) {
      console.error("Failed to remove book:", error);
      toast.success("something went wrong!")
    }
  };

  return (
    <div className='py-8 space-y-6'>
      {/* Cart Item + Coupon */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Item */}
        <div className=''>
          <div className="grid grid-cols-2 gap-4">
            {items?.map((item: CartItem) => (
              <Card
                key={item._id}
                className="flex items-center justify-between p-4 shadow-sm"
              >
                {/* Left section: image + details */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-md object-cover"
                  />
                  <div>
                  <div className='flex justify-between w-full'>
                      <p className={`text-sm text-gray-500 uppercase font-medium ${item?.copyType === "Hardcopy" ? "text-purple-500":"text-orange-500"}`}>
                      {item?.copyType || "Book"}
                    </p>
                    <CircleX
                      onClick={() => !isLoading && handleDelete(item?.book?._id)}
                      className={`text-red-500 cursor-pointer ${
                        isLoading ? "opacity-50 pointer-events-none" : ""
                      }`}
                      size={20}
                    />
                  </div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-gray-700 font-medium">
                      ৳{item.price} × {item.quantity}
                    </p>
                  </div>
                </div>

                {/* Right section: subtotal */}
                <div className="text-right">
                  <p className="text-gray-600 text-sm">
                    Subtotal:{" "}
                    <span className="font-medium">
                      ৳{item.price * item.quantity}
                    </span>
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Coupon */}
        <Card className="p-4 max-h-[200px]">
          <h3 className="font-semibold">Coupon Code</h3>
          <p className="text-sm text-gray-600 mb-3">
            Unlock amazing savings with our exclusive coupons! Enjoy instant
            discounts, whether it's a percentage off, flat reduction, or even
            free shipping.
          </p>
          <div className="flex gap-2">
            <Input placeholder="Enter Coupon Code" />
            <Button className='bg-sky-500 hover:bg-sky-600'>Apply</Button>
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
            <span>৳{books?.totalPrice}</span>
          </div>
          <div className="flex justify-between font-bold text-lg text-blue-600">
            <span>Total Amount</span>
            <span>৳{books?.totalPrice}</span>
          </div>
        </Card>

        {/* Proceed */}
        <Card className="p-4 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-600">Estimated Delivery Time</p>
            <p className="font-semibold">2-4 Business Days</p>
          </div>
          <div className="mt-4">
            <Button className="w-full bg-sky-500 hover:bg-sky-600">Proceed to Checkout</Button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              By proceeding, you agree to our Terms of Service
            </p>
          </div>
        </Card>
      </div>      
    </div>
  )
}
