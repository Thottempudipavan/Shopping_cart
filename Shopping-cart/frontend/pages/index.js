import Head from "next/head";
import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import HomeCateogory from "../components/HomeCateogory";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Category data</p>;

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Carousel />

      {data
        .sort((a, b) => a.order - b.order)
        .map((category, index) => (
          <HomeCateogory category={category} key={category.id} index={index} />
        ))}
    </>
  );
}
