const Category = ({ setBrand, setCategory, setPrice }) => {
  return (
    <div>
      {/* brand name */}
      <div>
        <label htmlFor="Branch Name" className="font-medium mb-2">
          Brand Name
        </label>
        <select
          onChange={(e) => setBrand(e.target.value)}
          defaultValue={"select one"}
          className="w-full p-2 bg-slate-200"
        >
          <option disabled value="select one">
            Select One
          </option>
          <option value="Acer">Acer</option>
          <option value="ASUS">ASUS</option>
          <option value="HP">HP</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Dell">Dell</option>
          <option value="Apple">Apple</option>
          <option value="Huawei">Huawei</option>
          <option value="Samsung">Samsung</option>
          <option value="JinGmi">JinGmi</option>
          <option value="SanDisk">SanDisk</option>
          <option value="Fitbit">Fitbit</option>
          <option value="Anker">Anker</option>
          <option value="Seagate">Seagate</option>
          <option value="Noot products">Noot products</option>
          <option value="Panasonic">Panasonic</option>
        </select>
      </div>
      {/* category name */}
      <div className="mt-4">
        <label htmlFor="Category" className="font-medium mb-2">
          Category
        </label>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 bg-slate-200"
        >
          <option value="select one">Select One</option>
          <option value="Laptops & PC">Laptops & PC</option>
          <option value="Smart Phones">Smart Phones</option>
          <option value="Other">Others</option>
        </select>
      </div>
      {/* category name */}
      <div className="mt-4">
        <label htmlFor="Price Range" className="font-medium mb-2">
          Price Range
        </label>
        <select
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 bg-slate-200"
        >
          <option value="select one">Select One</option>
          <option value="0-100">$0 - $100</option>
          <option value="101-200">$101 - $200</option>
          <option value="200-500">$200 - $500+</option>
          <option value="500-100000">$500 - $1000+</option>
        </select>
      </div>
    </div>
  );
};

export default Category;
