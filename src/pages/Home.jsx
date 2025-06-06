import React from 'react'
import HomeComponent from '../components/HomeComponent'
import { useGetProductsQuery } from '../features/product/productApi';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data, isLoading, isError } = useGetProductsQuery();
  const newProducts = data?.slice(0, 2)
  console.log("this is new product in home page", newProducts)
  return (
    <>
    <HomeComponent />
      <div className="p-6 max-w-6xl mx-auto space-y-10">
      
      <section>
        <div className='flex items-center justify-between'>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          New Products Added
        </h2>
        <Link to={'/products'} className='text-2xl font-semibold text-gray-700 mb-4 underline'>View More</Link>
        </div>
        {isLoading && <p className="text-gray-600">Loading products...</p>}
        {isError && <p className="text-red-500">Error loading products.</p>}

        <div className="space-y-4">
          {newProducts?.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between bg-white border rounded-lg shadow-sm p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {product.title.slice(0, 30)}...
                  </h3>
                  <p className="text-sm text-gray-600">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  )
}

export default Home