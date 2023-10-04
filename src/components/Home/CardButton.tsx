"use client";

import { FaPlus, FaMinus } from "react-icons/fa";
import Button from "@/components/Button";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart, removeCartCount } from "@/redux/features/counterSlice";
import { postItemType } from "@/types";

function CardButton({ item }: { item: postItemType }) {
  const dispatch = useAppDispatch();
  
  return (
    <div className="flex justify-between mt-2" key={item.id}>
      <Button
        color="bg-red-600"
        onClick={() => dispatch(removeCartCount(item.id))}
      >
        <FaMinus size={16} color="white" />
      </Button>
      <Button color="bg-teal-600" onClick={() => dispatch(addToCart(item))}>
        <FaPlus size={16} color="white" />
      </Button>
    </div>
  );
}

export default CardButton;
