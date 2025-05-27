import ProductCard from './components/ProductCard';
import {products} from './models/products';

function App() {  
  return (
    <main className='p-12'>
      <h1 className='text-4xl'>Min-Comerce</h1>
      <section className='flex justify-start'>
          <ProductCard {...products[0]} />
          <ProductCard {...products[1]} />
          <ProductCard {...products[2]} />
          <ProductCard {...products[3]} />
          <ProductCard {...products[4]} />
          <ProductCard {...products[5]} />
      </section>
    </main>
  )
}

export default App
