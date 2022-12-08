import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useProducts();
 
  
  return (
    <div>
      <h1 className='my-11 font-bold text-2xl ml-52'>LifeStyle</h1>
      <div className='mt-11 lg:mx-52 sm:m-0 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
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