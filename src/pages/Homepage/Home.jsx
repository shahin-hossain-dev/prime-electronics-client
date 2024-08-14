import Products from "./Products";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-12">
        <aside className="col-span-1">
          <h2>Filter by Category</h2>
        </aside>
        <section className="col-span-3">
          <div className="py-3 bg-slate-50 px-3 text-secondary font-medium">
            <h2>products</h2>
          </div>
          <div className="mt-4">
            <Products />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
