import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';

function App() {  
    return (
        <CartProvider>
            <Router>
                <div className="min-h-screen bg-gray-50">
                    <Navbar />
                    <main className="container mx-auto py-8 px-4">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<CartPage />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
