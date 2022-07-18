import React from "react";
import Image from "next/image";

const HomeCateogory = ({ category, index }) => {
  return (
    <div className="container mx-auto border-b pb-10">
      <div
        className={`flex ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        } items-center justify-around px-5 sm:px-0`}
      >
        <Image
          src={category?.imageUrl.replace("/static", "") ?? ""}
          width={350}
          height={300}
        />
        <div className="flex flex-col items-center gap-3">
          <div className="">{category.name}</div>
          <div className="">{category.description}</div>
          <button className="text-white bg-green-500 rounded-lg p-2 font-extralight">
            Explore {category.key}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCateogory;
