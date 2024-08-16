import { useState } from "react";
import Category from "./Category";
import Products from "./Products";

const Home = () => {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-12 gap-3">
        <aside className="col-span-1">
          <h2>Filter by Category</h2>
          <div className="mt-3">
            <Category
              setBrand={setBrand}
              setCategory={setCategory}
              setPrice={setPrice}
            />
          </div>
        </aside>
        <section className="col-span-3">
          <div className="py-3 bg-slate-200 px-3 text-secondary font-medium">
            <h2>products</h2>
          </div>
          <div className="mt-4">
            <Products brand={brand} category={category} price={price} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
