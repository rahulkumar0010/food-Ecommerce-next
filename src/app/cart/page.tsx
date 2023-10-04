"use client";
import ImageCom from "@/components/Image";
import { addToCart, removeCartCount, removeToCart } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React from "react";

function Cart() {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.counterReducer);

  let totalCount = cart?.reduce(function (acc, obj) {
    return obj.count === undefined ? acc + 1 : acc + obj.count;
  }, 0);
  let totalPrice = cart?.reduce(function (acc, obj) {
    return obj.totalPrice === undefined
      ? acc + obj.price
      : acc + obj.totalPrice;
  }, 0);
  console.log("Cart :", cart);
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-slate-50 px-10 py-10 rounded-l-md">
            <div className="flex justify-between border-b pb-8 text-black">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{totalCount} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            {cart.map((item) => (
              <div
                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 text-black"
                key={item.id}
              >
                <div className="flex w-2/5">
                  {/* <!-- product --> */}
                  <div className="w-20">
                    <ImageCom
                      image={item.image}
                      title={`${item.id}`}
                      height={`5rem`}
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm  mt-5">{item.name}</span>
                    {/* <span className="text-red-500 text-xs">{item.name}</span> */}
                    <a
                      href="#"
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                      onClick={() => dispatch(removeToCart(item.id))}
                    >
                      Remove
                    </a>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <svg
                    className="fill-current text-gray-600 w-3 cursor-pointer"
                    viewBox="0 0 448 512"
                    onClick={() => dispatch(removeCartCount(item.id))}
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input
                    className="mx-2 border text-center w-8 rounded"
                    type="text"
                    value={item.count}
                    readOnly
                  />

                  <svg
                    className="fill-current text-gray-600 w-3 cursor-pointer"
                    viewBox="0 0 448 512"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ₹{item.price}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ₹{item.totalPrice ? item.totalPrice : 0}
                </span>
              </div>
            ))}

            <Link
              href="/"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div
            id="summary"
            className="w-1/4 px-8 py-10 bg-slate-800 rounded-r-md"
          >
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {totalCount}
              </span>
              <span className="font-semibold text-sm">{totalPrice}₹</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm rounded">
                <option>Standard shipping - ₹10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full text-black rounded"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>₹{totalPrice > 0 ? Number(totalPrice) + 10 : 0}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
