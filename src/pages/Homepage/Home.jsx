const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-12">
        <aside className="col-span-1">
          <h2>Filter by Category</h2>
        </aside>
        <section className="col-span-3">
          <h2>Content</h2>
        </section>
      </div>
    </div>
  );
};

export default Home;
