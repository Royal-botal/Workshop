import React, { useState } from 'react';
import './index.css'; // Make sure to create a corresponding CSS file for styles.
import { Link } from 'react-router-dom';

// Sample data: list of products for sale
const products = [
    { id: 1, name: 'Tools', image: '../public/images/Tools.jpg' },
    { id: 2, name: 'Work Drill', image: '../public/images/drills.jpg' },
    { id: 3, name: 'Water Pump', image: '../public/images/waterpumps.jpg' },
    { id: 4, name: 'Driver', image: '../public/images/screw drivers.jpg' },
    { id: 5, name: 'Pressure washer', image: '../public/images/pressure washers.jpg' },
    { id: 6, name: 'Solars', image: '../public/images/solar.jpg' },
    { id: 7, name: 'Inverter', image: '../public/images/solar inverter.jpg' },
    { id: 8, name: 'Solar Pumps',image: '../public/images/Solar pumps.jpg' },
    { id: 9, name: 'Power Saws',image: '../public/images/power saws.jpg' },
    { id: 10, name: 'Solar inverter',image: '../public/images/mini inverters.jpg' },
    { id: 11, name: 'Drills',image: '../public/images/drills.jpg' },
    { id: 12, name: 'Battery', image: '../public/images/batterts ch.jpg' },
    { id: 13, name: 'PoshoMill', image: '../public/images/Poshomill.jpg'},
    { id: 14, name: 'Motor', image: '../public/images/motor.jpg'}
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
