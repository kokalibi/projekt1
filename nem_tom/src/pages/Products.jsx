import { useState, useEffect } from 'react';
import axios from 'axios'; // [cite: 6, 39]
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]); // [cite: 40]
  const [loading, setLoading] = useState(true); // [cite: 41]
  const [error, setError] = useState(null); // [cite: 42]

  useEffect(() => {
    axios.get('https://dummyjson.com/products') // [cite: 37]
      .then(res => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(() => {
        setError("Nem sikerült betölteni a termékeket.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="status">Homokóra pörög... ⏳</div>;
  if (error) return <div className="status error">{error}</div>;

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Fedezd fel kínálatunkat</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} /> {/* [cite: 46] */}
            <div className="card-body">
              <span className="category">{product.category}</span> {/* [cite: 50] */}
              <h3>{product.title}</h3> {/* [cite: 47] */}
              <p className="description">{product.description.substring(0, 80)}...</p> {/* [cite: 49] */}
              <p className="price">{product.price} $</p> {/* [cite: 48] */}
              <Link to={`/products/${product.id}`} className="details-btn">Megtekintés</Link> {/* [cite: 56] */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;