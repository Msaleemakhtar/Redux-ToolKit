"use client";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { ordered, restocked } from "./CakeSlice";

const CakeView = () => {
  const noOfCakes = useAppSelector((state) => state.cake.noOfCakes);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1 className = "text-2xl rounded-md font-bold underline ">No Of Cakes:{noOfCakes}</h1>
      <div className = "space-x-4 py-2" >
      <button className = " border rounded-md bg-teal-700 px-4 py-2" onClick={() => dispatch(ordered())}>Order Cake </button>
      
      <button className = " border rounded-md bg-teal-700 px-4 py-2" onClick={() => dispatch(restocked(2))}>Add Cake </button>
    </div>
    </div>
  );
};

export default CakeView;
