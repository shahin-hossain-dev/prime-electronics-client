import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Products = ({ price, category, brand, sort }) => {
  const [searchText, setSearchText] = useState("");
  const axiosPublic = useAxiosPublic();
  const [count, setCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  // access search text from real DOM
  useEffect(() => {
    const text = document.getElementById("input-search");
    document.getElementById("btn-search").addEventListener("click", () => {
      setSearchText(text.value);
    });
  }, [searchText]);

  const numberOfPage = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPage).keys()];

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePerPage = (e) => {
    setItemsPerPage(e.target.value);
  };

  const { data } = useQuery({
    queryKey: ["count", brand, category, price],
    queryFn: async () => {
      const data = await axiosPublic.get(
        `/product-count?brand=${brand}&category=${category}&price=${price}`
      );
      // console.log(data.data.count);
      setCount(data.data.count);
      return data.data.count;
    },
  });

  const {
    isPending,
    error,
    data: products,
  } = useQuery({
    queryKey: [
      "products",
      searchText,
      currentPage,
      itemsPerPage,
      price,
      category,
      brand,
      sort,
    ],
    queryFn: async () => {
      // search with text
      if (searchText) {
        const resp = await axiosPublic.get(`/products`);
        const products = resp.data;
        const filterProducts = products.filter((pd) =>
          pd.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setCount(filterProducts.length);
        return filterProducts;
      }

      // filter with categories
      if (brand || category || price) {
        const resp = await axiosPublic.get(
          `/products?currentPage=${currentPage}&itemsPerPage=${itemsPerPage}&brand=${brand}&category=${category}&price=${price}`
        );

        return resp.data;
      }

      // all products with sort
      const resp = await axiosPublic.get(
        `/products?currentPage=${currentPage}&itemsPerPage=${itemsPerPage}&sort=${sort}`
      );

      return resp.data;
    },
  });

  if (isPending) {
    return <div className="flex justify-center mt-5">Loading...</div>;
  }
  return (
    <div>
      {products.length !== 0 || (
        <h2 className="text-2xl text-slate-400 text-center">
          No Product Found
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {/* pagination */}
      <div className="mt-12">
        <button
          onClick={() => handleNext()}
          className="btn btn-primary btn-sm rounded-none me-3"
        >
          Next
        </button>
        <button
          onClick={() => handlePrevious()}
          className="btn btn-primary btn-sm rounded-none me-3"
        >
          Previous
        </button>

        {pages?.map((page, idx) => (
          <button
            key={idx}
            onClick={() => handlePage(page)}
            className={`btn btn-primary btn-sm me-3 mb-3 rounded-none ${
              page === currentPage ? "btn-secondary" : ""
            }`}
          >
            {page + 1}
          </button>
        ))}
        <div className="inline border border-primary p-1 ">
          <select
            defaultValue={itemsPerPage}
            onChange={handlePerPage}
            className="outline-none"
          >
            <option value="5">05</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Products;
