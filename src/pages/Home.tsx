import ProductList from '../components/ProductList';
import { products } from '../models/products';

export default function Home() {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Nuestros Productos</h1>
            <ProductList products={products} />
        </div>
    );
}