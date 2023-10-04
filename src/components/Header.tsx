"use client";

import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { GiShoppingCart } from "react-icons/gi";
import Image from "next/image";

function Header() {
  const { cart } = useAppSelector((state) => state.counterReducer);
  // const dispatch = useAppDispatch();
  let totalCount = cart?.reduce(function (acc, obj) {
    return obj.count === undefined ? acc + 1 : acc + obj.count;
  }, 0);
  return (
    <nav className="bg-slate-500 text-slate-200 w-full text-[18px] shadow-lg shadow-slate-600/50 sticky top-0 z-50">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="p-0 m-0">
          <Image alt="" src="/img/logo.png" width={55} height={50} />
        </div>
        <div className="font-medium flex justify-center align-middle gap-5 items-center">
          <div className="head-link">
            <Link href={"/"}>Home</Link>
          </div>
          <div className="head-link">
            <Link href={"/about"}>About</Link>
          </div>
          <div className="head-link">
            <Link href={"/blog"}>Blog</Link>
          </div>
        </div>
        <div className="flex align-middle gap-5">
          <Link href={"/cart"}>
            <div className="relative ">
              <GiShoppingCart size={25} color={"white"} />
              {totalCount > 0 && (
                <span className="absolute right-[-5px] top-[-5px] rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  {totalCount}
                </span>
              )}
            </div>
          </Link>
          <div className="head-link">
            <Link href={"/login"}>Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
