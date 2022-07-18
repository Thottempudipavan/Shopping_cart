import { useState, useEffect } from "react";

export default function Categories() {
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
    <div className="sidebar bg-aqua-150 hidden sm:block">
      {data.map((category) => (
        <div key={category.id} className="border-b pl-8 py-2 font-thin">
          <div className="">{category.name}</div>
        </div>
      ))}
    </div>
  );
}
