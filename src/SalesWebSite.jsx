import React, { useState } from 'react';
import './index.css'; // Make sure to create a corresponding CSS file for styles.
import { Link } from 'react-router-dom';

// Sample data: list of products for sale
const products = [
    { id: 1, name: 'Washing Machine', description: 'A high performance laptop for all purposes.', price: 999, image: 'path/to/laptop.jpg' },
    { id: 2, name: 'Work Drill', description: 'A DSLR camera for professional photography.', price: 599, image: 'path/to/camera.jpg' },
    { id: 3, name: 'Tools', description: 'Noise-cancelling over-ear headphones.', price: 199, image: 'path/to/headphones.jpg' },
    { id: 4, name: 'Driver', description: 'A sleek digital watch with various features.', price: 149, image: 'path/to/watch.jpg' },
    { id: 5, name: 'Pressure', description: 'Latest smartphone with advanced capabilities.', price: 799, image: 'path/to/smartphone.jpg' },
    { id: 6, name: 'Tablet', description: 'A versatile tablet for work and play.', price: 299, image: 'path/to/tablet.jpg' },
    { id: 7, name: 'Hosepipe', description: 'Bluetooth speaker with high sound quality.', price: 89, image: 'path/to/speaker.jpg' },
    { id: 8, name: 'Monitor', description: 'A high-resolution display for all your needs.', price: 199, image: 'path/to/monitor.jpg' },
    { id: 9, name: 'Motherboard', description: 'Mechanical keyboard with customizable keys.', price: 129, image: 'path/to/keyboard.jpg' },
    { id: 10, name: 'Mouse', description: 'Ergonomic mouse for comfortable use.', price: 59, image: 'path/to/mouse.jpg' },
    { id: 11, name: 'Book', description: 'White graphic book for perfect writing.', price: 19, image: 'path/to/book.jpg' },
    { id: 12, name: 'Pages', description: 'With ferry services.', price: 5, image: 'path/to/pages.jpg' }
];

// Main sales website component
function SalesWebsite() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Filter products based on search term on letter
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Get current products for the current page
    const currentProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Calculate total pages
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    return (
        <div className="sales-website">
            {/* Header */}
            <header className="header">
                <h1></h1>
                <input 
                    type="text" 
                    placeholder="Search for products..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <nav>
                    <ul>
                        
                    </ul>
                </nav>
            </header>

            {/* Products Section */}
            <main className="products">
                {currentProducts.map(product => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </main>

            {/* Pagination */}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index + 1} 
                        onClick={() => setCurrentPage(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default SalesWebsite;
