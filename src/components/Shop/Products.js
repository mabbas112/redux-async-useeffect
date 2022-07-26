import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const DUMMY_PRODUCTS = [
    {
      id: 'p1',
      title: 'Test 1',
      price: 6,
      description: 'This is a first product - amazing!'
    },
    {
      id: 'p2',
      title: 'Test 2',
      price: 8,
      description: 'This is a Second product - amazing!'
    }
  ]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product =>
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={+product.price}
            description={product.description}
          />)
        }
      </ul>
    </section>
  );
};

export default Products;
