import Banner from "@/components/Home/Banner";
import data from "@/utils/data.json";
import { postItemType } from "@/types";
import ImageCom from "@/components/Image";
import CardButton from "@/components/Home/CardButton";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <p className="font-medium text-[24px] text-center">Order Food</p>
      <div className="p-5">
        <div className="flex gap-5 justify-center">
          {data?.map(
            (item: postItemType, i: number): JSX.Element => (
              <div
                className="card bg-slate-100 text-black h-60 w-56 p-2 rounded"
                key={item.id}
              >
                <div>
                  <ImageCom
                    image={item.image}
                    title={`${item.id}`}
                    height={`8rem`}
                  />
                  <p className="text-center text-black mt-1">{item.name}</p>
                  <div className="flex gap-2 mt-1">
                    <label className="text-black">Price:</label>
                    <p className="text-black font-medium text-[16px]">
                      €{item.price}
                    </p>
                  </div>
                  {/* Buttons client components */}
                  <CardButton item={item} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
