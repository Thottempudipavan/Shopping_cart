import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { setCartItems } from "../slices/cart";
import { setProducts } from "../slices/products";

export default function Categories() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const data = products;
  console.log({ products });
  // const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleButtonClick = (id) => {
    fetch("http://localhost:3001/addToCart", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        if (data.response === "Success") {
          dispatch(setCartItems(id));
        }
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data));
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data.length) return <p>No Product data</p>;

  return (
    <div>
      <div className="grid grid-cols-1 p-2 sm:p-0 sm:grid-cols-4 sm:gap-4">
        {data.map((product) => (
          <div key={product.id} className="pl-4 py-4 m-2 shadow-2xl rounded-xl">
            <div className="font-semibold">{product.name}</div>
            <Image
              src={product?.imageURL.replace("/static", "") ?? ""}
              width={350}
              height={350}
              alt="Product description"
            />
            <div className="bg-gray-100 p-2 font-normal">
              {product.description.substring(0, 130)}
            </div>
            <div className="flex flex-row items-center justify-between pt-2">
              <div className="">MRP Rs.{product.price}</div>
              <button
                onClick={() => handleButtonClick(product.id)}
                className="bg-pink-850 p-2 px-2 font-extralight hover:bg-violet-200 rounded-xl"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
