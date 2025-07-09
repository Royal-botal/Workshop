import React, { useState } from 'react';
import './index.css';

// Product data organized by categories
const productCategories = {
  Tools: [
    { id: 1, name: 'Work Drill', image: '../public/images/drills.jpg' },
    { id: 2, name: 'Driver', image: '../public/images/screw drivers.jpg' },
    { id: 3, name: 'Power Saws', image: '../public/images/power saws.jpg' }
  ],
  Pumps: [
    { id: 4, name: 'Water Pump', image: '../public/images/waterpumps.jpg' },
    { id: 5, name: 'Solar Pumps', image: '../public/images/Solar pumps.jpg' }
  ],
  Cleaning: [
    { id: 6, name: 'Pressure washer', image: '../public/images/pressure washers.jpg' }
  ],
  Solar: [
    { id: 7, name: 'Solars', image: '../public/images/solar.jpg' },
    { id: 8, name: 'Inverter', image: '../public/images/solar inverter.jpg' },
    { id: 9, name: 'Mini Inverter', image: '../public/images/mini inverters.jpg' }
  ],
  PowerTools: [
    { id: 10, name: 'Various Tools', image: '../public/images/Tools.jpg' },
    { id: 11, name: 'Drill Sets', image: '../public/images/drills.jpg' }
  ],
  Battery: [
    { id: 12, name: 'Battery', image: '../public/images/batterts ch.jpg' },
    { id: 13, name: 'PoshoMill', image: '../public/images/Poshomill.jpg' },
    { id: 14, name: 'Motor', image: '../public/images/motor.jpg' }
  ]
};

// Flat array for initial display of main categories
const mainCategories = Object.keys(productCategories).map((category, index) => ({
  id: index + 100,
  name: category,
  image: productCategories[category][0].image // Use first item's image as category image
}));

function SalesWebsite() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [viewMode, setViewMode] = useState('categories'); // 'categories' or 'products'
  const itemsPerPage = 9;

  // Get current items to display
  const currentItems = viewMode === 'categories' ? 
    mainCategories : 
    productCategories[currentCategory] || [];
  
  // Search bar section to Filter items based on search term
  const filteredItems = currentItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate items
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handleCategoryClick = (categoryName) => {
    setCurrentCategory(categoryName);
    setViewMode('products');
    setCurrentPage(1);
  };

  const handleBackToCategories = () => {
    setViewMode('categories');
    setCurrentPage(1);
  };

  return (
    <div className="sales-website">
      {/* Header with search */}
      <header className="header">
        <h1>{viewMode === 'products' ? currentCategory : 'Product Categories'}</h1>
        <input 
          type="text" 
          placeholder={`Search ${viewMode === 'categories' ? 'categories' : 'products'}...`} 
          value={searchTerm} 
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }} 
        />
      </header>

      {/* Main content */}
      <main className="products">
        {/* Back button when viewing products */}
        {viewMode === 'products' && (
          <button 
            className="back-button" 
            onClick={handleBackToCategories}
          >
            ← Back to Categories
          </button>
        )}

        {/* Items grid */}
        {paginatedItems.length > 0 ? (
          <div className="items-grid">
            {paginatedItems.map(item => (
              <div 
                key={item.id} 
                className="product-card"
                onClick={() => viewMode === 'categories' ? handleCategoryClick(item.name) : null}
              >
                <div className="image-container">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    onError={(e) => {
                      e.target.src = '../public/images/default-product.jpg';
                      e.target.onerror = null;
                    }}
                  />
                </div>
                <h3>{item.name}</h3>
                {viewMode === 'categories' && (
                  <p className="view-products">View products →</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="no-items">No {viewMode === 'categories' ? 'categories' : 'products'} found.</p>
        )}
      </main>

      {/* Pagination */}
      {totalPages > 1 && (
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
      )}
    </div>
  );
}

export default SalesWebsite;
