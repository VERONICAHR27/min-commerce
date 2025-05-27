import ProductList from './components/ProductList';
import { products } from './models/products';

function App() {  
    return (
        <main className='container mx-auto p-8'>
            <h1 className='text-4xl font-bold mb-8 text-gray-800'>Min-Commerce</h1>
            <ProductList products={products} />
        </main>
    );
}

export default App
