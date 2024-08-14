import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const Products = () => {
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const text = document.getElementById("input-search");
    document.getElementById("btn-search").addEventListener("click", (e) => {
      setSearchText(text.value);
    });
  }, []);
  console.log(searchText);
  const {
    isPending,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("/products.json").then((res) => res.json()),
  });

  if (isPending) {
    return <div className="flex justify-center mt-5">Loading...</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
};

export default Products;
