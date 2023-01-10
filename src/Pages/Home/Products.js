import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useProducts();
  return (
    <div>
      <div id='buy' className='flex flex-col w-full'>
      <h1 className='mt-12 font-bold text-2xl text-center'>Our Top Collection</h1>
      <div className='flex items-center justify-center'>
      <div className="divider bg-orange-400 w-72 h-1 rounded-md"></div>
      </div>
      <p className='text-center text-xl text-purple-400'>
        <span className='pr-8'>Best Sellers</span>
        <span className='pr-8'>Trending</span>
        <span>New Arrival</span>
        </p>
      </div>
      <div className='mt-11  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
      {
        products.map(product => <Product
        key={product._id}
        product={product}
        ></Product>)
      }
      </div>
    </div>
  );
};

export default Products;