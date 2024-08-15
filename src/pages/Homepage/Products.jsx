import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Products = () => {
  const [searchText, setSearchText] = useState("");
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const text = document.getElementById("input-search");
    document.getElementById("btn-search").addEventListener("click", () => {
      setSearchText(text.value);
    });
  }, [searchText]);
  console.log(searchText);

  const {
    isPending,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products", searchText],
    queryFn: async () => {
      // search with text
      if (searchText) {
        const resp = await axiosPublic.get(`/products`);
        const products = resp.data;
        const filterProducts = products.filter((pd) =>
          pd.name.toLowerCase().includes(searchText.toLowerCase())
        );
        return filterProducts;
      }
      const resp = await axiosPublic.get("/products");
      return resp.data;
    },
  });

  if (isPending) {
    return <div className="flex justify-center mt-5">Loading...</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border">
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
