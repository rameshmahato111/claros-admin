import  {useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Button from "./Button";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from "./Pagination";
import InputComponent from "./Input";
import { useGetProductsQuery } from "../features/product/productApi";


const ProductComponent = () => {
 const {data, isLoading, error} = useGetProductsQuery();
  const [search, setSearch] = useState("");
  
  const searchProduct = data?.filter((product) =>
    product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  
  if(isLoading) return <p>Products loading please wait ...</p>
  if(error) return <p>{error.message ?? "something went wrong. please try again."}</p>
  return (
    <section className="md:p-4 p-2 rounded-lg ring shadow-lg ring-gray-900/5 space-y-4 py-5">
      <div className="block md:flex items-center justify-between gap-2">
        <InputComponent
          type="text"
          placeholder="Search Products"
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button
          children={"Add Product"}
          icon={<IoIosAddCircle className="md:text-xl text-2xl " />}
          className={"bg-black text-white md:mt-0 mt-4"}
        />
      </div>
      <div className=" w-full overflow-x-scroll">
        <ul className="w-auto mx-auto grid grid-cols-4 rounded-lg p-2 font-poppins md:text-base text-sm">
          <li>Products</li>
          <li>Category</li>
          <li>Price</li>
        
         
          <li>Action</li>
        </ul>

        
<Pagination
  data={searchProduct}
  renderRow={(product) => (
    <div
      key={product.id}
      className="items-center grid grid-cols-4 md:gap-4 gap-2 py-4 text-sm font-poppins px-2  rounded-lg ring shadow-lg ring-gray-900/5 my-4"
    >
      <div className="capitalize flex items-center gap-2">
      
          <img
            src={product.image}
            className="size-8 object-contain"
            alt={product.title}
          />
        {/* remove slice while testing in cypress */}
  <span className="md:inline-block hidden">{product.title.slice(0, 10)}...</span>
      </div>
      <div className="capitalize md:text-base text-sm">{product.category}</div>
      <div className="md:text-base text-sm">{product.price}</div>
      
      
      <div className="flex items-center md:gap-2 -ml-5">
        <Button 
          icon={
            <FaEdit className="bg-green-500 rounded-full p-1 md:text-2xl text-xl text-white" />
          }
        />
        <Button
          icon={
            <MdDelete className=" bg-red-500 rounded-full p-1 md:text-2xl text-xl text-white" />
          }
        />
      </div>
    </div>
  )}
/>

      </div>
    </section>
  );
};

export default ProductComponent;
